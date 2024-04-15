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
import music.music as music
import misc.npcs as npcs
import misc.home as home
import misc.credits as credits

if __name__ == '__main__':
    cons = helpers.get_constants()
    generator_dir = os.path.dirname(__file__)
    root_dir = os.path.dirname(generator_dir)
    roms_dir = os.path.join(generator_dir, cons.ROMS_DIR)
    templates_dir = os.path.join(generator_dir, cons.TEMPLATES_DIR)
    text_dir = os.path.join(generator_dir, cons.TEXT_DIR)
    characters_dir = os.path.join(text_dir, cons.CHAR_DIR)
    guide_dir = os.path.join(text_dir, cons.GUIDE_DIR)
    website_dir = os.path.join(root_dir, cons.WEBSITE_DIR)
    mons_detail_dir = os.path.join(website_dir, cons.MONS_DETAIL_DIR)
    website_guide_dir = os.path.join(website_dir, cons.GUIDE_DIR)
    npc_dir = os.path.join(website_dir, cons.NPC_DIR)
    json_dir = os.path.join(website_dir, "json")
    monster_json_dir = os.path.join(json_dir, "monsters")

    helpers.remove_directory(json_dir)
    os.makedirs(json_dir)
    os.makedirs(monster_json_dir)

    helpers.remove_directory(mons_detail_dir)
    os.makedirs(mons_detail_dir)

    helpers.remove_directory(website_guide_dir)
    os.makedirs(website_guide_dir)

    roms, brrs = mass_extract.mass_extract('mass_extract.txt')
    music.generate_music_json(roms, brrs, json_dir)
    music.write_pages("ost-a", "osta", "Soundtrack A", website_dir, templates_dir)
    music.write_pages("ost-b", "ostb", "Soundtrack B", website_dir, templates_dir)
    music.write_pages("optional-songs", "optional", "Optional Songs", website_dir, templates_dir)
    music.write_pages("sfx", "sfx", "Sound Effects", website_dir, templates_dir)
    music.write_brr_page(website_dir, templates_dir)

    path = os.path.join(roms_dir, "ost_a.smc")
    rom = helpers.read_bin_file(path)
    rom = helpers.remove_header(rom)

    spell_list = spells.create_list(rom)
    command_list = commands.create_list(rom)
    item_list = items.create_list(rom)
    metamorph_list = metamorph.create_list(rom, item_list)

    path = os.path.join(website_dir, cons.MONS_IMG_DIR)
    mons_img_names = os.listdir(path)
    mons_img_names = sorted(mons_img_names)

    monster_list = monsters.create_list(rom, mons_img_names, item_list, spell_list, metamorph_list, monster_json_dir)
    esper_list = espers.create_list(rom, mons_img_names)
    monsters.write_gallery(monster_list, esper_list, website_dir, templates_dir)
    
    guide_data = guide.write_gallery(guide_dir, website_dir, templates_dir)
    guide.write_pages(guide_data, website_dir, templates_dir)
    
    chars = characters.write_gallery(characters_dir, website_dir, templates_dir)
    characters.write_details(chars, characters_dir, website_dir, templates_dir)

    npcs.write_page(npc_dir, website_dir, templates_dir)
    home.write_page(website_dir, templates_dir)
    credits.write_page(website_dir, templates_dir)