import os
import common.helpers as helpers
from .tables import tbl_menu_a, tbl_battle_b
from .monster_def import *
from .status_def import *
from .element_def import *
from jinja2 import Environment, FileSystemLoader
import re

def create_list(rom, mons_filenames, item_list, spell_list, metamorph_list, monster_json_dir, cons=helpers.get_constants()):

    LOOT_KEY_LIST = ["steal_rare", "steal_common",
                     "drop_rare", "drop_common"]
    SPIRIT_KEY_LIST = ["spirit_a", "spirit_b"]
    INVERSE_KEY_LIST = ["inverse_a", "inverse_b"]
    TORMENT_KEY_LIST = ["torment_a", "torment_b",
                        "torment_c", "torment_d"]
    VALUE_KEY_LIST = ["id", "name"]

    monsters = helpers.create_name_list(rom, cons.MONS_NAME_ADDR,
                                0, cons.MONS_NAME_LENGTH,
                                cons.MONS_NUM, tbl_menu_a)
        
    for i in range(cons.MONS_NUM):
        filename = [f for f in mons_filenames if f[0:3] == str(i).zfill(3)]
        if len(filename) == 0:
            monsters[i]["filename"] = "placeholder"
        else:
            monsters[i]["filename"] = filename[0].replace(".png", "")
    
    monsters = helpers.add_text_attr(rom, cons.MONS_SATK_NAME_ADDR,
                             cons.MONS_SATK_NAME_LENGTH,
                             monsters, tbl_battle_b,
                             "special_attack")
    
    for i in range (cons.MONS_NUM):
        loots = helpers.create_double_dict(rom, cons.MONS_LOOT_ADDR,
                                   i, cons.MONS_LOOT_LENGTH,
                                   LOOT_KEY_LIST, item_list,
                                   VALUE_KEY_LIST)
        spirits = helpers.create_double_dict(rom, cons.MONS_SPRT_ADDR,
                                     i, cons.MONS_SPRT_LENGTH,
                                     SPIRIT_KEY_LIST, spell_list,
                                     VALUE_KEY_LIST)
        inverses = helpers.create_double_dict(rom, cons.MONS_INV_ADDR,
                                      i, cons.MONS_INV_LENGTH,
                                      INVERSE_KEY_LIST, spell_list,
                                      VALUE_KEY_LIST)
        torments = helpers.create_double_dict(rom, cons.MONS_TORM_ADDR,
                                      i, cons.MONS_TORM_LENGTH,
                                      TORMENT_KEY_LIST, spell_list,
                                      VALUE_KEY_LIST)
        
        stats = {"normal": get_difficulty(rom, cons.MONS_STAT_NOR, i, cons)}
        stats = {**stats, "hard": get_difficulty(rom, cons.MONS_STAT_HAR, i, cons)}
        stats = {**stats, "extreme": get_difficulty(rom, cons.MONS_STAT_EXT, i, cons)}
        stats = {**stats, "insane": get_difficulty(rom, cons.MONS_STAT_INS, i, cons)}

        metamorph_id = stats["normal"]["metamorph_id"]
        metamorph = metamorph_list[metamorph_id]
        stats["normal"].pop("metamorph_id")
        stats["hard"].pop("metamorph_id")
        stats["extreme"].pop("metamorph_id")
        stats["insane"].pop("metamorph_id")

        fight_animation_id = stats["normal"]["fight_animation_id"]
        fight_animation = item_list[fight_animation_id]
        stats["normal"].pop("fight_animation_id")
        stats["hard"].pop("fight_animation_id")
        stats["extreme"].pop("fight_animation_id")
        stats["insane"].pop("fight_animation_id")

        monsters[i] = {**monsters[i],
                       "stats":stats,
                       "loots": loots,
                       "spirits": spirits,
                       "inverses": inverses,
                       "torments": torments,
                       "fight_animation": fight_animation,
                       "metamorph": metamorph}
        
    for monster in monsters:
        file_path = os.path.join(monster_json_dir, f"{monster['id']}.json")
        helpers.write_json(monster, file_path)
        print("Wrote {0}".format(file_path))
    
    return monsters

