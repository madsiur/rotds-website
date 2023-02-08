## mfvitools mass extractor tool
## extract mml, samples, and SPC from multiple tracks all at once, with tags
## set up what to extract in a config file, then run mass_extract.py [CONFIGFILE]

import sys, os, configparser, shutil
from build_spc import build_spc, load_data_from_rom, read_pointer
from mfvi2mml import akao_to_mml, byte_insert
from mfvitrace import mfvi_trace
import constants as c

SPC_ENGINE_OFFSET = 0x5070E
STATIC_BRR_OFFSET = 0x51EC7
STATIC_PTR_OFFSET = 0x52016
STATIC_ENV_OFFSET = 0x52038
STATIC_PITCH_OFFSET = 0x5204A

POINTER_TO_BRR_POINTERS = 0x50222
POINTER_TO_BRR_LOOPS = 0x5041C
POINTER_TO_BRR_ENV = 0x504DE
POINTER_TO_BRR_PITCH = 0x5049C
POINTER_TO_INST_TABLE = 0x501E3
POINTER_TO_SEQ_POINTERS = 0x50539

def text_insert(data, position, text, length):
    new_data = bytearray(length)
    new_data = byte_insert(new_data, 0, bytes(text, "utf-8"), maxlength = length)
    return bytearray(byte_insert(data, position, new_data))
    
