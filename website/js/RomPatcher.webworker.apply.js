self.importScripts(
	'./RomPatcher.js',
	'./modules/BinFile.js',
	'./modules/RomPatcher.format.ips.js',
);


/*self.onmessage = event => {
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
};*/

self.onmessage = event => {
    const { romFileU8Array, basePatch, optionalPatches } = event.data;

    let rom = new BinFile(romFileU8Array);
    let errorMessage = null;

    // 1. Apply base patch
    const basePatchFile = new BinFile(basePatch);
    const basePatchParsed = RomPatcher.parsePatchFile(basePatchFile);

    if (basePatchParsed === null) {
        errorMessage = 'Invalid base patch format';
    } else {
        const result = RomPatcher.applyPatch(rom, basePatchParsed);
        if (result === null) {
            errorMessage = 'Failed to apply base patch';
        } else {
            rom = result;
        }
    }

    // 2. Apply optional patches in order
    if (!errorMessage) {
        for (const p of optionalPatches) {
            const patchFile = new BinFile(p.buffer);
            const patch = RomPatcher.parsePatchFile(patchFile);

            if (patch === null) {
                errorMessage = `Invalid patch format: ${p.id}`;
                break;
            }

            const result = RomPatcher.applyPatch(rom, patch);
            if (result === null) {
                errorMessage = `Failed to apply patch: ${p.id}`;
                break;
            }

            rom = result;
        }
    }

    if (!errorMessage) {
        self.postMessage({
            success: true,
            patchedRomU8Array: rom._u8array,
            patchedRomFileName: rom.fileName
        }, [rom._u8array.buffer]);
    } else {
        self.postMessage({
            success: false,
            errorMessage
        });
    }
};