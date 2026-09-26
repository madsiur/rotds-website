let zip;
let romFile;
let romBuffer;
let basePatches;
let jsonDir = "json/patcher";
let patcherDir = "patches";

const hashWorkder = new Worker('js/patcher.webworker.hash.js');
const applyWorker = new Worker('js/RomPatcher.webworker.apply.js');

applyWorker.onerror = function (e) {
    console.error('Apply worker error:', e.message, e.filename, e.lineno);
};

hashWorkder.onerror = function (e) {
    console.error('Hash worker error:', e.message, e.filename, e.lineno);
};

applyWorker.onmessage = function (e) {
    const overlay = document.getElementById('patcherOverlay');
    overlay.classList.add('d-none');
    document.getElementById('btnApplyPatch').disabled = false;

    if (e.data.success) {
        onPatchComplete(e.data.patchedRomU8Array);
    } else {
        document.getElementById('errorMessage').innerHTML = buildError(`Error: ${e.data.errorMessage}`);
    }
};

hashWorkder.onmessage = function (e) {
    if (e.data.type === 'hashes') {
        document.getElementById('crc32').value = e.data.crc32;
        document.getElementById('md5').value = e.data.md5;
        document.getElementById('sha1').value = e.data.sha1;

        const requiredCrc32 = document.getElementById('requiredCrc32').value;
        if (e.data.crc32 !== requiredCrc32) {
            document.getElementById('errorMessage').innerHTML = buildError('ROM CRC32 does not match expected CRC32');
            document.getElementById('btnApplyPatch').disabled = true;
        } else {
            document.getElementById('errorMessage').innerHTML = '';
            document.getElementById('btnApplyPatch').disabled = false;
        }
    }
};

function buildError(message) {
  return `<div class="alert alert-danger py-2 text-center" role="alert">${message}</div>`;
}

function stripHeader(buf) {
    if (buf.byteLength % 0x300000 === 0x200) {
        return buf.slice(0x200);
    }
    return buf;
}

async function getZipArchive(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            document.getElementById('errorMessage').innerHTML = buildError(`Could not fetch ${file}:\${res.status}`);
            return null;
        }
        const buf = await res.arrayBuffer();
        return await JSZip.loadAsync(buf);
    } catch (e) {
        document.getElementById('errorMessage').innerHTML = buildError(`Error unzipping archive ${url}:\n${e.message}`);
        return null;
    }
}

async function getZipEntry(zip, filename) {
    try {
        const entry = zip.file(filename);
        if (!entry) {
            document.getElementById('errorMessage').innerHTML = buildError(`Could not find patch ${filename}`);
            return null;
        }
        return await entry.async('arraybuffer');
    } catch (e) {
        document.getElementById('errorMessage').innerHTML = buildError(`Error reading ${filename}:\n${e.message}`);
        return null;
    }
}

async function createZip(arrayBuffer, fileName) {
    try {
        const archive = new JSZip();
        archive.file(fileName, arrayBuffer);
        return await archive.generateAsync({ type: 'blob' });
    } catch (e) {
        document.getElementById('errorMessage').innerHTML = buildError(`Error zipping ROM:\n${e.message}`);
        return null;
    }
}

function onPatchComplete(patchedBuffer) {
    const overlay = document.getElementById('patcherOverlay');
    overlay.classList.add('d-none');
    document.getElementById('btnApplyPatch').disabled = false;
    selectedPatch = document.getElementById('patchFile').value;
    romName = `${selectedPatch}.sfc`

    createZip(patchedBuffer, romName).then(blob => {
        if (!blob) {
            return;
        }
        pendingBlob = blob;
        document.getElementById('downloadLink').classList.remove('d-none');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fileName = `${jsonDir}/main.json`;
    const select = document.getElementById('patchFile');

    readJSON(fileName)
        .then(data => {
            basePatches = data;
            select.innerHTML = '';
            
            basePatches.forEach(item => {
                const option = document.createElement('option');
                option.value = item.filename;
                option.textContent = `${item.filename}.ips`;
                select.appendChild(option);
            });

            if (basePatches.length > 0) {
                select.value = basePatches[0].filename;
                document.getElementById('description').value = basePatches[0].name;
            }
        })
        .catch(error => {
            document.getElementById('errorMessage').innerHTML = buildError(`Error loading main.json: ${error.message}`);
            select.disabled = true;
        });
});

document.getElementById('patchFile').addEventListener('change', function() {
    const selected = basePatches.find(item => item.filename === this.value);
    document.getElementById('description').value = selected ? selected.name : '';
    document.getElementById('downloadLink').classList.add('d-none');
});

document.getElementById('downloadLink').addEventListener('click', function () {
    if (!pendingBlob) return;
    this.href = URL.createObjectURL(pendingBlob);
    selectedPatch = document.getElementById('patchFile').value;
    this.download = `${selectedPatch}_${Date.now()}.zip`;
});

document.getElementById('btnRomUpload').addEventListener('click', function () {
    document.getElementById('romFile').click();
});

document.getElementById('romFile').addEventListener('change', async function () {
    // clear fields
    document.getElementById('downloadLink').classList.add('d-none');
    document.getElementById('btnApplyPatch').disabled = true;
    document.getElementById('errorMessage').innerHTML = '';
    document.getElementById('crc32').value = '';
    document.getElementById('md5').value = '';
    document.getElementById('sha1').value = '';

    // validate file extension
    romFile = this.files[0];
    const name = romFile?.name.toLowerCase();
    if (!name || !/\.(sfc|smc)$/.test(name)) {
        this.value = '';
        document.getElementById('errorMessage').innerHTML = buildError('Only .sfc or .smc files are accepted.');
        return;
    }
    
    // strip header if present
    romBuffer = stripHeader(await romFile.arrayBuffer());
    document.getElementById('romFileName').value = romFile.name;
    hashWorkder.postMessage({ type: 'hash', data: romBuffer });
});

document.getElementById('btnApplyPatch').addEventListener('click', async function () {
    const overlay = document.getElementById('patcherOverlay');
    overlay.classList.remove('d-none');
    this.disabled = true;
    
    if(!romBuffer) {
        document.getElementById('errorMessage').innerHTML = buildError('ROM not loaded');
        overlay.classList.add('d-none');
        this.disabled = false;
        return;
    }

    selectedPatch = document.getElementById('patchFile').value;
    zipFile = `${patcherDir}/${selectedPatch}.zip`;

    zip = await getZipArchive(zipFile);
    if(zip == null) {
        overlay.classList.add('d-none');
        this.disabled = false;
        return;
    }

    patchName = zipFile = `${selectedPatch}.ips`;
    patchBuffer = await getZipEntry(zip, patchName);
    if(patchBuffer == null) {
        overlay.classList.add('d-none');
        this.disabled = false;
        return;
    }

    applyWorker.postMessage({
        romFileU8Array: romBuffer,
        patchFileU8Array: patchBuffer
    });
});