def get_difficulty(rom, difficulty, id, cons):
    data = helpers.get_data(rom, difficulty, id, cons.MONS_STAT_LENGTH)

    speed = data[0]
    attack = data[1]
    hit_rate = data[2]
    evade = data[3]
    mblock = data[4]
    defense = data[5]
    mdef = data[6]
    mpow = data[7]
    hp = helpers.get_short(data, 8)
    mp = helpers.get_short(data, 10)
    exp = helpers.get_short(data, 12)
    gil = helpers.get_short(data, 14)
    level = data[16]
    metamorph_id = data[17] & 0x1F
    metamorph_rate = (data[17] & 0xE0) >> 5
    metamorph_rate = meta_rate_def[metamorph_rate]
    misc_1 = helpers.get_string_flags(misc_1_def, data[18])
    misc_2 = helpers.get_string_flags(misc_2_def, data[19])
    immun_1 = helpers.get_string_flags(status_def[0:8], data[20])
    immun_2 = helpers.get_string_flags(status_def[8:16], data[21])
    immun_3 = helpers.get_string_flags(status_def[16:24], data[22])
    absorb = helpers.get_string_flags(element_def, data[23])
    null = helpers.get_string_flags(element_def, data[24])
    weakness = helpers.get_string_flags(element_def, data[25])
    fight_animation_id = data[26]
    status_1 = helpers.get_string_flags(status_mons_def[0:8], data[27])
    status_2 = helpers.get_string_flags(status_mons_def[8:16], data[28])
    status_3 = helpers.get_string_flags(status_mons_def[16:24], data[29])
    status_4 = helpers.get_string_flags(status_mons_def[24:32], data[30])
    sp_atk_effect_id = data[31] & 0x3F
    special_attack_flags = helpers.get_string_flags(sp_atk_attr,
                                           (data[31] & 0xC0) >> 6, 2)


    misc = misc_1 + misc_2
    immunity = immun_1 + immun_2 + immun_3
    status = status_1 + status_2 + status_3 + status_4
    special_attack_effect = get_special_attack_effect(sp_atk_effect_id)

    diff_stats = {"speed": speed,
                  "attack": attack,
                  "hit_rate": hit_rate,
                  "mblock": mblock,
                  "evade": evade,
                  "defense": defense,
                  "mdef": mdef,
                  "mpow": mpow,
                  "hp": hp,
                  "mp": mp,
                  "gil": gil,
                  "exp": exp,
                  "level": level,
                  "immunity": immunity,
                  "status": status,
                  "absorb": absorb,
                  "null": null,
                  "weakness": weakness,
                  "misc": misc,
                  "metamorph_rate": metamorph_rate,
                  "metamorph_id" : metamorph_id,
                  "fight_animation_id": fight_animation_id,
                  "special_attack_effect": special_attack_effect,
                  "special_attack_flags": special_attack_flags}
    
    return diff_stats

def get_special_attack_effect(id):
    if id < 32:
        return "Inflict {0}".format(status_def[id])
    elif id < 48:
        factor = (id - 32 + 3) / 2
        return "{:.1f}x damage".format(factor)
    elif id == 48:
        return "Drain HP"
    elif id == 49:
        return "Drain MP"
    else:
        return "Remove Reflect"
    
