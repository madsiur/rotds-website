import os
from mass_extract import mass_extract

def generate_json(dirs, roms, brrs):
    file_string = 'const dirs = [\n'
    for i in range(len(dirs)):
        file_string += '    "' + dirs[i] + '",\n'
    file_string = file_string[0:-2]
    file_string += "\n];\n\n"

    file_string += 'const roms = [{\n'
    for k1, v1 in roms.items():
        file_string += '    "' + k1 + '": [{\n'
        for k2, v2 in v1.items():
            file_string += '        "id": ' + str(k2) + ',\n'
            file_string += '        "filename": "' + v2[0] + '",\n'
            file_string += '        "title": "' + v2[1] + '",\n'
            file_string += '        "game": "' + v2[2] + '",\n'
            file_string += '        "composer": "' + v2[3] + '",\n'
            file_string += '        "arranger": "' + v2[4] + '",\n'
            file_string += '        "dir": ' + str(v2[5]) + ',\n'
            file_string += '        "duration": ' + str(v2[6]) + '\n'
            file_string += '    }, {\n'
        file_string = file_string[0:-4]
        file_string += ']},\n{\n'
    file_string = file_string[0:-4]
    file_string += '\n];\n\n'

    file_string += 'const brrs = [{\n'
    for k, v in brrs.items():
        file_string += '    "id": ' + str(k) + ',\n'
        file_string += '    "name": "' + v[0] + '",\n'
        file_string += '    "game": "' + v[1] + '",\n'
        file_string += '    "loop": ' + str(v[2]) + ',\n'
        file_string += '    "env": ' + str(v[3]) + ',\n'
        file_string += '    "pitch": ' + str(v[4]) + ',\n'
        file_string += '    "filename": "' + v[5] + '",\n'
        file_string += '}, {\n'
    file_string = file_string[0:-4]
    file_string += '];'

    parent_dir = os.path.dirname(os.path.dirname(__file__))
    website_dir = os.path.join(parent_dir, "website")
    this_fn = os.path.join(website_dir, "data.js")
    try:
        with open(this_fn, "w") as f:
            f.write(file_string)
    except IOError:
        print("ERROR: failed to write {this_fn}")


if __name__ == '__main__':
    dirs, roms, brrs = mass_extract('mass_extract.txt')
    generate_json(dirs, roms, brrs)