import os
import re
from common.constants import Constants
import common.helpers as helpers
import common.graphics as graphics
from romdata.spells import SpellList
from romdata.items_enum import ItemType
from romdata.battle_commands import BattleCommandList
from text.characters.characters import CharacterList
from romdata.tables import tbl_menu_a, tbl_menu_b
from romdata.items_def import ItemDefinition
import romdata.element_def as elements
from PIL import Image

class Item:
    def __init__(self, id: int, name: str, bin_name: bytearray):
        self.id = id
        self.name = name
        self.clean_name = re.sub(r'\[.*?\]', '', name)
        self.bin_name = bin_name[0:len(self.clean_name)+1]

        # create full name
        name_parts = re.findall(r'[A-Z][^A-Z]*', self.clean_name)
        name_parts = [part.strip().replace("Helm", "Helmet").replace("Shld", "Shield") for part in name_parts]
        if len(name_parts) == 2 and name_parts[0][-1] == "-":
            name_parts[0] = name_parts[0] + name_parts[1]
            name_parts.pop()
        self.full_name = " ".join(name_parts)
        self.img = None
        self.type = None
        self.sub_type = ""
        self.data = {}
        self.desc = ""

    def save_image(self, dir_path: str):
        graphics.save_image(self.img, os.path.join(dir_path, f"{self.id}.png"))