def write_gallery(monster_list, esper_list, website_dir, templates_dir, cons=helpers.get_constants()):
    env = Environment(loader=FileSystemLoader(templates_dir))
    gallery_template = env.get_template("monsters.html")
    detail_template = env.get_template("monsterdetails.html")

    # monster gallery
    is_esper = False
    monster_list = sorted(monster_list, key=lambda m: m["name"])
    for page_index in range(1, 5): 
        levels = ""
        page = page_index
        min_id = (page_index-1) * 100
        max_id = page_index * 100
        entities = sorted(monster_list[min_id:max_id], key=lambda m: m["name"])

        img_name = "gilgamesh.png"
        url = f"monsters-{page_index}.html"
        title = "Monster Gallery {0}".format(page_index)
        meta_description = "Monster gallery {0}".format(cons.COMMON_DESC)
        img_url = f"{cons.MEDIA_DIR}/{img_name}"
        img_path = os.path.join(website_dir, cons.MEDIA_DIR, img_name)
        meta_img_alt = img_name.replace(".png", "").capitalize()
        meta = helpers.get_meta_data(cons.MONSTER_KEYWORDS, meta_description, title, url, img_url, img_path, meta_img_alt)
        
        first_letter = entities[0]['name'][0]
        last_letter = entities[-1]['name'][0]
        page_title = "Monster Gallery ({0} - {1})".format(first_letter, last_letter)

        btns_group = [cons.BTN_DARK, cons.BTN_DARK, cons.BTN_DARK, cons.BTN_DARK, cons.BTN_DARK]
        btns_group[page_index-1] = cons.BTN_SECONDARY

        data = {
            "meta": meta,
            "levels": levels,
            "page_title": page_title,
            "entities": entities,
            "btns_group": btns_group,
            "gallery_urls": cons.GALLERY_URLS,
            "page": page
        }
        
        file_path = os.path.join(website_dir, url)
        output = gallery_template.render(data)
        output = helpers.prettify_html(output)
        helpers.write_file(output, file_path)
        print("Wrote {0}".format(file_path))

        levels = "../"
        for mons_index in range(len(entities)):
            monster = {
                "id": entities[mons_index]["id"],
                "name": entities[mons_index]["name"],
                "special_attack": entities[mons_index]["special_attack"]
            }

            img_name = f"{entities[mons_index]['filename']}.png"
            img_url = f"{cons.MONS_IMG_DIR}/{img_name}"
            img_relative_url = f"../{img_url}"

            prev_index = (page_index - 1) * 100 + (mons_index - 1)
            next_index =(page_index - 1) * 100 + (mons_index + 1)

            prev_id = -1 if page_index == 1 and mons_index == 0 else monster_list[prev_index]["id"]
            next_id = -1 if page_index == 4 and mons_index == (len(entities) - 1) else monster_list[next_index]["id"]            
            prev_name = "" if prev_id == -1 else monster_list[prev_index]["name"]
            next_name = "" if next_id == -1 else monster_list[next_index]["name"]

            if prev_id == -1:
                class_btns_prev_next = "justify-content-end"
            elif next_id == -1:
                class_btns_prev_next = "justify-content-start"
            else:
                class_btns_prev_next = "justify-content-between"

            monster["steal_common"] = get_clean_name(entities[mons_index], "loots", "steal_common")
            monster["steal_rare"] = get_clean_name(entities[mons_index], "loots", "steal_rare")
            monster["drop_common"] = get_clean_name(entities[mons_index], "loots", "drop_common")
            monster["drop_rare"] = get_clean_name(entities[mons_index], "loots", "drop_rare")

            spirit_elements = ["spirit_a", "spirit_b"]
            inverse_elements = ["inverse_a", "inverse_b"]
            torment_elements = ["torment_a", "torment_b", "torment_c", "torment_d"]
            monster["spirits"] = get_string_from_name_array(entities[mons_index], "spirits", spirit_elements)
            monster["inverses"] = get_string_from_name_array(entities[mons_index], "inverses", inverse_elements)
            monster["torments"] = get_string_from_name_array(entities[mons_index], "torments", torment_elements)

            monster_name = monster['name'].capitalize()
            url = f"{cons.MONS_DETAIL_DIR}/{monster['id']}.html"
            title = f"{monster_name} ({str(monster['id']).zfill(3)})"
            meta_description = f"Monster stats and data of {title}."
            img_path = os.path.join(website_dir, cons.MONS_IMG_DIR, img_name)
            meta = helpers.get_meta_data(cons.MONSTER_KEYWORDS, meta_description, title, url, img_url, img_path, monster_name)

            data = {
                "meta": meta,
                "levels": levels,
                "monster": monster,
                "img_relative_url": img_relative_url,
                "prev_id": prev_id,
                "next_id": next_id,
                "prev_name": prev_name,
                "next_name": next_name,
                "class_btns_prev_next": class_btns_prev_next
            }

            file_path = os.path.join(website_dir, cons.MONS_DETAIL_DIR, f"{monster['id']}.html")
            output = detail_template.render(data)
            output = helpers.prettify_html(output)
            helpers.write_file(output, file_path)
            print("Wrote {0}".format(file_path))

    # Esper gallery
    is_esper = True
    page = 5
    levels = ""
    btns_group = [cons.BTN_DARK, cons.BTN_DARK, cons.BTN_DARK, cons.BTN_DARK, cons.BTN_SECONDARY]
    esper_list = sorted(esper_list, key=lambda m: m["name"])

    img_name = "odin.png"
    url = "espers.html"
    page_title = "Esper Gallery"
    meta_description = "Esper gallery {0}".format(cons.COMMON_DESC)
    img_url = f"{cons.MEDIA_DIR}/{img_name}"
    img_path = os.path.join(website_dir, cons.MEDIA_DIR, img_name)
    meta_img_alt = img_name.replace(".png", "").capitalize()
    meta = helpers.get_meta_data(cons.ESPER_KEYWORDS, meta_description, page_title, url, img_url, img_path, meta_img_alt)

    data = {
        "meta": meta,
        "levels": levels,
        "page_title": page_title,
        "entities": esper_list,
        "btns_group": btns_group,
        "gallery_urls": cons.GALLERY_URLS,
        "is_esper": is_esper,
        "page": page
    }

    file_path = os.path.join(website_dir, url)
    output = gallery_template.render(data)
    output = helpers.prettify_html(output)
    helpers.write_file(output, file_path)
    print("Wrote {0}".format(file_path))

