import os
import common.helpers as helpers

def generate_json(char_dir, json_dir):

    path = os.path.join(char_dir, "characters.txt")
    characters = helpers.read_file(path)
    path = os.path.join(os.path.dirname(json_dir), "characters.json")
    helpers.write_json(characters, path)

    for i in range(len(characters)):
        filename = f"{characters[i]}.txt"
        path = os.path.join(char_dir, filename)
        rows = helpers.read_file(path)
        
        char_info = {}        
        for j in range(len(rows)):
            data = rows[j].strip('\n').split(":")
            data[0] = data[0].strip().lower().replace(" ", "_")
            data[1] = data[1].strip().replace("#", ":")
            char_info[data[0]] = data[1]

        char_info["id"] = characters[i]
        char_info["next_id"] = characters[i + 1] if i < len(characters) - 1 else -1
        char_info["prev_id"] = characters[i - 1] if i > 0 else -1
        ability_name = char_info["special_ability"].split(".")[0].strip()
        char_info["ability_desc"] = char_info["special_ability"][len(ability_name)+1:len(char_info["special_ability"])]
        char_info["ability_name"] = ability_name
        char_info.pop("special_ability")
        
        filename = f"{characters[i]}.json"
        path = os.path.join(json_dir, filename)
        helpers.write_json(char_info, path)





        
