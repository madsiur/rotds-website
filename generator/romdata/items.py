import common.helpers as helpers
import common.constants as cons
from .tables import tbl_menu_a


def create_list(rom):
    items = helpers.create_name_list(rom, cons.ITEM_NAME_ADDR,
                             0, cons.ITEM_NAME_LENGTH,
                             cons.ITEM_NUM, tbl_menu_a) 
        
    items[255]["name"] = "Nothing"

    return items