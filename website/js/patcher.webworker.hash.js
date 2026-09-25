importScripts('https://cdnjs.cloudflare.com/ajax/libs/spark-md5/3.0.2/spark-md5.min.js');   

function crc32(buf) {
    const table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
        let c = i;
        for (let k = 0; k < 8; k++)
        c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
        table[i] = c;
    }
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < buf.length; i++)
        crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xFF];
    return ((crc ^ 0xFFFFFFFF) >>> 0).toString(16).toUpperCase().padStart(8, '0');
}

function md5(buf) {
    return SparkMD5.ArrayBuffer.hash(buf).toUpperCase();
}

async function sha1(buf) {
    const hashBuffer = await crypto.subtle.digest('SHA-1', buf);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('')
        .toUpperCase();
}

self.onmessage = async function (e) {
    const { type, data } = e.data;

    if (type === 'hash') {
        const buf = data;
        self.postMessage({
            type: 'hashes',
            crc32: crc32(new Uint8Array(buf)),
            md5: md5(buf),
            sha1: await sha1(buf)
        });
    }
};