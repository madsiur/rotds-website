import common.helpers as helpers
from .tables import tbl_menu_a

def create_list(rom, cons=helpers.get_constants()):
    commands = helpers.create_name_list(rom, cons.CMD_NAME_ADDR,
                                0, cons.CMD_NAME_LENGTH,
                                cons.CMD_NUM, tbl_menu_a)
    
    return commands