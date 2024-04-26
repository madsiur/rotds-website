import os
import re
from common.constants import Constants
import common.helpers as helpers
import common.graphics as graphics
from .tables import tbl_menu_a
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

        self.file_name = self.full_name.lower().replace(" ", "_")
        self.img = Image.new("RGBA", (len(self.bin_name) * 8, 8))

    def save_image(self, dir_path: str):
        graphics.save_image(self.img, os.path.join(dir_path, f"{self.file_name}.png"))

class ItemList(list):
    def __init__(self, font_path: str):
        super().__init__()
        self.cons = Constants()
        self.font = Image.open(font_path)

    def create_list(self, rom: bytearray):
        for id in range(self.cons.ITEM_NUM):
            bin_name = helpers.get_bin_data(rom, id, self.cons.ITEM_NAME_ADDR, self.cons.ITEM_NAME_LENGTH)
            name = helpers.create_text(bin_name, tbl_menu_a).strip()     
            self.append(Item(id, name, bin_name))

        self[255].name = "Nothing"
        self[255].clean_name = "Nothing"

    def create_images(self, dir_path: str):
        for item in self:
            assert isinstance(item, Item) 
            for x in range(len(item.bin_name)):
                char = item.bin_name[x] - self.cons.SMALL_FONT_STRAT_CHAR
                left = int(char % 16) * 8
                upper = int(char // 16) * 8
                right = left + 8
                lower = upper + 8
                char_img = self.font.crop((left, upper, right, lower))
                item.img.paste(char_img, (x * 8, 0))
            item.img = item.img.resize((item.img.width * 2, item.img.height * 2), resample=Image.NEAREST)
            item.save_image(dir_path)

    def get_dict(self, id):
        data = {}
        data["id"] = id
        data["name"] = self[id].clean_name
        return data
                    