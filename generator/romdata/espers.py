import os
import common.helpers as helpers
from common.constants import Constants
from .tables import tbl_menu_a

class Esper:
    def __init__(self, id: int, name: str):
        self.id = id
        self.name = name
        self.filename = "placeholder"


class EsperList(list):
    def __init__(self):
        super().__init__()
        self.cons = Constants()

    def create_list(self, rom: bytearray, mons_filenames: list):
        start = self.cons.MONS_NUM
        end = start + self.cons.ESPER_NUM
        for id in range(start, end):
            name = helpers.create_string(rom, id - self.cons.MONS_NUM, self.cons.ESPER_NAME_ADDR, self.cons.ESPER_NAME_LENGTH, tbl_menu_a)
            self.append(Esper(id, name))

        # add file names
        for id in range(0, self.cons.ESPER_NUM):
            filename = [f for f in mons_filenames if f[0:3] == str(id+self.cons.MONS_NUM).zfill(3)]
            if len(filename) != 0:
                self[id].filename = filename[0].replace(".png", "")

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