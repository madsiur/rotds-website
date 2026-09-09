import common.helpers as helpers
import common.graphics as graphics
import os
from sprites.snes_palette import Snes_Palette
from common.constants import Constants

class SpriteSheet:
    def __init__(self, id: int, tiles: list):
        self.id = id
        self.tiles = tiles

class SpriteSheetList(list):
    def __init__(self, rom: bytearray, pose_path: str, meta_path: str):
        super().__init__()
        self.cons = Constants()
        self.json_poses = helpers.read_json(pose_path)
        self.validate_poses()
        self.poses = self.create_poses()
        self.meta = helpers.read_json(meta_path)
        self.validate_meta()
        self.palettes = self.create_palettes(rom)

    def validate_poses(self):
        for id in self.json_poses:
            if not (id.startswith("p") or id.startswith("static_") or id.startswith("npc_") or id.startswith("full")):
                raise SystemExit(f"Invalid pose array id name({id})")
            if id.startswith("p"):
                id_num = id[1:]
                if not id_num.isdigit():
                    raise SystemExit(f"Invalid pose array id name({id})")
                id_num = int(id_num)
                if id_num < 1 or id_num > 48:
                    raise SystemExit(f"Invalid pose array id name({id})")
            poses = self.json_poses[id]
            if not isinstance(poses, list):
                raise SystemExit(f"Invalid pose array format({id})")
            if len(poses) > 8 and len(poses) % 8 != 0:
                raise SystemExit(f"Invalid pose array poses amount({id} - {len(poses)})")
            for pose in self.json_poses[id]:
                if not id.startswith("p"):
                    if pose > 48 or pose < 1:
                        raise SystemExit(f"Invalid pose array id({id} - {pose})")
                
    def create_poses(self):
        return [self.json_poses[k] for k in sorted((k for k in self.json_poses if k.startswith("p")), key=lambda k: int(k[1:]))]

    def validate_meta(self):
        seen_names = {}
        for entry in self.meta:
            sheet_id = entry["sheet_id"]
            palettes = entry["palettes"]
            template = entry["template"]
            category = entry["category"]
            name = entry["name"]
            if not isinstance(sheet_id, int):
                raise SystemExit(f"Invalid sprite meta sheet id({sheet_id})")
            if sheet_id < 0 or sheet_id > 163:
                raise SystemExit(f"Invalid sprite meta sheet id({sheet_id})")
            if not isinstance(palettes, list):
                raise SystemExit(f"Invalid sprite meta palette list format({palettes})")
            for pal_id in palettes:
                if pal_id < 0 or pal_id > 9:
                    raise SystemExit(f"Invalid sprite meta palette id({pal_id})")
            if not isinstance(template, str):
                raise SystemExit(f"Invalid sprite meta template format({template})")
            if not template in self.json_poses:
                raise SystemExit(f"Invalid sprite meta template name({template})")
            if category not in ["full", "npc", "static", "object"]:
                raise SystemExit(f"Invalid sprite meta category ({category})")
            if not isinstance(name, str):
                raise SystemExit(f"Invalid sprite meta name format({name})")
            if name in seen_names:
                raise SystemExit(f"Duplicate sprite meat name found({name})")
            seen_names[name] = True

    def create_palettes(self, rom: bytearray):
        palettes = []
        start, end = 0, self.cons.SPRITE_PAL_NUM
        for id in range(start, end):
            start_addr = self.cons.SPRITE_PAL_ADDR + id * self.cons.SPRITE_PAL_SIZE
            end_addr = start_addr + self.cons.SPRITE_PAL_SIZE
            palette_array = rom[start_addr:end_addr]
            palettes.append(Snes_Palette(palette_array))
        return palettes

    def create_spritesheet_list(self, rom: bytearray):
        start, end = 0, self.cons.SPRITE_NUM
        for id in range(start, end):
            offset = (rom[self.cons.SPRITE_BANK_PTR_OFFSET + (id * 2)] - 0xC0) * 0x10000
            offset = offset + helpers.get_short(rom, self.cons.SPRITE_PTR_OFFSET + (id * 2))
            tiles = [None] * 0xBA
            tilesbin = rom[offset:offset + 0x16A0]
            for i in range(0, len(tilesbin), 32):
                tiles[i // 32] = graphics.get_4bpp_tile(tilesbin[i:i+32])
            tiles[0xB5] = graphics.get_new_tile(tiles[0x05]);
            tiles[0xB6] = graphics.get_new_tile(tiles[0x04]);
            tiles[0xB7] = graphics.get_new_tile(tiles[0x11]);
            tiles[0xB8] = graphics.get_new_tile(tiles[0x10]);
            tiles[0xB9] = [0] * 64
            self.append(SpriteSheet(id, tiles))

    def create_full_spritesheet_images(self, filepath: str):
        for id in range(0, len(self)):
            poses = graphics.get_poses(self.json_poses["full"], self.poses)
            filename = os.path.join(filepath, f"sprite_{id}")
            graphics.create_sheets(filename, self[id].tiles, self.palettes, poses)

    def create_spritesheet_images(self, sprite_dir: str, json_dir: str):
        website_json = []
        for entry in self.meta:
            poses = graphics.get_poses(self.json_poses[entry["template"]], self.poses)
            tiles = self[entry["sheet_id"]].tiles
            pals = entry["palettes"]
            filename = entry["name"].replace(" ", "_")
            filename = filename.replace("'", "_").lower()
            directory = os.path.join(sprite_dir, entry["category"])
            filepath = os.path.join(directory, filename)
            if len(pals) == 1:
                graphics.create_sheet(filepath, tiles, self.palettes[pals[0]], poses)
                website_json.append({
                    "filename": f"{filename}.png",
                    "name": entry["name"],
                    "category": entry["category"]                
                })
            elif len(pals) > 1:
                new_pals = [self.palettes[i] for i in pals]
                graphics.create_sheets(filepath, tiles, new_pals, poses)
                for i in range(len(pals)):
                    website_json.append({
                        "filename": f"{filename}_{i + 1}.png",
                        "name": entry["name"],
                        "category": entry["category"]                
                    })
        helpers.write_json(website_json, os.path.join(json_dir, "sprites.json"))

    def write_gallery(self, website_dir: str, templates_dir: str):
        levels = ""

        img_name = "sprites.png"
        url = "sprites.html"
        title = "Sprite Gallery"
        meta_description = "Sprite Gallery{0}".format(self.cons.COMMON_DESC)
        img_url = f"{self.cons.MEDIA_DIR}/{img_name}"
        img_path = os.path.join(website_dir, self.cons.MEDIA_DIR, img_name)
        meta_img_alt = "Aurora Spritesheet"
        meta = helpers.get_meta_data(self.cons.ITEM_KEYWORDS, meta_description, title, url, img_url, img_path, meta_img_alt)

        data = {
            "levels": levels,
            "meta": meta,
            "is_sprites": True
        }
            
        helpers.write_html(data, "sprites.html", website_dir, templates_dir, "sprites")
