import os
import common.helpers as helpers
from jinja2 import Environment, FileSystemLoader

def write_page(website_dir, templates_dir, cons=helpers.get_constants()):
    env = Environment(loader=FileSystemLoader(templates_dir))
    template = env.get_template("soundtrack.html")

    levels = ""
    title = "Soundtrack"

    url = f"soundtrack.html"
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
        "is_ost": True
    }

    file_path = os.path.join(website_dir, url)
    output = template.render(data)
    output = helpers.prettify_html(output)
    helpers.write_file(output, file_path)
    print("Wrote {0}".format(file_path))

def generate_json(roms, json_dir):
    dirs = []
    for k1, v1 in roms.items():
        entries = []
        dirs.append(k1)
        for k2, v2 in v1.items():
            entry = {
                "id": k2,
                "filename": v2[0],
                "title": v2[1],
                "game": v2[2],
                "composer": v2[3],
                "arranger": v2[4],
                "transcription": v2[5],
                "duration": v2[6],
            }
            entries.append(entry)

        filename = os.path.join(json_dir, f"{k1}.json")
        helpers.write_json(entries, filename)

    filename = os.path.join(json_dir, "common.json")
    helpers.write_json(dirs, filename)