def write_detail(gallery_index, monster_list, entities, difficulty_index, detail_template, website_dir, cons=helpers.get_constants()):
    current_difficulty = cons.DIFFICULTIES[difficulty_index]
    levels = "../../"
    back_btn_path = f"../../monsters-{current_difficulty}-{gallery_index}.html"
    sorted_list = sorted(monster_list, key=lambda m: m["name"])

    for mons_index in range(len(entities)):
        entity = {
            "id": entities[mons_index]["id"],
            "name": entities[mons_index]["name"],
            "special_attack": entities[mons_index]["special_attack"]
        }

        img_name = f"{entities[mons_index]['filename']}.png"
        img_url = f"{cons.MONS_IMG_DIR}/{img_name}"
        img_relative_url = f"../../{img_url}"

        prev_index = (gallery_index - 1) * 100 + (mons_index - 1)
        next_index =(gallery_index - 1) * 100 + (mons_index + 1)

        if gallery_index == 1 and mons_index == 0:
            prev_id = -1
        else:
            prev_id = sorted_list[prev_index]["id"]

        if gallery_index == 4 and mons_index == (len(entities) - 1):
            next_id = -1
        else:
            next_id = sorted_list[next_index]["id"]
        
        prev_name = "" if prev_id == -1 else sorted_list[prev_index]["name"]
        next_name = "" if next_id == -1 else sorted_list[next_index]["name"]

        if prev_id == -1:
            class_btns_prev_next = "justify-content-end"
        elif next_id == -1:
            class_btns_prev_next = "justify-content-start"
        else:
            class_btns_prev_next = "justify-content-between"

        diff_directory = cons.DIFFICULTIES.copy()
        for m in range(len(diff_directory)):
            if diff_directory[m] != current_difficulty:
                diff_directory[m] = f'../{diff_directory[m]}'
        
        btns_group = [cons.BTN_DARK, cons.BTN_DARK, cons.BTN_DARK, cons.BTN_DARK]
        btns_group[difficulty_index] = cons.BTN_SECONDARY

        stats  = entities[mons_index]["stats"][current_difficulty]
        immunity = byte_flags_to_string(stats, "immunity")
        status = byte_flags_to_string(stats, "status")
        absorb = byte_flags_to_string(stats, "absorb")
        null_elem = byte_flags_to_string(stats, "null")
        weakness = byte_flags_to_string(stats, "weakness")
        misc = byte_flags_to_string(stats, "misc")
        special_attack_flags = byte_flags_to_string(stats, "special_attack_flags")

        if special_attack_flags == "None":
            special_attack_effect = stats["special_attack_effect"]
        else:
            special_attack_effect = f"{stats['special_attack_effect']}, {special_attack_flags}"

        steal_common = get_clean_name(entities[mons_index], "loots", "steal_common")
        steal_rare = get_clean_name(entities[mons_index], "loots", "steal_rare")
        drop_common = get_clean_name(entities[mons_index], "loots", "drop_common")
        drop_rare = get_clean_name(entities[mons_index], "loots", "drop_rare")

        spirit_elements = ["spirit_a", "spirit_b"]
        inverse_elements = ["inverse_a", "inverse_b"]
        torment_elements = ["torment_a", "torment_b", "torment_c", "torment_d"]
        metamorph_elements = ["metamorph_a", "metamorph_b", "metamorph_c", "metamorph_d"]
        spirits = get_string_from_name_array(entities[mons_index], "spirits", spirit_elements)
        inverses = get_string_from_name_array(entities[mons_index], "inverses", inverse_elements)
        torments = get_string_from_name_array(entities[mons_index], "torments", torment_elements)
        metamorph = get_string_from_name_array(entities[mons_index], "metamorph", metamorph_elements)
        metamorph = f'{metamorph} ({stats["metamorph_rate"]})'

        monster_name = entity['name'].capitalize()
        url = f"{cons.MONS_DETAIL_DIR}/{current_difficulty}/{entity['id']}.html"
        title = f"{monster_name} ({str(entity['id']).zfill(3)})"
        meta_description = f"{current_difficulty.capitalize()} difficulty monster stats of {title}."
        img_path = os.path.join(website_dir, cons.MONS_IMG_DIR, img_name)
        meta = helpers.get_meta_data(cons.MONSTER_KEYWORDS, meta_description, title, url, img_url, img_path, monster_name)

        diff_data = {
            "speed": stats["speed"],
            "attack": stats["attack"],
            "hit_rate": stats["hit_rate"],
            "mblock": stats["mblock"],
            "evade": stats["evade"],
            "defense": stats["defense"],
            "mdef": stats["mdef"],
            "mpow": stats["mpow"],
            "hp": stats["hp"],
            "mp": stats["mp"],
            "gil": stats["gil"],
            "exp": stats["exp"],
            "level": stats["level"],
            "immunity": immunity,
            "status": status,
            "absorb": absorb,
            "null": null_elem,
            "weakness": weakness,
            "misc": misc,
            "special_attack_effect": special_attack_effect,
            "steal_common": steal_common,
            "steal_rare": steal_rare,
            "drop_common": drop_common,
            "drop_rare": drop_rare,
            "spirits": spirits,
            "inverses": inverses,
            "torments": torments,
            "metamorph": metamorph,
        }

        monster = {**entity, **diff_data}

        data = {
            "meta": meta,
            "levels": levels,
            "diff_directory": diff_directory,
            "btns_group": btns_group,
            "monster": monster,
            "img_relative_url": img_relative_url,
            "back_btn_path": back_btn_path,
            "prev_id": prev_id,
            "next_id": next_id,
            "prev_name": prev_name,
            "next_name": next_name,
            "class_btns_prev_next": class_btns_prev_next
        }

        file_path = os.path.join(website_dir, cons.MONS_DETAIL_DIR, current_difficulty, f"{entity['id']}.html")
        output = detail_template.render(data)
        output = helpers.prettify_html(output)
        helpers.write_file(output, file_path)
        print("Wrote {0}".format(file_path))

def byte_flags_to_string(stats, byte_description):
    return  ", ".join(stats[byte_description]) if len(stats[byte_description]) > 0 else "None"

def get_clean_name(monster, depth_1, depth_2):
    regex_icon = re.compile(r' *\[[^)]*\] *')
    return re.sub(regex_icon, '', monster[depth_1][depth_2]['name'])

def get_string_from_name_array(monster, depth_1, depht_2_list):
    elements = []
    for i in range(len(depht_2_list)):
        if monster[depth_1][depht_2_list[i]]["name"] != "Nothing":
            elements.append(get_clean_name(monster, depth_1, depht_2_list[i]))

    return ", ".join(elements) if len(elements) > 0 else "None"




    




        

            


