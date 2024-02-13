import sys
import os
from bs4 import BeautifulSoup as bs
from bs4 import formatter as fm

CHARACTERS = [
    "aurora",
    "cloud",
    "avalon",
    "oboro",
    "serin",
    "ronan",
    "tifa",
    "fusoya",
    "eiko",
    "otis",
    "mog",
    "arc",
    "golbez",
    "heartless",
    "astral",
    "reaper",
    "leo",
    "biggs",
    "wedge",
    "hector",
    "marcus",
    "warren",
    "gus",
    "eldrin",
    "neko",
    "zeke",
    "ace"
]

def generate_html(char_dir):
    for i in range(len(CHARACTERS)):
        fn = f"characters/{CHARACTERS[i].lower()}.txt"
        try:
            with open(fn, 'r') as f:
                fr = f.readlines()
        except IOError:
            print("Error reading file {}".format(fn))
            sys.exit()
        
        char_info = {}
        for j in range(len(fr)):
            data = fr[j].strip('\n').split(":")
            data[0] = data[0].strip().lower().replace(" ", "_")
            data[1] = data[1].strip().replace("#", ":")
            char_info[data[0]] = data[1]

        # head
        html = """
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>RotDS - {0}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
            <link href="../css/style.css" rel="stylesheet">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            </head>""".format(CHARACTERS[i].capitalize())
        
        html += """
            <body class="page-color">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark character-container">
            <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="https://www.ff6hacking.com/forums/forum-54.html">Return of the Dark Sorcerer</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link" href="../ost.html">OST A</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="../ostb.html">OST B</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="../optional.html">Optional Songs</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="../sfx.html">SFX</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="../brr.html">BRR Samples</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="../monsters.html">Monsters</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="../characters.html">Characters</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="../npcs.html">NPCs</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="../guide.html">Strategy Guide</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="../credits.html">Credits</a>
            </li>
            </ul>
            </div>
            </div>
            </nav>
            <div class="d-flex justify-content-center character-container">
            <div class="d-flex flex-column border border-dark border-2 character-div px-3 pt-0 pb-3 my-2 mx-2">
            <div class="d-flex flex-column mt-3">
            <h3 class="align-self-center">{0}</h3>
            </div>
            <div class="d-flex flex-column">            
            <div class="container">
            <div class="row justify-content-center">
            <div class="col-3 col-sm-2 col-md-1 col-lg-1 col-xl-1 col-xxl-1 pt-1 pb-0 ps-1 pe-0 character-desc-row-special border border-end-0 border-dark border-2">
            <img src="portraits/{1}.png" class="img-fluid" alt="{1}">
            </div>
            <div class="col-9 col-sm-10 col-md-11 col-lg-11 col-xl-7 col-xxl-7 py-1 px-1 character-desc-row-special border border-start-0 border-dark border-2">
            <i>{2}</i>
            </div>
            </div>""".format(char_info["name"], CHARACTERS[i], char_info["description"])
        
        html += """
            <div class="row justify-content-center">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-a border-start border-bottom border-dark border-2">Might</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-a border-end border-bottom border-dark border-2">{0}</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-b border-bottom border-dark border-2">Speed</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-b border-end border-bottom border-dark border-2">{1}</div>
            </div>""".format(char_info["might"], char_info["speed"])
        
        html += """
            <div class="row justify-content-center">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-b border-start border-bottom border-dark border-2">Stamina</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-b border-end border-bottom border-dark border-2">{0}</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-a border-bottom border-dark border-2">Run Success</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-a border-end border-bottom border-dark border-2">{1}</div>
            </div>""".format(char_info["stamina"], char_info["run_success"])
        
        html += """
            <div class="row justify-content-center">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-a border-start border-bottom border-dark border-2">Battle Power</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-a border-end border-bottom border-dark border-2">{0}</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-b border-bottom border-dark border-2">Magic Power</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-b border-end border-bottom border-dark border-2">{1}</div>
            </div>""".format(char_info["battle_power"], char_info["magic_power"])
        
        html += """
            <div class="row justify-content-center">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-b border-start border-bottom border-dark border-2">Defense</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-b border-end border-bottom border-dark border-2">{0}</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-a border-bottom border-dark border-2">Magic defense</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-a border-end border-bottom border-dark border-2">{1}</div>
            </div>""".format(char_info["defense"], char_info["magic_defense"])
        
        html += """
            <div class="row justify-content-center">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-a border-start border-bottom border-dark border-2">Evade</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-a border-end border-bottom border-dark border-2">{0}</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-b border-bottom border-dark border-2">MBlock</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-b border-end border-bottom border-dark border-2">{1}</div>
            </div>""".format(char_info["evade"], char_info["mblock"])
        
        html += """
            <div class="row justify-content-center">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-b border-start border-bottom border-dark border-2">Age</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-b border-end border-bottom border-dark border-2">{0}</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-a border-bottom border-dark border-2">Height</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-a border-end border-bottom border-dark border-2">{1}</div>
            </div>""".format(char_info["age"], char_info["height"])
        
        html += """
            <div class="row justify-content-center">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-a border-start border-bottom border-dark border-2">Weight</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-a border-end border-bottom border-dark border-2">{0}</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-b border-bottom border-dark border-2">Zodiac</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-b border-end border-bottom border-dark border-2">{1}</div>
            </div>""".format(char_info["weight"], char_info["zodiac"])
        
        html += """
            <div class="row justify-content-center">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-b border-start border-bottom border-dark border-2">Blood Type</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-b border-end border-bottom border-dark border-2">{0}</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-a border-bottom border-dark border-2">Hometown</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-a border-end border-bottom border-dark border-2">{1}</div>
            </div>""".format(char_info["blood_type"], char_info["hometown"])
        
        html += """
            <div class="row justify-content-center">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-a border-start border-bottom border-dark border-2">Likes</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-a border-end border-bottom border-dark border-2">{0}</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-b border-bottom border-dark border-2">Dislikes</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-b border-end border-bottom border-dark border-2">{1}</div>
            </div>""".format(char_info["likes"], char_info["dislikes"])
        
        html += """
            <div class="row justify-content-center">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-b border-start border-bottom border-dark border-2">Treasure</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-b border-end border-bottom border-dark border-2">{0}</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-a border-bottom border-dark border-2">Weapons</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-a border-end border-bottom border-dark border-2">{1}</div>
            </div>""".format(char_info["treasure"], char_info["weapons"])
        
        html += """
            <div class="row justify-content-center">
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-a border-start border-bottom border-dark border-2">Class</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-a border-end border-bottom border-dark border-2">{0}</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-2 pe-1 character-desc-row-b border-bottom border-dark border-2">Desperation Attack</div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 py-1 ps-1 pe-2 text-end character-desc-row-b border-end border-bottom border-dark border-2">{1}</div>
            </div>""".format(char_info["class"], char_info["desperation_attack"])
        
        ability_name = char_info["special_ability"].split(".")[0].strip()
        ability_desc = char_info["special_ability"][len(ability_name)+1:len(char_info["special_ability"])]
        if len(char_info["special_ability"].split(".")) > 1:
            html += """
                <div class="row justify-content-center">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8 py-1 px-2 character-desc-row-special border-start border-end border-bottom border-dark border-2">Special Ability: {0}. {1}</div>
                </div>
                </div>
                </div>""".format(ability_name, ability_desc.strip())
        else:
            html += """
                <div class="row justify-content-center">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8 py-1 px-2 character-desc-row-special border-start border-end border-bottom border-dark border-2">Special Ability: {0}</div>
                </div>
                </div>
                </div>""".format(ability_name)

        if i > 0 and i < len(CHARACTERS) - 1:
            html += """
                <div class="d-flex justify-content-between">
                <a href="{0}.html" class="btn btn-dark" role="button">&#129052 {1}</a>
                <a href="{2}.html" class="btn btn-dark" role="button">{3} &#129054</a>
                </div>""".format(CHARACTERS[i - 1], CHARACTERS[i - 1].capitalize(), CHARACTERS[i + 1], CHARACTERS[i + 1].capitalize())
        elif i < len(CHARACTERS) - 1:
            html += """
                <div class="d-flex justify-content-end">
                <a href="{0}.html" class="btn btn-dark" role="button">{1} &#129054</a>
                </div>""".format(CHARACTERS[i + 1], CHARACTERS[i + 1].capitalize())
        else:
            html += """
                <div class="d-flex justify-content-start">
                <a href="{0}.html" class="btn btn-dark" role="button">&#129052 {1}</a>
                </div>""".format(CHARACTERS[i - 1], CHARACTERS[i - 1].capitalize()) 
            
        html += """
            </div>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js" integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
            </body>
            </html>"""
        
        formatter = fm.HTMLFormatter(indent=4)
        html = bs(html, "html.parser").prettify(formatter=formatter)
        newfn = os.path.join(char_dir, "{0}.html".format(CHARACTERS[i]))

        try:
            with open(newfn, 'w', encoding="utf-8") as f:
                f.write(html)
        except IOError:
            print("Error writing file {}".format(newfn))
            sys.exit()
        print("Wrote {}".format(newfn))

    html = ""
    for i in range(len(CHARACTERS)):
        html += """
            <div class="d-flex flex-column align-items-center mb-2 npc-img-div">
            <div class="mt-auto">
            <a href="characters/{0}.html"><img src="characters/portraits/{0}.png"></img></a>
            </div>
            <div>{1}</div>
            </div>""".format(CHARACTERS[i], CHARACTERS[i].capitalize())

    html = bs(html, "html.parser").prettify(formatter=formatter) 
    try:
        with open("chars.html", 'w') as f:
            f.write(html)
    except IOError:
        print("Error writing file {}".format("chars.html"))
        sys.exit()
    print("Wrote {}".format("chars.html"))




        
