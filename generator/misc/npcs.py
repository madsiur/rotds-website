import os
import common.helpers as helpers
from jinja2 import Environment, FileSystemLoader

def write_page(npcs_dir, website_dir, templates_dir, cons=helpers.get_constants()):
    env = Environment(loader=FileSystemLoader(templates_dir))
    template = env.get_template("npcs.html")
    
    files = os.listdir(npcs_dir)
    files = sorted(files)
    levels = ""
    npcs = []
    
    for i in range(0, len(files)):
        npc = {
            "name": files[i].replace("_", " ").capitalize(),
            "img_name": files[i]
        }
        npcs.append(npc)
        
    img_name = "chocobo.png"
    url = "npcs.html"
    title = "NPCs Gallery"
    meta_description = "Non-playable characters gallery {0}".format(cons.COMMON_DESC)
    img_url = f"{cons.MEDIA_DIR}/{img_name}"
    img_path = os.path.join(website_dir, cons.MEDIA_DIR, img_name)
    meta_img_alt = "Chocobo"
    meta = helpers.get_meta_data(cons.NPCS_KEYWORDS, meta_description, title, url, img_url, img_path, meta_img_alt)
        
    data = {
        "levels": levels,
        "npcs": npcs,
        "meta": meta
    }
    
    file_path = os.path.join(website_dir, url)
    output = template.render(data)
    output = helpers.prettify_html(output)
    helpers.write_file(output, file_path)
    print("Wrote {0}".format(file_path))