import sys, json
from menu_tbl_a import *

MONS_NAME_OFFSET = 0x0FC050
MONS_NAME_LENGTH = 10
MONS_NUMBERS = 384

ESPER_NAME_OFFSET = 0x3162E6
ESPER_NAME_LENGTH = 12
ESPER_NUMBERS = 27

def create_monster_json(rom):
    monsters = []
    for i in range(MONS_NUMBERS):
        start_offset = MONS_NAME_OFFSET + (i * MONS_NAME_LENGTH)
        bin_name = rom[start_offset:start_offset+MONS_NAME_LENGTH]
        str_name = ""

        for j in range(len(bin_name)):
            val = menu_tbl_a.get(bin_name[j])
            if val is None:
                print(f"key error: {bin_name[j]:02X} not found")
                sys.exit()
            str_name += val
        entry = {
            "id": i,
            "name": str_name 
        }
        monsters.append(entry)

    for i in range(MONS_NUMBERS, MONS_NUMBERS + ESPER_NUMBERS):
        start_offset = ESPER_NAME_OFFSET + ((i - MONS_NUMBERS) * ESPER_NAME_LENGTH)
        bin_name = rom[start_offset:start_offset+ESPER_NAME_LENGTH]
        str_name = ""

        for j in range(len(bin_name)):
            val = menu_tbl_a.get(bin_name[j])
            if val is None:
                print(f"key error: {bin_name[j]:02X} not found")
                sys.exit()
            str_name += val
        entry = {
            "id": i,
            "name": str_name 
        }
        monsters.append(entry)  
    json_object = json.dumps(monsters, indent=4)
    return json_object
        

            


