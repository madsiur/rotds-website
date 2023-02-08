import os
from mass_extract import mass_extract
import constants as c
import json

def generate_json(dirs, roms, brrs):
    json_object = json.dumps(dirs, indent=4)
    file_string = f'const dirs = \n{json_object};\n\n'

    rom_entries = dict()
    for k1, v1 in roms.items():
        entries = []
        for k2, v2 in v1.items():
            entry = {
                "id": k2,
                "filename": v2[0],
                "title": v2[1],
                "game": v2[2],
                "composer": v2[3],
                "arranger": v2[4],
                "dir": int(v2[5]),
                "duration": v2[6],
            }
            entries.append(entry)
        rom_entries[k1] = entries
        
    json_object = json.dumps(rom_entries, indent=4)
    file_string += f'const roms = \n{json_object};\n\n'

    entries = []
    for k, v in brrs.items():
        entry = {
            "id": k,
            "name": v[0],
            "game": v[1],
            "loop": v[2],
            "env": v[3],
            "pitch": v[4],
            "filename": v[5],
        }
        entries.append(entry)

    json_object = json.dumps(entries, indent=4)
    file_string += f'const brrs = \n{json_object};'

    parent_dir = os.path.dirname(os.path.dirname(__file__))
    this_fn = os.path.join(parent_dir, c.WEBSITE_DIR, "js", "data.js")
    try:
        with open(this_fn, "w") as f:
            f.write(file_string)
    except IOError:
        print("ERROR: failed to write {this_fn}")


if __name__ == '__main__':
    dirs, roms, brrs = mass_extract('mass_extract.txt')
    generate_json(dirs, roms, brrs)