class ItemList(list):
    def __init__(self, font_path: str, romdata_dir: str, battle_commands_list: BattleCommandList, characters_list: CharacterList, spells_list: SpellList):
        super().__init__()
        self.cons = Constants()
        self.font = Image.open(font_path)
        self.definition = ItemDefinition()
        self.battle_commands_list = battle_commands_list
        self.characters_list = characters_list
        self.spells_list = spells_list
        self.character_byte_1 = self.create_flags(self.definition.character_byte_1)
        self.character_byte_2 = self.create_flags(self.definition.character_byte_2)
        self.spellcast_exclusion = helpers.read_json(os.path.join(romdata_dir, "item_spellcast_exclusion.json"))
        self.attack_power_exclusion = helpers.read_json(os.path.join(romdata_dir, "item_attack_power_exclusion.json"))

    def get_dict(self, id):
        data = {}
        data["id"] = id
        data["name"] = self[id].clean_name
        return data
    
    def create_flags(self, ref_list):
        if isinstance(ref_list, list):
            new_list = []
            for index in range(len(ref_list)):
                self.add_flag_value(new_list, ref_list[index])
        elif isinstance(ref_list, dict):
            new_list = {}
            for key, value in ref_list.items():
                out_values = []
                values = value.split(",")
                values = [v.strip() for v in values]
                for v in values:
                    self.add_flag_value(out_values, v)
                new_list[key] = ", ".join(out_values)
        return new_list
    
    def add_flag_value(self, out_value, value):
        sv = value.split("-")
        if len(sv) == 1:
            out_value.append(sv[0])
        elif sv[0] == "itemname":
            out_value.append(self[int(sv[1])].clean_name)
        elif sv[0] == "battlecommandname":
            out_value.append(self.battle_commands_list[int(sv[1])].name)
        elif sv[0] == "charactername":
            out_value.append(self.characters_list[int(sv[1])].name)

    def get_desc(self, rom, id):
        ptr_value =  helpers.get_ptr(rom, self.cons.ITEM_DESC_BASE_PTR, id, self.cons.ITEM_DESC_PTR_LENGTH)
        desc_addr = self.cons.ITEM_DESC_BASE_ADDR + ptr_value
        bin_text = []
        is_terminator = False

        while not is_terminator:
            data = rom[desc_addr]
            if data == 0x00:
                is_terminator = True
                break
            bin_text.append(data)
            desc_addr += 1

        return helpers.create_text(bin_text, tbl_menu_b).strip()

    def create_list(self, rom: bytearray):
        for id in range(self.cons.ITEM_NUM):
            bin_name = helpers.get_bin_data(rom, id, self.cons.ITEM_NAME_ADDR, self.cons.ITEM_NAME_LENGTH)
            name = helpers.create_text(bin_name, tbl_menu_a).strip()     
            self.append(Item(id, name, bin_name))

        self[255].name = "Nothing"
        self[255].clean_name = "Nothing"

        for id in range(self.cons.ITEM_NUM - 1):
            item = self[id]
            assert isinstance(item, Item)
                       
            item.desc = self.get_desc(rom, id)
            item.sub_type = self.definition.sub_type[item.bin_name[0]]
            item.data["sub_type"] = item.sub_type

            data = helpers.get_bin_data(rom, id, self.cons.ITEM_DATA_ADDR, self.cons.ITEM_DATA_LENGTH)
            item.type = ItemType(data[0] & 0x07)
            item.data["type"] = item.type.name.capitalize()
            item.data["type_flags"] = helpers.get_flags_string_from_byte(self.definition.type_flags, data[0] & 0xF0)

            if item.type == ItemType.ITEM:
                item.sub_type = "---"
                if item.full_name.endswith("Tab"):
                    item.sub_type = "Tab"
                if item.full_name.endswith("Doll"):
                    item.sub_type = "Doll"
                if item.full_name.endswith("Scroll"):
                    item.sub_type = "Scroll"
                item.data["sub_type"] = item.sub_type

            if item.type == ItemType.RELIC or item.type == ItemType.AETHER:
                item.sub_type = "---"
                item.data["sub_type"] = item.sub_type

            item.data["targeting"] = helpers.get_flags_string_from_byte(self.definition.targeting_flags, data[14])
            item.data["cost"] = f"{data[29] * 0x100 + data[28]} Gil"

            if item.type != ItemType.AETHER and item.type.value <= ItemType.RELIC.value:
                spell_cast = ""
                for exclusion in self.spellcast_exclusion:
                    if exclusion["item_id"] == item.id:
                        spell_cast = self.spells_list[exclusion["spell_id"]].clean_name
                        break
                if spell_cast == "":
                    spell_cast = self.spells_list[data[18] & 0x3F].clean_name
                spell_cast_flags = helpers.get_flags_string_from_byte(self.definition.spell_flags, data[18] & 0xC0)
                item.data["spell_cast"] = "None" if spell_cast_flags == "None" else f"{spell_cast}, {spell_cast_flags}"

            if item.type != ItemType.AETHER and item.type != ItemType.ITEM:      
                characters = helpers.get_string_flags(self.character_byte_1, data[1])
                characters = characters + helpers.get_string_flags(self.character_byte_2, data[2])
                item.data["characters"] = helpers.get_flags_string(characters)
            
                spell_name = self.spells_list[data[4]].clean_name
                item.data["spell_learnt"] = "None" if data[4] == 0xFF or data[3] == 0x00 else f"{spell_name} at {data[3]}%"
            
                item.data["field_effects"] = helpers.get_flags_string_from_byte(self.definition.field_effect, data[5])

                status_immunity = helpers.get_string_flags(self.definition.status_immunity_1, data[6])
                status_immunity = status_immunity + helpers.get_string_flags(self.definition.status_immunity_2, data[7])
                item.data["status_immunity"] = helpers.get_flags_string(status_immunity)

                item.data["status_helpful"] = helpers.get_flags_string_from_byte(self.definition.status_helpful, data[8])
                item.data["status_harmful"] = helpers.get_flags_string_from_byte(self.definition.status_harmful, data[25])

                relic_effects = helpers.get_string_flags(self.definition.relic_effects_1, data[9])
                relic_effects = relic_effects + helpers.get_string_flags(self.definition.relic_effects_2, data[10])
                relic_effects = relic_effects + helpers.get_string_flags(self.definition.relic_effects_3, data[11])
                relic_effects = relic_effects + helpers.get_string_flags(self.definition.relic_effects_4, data[12])
                relic_effects = relic_effects + helpers.get_string_flags(self.definition.relic_effects_5, data[13])
                item.data["relic_effects"] = helpers.get_flags_string(relic_effects)

                block = helpers.get_string_flags(self.definition.block_special_effect, data[27] & 0x03)
                block = block + helpers.get_string_flags(self.definition.block_type, (data[27] & 0x0C) >> 2)
                item.data["block"] = helpers.get_flags_string(block)

                bonuses = []
                bonus = self.definition.stat_bonuses[data[16] & 0x0F]
                if bonus != "": bonuses.append(f"Vigor {bonus}")
                bonus = self.definition.stat_bonuses[data[16] & 0xF0]
                if bonus != "": bonuses.append(f"Speed {bonus}")
                bonus = self.definition.stat_bonuses[data[17] & 0x0F]
                if bonus != "": bonuses.append(f"Stamina {bonus}")
                bonus = self.definition.stat_bonuses[data[17] & 0xF0]
                if bonus != "": bonuses.append(f"Magic Power {bonus}")
                bonuses = sorted(bonuses)
                evade = []
                bonus = self.definition.evasion[data[26] & 0x0F]
                if bonus != "": evade.append(f"Evade {bonus}")
                bonus = self.definition.evasion[data[26] & 0xF0]
                if bonus != "": evade.append(f"Magic Evade {bonus}")
                bonuses = bonuses + evade
                item.data["bonuses"] = ", ".join(bonuses) if len(bonuses) > 0 else "None"

            if item.type.value <= ItemType.WEAPON.value:
                attack_power = None
                for exclusion in self.attack_power_exclusion:
                    if exclusion["item_id"] == item.id:
                        attack_power = str(exclusion["attack_power"])
                        break
                if attack_power is None:
                    attack_power = str(data[20])
                item.data["attack_power"] = attack_power
                item.data["hit_rate"] = str(data[21])

            if item.type.value >= ItemType.ARMOR.value and item.type != ItemType.ITEM:
                item.data["defense"] = str(data[20])
                item.data["magic_defense"] = str(data[21])

            if item.type == ItemType.ITEM:
                item.data["item_flags"] = helpers.get_flags_string_from_byte(self.definition.item_flags, data[19])
                usage = "Remove" if data[19] & 0x20 else "Apply"
            
                item.data["power"] = str(data[20])
                item.data["special_effect"] = self.definition.item_special_effect[(data[27] & 0xF0) >> 4]

                item_status = helpers.get_string_flags(self.definition.item_actor_status_1, data[21])
                item_status = item_status + helpers.get_string_flags(self.definition.item_actor_status_2, data[22])
                item_status = item_status + helpers.get_string_flags(self.definition.item_actor_status_3, data[23])
                item_status = item_status + helpers.get_string_flags(self.definition.item_actor_status_4, data[24])
                item.data["status_item"] = helpers.get_flags_string(item_status)
                item.data["status_item"] = f"{usage} {item.data['status_item']}" if item.data["status_item"] != "None" else "None"

            if item.type == ItemType.WEAPON:
                item.data["element"] = helpers.get_flags_string_from_byte(elements.element_def, data[15])
                item.data["weapon_flags"] = helpers.get_flags_string_from_byte(self.definition.weapon_flags, data[19])
                
            if item.type.value >= ItemType.ARMOR.value and item.type != ItemType.ITEM:
                item.data["element_half"] = helpers.get_flags_string_from_byte(elements.element_def, data[15])
                item.data["element_absorb"] = helpers.get_flags_string_from_byte(elements.element_def, data[22])
                item.data["element_null"] = helpers.get_flags_string_from_byte(elements.element_def, data[23])
                item.data["element_weak"] = helpers.get_flags_string_from_byte(elements.element_def, data[24])

        self.weapon_special_effect = self.create_flags(self.definition.weapon_special_effect)
        self.item_special_effect = self.create_flags(self.definition.item_special_effect)

        for id in range(self.cons.ITEM_NUM - 1):
            item = self[id]
            assert isinstance(item, Item)
            data = helpers.get_bin_data(rom, id, self.cons.ITEM_DATA_ADDR, self.cons.ITEM_DATA_LENGTH)
            if item.type == ItemType.WEAPON:
                effects = []
                special_effects = self.weapon_special_effect[(data[27] & 0xF0) >> 4]
                if special_effects != "None":
                    effects.append(special_effects)
                if item.data["relic_effects"] != "None":
                    effects.append(item.data["relic_effects"])
                item.data["special_effects"] = ", ".join(effects) if len(effects) > 0 else "None"

            if item.type == ItemType.ITEM:
                item.data["special_effect"] = self.item_special_effect[data[27]]

    def write_gallery(self, website_dir: str, templates_dir: str):
        items = sorted([x for x in self if x.id != 255], key=lambda x: (x.type.value, x.sub_type))
        list_items = []
        levels = ""

        for id in range(1, len(items) + 1):
            item = {}
            index = id - 1
            if id % 2 == 1:
                item["row"] = "row-a"
            else:
                item["row"] = "row-b"

            item["id"] = items[index].id
            item["type"] = items[index].data["type"]
            item["sub_type"] = items[index].data["sub_type"]
            item["full_name"] = items[index].full_name
            list_items.append(item)

        img_name = "items.png"
        url = "items.html"
        title = "Item List"
        meta_description = "Item list {0}".format(self.cons.COMMON_DESC)
        img_url = f"{self.cons.MEDIA_DIR}/{img_name}"
        img_path = os.path.join(website_dir, self.cons.MEDIA_DIR, img_name)
        meta_img_alt = "Item icons"
        meta = helpers.get_meta_data(self.cons.ITEM_KEYWORDS, meta_description, title, url, img_url, img_path, meta_img_alt)

        data = {
            "items": list_items,
            "levels": levels,
            "meta": meta
        }
           
        helpers.write_html(data, "items.html", website_dir, templates_dir, "items")

    def write_details(self, website_dir: str, templates_dir: str):
        items = sorted([x for x in self if x.id != 255], key=lambda x: (x.type.value, x.sub_type))
        levels = "../"

        for index in range(len(items)):
            item = items[index]
            assert isinstance(item, Item)

            prev_id = -1 if index == 0 else items[index - 1].id
            next_id = -1 if index == (len(items) - 1) else items[index + 1].id           
            prev_name = "" if prev_id == -1 else items[index - 1].full_name
            next_name = "" if next_id == -1 else items[index + 1].full_name

            if prev_id == -1:
                class_btns_prev_next = "justify-content-end"
            elif next_id == -1:
                class_btns_prev_next = "justify-content-start"
            else:
                class_btns_prev_next = "justify-content-between"

            img_name = "items.png"
            url = f"{self.cons.ITEM_DETAIL_DIR}/{item.id}.html"
            title = f"{item.full_name} Details"
            meta_description = f"{item.full_name} detail page {self.cons.COMMON_DESC}"
            img_url = f"{self.cons.MEDIA_DIR}/{img_name}"
            img_path = os.path.join(website_dir, self.cons.MEDIA_DIR, img_name)
            meta_img_alt = item.full_name
            meta = helpers.get_meta_data(self.cons.ITEM_KEYWORDS, meta_description, title, url, img_url, img_path, meta_img_alt)

            data = {
                "id": item.id,
                "full_name": item.full_name,
                "description": item.desc,
                "item": item.data,
                "prev_id": prev_id,
                "prev_name": prev_name,
                "next_id": next_id,
                "next_name": next_name,
                "class_btns_prev_next": class_btns_prev_next,
                "levels": levels,
                "meta": meta
            }

            file_path = os.path.join(website_dir, self.cons.ITEM_DETAIL_DIR, f"{item.id}.html")
            if item.type == ItemType.AETHER or item.type == ItemType.ITEM or item.type == ItemType.WEAPON:    
                helpers.write_html(data, file_path, website_dir, templates_dir, f"item/{item.type.name.lower()}")
            else:
                helpers.write_html(data, file_path, website_dir, templates_dir, "item/default")

    def create_images(self, dir_path: str):
        for id in range(len(self)-1):
            item = self[id]
            assert isinstance(item, Item)
            item.img = Image.new("RGBA", (len(item.bin_name) * 8, 8))
            for x in range(len(item.bin_name)):
                char = item.bin_name[x] - self.cons.SMALL_FONT_START_CHAR
                left = int(char % 16) * 8
                upper = int(char // 16) * 8
                right = left + 8
                lower = upper + 8
                char_img = self.font.crop((left, upper, right, lower))
                item.img.paste(char_img, (x * 8, 0))
            item.img = item.img.resize((item.img.width * 2, item.img.height * 2), resample=Image.NEAREST)
            item.save_image(dir_path)
                    