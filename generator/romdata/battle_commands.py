import common.helpers as helpers
from common.constants import Constants
from .tables import tbl_menu_a

class BattleCommand:
    def __init__(self, id: int, name: str):
        self.id = id
        self.name = name
        self.clean_name = name.capitalize()

class BattleCommandList(list):
    def __init__(self):
        super().__init__()
        self.cons = Constants()
    
    def create_list(self, rom):
        for id in range(self.cons.CMD_NUM):
            name = helpers.create_string(rom, id, self.cons.CMD_NAME_ADDR, self.cons.CMD_NAME_LENGTH, tbl_menu_a)
            self.append(BattleCommand(id, name))