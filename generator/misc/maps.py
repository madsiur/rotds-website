import os
import common.helpers as helpers
from jinja2 import Environment, FileSystemLoader

def write_page(website_dir, templates_dir, cons=helpers.get_constants()):
    env = Environment(loader=FileSystemLoader(templates_dir))
    template = env.get_template("maps.html")

    levels = ""
    img_name = "wob.png"
    url = "maps.html"
    title = "World Maps"
    meta_description = "World maps of Return of the Dark Sorcerer".format(cons.COMMON_DESC)
    img_url = f"{cons.MEDIA_DIR}/{img_name}"
    img_path = os.path.join(website_dir, cons.MEDIA_DIR, img_name)
    meta_img_alt = "World of Balance map"
    meta = helpers.get_meta_data(cons.MAPS_KEYWORDS, meta_description, title, url, img_url, img_path, meta_img_alt)
        
    data = {
        "levels": levels,
        "meta": meta
    }
    
    file_path = os.path.join(website_dir, url)
    output = template.render(data)
    output = helpers.prettify_html(output)
    helpers.write_file(output, file_path)
    print("Wrote {0}".format(file_path))