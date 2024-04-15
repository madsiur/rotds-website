import os
import shutil
import sys
import json
import bs4
from .constants import Constants
from PIL import Image

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

def create_name_list(rom, base_offset, start_id, length, num, table):
    array = []
    for i in range(num):
        start_offset = base_offset + (i * length)
        bin_text = rom[start_offset:start_offset+length]
        str_text = ""

        for j in range(len(bin_text)):
            val = table.get(bin_text[j])
            if val is None:
                print(f"key error: {bin_text[j]:02X} not found in table.")
                sys.exit()
            str_text += val
        
        entry = {
            "id": start_id+i,
            "name": str_text 
        }
        array.append(entry)

    return array

def add_text_attr(rom, base_offset, length, json_data, table, key):
    for i in range(len(json_data)):
        start_offset = base_offset + (i * length)
        bin_text = rom[start_offset:start_offset+length]
        str_text = ""

        for j in range(len(bin_text)):
            val = table.get(bin_text[j])
            if val is None:
                print(f"key error: {bin_text[j]:02X} not found in table.")
                sys.exit()
            str_text += val
        json_data[i] = {**json_data[i], key: str_text}

    return json_data

def create_double_dict_list(rom, base_offset, start_id, count, length, key_list, value_list, value_key_list):
    if len(key_list) != length:
        print(f"error: key_list does not have a length of {length}.")
        sys.exit()

    entry = []
    for start_id in range(start_id, start_id+count):
        keys_values = {"id":start_id}
        bin_values = get_data(rom, base_offset, start_id, length)
        for j in range(len(key_list)):
            values = {}
            for k in range(len(value_key_list)):
                values = {**values, value_key_list[k]:value_list[bin_values[j]][value_key_list[k]]}
            keys_values = {**keys_values, key_list[j]:values}
        entry.append(keys_values)

    return entry

def create_double_dict(rom, base_offset, id, length, key_list, value_list, value_key_list):
    if len(key_list) != length:
        print(f"error: key_list does not have a length of {length}.")
        sys.exit()

    entry = {}
    bin_values = get_data(rom, base_offset, id, length)
    for i in range(len(key_list)):
        values = {}
        for j in range(len(value_key_list)):
            values = {**values, value_key_list[j]:value_list[bin_values[i]][value_key_list[j]]}
        entry = {**entry, key_list[i]:values}

    return entry

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

def get_short(data, offset):
    short = data[offset + 1] * 0x100
    short = short + data[offset]
    return short

def get_data(rom, base_offset, index, length):
    start_offset = base_offset + (index * length)
    return rom[start_offset:start_offset+length]

def write_json(data, filename):
    #json_object = json.dumps(data, separators=(',', ':'))
    json_object = json.dumps(data, separators=(', ', ': '), indent=4)
    write_file(json_object, filename)

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
