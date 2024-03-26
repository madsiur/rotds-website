import os
import music.mass_extract as mass_extract
import romdata.monsters as monsters
import romdata.espers as espers
import romdata.items as items
import romdata.commands as commands
import romdata.spells as spells
import romdata.metamorph as metamorph
import text.characters.characters as characters
import text.guide.guide as guide
import common.helpers as helpers
import common.constants as cons

def generate_music_json(roms, brrs, json_dir):
    dirs = []
    for k1, v1 in roms.items():
        entries = []
        dirs.append(k1)
        for k2, v2 in v1.items():
            entry = {
                "id": k2,
                "filename": v2[0],
                "title": v2[1],
                "game": v2[2],
                "composer": v2[3],
                "arranger": v2[4],
                "duration": v2[5],
            }
            entries.append(entry)

        filename = os.path.join(json_dir, f"{k1}.json")
        helpers.write_json(entries, filename)

    filename = os.path.join(json_dir, "common.json")
    helpers.write_json(dirs, filename)

    entries = []
    for k, v in brrs.items():
        entry = {
            "id": k,
            "name": v[0],
            "gameShort": v[1],
            "gameLong": v[2],
            "loop": v[3],
            "env": v[4],
            "pitch": v[5],
            "size": v[6],
            "occ": v[7],
            "filename": v[8],
        }
        entries.append(entry)

    filename = os.path.join(json_dir, "brrs.json")
    helpers.write_json(entries, filename)

if __name__ == '__main__':
    generator_dir = os.path.dirname(__file__)
    root_dir = os.path.dirname(generator_dir)
    roms_dir = os.path.join(generator_dir, cons.ROMS_DIR)
    text_dir = os.path.join(generator_dir, cons.TEXT_DIR)
    website_dir = os.path.join(root_dir, cons.WEBSITE_DIR)
    json_dir = os.path.join(website_dir, "json")

    helpers.remove_directory(json_dir)
    os.makedirs(json_dir)

    roms, brrs = mass_extract.mass_extract('mass_extract.txt')
    generate_music_json(roms, brrs, json_dir)

    path = os.path.join(roms_dir, "ost_a.smc")
    rom = helpers.read_bin_file(path)
    rom = helpers.remove_header(rom)

    spell_list = spells.create_list(rom)
    command_list = commands.create_list(rom)
    item_list = items.create_list(rom)
    metamorph_list = metamorph.create_list(rom, item_list)

    path = os.path.join(website_dir, "monsters")
    mons_filenames = os.listdir(path)
    mons_filenames = sorted(mons_filenames)

    monster_list = monsters.create_list(rom, mons_filenames, item_list, spell_list, metamorph_list)
    path = os.path.join(json_dir, "monsters.json")
    helpers.write_json(monster_list, path)

    esper_list = espers.create_list(rom, mons_filenames)
    path = os.path.join(json_dir, "espers.json")
    helpers.write_json(esper_list, path)
    
    path = os.path.join(text_dir, "guide", "guide.txt")
    guide_json = guide.generate_json(path)
    path = os.path.join(json_dir, "guide.json")
    helpers.write_json(guide_json, path)
    
    char_json_dir = os.path.join(json_dir, cons.CHAR_DIR)
    char_dir = os.path.join(text_dir, cons.CHAR_DIR)
    os.makedirs(char_json_dir)
    characters.generate_json(char_dir, char_json_dir)