def mass_extract(fn):
    config = configparser.ConfigParser()
    config.read(fn)

    parent_dir = os.path.dirname(os.path.dirname(__file__))
    website_dir = os.path.join(parent_dir, c.WEBSITE_DIR)
    
    brr_dir = os.path.join(website_dir, c.BRR_DIR)
    if(os.path.exists(brr_dir)):
        shutil.rmtree(brr_dir)
    os.makedirs(brr_dir)

    folders = config[c.FOLDER_SECTION]
    dirs = []
    for k in folders:
        dir = os.path.join(website_dir, config[c.FOLDER_SECTION][k])
        dirs.append(config[c.FOLDER_SECTION][k])
        if(os.path.exists(dir)):
            shutil.rmtree(dir)
        os.makedirs(dir)
        os.makedirs(os.path.join(dir, c.MML_DIR))
        os.makedirs(os.path.join(dir, c.SPC_DIR))

    romfiles = [cs for cs in config.sections() if cs != c.FOLDER_SECTION and cs != c.BRR_SECTION]
    brr_rom_name = romfiles[0]
    print(brr_rom_name)

    try:
        with open(brr_rom_name, 'rb') as f:
            brr_rom = f.read()
    except IOError:
        print(f"ERROR: Couldn't load ROM file {brr_rom_name} for brr purpose")
        sys.exit()
    if len(brr_rom) % 0x10000 == 0x200:
        brr_rom = brr_rom[0x200:]
        print(f"Loaded {brr_rom_name} with header for brr purpose.")
    else:
        print(f"Loaded {brr_rom_name} without header for brr purpose.")

    brr_pointer_offset = read_pointer(brr_rom, POINTER_TO_BRR_POINTERS)
    brr_loop_offset = read_pointer(brr_rom, POINTER_TO_BRR_LOOPS)
    brr_env_offset = read_pointer(brr_rom, POINTER_TO_BRR_ENV)
    brr_pitch_offset = read_pointer(brr_rom, POINTER_TO_BRR_PITCH)
    inst_table_offset = read_pointer(brr_rom, POINTER_TO_INST_TABLE)

    brrs = {}
    seen = set()
    for i in range(1, 256):
        brrs[i] = config[c.BRR_SECTION][f"{i:02X}"].split(";")
        brrs[i][0] = brrs[i][0].strip().lower()
        brrs[i][1] = brrs[i][1].strip()   
        brr_idx = i - 1
        loc = brr_loop_offset + 2 * brr_idx
        brr_loop = int.from_bytes(brr_rom[loc:loc+2], "big")
        brrs[i].append(brr_loop)
        
        loc = brr_env_offset + 2 * brr_idx
        brr_env = int.from_bytes(brr_rom[loc:loc+2], "big")
        brrs[i].append(brr_env)
        
        loc = brr_pitch_offset + 2 * brr_idx
        brr_pitch = int.from_bytes(brr_rom[loc:loc+2], "big")
        brrs[i].append(brr_pitch)
        
        brr_pointer = read_pointer(brr_rom, brr_pointer_offset + 3 * brr_idx)
        brr_data = load_data_from_rom(brr_rom, brr_pointer)

        brr_name = brrs[i][0].replace(".", "_").replace(" ", "_")
        brr_fn = f"{brrs[i][1]}_{brr_name}.brr"
        brrs[i].append(f"{brrs[i][1]}_{brr_name}")

        brr_path = os.path.join(brr_dir, brr_fn)

        if brr_fn in seen:
            print(f"brr sample {brr_fn} appear twice.")
            sys.exit()
        else:
            seen.add(brr_fn)

        try:
            with open(brr_path, "wb") as f:
                f.write(brr_data)
        except IOError:
            print(f"ERROR: Couldn't write brr sample {i:02X}:brr_fn")
            sys.exit()

    roms = {}
    for romfile in romfiles:
        romid = os.path.basename(romfile).split('.')[0].strip().replace(' ', '_')
        
        try:
            with open(romfile, 'rb') as f:
                rom = f.read()
        except IOError:
            print(f"ERROR: Couldn't load ROM file {romfile} for song purpose.")
            continue
        if len(rom) % 0x10000 == 0x200:
            rom = rom[0x200:]
            print(f"Loaded {romfile} with header for song purpose.")
        else:
            print(f"Loaded {romfile} without header for song purpose.")
        
        songs = {}
        seen = set()
        for song_idx_string in config[romfile]:
            print(f"converting {romid} track {song_idx_string}")
            try:
                song_idx = int(song_idx_string.strip(), 16)
            except ValueError:
                print(f"ERROR: invalid index {song_idx_string}")
                sys.exit()
                
            spc = build_spc(rom, song_idx)
            
            # Extract sequence from ROM and convert to MML
            loc = read_pointer(rom, POINTER_TO_SEQ_POINTERS)
            loc += song_idx * 3
            loc = read_pointer(rom, loc)
            seq = load_data_from_rom(rom, loc)
            try:
                mml = akao_to_mml(seq, force_short_header=False)
            except IndexError:
                print(f"Failed to convert sequence {romid}:{song_idx:02X} (sequence too short?)")
                sys.exit()

            sample_defs = []
            loc = song_idx * 0x20 + inst_table_offset
            inst_table = rom[loc:loc+0x20]
            for i in range(16):
                inst_id = int.from_bytes(inst_table[i*2:i*2+2], "little")
                if inst_id:
                    prg = i + 0x20
                    sample_defs.append(f"#WAVE 0x{prg:02X} 0x{inst_id:02X} ## {brrs[inst_id][0]} ({brrs[inst_id][1]})")
                    
            out_mml = []
            
            ## Deal with metadata
            meta_cfg = config[romfile][song_idx_string].split(';')
            if(len(meta_cfg) > 6):
                print("bad meta: " + str(song_idx))
                sys.exit()

            while len(meta_cfg) < 6:
                meta_cfg.append("")
            for i in range(len(meta_cfg)):
                meta_cfg[i] = meta_cfg[i].strip()
                
            songfn = meta_cfg[0]

            if songfn in seen:
                print(f"song {songfn} appear twice.")
                sys.exit()
            else:
                seen.add(songfn)
            
            out_mml.append(f"#TITLE {meta_cfg[1]}")
            spc = text_insert(spc, 0x2E, meta_cfg[1], 0x20)
            out_mml.append(f"#ALBUM {meta_cfg[2]}")
            spc = text_insert(spc, 0x4E, meta_cfg[2], 0x20)
            out_mml.append(f"#COMPOSER {meta_cfg[3]}")
            spc = text_insert(spc, 0xB1, meta_cfg[3], 0x20)
            out_mml.append(f"#ARRANGED {meta_cfg[4]}")
            spc = text_insert(spc, 0x6E, meta_cfg[4], 0x10)

            spc[0x23] = 0x1A
            spc = byte_insert(spc, 0xAC, b"\x35\x30\x30\x30")

            try:
                duration = int(round(mfvi_trace(spc[0x1D00:0x4900])))
            except IndexError:
                print(f"Error getting duration for ID {song_idx}")
                duration = 300
            
            spc = text_insert(spc, 0xA9, f"{duration:03}", 3)
            meta_cfg.append(duration)
            
            ## MML surgery
            out_mml.append("")
            for line in sample_defs:
                out_mml.append(line)
            
            mml = [line for line in mml if not line.startswith("#WAVE")]
            out_mml = out_mml + mml
            out_mml = "\n".join(out_mml)
            
            ## file output       
            dir = os.path.join(website_dir, folders[meta_cfg[5]], c.SPC_DIR)
            this_fn = os.path.join(dir, songfn + ".spc")
            try:
                with open(this_fn, "wb") as f:
                    f.write(spc)
            except IOError:
                print("ERROR: failed to write {this_fn}")
                sys.exit()
                
            dir = os.path.join(website_dir, folders[meta_cfg[5]], c.MML_DIR)
            this_fn = os.path.join(dir, songfn + ".txt")
            try:
                with open(this_fn, "w") as f:
                    f.write(out_mml)
            except IOError:
                print("ERROR: failed to write {this_fn}")
                sys.exit()
            songs[song_idx] = meta_cfg
        roms[romid] = songs
    return dirs, roms, brrs

            
                
            