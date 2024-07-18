import os
import common.helpers as helpers
from common.constants import Constants
from romdata.spells import SpellList
from romdata.metamorph import MetamorphPackList
from romdata.items import ItemList
from .tables import tbl_menu_a, tbl_battle_b
from .monster_def import *
from .status_def import *
from .element_def import *
from jinja2 import Environment, FileSystemLoader
import re


class Monster:
    def __init__(self, id: int, name: str):
        self.id = id
        self.name = name
        self.filename = "placeholder"
        self.special_attack = ""
        self.stats = {}
        self.loots = {}
        self.spirits = {}
        self.inverses = {}
        self.torments = {}
        self.fight_animation = {}
        self.metamorph = {}

class MonsterList(list):
    def __init__(self):
        super().__init__()
        self.cons = Constants()

    def get_names(self, rom: bytearray):
        entries = []
        for id in range(self.cons.MONS_NUM):
            entry = {}
            name = helpers.create_string(rom, id, self.cons.MONS_NAME_ADDR, self.cons.MONS_NAME_LENGTH, tbl_battle_b)
            name = name.replace(" ", "_").strip()
            entry["id"] = id
            entry["name"] = name
            entries.append(entry)
        return entries

    def create_list(self, rom: bytearray, monster_names: list, monster_filenames: list, item_list: ItemList, spell_list: SpellList, metamorph_list: MetamorphPackList, json_dir: str):
        for id in range(self.cons.MONS_NUM):
            entry = [f for f in monster_names if f["id"] == id]
            name = entry[0]["name"].replace("_", " ")                                                                                                                                                
            self.append(Monster(id, name))

        for id in range(self.cons.MONS_NUM):
            monster_exists = any(d.get("id") == id for d in monster_filenames)
            if(monster_exists):
                entry = [f for f in monster_filenames if f["id"] == id]
                filename = entry[0]["filename"]
                if filename != "":
                    self[id].filename = filename

            self[id].special_attack = helpers.create_string(rom, id, self.cons.MONS_SATK_NAME_ADDR, self.cons.MONS_SATK_NAME_LENGTH, tbl_battle_b)

            loots_data = helpers.get_bin_data(rom, id, self.cons.MONS_LOOT_ADDR, self.cons.MONS_LOOT_LENGTH)
            self[id].loots["steal_rare"] = item_list.get_dict(loots_data[0])
            self[id].loots["steal_common"] = item_list.get_dict(loots_data[1])
            self[id].loots["drop_rare"] = item_list.get_dict(loots_data[2])
            self[id].loots["drop_common"] = item_list.get_dict(loots_data[3])

            spirits_data = helpers.get_bin_data(rom, id, self.cons.MONS_SPRT_ADDR, self.cons.MONS_SPRT_LENGTH)
            self[id].spirits["spirit_a"] = spell_list.get_dict(spirits_data[0])
            self[id].spirits["spirit_b"] = spell_list.get_dict(spirits_data[1])

            inverses_data = helpers.get_bin_data(rom, id, self.cons.MONS_INV_ADDR, self.cons.MONS_INV_LENGTH)
            self[id].inverses["inverse_a"] = spell_list.get_dict(inverses_data[0])
            self[id].inverses["inverse_b"] = spell_list.get_dict(inverses_data[1])

            torments_data = helpers.get_bin_data(rom, id, self.cons.MONS_TORM_ADDR, self.cons.MONS_TORM_LENGTH)
            self[id].torments["torment_a"] = spell_list.get_dict(torments_data[0])
            self[id].torments["torment_b"] = spell_list.get_dict(torments_data[1])
            self[id].torments["torment_c"] = spell_list.get_dict(torments_data[2])
            self[id].torments["torment_d"] = spell_list.get_dict(torments_data[3])

            self[id].stats["normal"] = self.get_difficulty(rom, id, self.cons.MONS_STAT_NOR)
            self[id].stats["hard"] = self.get_difficulty(rom, id, self.cons.MONS_STAT_HAR)
            self[id].stats["extreme"] = self.get_difficulty(rom, id, self.cons.MONS_STAT_EXT)
            self[id].stats["insane"] = self.get_difficulty(rom, id, self.cons.MONS_STAT_INS)

            metamorph_id = self[id].stats["normal"]["metamorph_id"]
            self[id].metamorph = metamorph_list.get_dict(metamorph_id, item_list)
            self[id].stats["normal"].pop("metamorph_id")
            self[id].stats["hard"].pop("metamorph_id")
            self[id].stats["extreme"].pop("metamorph_id")
            self[id].stats["insane"].pop("metamorph_id")

            fight_animation_id = self[id].stats["normal"]["fight_animation_id"]
            self[id].fight_animation = item_list.get_dict(fight_animation_id)
            self[id].stats["normal"].pop("fight_animation_id")
            self[id].stats["hard"].pop("fight_animation_id")
            self[id].stats["extreme"].pop("fight_animation_id")
            self[id].stats["insane"].pop("fight_animation_id")

            json_data = {
                "id": id,
                "name": self[id].name,
                "filename": self[id].filename,
                "special_attack": self[id].special_attack,
                "stats": self[id].stats,
                "loots": self[id].loots,
                "spirits": self[id].spirits,
                "inverses": self[id].inverses,
                "torments": self[id].torments,
                "fight_animation": self[id].fight_animation,
                "metamorph": self[id].metamorph
            }

            file_path = os.path.join(json_dir, f"{id}.json")
            helpers.write_json(json_data, file_path)
    
    def get_difficulty(self, rom, id, difficulty):
        data = helpers.get_bin_data(rom, id, difficulty, self.cons.MONS_STAT_LENGTH)

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
        special_attack_effect = self.get_special_attack_effect(sp_atk_effect_id)

        diff_stats = {
            "speed": speed,
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
            "special_attack_flags": special_attack_flags
        }
        
        return diff_stats

    def get_special_attack_effect(self, id):
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
        
    def write_pages(self, website_dir, templates_dir):
        monster_list = sorted(self, key=lambda m: m.name)
        for page_index in range(1, 5): 
            levels = ""
            page = page_index
            min_id = (page_index-1) * 100
            max_id = page_index * 100
            entities = sorted(monster_list[min_id:max_id], key=lambda m: m.name)

            img_name = "gilgamesh.png"
            url = f"monsters-{page_index}.html"
            title = "Monster Gallery {0}".format(page_index)
            meta_description = "Monster gallery {0}".format(self.cons.COMMON_DESC)
            img_url = f"{self.cons.MEDIA_DIR}/{img_name}"
            img_path = os.path.join(website_dir, self.cons.MEDIA_DIR, img_name)
            meta_img_alt = img_name.replace(".png", "").capitalize()
            meta = helpers.get_meta_data(self.cons.MONSTER_KEYWORDS, meta_description, title, url, img_url, img_path, meta_img_alt)
            
            first_letter = entities[0].name[0]
            last_letter = entities[-1].name[0]
            page_title = "Monster Gallery ({0} - {1})".format(first_letter, last_letter)

            btns_group = [
                self.cons.BTN_DARK,
                self.cons.BTN_DARK,
                self.cons.BTN_DARK,
                self.cons.BTN_DARK,
                self.cons.BTN_DARK
            ]
            btns_group[page_index-1] = self.cons.BTN_SECONDARY

            data = {
                "meta": meta,
                "levels": levels,
                "page_title": page_title,
                "entities": entities,
                "btns_group": btns_group,
                "gallery_urls": self.cons.GALLERY_URLS,
                "page": page
            }
            
            helpers.write_html(data, url, website_dir, templates_dir, "monsters")

            levels = "../"
            for mons_index in range(len(entities)):
                monster = {
                    "id": entities[mons_index].id,
                    "name": entities[mons_index].name,
                    "special_attack": entities[mons_index].special_attack
                }

                img_name = f"{entities[mons_index].filename}.png"
                img_url = f"{self.cons.MONS_IMG_DIR}/{img_name}"
                img_relative_url = f"../{img_url}"

                prev_index = (page_index - 1) * 100 + (mons_index - 1)
                next_index =(page_index - 1) * 100 + (mons_index + 1)

                prev_id = -1 if page_index == 1 and mons_index == 0 else monster_list[prev_index].id
                next_id = -1 if page_index == 4 and mons_index == (len(entities) - 1) else monster_list[next_index].id           
                prev_name = "" if prev_id == -1 else monster_list[prev_index].name
                next_name = "" if next_id == -1 else monster_list[next_index].name

                if prev_id == -1:
                    class_btns_prev_next = "justify-content-end"
                elif next_id == -1:
                    class_btns_prev_next = "justify-content-start"
                else:
                    class_btns_prev_next = "justify-content-between"

                monster["steal_common"] = entities[mons_index].loots["steal_common"]["name"]
                monster["steal_rare"] = entities[mons_index].loots["steal_rare"]["name"]
                monster["drop_common"] = entities[mons_index].loots["drop_common"]["name"]
                monster["drop_rare"] = entities[mons_index].loots["drop_rare"]["name"]
                monster["spirits"] = ", ".join(entities[mons_index].spirits[key]["name"] for key in entities[mons_index].spirits if entities[mons_index].spirits[key]["name"] != "Nothing")
                monster["inverses"] = ", ".join(entities[mons_index].inverses[key]["name"] for key in entities[mons_index].inverses if entities[mons_index].inverses[key]["name"] != "Nothing")
                monster["torments"] = ", ".join(entities[mons_index].torments[key]["name"] for key in entities[mons_index].torments if entities[mons_index].torments[key]["name"] != "Nothing")

                monster_name = entities[mons_index].name.capitalize()
                url = f"{self.cons.MONS_DETAIL_DIR}/{monster['id']}.html"
                title = f"{monster_name} ({str(monster['id']).zfill(3)})"
                meta_description = f"Monster stats and data of {title}."
                img_path = os.path.join(website_dir, self.cons.MONS_IMG_DIR, img_name)
                meta = helpers.get_meta_data(self.cons.MONSTER_KEYWORDS, meta_description, title, url, img_url, img_path, monster_name)

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

                file_path = os.path.join(website_dir, self.cons.MONS_DETAIL_DIR, f"{monster['id']}.html")
                helpers.write_html(data, file_path, website_dir, templates_dir, "monsterdetails")




    




        

            


