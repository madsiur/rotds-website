import os
import sys
import common.helpers as helpers
from jinja2 import Environment, FileSystemLoader

def write_gallery(guide_dir: str, website_dir: str, templates_dir: str, cons=helpers.get_constants()):
    env = Environment(loader=FileSystemLoader(templates_dir))
    template = env.get_template("guide.html")

    path = os.path.join(guide_dir, "guide.txt")
    titles = helpers.read_file(path)
    guide_parts = []
    levels = ""

    for i in range(1, len(titles)+1):
        toc = 1 if i < 20 else 2
        title = titles[i-1].replace("\n", "")

        data = {
            "id": i,
            "toc": toc,
            "title": title
        }
        guide_parts.append(data)

    img_name = "wob.png"
    url = "guide.html"
    title = "Guide Index"
    meta_description = "World of Balance and World of Ruins guide {0}".format(cons.COMMON_DESC)
    img_url = f"{cons.MEDIA_DIR}/{img_name}"
    img_path = os.path.join(website_dir, cons.MEDIA_DIR, img_name)
    meta_img_alt = "Wolrd of Balance Map"
    meta = helpers.get_meta_data(cons.GUIDE_KEYWORDS, meta_description, title, url, img_url, img_path, meta_img_alt)

    data = {
        "guide_parts": guide_parts,
        "levels": levels,
        "meta": meta
    }

    file_path = os.path.join(website_dir, "guide.html")
    output = template.render(data)
    output = helpers.prettify_html(output)
    helpers.write_file(output, file_path)
    print("Wrote {0}".format(file_path))

    return guide_parts

def validate_guide_parts(template_dir: str, cons=helpers.get_constants()):
    templates = os.listdir(template_dir)
    for template in templates:
        if "guide_" in template:
            file_path = os.path.join(template_dir, template)
            html = helpers.read_html_file(file_path)
            is_valid = helpers.is_valid_html(html)
            if not is_valid:
                print(f"Guide template file {template} is not valid HTML code.")
                sys.exit()
    print(f"Guide template files are validated.")


def write_pages(guide_parts: list, website_dir: str, templates_dir: str, cons=helpers.get_constants()):
    env = Environment(loader=FileSystemLoader(templates_dir))
    template = env.get_template("guidepage.html")
    
    levels = "../"
    for i in range(0, len(guide_parts)):
        template_name = f"guide/guide_{i+1}.html"
        id = guide_parts[i]["id"]
        title = f"Part {id}: {guide_parts[i]['title']}"
        prev_id = id - 1 if i > 0 else -1
        next_id = id + 1 if i < len(guide_parts) - 1 else -1

        if prev_id == -1:
            class_btns_prev_next = "justify-content-end"
        elif next_id == -1:
            class_btns_prev_next = "justify-content-start"
        else:
            class_btns_prev_next = "justify-content-between"

        file_name = f"part-{i+1}.html"
        img_dir = os.path.join(website_dir, cons.GUIDE_MEDIA_DIR, str(i+1))
        img_names = os.listdir(img_dir)
        img_name = img_names[0].replace(".png", "")
        url = f"{cons.GUIDE_DIR}/{file_name}"
        meta_title = f"Guide Part {id}"
        meta_description = f"Return of the Dark Sorcerer strategy guide. {title}."
        img_url = f"{cons.GUIDE_MEDIA_DIR}/{id}/{img_name}.png"
        img_path = os.path.join(website_dir, cons.GUIDE_MEDIA_DIR, str(id), f"{img_name}.png")
        meta_img_alt = f"Guide image {img_name}"
        meta = helpers.get_meta_data(cons.GUIDE_KEYWORDS, meta_description, meta_title, url, img_url, img_path, meta_img_alt)


        data = {
            "title": title,
            "levels": levels,
            "template_name": template_name,
            "prev_id": prev_id,
            "next_id": next_id,
            "class_btns_prev_next": class_btns_prev_next,
            "meta": meta
        }

        file_path = os.path.join(website_dir, cons.GUIDE_DIR, file_name)
        output = template.render(data)
        output = helpers.prettify_html(output)
        helpers.write_file(output, file_path)
        print("Wrote {0}".format(file_path))
