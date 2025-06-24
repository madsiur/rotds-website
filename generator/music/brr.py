import os
import common.helpers as helpers
from jinja2 import Environment, FileSystemLoader

def write_page(website_dir, templates_dir, cons=helpers.get_constants()):
    env = Environment(loader=FileSystemLoader(templates_dir))
    template = env.get_template("brr.html")

    levels = ""
    title = "BRR samples"

    url = "brr.html"
    img_name = "music.png"
    meta_description = f"{title} page {cons.COMMON_DESC}"
    img_url = f"{cons.MEDIA_DIR}/{img_name}"
    img_path = os.path.join(website_dir, cons.MEDIA_DIR, img_name)
    meta_img_alt = "Music Player"
    meta = helpers.get_meta_data(cons.MUSIC_KEYWORDS, meta_description, title, url, img_url, img_path, meta_img_alt)

    data = {
        "levels": levels,
        "meta": meta,
        "title": title,
        "is_brr": True
    }

    file_path = os.path.join(website_dir, url)
    output = template.render(data)
    output = helpers.prettify_html(output)
    helpers.write_file(output, file_path)
    print("Wrote {0}".format(file_path))

def generate_json(brrs, json_dir):
    entries = []
    for k, v in brrs.items():
        entry = {
            "id": k,
            "name": v[0],
            "gameShort": v[1],
            "gameLong": v[2],
            "loop": v[3],
            "env": v[4],
            "pitch": v[5],
            "size": v[6],
            "occ": v[7],
            "filename": v[8],
        }
        entries.append(entry)

    filename = os.path.join(json_dir, "brrs.json")
    helpers.write_json(entries, filename)