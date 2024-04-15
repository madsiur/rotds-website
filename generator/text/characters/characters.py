import os
import common.helpers as helpers
from jinja2 import Environment, FileSystemLoader

def write_gallery(char_dir, website_dir, templates_dir, cons=helpers.get_constants()):
    env = Environment(loader=FileSystemLoader(templates_dir))
    template = env.get_template("characters.html")

    path = os.path.join(char_dir, "characters.txt")
    characters = helpers.read_file(path)
    elements = []
    levels = ""

    for character in characters:
        name = character.capitalize()
        element = {
            "id": character,
            "name": name
        }
        elements.append(element)

    img_name = "aurora.png"
    url = "characters.html"
    title = "Characters Gallery"
    meta_description = "Playable characters gallery {0}".format(cons.COMMON_DESC)
    img_url = f"{cons.MEDIA_DIR}/{img_name}"
    img_path = os.path.join(website_dir, cons.MEDIA_DIR, img_name)
    meta_img_alt = img_name.replace(".png", "").capitalize()
    meta = helpers.get_meta_data(cons.CHARACTER_KEYWORDS, meta_description, title, url, img_url, img_path, meta_img_alt)

    data = {
        "elements": elements,
        "levels": levels,
        "meta": meta
    }

    file_path = os.path.join(website_dir, url)
    output = template.render(data)
    output = helpers.prettify_html(output)
    helpers.write_file(output, file_path)
    print("Wrote {0}".format(file_path))

    return characters

def write_details(characters, char_dir, website_dir, templates_dir, cons=helpers.get_constants()):
    env = Environment(loader=FileSystemLoader(templates_dir))
    template = env.get_template("characterdetails.html")

    levels = "../"
    for i in range(len(characters)):
        filename = f"{characters[i]}.txt"
        file_path = os.path.join(char_dir, filename)
        rows = helpers.read_file(file_path)
        
        info = {}        
        for j in range(len(rows)):
            data = rows[j].strip('\n').split(":")
            data[0] = data[0].strip().lower().replace(" ", "_")
            data[1] = data[1].strip().replace("#", ":")
            info[data[0]] = data[1]

        info["id"] = characters[i]
        info["next_id"] = characters[i + 1] if i < len(characters) - 1 else -1
        info["prev_id"] = characters[i - 1] if i > 0 else -1
        info["next_name"] = characters[i + 1].capitalize() if i < len(characters) - 1 else ""
        info["prev_name"] = characters[i - 1].capitalize() if i > 0 else ""
        ability_name = info["special_ability"].split(".")[0].strip()
        info["ability_desc"] = info["special_ability"][len(ability_name)+1:len(info["special_ability"])]
        info["ability_name"] = ability_name
        info.pop("special_ability")

        character_name = info['id'].capitalize()
        img_name = f"{info['id']}.png"
        url = f"{cons.CHAR_DIR}/{info['id']}.html"
        title = f"Characters - {character_name}"
        meta_description = f"{info['name']} character statistics and information."
        img_url = f"{cons.CHAR_DIR}/portraits/{img_name}"
        img_path = os.path.join(website_dir, cons.CHAR_DIR, "portraits", img_name)
        meta = helpers.get_meta_data(cons.CHARACTER_KEYWORDS, meta_description, title, url, img_url, img_path, character_name)

        if info["prev_id"] == -1:
            class_btns_prev_next = "justify-content-end"
        elif info["next_id"] == -1:
            class_btns_prev_next = "justify-content-start"
        else:
            class_btns_prev_next = "justify-content-between"

        data = {
            "info": info,
            "levels": levels,
            "class_btns_prev_next": class_btns_prev_next,
            "meta": meta
        }
        
        file_path = os.path.join(website_dir, cons.CHAR_DIR, f"{info['id']}.html")
        output = template.render(data)
        output = helpers.prettify_html(output)
        helpers.write_file(output, file_path)
        print("Wrote {0}".format(file_path))






        
