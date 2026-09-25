self.importScripts(
	'./RomPatcher.js',
	'./modules/BinFile.js',
	'./modules/RomPatcher.format.ips.js',
);


self.onmessage = event => {
    const romFile = new BinFile(event.data.romFileU8Array);
    const patchFile = new BinFile(event.data.patchFileU8Array);

    const patch = RomPatcher.parsePatchFile(patchFile);

    let patchedRom;
    let errorMessage = null;

    if (patch !== null) {
        patchedRom = RomPatcher.applyPatch(romFile, patch);
    } else {
        errorMessage = 'Invalid patch format';
    }

    if (patchedRom !== null) {
        self.postMessage({
            success: true,
            patchedRomU8Array: patchedRom._u8array,
            patchedRomFileName: patchedRom.fileName
        }, [patchedRom._u8array.buffer]);
    } else {
        self.postMessage({
            success: false,
            errorMessage: errorMessage || 'Unknown error'
        });
    }
};