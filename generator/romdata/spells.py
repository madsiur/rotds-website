import re
import common.helpers as helpers
from common.constants import Constants
from .tables import tbl_menu_a


class Spell:
    def __init__(self, id: int, name: str):
        self.id = id
        self.name = name
        self.clean_name = re.sub(r'\[.*?\]', '', name)

class SpellList(list):
    def __init__(self):
        super().__init__()
        self.cons = Constants()

    def create_list(self, rom: bytearray):
        start, end = 0, self.cons.SPELL_NUM
        for id in range(start, end):
            #start_offset = self.cons.SPELL_NAME_ADDR + (id * self.cons.SPELL_NAME_LENGTH)
            #bin_name = rom[start_offset:start_offset+self.cons.SPELL_NAME_LENGTH]
            #name = helpers.create_text(bin_name, tbl_menu_a).strip()
            name = helpers.create_string(rom, id, self.cons.SPELL_NAME_ADDR, self.cons.SPELL_NAME_LENGTH, tbl_menu_a)    
            self.append(Spell(id, name)) 

        start, end = self.cons.SPELL_NUM, end + self.cons.ESPER_ATK_NUM
        for id in range(start, end):
            #start_offset = self.cons.ESPER_ATK_NAME_ADDR + (id * self.cons.ESPER_ATK_NAME_LENGTH)
            #bin_name = rom[start_offset:start_offset+self.cons.ESPER_ATK_NAME_LENGTH]
            #name = helpers.create_text(bin_name, tbl_menu_a).strip()
            name = helpers.create_string(rom, id - start, self.cons.ESPER_ATK_NAME_ADDR, self.cons.ESPER_ATK_NAME_LENGTH, tbl_menu_a)     
            self.append(Spell(id, name))

        start, end = end, end + self.cons.ATK_NUM
        for id in range(start, end):
            #start_offset = self.cons.ATK_NAME_ADDR + (id * self.cons.ATK_NAME_LENGTH)
            #bin_name = rom[start_offset:start_offset+self.cons.ATK_NAME_LENGTH]
            #name = helpers.create_text(bin_name, tbl_menu_a).strip()
            name = helpers.create_string(rom, id - start, self.cons.ATK_NAME_ADDR, self.cons.ATK_NAME_LENGTH, tbl_menu_a)     
            self.append(Spell(id, name))

        self[255].name = "Nothing"
        self[255].clean_name = "Nothing"

    def get_dict(self, id):
        data = {}
        data["id"] = id
        data["name"] = self[id].clean_name
        return data