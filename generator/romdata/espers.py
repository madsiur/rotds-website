import os
import common.helpers as helpers
from common.constants import Constants
from .tables import tbl_menu_a, tbl_battle_b

class Esper:
    def __init__(self, id: int, name: str):
        self.id = id
        self.name = name
        self.filename = "placeholder"


class EsperList(list):
    def __init__(self):
        super().__init__()
        self.cons = Constants()

    def get_names(self, rom: bytearray):
        entries = []
        for id in range(self.cons.ESPER_NUM):
            entry = {}
            name = helpers.create_string(rom, id, self.cons.ESPER_NAME_ADDR, self.cons.ESPER_NAME_LENGTH, tbl_battle_b)
            name = name.replace(" ", "_").strip()
            entry["id"] = id + self.cons.MONS_NUM
            entry["name"] = name
            entries.append(entry)
        return entries

    def create_list(self, rom: bytearray, esper_names: list, mons_filenames: list):
        start = self.cons.MONS_NUM
        end = start + self.cons.ESPER_NUM

        for id in range(start, end):
            entry = [f for f in esper_names if f["id"] == id]
            name = entry[0]["name"].replace("_", " ")                                                                                                                                             
            self.append(Esper(id, name))

        # add filenames
        for id in range(start, end):
            esper_exists = any(d.get("id") == id for d in mons_filenames)
            if(esper_exists):
                entry = [f for f in mons_filenames if f["id"] == id]
                filename = entry[0]["filename"]
                if filename != "":
                    index = id - start
                    self[index].filename = filename

    def write_gallery(self, website_dir, templates_dir):
        is_esper = True
        page = 5
        levels = ""

        btns_group = [
                self.cons.BTN_DARK,
                self.cons.BTN_DARK,
                self.cons.BTN_DARK,
                self.cons.BTN_DARK,
                self.cons.BTN_SECONDARY
        ]

        esper_list = sorted(self, key=lambda m: m.name)

        img_name = "odin.png"
        url = "espers.html"
        page_title = "Esper Gallery"
        meta_description = "Esper gallery {0}".format(self.cons.COMMON_DESC)
        img_url = f"{self.cons.MEDIA_DIR}/{img_name}"
        img_path = os.path.join(website_dir, self.cons.MEDIA_DIR, img_name)
        meta_img_alt = img_name.replace(".png", "").capitalize()
        meta = helpers.get_meta_data(self.cons.ESPER_KEYWORDS, meta_description, page_title, url, img_url, img_path, meta_img_alt)

        data = {
            "meta": meta,
            "levels": levels,
            "page_title": page_title,
            "entities": esper_list,
            "btns_group": btns_group,
            "gallery_urls": self.cons.GALLERY_URLS,
            "is_esper": is_esper,
            "page": page
        }

        helpers.write_html(data, url, website_dir, templates_dir, "monsters")