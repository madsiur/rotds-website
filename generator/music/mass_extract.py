# Part of mfvitools by emberling
# https://github.com/emberling/mfvitools
# Modified by madsiur

import sys, os, configparser
from .build_spc import build_spc, load_data_from_rom, read_pointer
from .mfvi2mml import akao_to_mml, byte_insert
from .mfvitrace import mfvi_trace
import common.helpers as helpers

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
    
def mass_extract(filename, cons=helpers.get_constants()):
    generator_dir = os.path.dirname(os.path.dirname(__file__))
    root_dir = os.path.dirname(generator_dir)
    roms_dir = os.path.join(generator_dir, cons.ROMS_DIR)
    music_dir = os.path.join(generator_dir, cons.MUSIC_DIR)
    website_dir = os.path.join(root_dir, cons.WEBSITE_DIR)  
    brr_dir = os.path.join(website_dir, cons.BRR_DIR)

    file_path = os.path.join(music_dir, filename)
    config = configparser.ConfigParser()
    config.read(file_path)

    helpers.remove_directory(brr_dir)
    os.makedirs(brr_dir)

    rom_files = [cs for cs in config.sections() if cs != cons.FOLDER_SECTION and cs != cons.BRR_SECTION]
    brr_rom_path = os.path.join(roms_dir, rom_files[0])
    brr_rom = helpers.read_bin_file(brr_rom_path)
    brr_rom = helpers.remove_header(brr_rom)

    brr_pointer_offset = read_pointer(brr_rom, POINTER_TO_BRR_POINTERS)
    brr_loop_offset = read_pointer(brr_rom, POINTER_TO_BRR_LOOPS)
    brr_env_offset = read_pointer(brr_rom, POINTER_TO_BRR_ENV)
    brr_pitch_offset = read_pointer(brr_rom, POINTER_TO_BRR_PITCH)
    inst_table_offset = read_pointer(brr_rom, POINTER_TO_INST_TABLE)

    brrs = {}
    seen = set()
    for i in range(1, 256):
        brrs[i] = config[cons.BRR_SECTION][f"{i:02X}"].split(";")

        if len(brrs[i]) != 3:
            print(f"bad sample {str(song_idx)} metadata")
            sys.exit()

        while len(brrs[i]) < 3:
            brrs[i].append("")
        for j in range(len(brrs[i])):
            brrs[i][j] = brrs[i][j].strip()

        brrs[i][0] = brrs[i][0].lower()
        brrs[i][1] = brrs[i][1].upper()  

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
        brrs[i].append(len(brr_data) - 2)
        brrs[i].append(0)

        brr_name = brrs[i][0].replace(".", "_").replace(" ", "_").replace("-", "_")
        brr_filename = f"{brrs[i][1]}_{brr_name}.brr"
        brrs[i].append(f"{brrs[i][1]}_{brr_name}")

        brr_path = os.path.join(brr_dir, brr_filename)

        if brr_filename in seen:
            print(f"brr sample {brr_filename} appear twice.")
            sys.exit()
        else:
            seen.add(brr_filename)

        try:
            with open(brr_path, "wb") as f:
                pass
                f.write(brr_data)
        except IOError:
            print(f"ERROR: Couldn't write brr sample {i:02X}:brr_filename")
            sys.exit()

    roms = {}
    for rom_file in rom_files:
        rom_id = os.path.basename(rom_file).split('.')[0].strip().replace(' ', '_')
        rom_path = os.path.join(roms_dir, rom_file)
        dir = os.path.join(website_dir, rom_id)

        helpers.remove_directory(dir)
        os.makedirs(dir)
        os.makedirs(os.path.join(dir, cons.MML_DIR))
        os.makedirs(os.path.join(dir, cons.SPC_DIR))
        
        rom = helpers.read_bin_file(rom_path)
        rom = helpers.remove_header(rom)
        
        songs = {}
        seen = set()
        for song_idx_string in config[rom_file]:
            print(f"converting {rom_id} track {song_idx_string}")
            try:
                song_idx = int(song_idx_string.strip(), 16)
            except ValueError:
                print(f"ERROR: invalid index {song_idx_string}")
                sys.exit()
                
            spc = build_spc(rom, song_idx, music_dir)
            
            # Extract sequence from ROM and convert to MML
            loc = read_pointer(rom, POINTER_TO_SEQ_POINTERS)
            loc += song_idx * 3
            loc = read_pointer(rom, loc)
            seq = load_data_from_rom(rom, loc)
            
            try:
                mml = akao_to_mml(seq, force_short_header=False)
            except IndexError:
                print(f"Failed to convert sequence {rom_id}:{song_idx:02X} (sequence too short?)")
                sys.exit()

            sample_defs = []
            loc = song_idx * 0x20 + inst_table_offset
            inst_table = rom[loc:loc+0x20]
            for i in range(16):
                inst_id = int.from_bytes(inst_table[i*2:i*2+2], "little")
                if inst_id:
                    # occurences increment
                    brrs[inst_id][7] += 1

                    prg = i + 0x20
                    sample_defs.append(f"#WAVE 0x{prg:02X} 0x{inst_id:02X} ## {brrs[inst_id][0]} ({brrs[inst_id][1]})")
                    
            out_mml = []
            
            ## Deal with metadata
            meta_cfg = config[rom_file][song_idx_string].split(';')
            if len(meta_cfg) != 6:
                print(f"bad song {str(song_idx)} metadata")
                sys.exit()

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
            out_mml.append(f"#TRANSCRIPTION {meta_cfg[5]}")

            spc[0x23] = 0x1A
            spc = byte_insert(spc, 0xAC, b"\x35\x30\x30\x30")

            #duration = 1
            try:
                duration = int(round(mfvi_trace(spc[0x1D00:0x4900])))
            except IndexError:
                print(f"Error getting duration for ID {song_idx}")
                duration = 360
            
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
            dir = os.path.join(website_dir, rom_id, cons.SPC_DIR)
            filename = os.path.join(dir, songfn + ".spc")
            helpers.write_bin_file(spc, filename)
                
            dir = os.path.join(website_dir, rom_id, cons.MML_DIR)
            filename = os.path.join(dir, songfn + ".txt")
            helpers.write_file(out_mml, filename)

            songs[song_idx] = meta_cfg
        roms[rom_id] = songs
    return roms, brrs

            
                
            