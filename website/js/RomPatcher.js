const RomPatcher = (function () {
	return {
		parsePatchFile: function (patchFile) {
			if (!(patchFile instanceof BinFile))
				throw new Error('Patch file is not an instance of BinFile');

			patchFile.littleEndian = false;
			patchFile.seek(0);

			var header = patchFile.readString(8);
			var patch = null;
			if (header.startsWith(IPS.MAGIC)) {
				patch = IPS.fromFile(patchFile);
			}

			if (patch)
				patch._originalPatchFile = patchFile;

			return patch;
		},

		applyPatch: function (romFile, patch) {
			if (!(romFile instanceof BinFile)) {
				return null;
			}
			else if (typeof patch !== 'object') {
				return null;
			}

			var patchedRom = patch.apply(romFile);
			return patchedRom;
		}
	}
}());