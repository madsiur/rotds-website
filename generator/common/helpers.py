import os
import shutil
import sys
import json
import bs4

from romdata.battle_commands import BattleCommandList
from romdata.items import ItemList
from .constants import Constants
from PIL import Image
from jinja2 import Environment, FileSystemLoader

def get_constants():
    return Constants()

def get_meta_data(keywords, meta_description, title, url, img_url, img_path, meta_img_alt, cons=get_constants()):
    meta_title = cons.COMMON_TITLE + title
    meta_url = f"{cons.WEBSITE_URL}{url}"
    meta_img_url = f"{cons.WEBSITE_URL}{img_url}"
    meta_img_width, meta_img_height = get_img_size(img_path)

    meta = {
        "keywords": keywords,
        "description": meta_description,
        "title": meta_title,
        "url": meta_url,
        "img_url": meta_img_url,
        "img_width": meta_img_width,
        "img_height": meta_img_height,
        "img_alt": meta_img_alt
    }

    return meta

def write_html(data: dict, url: str, website_dir: str, templates_dir: str, template_name: str):
    env = Environment(loader=FileSystemLoader(templates_dir))
    template = env.get_template(f"{template_name}.html")
    file_path = os.path.join(website_dir, url)
    output = template.render(data)
    output = prettify_html(output)
    write_file(output, file_path)
    print("Wrote {0}".format(file_path))

def get_bin_data(rom, id, addr, length):
    start_offset = addr + (id * length)
    return rom[start_offset:start_offset+length]

def get_ptr(rom, base_ptr_addr, id, ptr_length):
    ptr_addr = base_ptr_addr + (id * ptr_length)
    if ptr_length == 2:
        return get_short(rom, ptr_addr)

def create_string(rom, id, addr, length, table):
    bin_string = get_bin_data(rom, id, addr, length)
    string = create_text(bin_string, table).strip()
    return string   

def create_text(data: bytearray, table: dict):
    text = ""
    for i in range(len(data)):
        val = table.get(data[i])
        if val is None:
            print(f"key error: {data[i]:02X} not found in table.")
            sys.exit()
        text += val
    return text

def get_string_flags(list, b, length=None):
    flags = []
    if not b:
        return flags
    if length == None:
        for i in range(8):
            if b & (1 << i):
                flags.append(list[i])
    else:
        for i in range(length):
            if b & (1 << i):
                flags.append(list[i])
    return flags

def get_flags_string_from_byte(list, b, length=None):
    flags = get_string_flags(list, b, length)
    return get_flags_string(flags)

def get_flags_string(flags):
    flags = [f for f in flags if (not f.startswith("Not used")) or f == ""]
    return ", ".join(sorted(flags)) if len(flags) > 0 else "None"

def get_short(data, offset):
    short = data[offset + 1] * 0x100
    short = short + data[offset]
    return short

def write_json(data, file_path):
    json_object = json.dumps(data, separators=(', ', ': '), indent=4)
    write_file(json_object, file_path)
    print("Wrote {0}".format(file_path))

def write_file(data, filename, encoding="utf-8"):
    try:
        with open(filename, "w", encoding=encoding) as f:
            f.write(data)
    except IOError as e:
        print(f"An IOError occurred while writing {filename}: {e}")
        sys.exit()

def write_bin_file(data, filename):
    try:
        with open(filename, "wb") as f:
            f.write(data)
    except IOError as e:
        print(f"An IOError occurred while writing {filename}: {e}")
        sys.exit()

def read_file(filename):
    try:
        with open(filename, "r") as f:
            rows = f.readlines()
            for i in range(len(rows)):
                rows[i] = rows[i].strip('\n')
            return rows
    except IOError as e:
        print(f"An IOError occurred while reading {filename}: {e}")
        sys.exit()

def read_json(filename):
    try:
        with open(filename, "r", encoding='utf-8') as f:
            json_content = json.load(f)
            return json_content
    except IOError as e:
        print(f"An IOError occurred while reading {filename}: {e}")
        sys.exit()
        
def read_bin_file(filename):
    try:
        with open(filename, 'rb') as f:
            return f.read()
    except IOError as e:
        print(f"An IOError occurred while reading {filename}: {e}")
        sys.exit()

def remove_directory(directory):
    if os.path.exists(directory):
        shutil.rmtree(directory)

def remove_header(rom):
    if len(rom) % 0x10000 == 0x200:
        return rom[0x200:]
    return rom

def prettify_html(html, spaces=4):
    formatter = bs4.formatter.HTMLFormatter(indent=spaces)
    bs = bs4.BeautifulSoup(html, 'html.parser')
    return bs.prettify(formatter=formatter)

def get_img_size(filename):
    try:
        with Image.open(filename) as img:
            return img.size
    except IOError as e:
        print(f"An IOError occurred while opening {filename}: {e}")
        sys.exit()
