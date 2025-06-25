import os
import common.helpers as helpers
from jinja2 import Environment, FileSystemLoader

def write_page(misc_dir: str, website_dir: str, templates_dir: str, cons=helpers.get_constants()):
    env = Environment(loader=FileSystemLoader(templates_dir))
    template = env.get_template("archive.html")

    levels=""
    path = os.path.join(misc_dir, "archive.json")
    elements = helpers.read_json(path)
    sorted_files = sorted(elements, key=lambda x: x["id"])

    img_name = "title_screen.png"
    url = "archive.html"
    title = "Archive"
    meta_description = "Return of the Dark Sorcerer previous versions archive"
    img_url = f"{cons.MEDIA_DIR}/{img_name}"
    img_path = os.path.join(website_dir, cons.MEDIA_DIR, img_name)
    meta_img_alt = "Title screen"
    meta = helpers.get_meta_data(cons.COMMON_KEYWORDS, meta_description, title, url, img_url, img_path, meta_img_alt)

    data = {
        "files": sorted_files,
        "levels": levels,
        "meta": meta
    }

    file_path = os.path.join(website_dir, "archive.html")
    output = template.render(data)
    output = helpers.prettify_html(output)
    helpers.write_file(output, file_path)
    print("Wrote {0}".format(file_path))