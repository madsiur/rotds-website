import common.helpers as helpers
from .tables import tbl_menu_a

def create_list(rom, cons=helpers.get_constants()):
    spells = helpers.create_name_list(rom, cons.SPELL_NAME_ADDR,
                              0, cons.SPELL_NAME_LENGTH,
                              cons.SPELL_NUM, tbl_menu_a)  
    esper_attacks = helpers.create_name_list(rom, cons.ESPER_ATK_NAME_ADDR,
                                     cons.SPELL_NUM, cons.ESPER_ATK_NAME_LENGTH,
                                     cons.ESPER_ATK_NUM, tbl_menu_a)   
    attacks = helpers.create_name_list(rom, cons.ATK_NAME_ADDR,
                               cons.SPELL_NUM+cons.ESPER_ATK_NUM,
                               cons.ATK_NAME_LENGTH, cons.ATK_NUM, tbl_menu_a)  
    abilities = spells + esper_attacks + attacks
    abilities[255]["name"] = "Nothing"

    return abilities