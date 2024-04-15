import common.helpers as helpers
from .tables import tbl_menu_a

def create_list(rom, mons_filenames, cons=helpers.get_constants()):
    espers = helpers.create_name_list(rom, cons.ESPER_NAME_ADDR,
                              cons.MONS_NUM,cons.ESPER_NAME_LENGTH,
                              cons.ESPER_NUM, tbl_menu_a)
    
    for i in range(cons.ESPER_NUM):
        filename = [f for f in mons_filenames if f[0:3] == str(i + cons.MONS_NUM).zfill(3)]
        if len(filename) == 0:
            espers[i]["filename"] = "placeholder"
        else:
            espers[i]["filename"] = filename[0].replace(".png", "")

    return espers