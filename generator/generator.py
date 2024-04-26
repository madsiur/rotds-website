import os
import music.mass_extract as mass_extract
from romdata.items import ItemList
from romdata.battle_commands import BattleCommandList
from romdata.spells import SpellList
from romdata.metamorph import MetamorphPackList
from romdata.monsters import MonsterList
from romdata.espers import EsperList
from text.characters.characters import CharacterList
import text.guide.guide as guide
import common.helpers as helpers
import music.music as music
import misc.npcs as npcs
import misc.home as home
import misc.credits as credits
import fonts.fonts as fonts

if __name__ == '__main__':
    cons = helpers.get_constants()
    generator_dir = os.path.dirname(__file__)
    root_dir = os.path.dirname(generator_dir)
    roms_dir = os.path.join(generator_dir, cons.ROMS_DIR)
    templates_dir = os.path.join(generator_dir, cons.TEMPLATES_DIR)
    text_dir = os.path.join(generator_dir, cons.TEXT_DIR)
    font_dir = os.path.join(generator_dir, cons.FONT_DIR)
    characters_dir = os.path.join(text_dir, cons.CHAR_DIR)
    guide_dir = os.path.join(text_dir, cons.GUIDE_DIR)
    website_dir = os.path.join(root_dir, cons.WEBSITE_DIR)
    mons_detail_dir = os.path.join(website_dir, cons.MONS_DETAIL_DIR)
    website_guide_dir = os.path.join(website_dir, cons.GUIDE_DIR)
    item_media_dir = os.path.join(website_dir, cons.ITEM_MEDIA_DIR)
    website_characters_dir = os.path.join(website_dir, cons.CHAR_DIR)
    portrait_dir = os.path.join(website_characters_dir, cons.PORTRAITS_DIR)
    npc_dir = os.path.join(website_dir, cons.NPC_DIR)
    json_dir = os.path.join(website_dir, "json")
    monster_json_dir = os.path.join(json_dir, cons.MONS_JSON_DIR)

    helpers.remove_directory(json_dir)
    os.makedirs(json_dir)
    os.makedirs(monster_json_dir)

    helpers.remove_directory(mons_detail_dir)
    os.makedirs(mons_detail_dir)

    helpers.remove_directory(website_guide_dir)
    os.makedirs(website_guide_dir)

    helpers.remove_directory(item_media_dir)
    os.makedirs(item_media_dir)

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

    path = os.path.join(roms_dir, "font.smc")
    font_rom = helpers.read_bin_file(path)
    font_rom = helpers.remove_header(font_rom)
    fonts.extract_small_font(font_dir, font_rom)
    font_path = os.path.join(font_dir, "small_font.png")

    spell_list = SpellList()
    spell_list.create_list(rom)

    command_list = BattleCommandList()
    command_list.create_list(rom)

    metamorph_list = MetamorphPackList()
    metamorph_list.create_list(rom)

    character_list = CharacterList()
    character_list.create_list(characters_dir, portrait_dir)
    character_list.write_gallery(website_dir, templates_dir)
    character_list.write_details(website_dir, templates_dir)

    item_list = ItemList(font_path)
    item_list.create_list(rom)
    item_list.create_images(item_media_dir)

    path = os.path.join(website_dir, cons.MONS_IMG_DIR)
    mons_filenames = os.listdir(path)
    mons_filenames = sorted(mons_filenames)

    monster_list = MonsterList()
    monster_list.create_list(rom, mons_filenames, item_list, spell_list, metamorph_list, monster_json_dir)
    monster_list.write_pages(website_dir, templates_dir)

    esper_list = EsperList()
    esper_list.create_list(rom, mons_filenames)
    esper_list.write_gallery(website_dir, templates_dir)

    guide_data = guide.write_gallery(guide_dir, website_dir, templates_dir)
    guide.write_pages(guide_data, website_dir, templates_dir)

    npcs.write_page(npc_dir, website_dir, templates_dir)
    home.write_page(website_dir, templates_dir)
    credits.write_page(website_dir, templates_dir)