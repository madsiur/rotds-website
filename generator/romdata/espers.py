import common.helpers as helpers
import common.constants as cons
from .tables import tbl_menu_a

def create_list(rom, mons_filenames):
    espers = helpers.create_name_list(rom, cons.ESPER_NAME_ADDR,
                              cons.MONS_NUM,cons.ESPER_NAME_LENGTH,
                              cons.ESPER_NUM, tbl_menu_a)
    
    for i in range(cons.ESPER_NUM):
        filename = [f for f in mons_filenames if (int)(f[0:3]) == (i + cons.MONS_NUM)]
        if len(filename) == 0:
            espers[i]["filename"] = "placeholder"
        else:
            espers[i]["filename"] = filename[0].replace(".png", "")

    return espers