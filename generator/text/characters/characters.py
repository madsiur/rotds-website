import os
import sys
import common.helpers as helpers
from jinja2 import Environment, FileSystemLoader

from common.constants import Constants
from romdata.tables import tbl_menu_a

class Character:
    def __init__(self, id: int, name: str):
        self.id = id
        self.name_id = name
        self.name = name.capitalize()
        self.portrait_file_name = None
        self.info_file_path = None
        self.info = {}

    def get_portrait_file_name(self, dir_path: str):
        img_name = f"{self.name_id}.png"
        img_path = os.path.join(dir_path, img_name)
        if os.path.exists(img_path):
            return img_name
        return None
    
    def get_info_file_path(self, dir_path: str):
        file_name = f"{self.name_id}.txt"
        file_path = os.path.join(dir_path, file_name)
        if os.path.exists(file_path):
            return file_path
        return None
    
    def parse_info():
        pass

class CharacterList(list):
    def __init__(self):
        super().__init__()
        self.cons = Constants()

    def create_list(self, characters_dir: str, portrait_dir: str):
        file_path = os.path.join(characters_dir, "characters.txt")
        characters = helpers.read_file(file_path)
        
        for id in range(len(characters)):
            character = Character(id, characters[id])
            character.portrait_file_name = character.get_portrait_file_name(portrait_dir)
            character.info_file_path = character.get_info_file_path(characters_dir)

            if character.portrait_file_name is None or character.info_file_path is None:
                print(f"Error: {character.name} portrait or info file not found.")
                sys.exit()

            self.append(character)
    
    def write_gallery(self, website_dir: str, templates_dir: str):
        elements = []
        levels = ""

        for character in self:
            assert isinstance(character, Character) 
            element = {
                "id": character.name_id,
                "name": character.name
            }
            elements.append(element)

        img_name = "aurora.png"
        url = "characters.html"
        title = "Characters Gallery"
        meta_description = "Playable characters gallery {0}".format(self.cons.COMMON_DESC)
        img_url = f"{self.cons.MEDIA_DIR}/{img_name}"
        img_path = os.path.join(website_dir, self.cons.MEDIA_DIR, img_name)
        meta_img_alt = img_name.replace(".png", "").capitalize()
        meta = helpers.get_meta_data(self.cons.CHARACTER_KEYWORDS, meta_description, title, url, img_url, img_path, meta_img_alt)

        data = {
            "elements": elements,
            "levels": levels,
            "meta": meta
        }

        helpers.write_html(data, url, website_dir, templates_dir, "characters")

    def write_details(self, website_dir: str, templates_dir: str):
        levels = "../"

        for i in range(len(self)):
            character = self[i]
            assert isinstance(character, Character) 
            rows = helpers.read_file(character.info_file_path)
       
            for j in range(len(rows)):
                data = rows[j].strip('\n').split(":")
                data[0] = data[0].strip().lower().replace(" ", "_")
                data[1] = data[1].strip().replace("#", ":")
                character.info[data[0]] = data[1]
            character.info["id"] = character.name_id

            previous_character = self[i - 1] if i > 0 else None
            next_character = self[i + 1] if i < len(self) - 1 else None

            character.info["prev_id"] = previous_character.name_id if previous_character is not None else -1           
            character.info["prev_name"] = previous_character.name if previous_character is not None else ""
            character.info["next_id"] = next_character.name_id if next_character is not None else -1
            character.info["next_name"] = next_character.name if next_character is not None else ""
            ability_name = character.info["special_ability"].split(".")[0].strip()
            character.info["ability_desc"] = character.info["special_ability"][len(ability_name)+1:len(character.info["special_ability"])]
            character.info["ability_name"] = ability_name
            character.info.pop("special_ability")

            url = f"{self.cons.CHAR_DIR}/{character.name_id}.html"
            title = f"Characters - {character.name}"
            meta_description = f"{character.info['name']} character statistics and information."
            img_url = f"{self.cons.CHAR_DIR}/portraits/{character.portrait_file_name}"
            img_path = os.path.join(website_dir, self.cons.CHAR_DIR, "portraits", character.portrait_file_name)
            meta = helpers.get_meta_data(self.cons.CHARACTER_KEYWORDS, meta_description, title, url, img_url, img_path, character.name)

            if character.info["prev_id"] == -1:
                class_btns_prev_next = "justify-content-end"
            elif character.info["next_id"] == -1:
                class_btns_prev_next = "justify-content-start"
            else:
                class_btns_prev_next = "justify-content-between"

            data = {
                "info": character.info,
                "levels": levels,
                "class_btns_prev_next": class_btns_prev_next,
                "meta": meta
            }
            
            file_path = os.path.join(self.cons.CHAR_DIR, f"{character.name_id}.html")
            helpers.write_html(data, file_path, website_dir, templates_dir, "characterdetails")






        
