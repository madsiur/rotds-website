import common.helpers as helpers
import common.constants as cons

def create_list(rom, item_list):
    KEY_LIST = ["metamorph_a",
                "metamorph_b",
                "metamorph_c",
                "metamorph_d"]
    
    VALUE_KEY_LIST = ["id", "name"]

    packs = helpers.create_double_dict_list(rom, cons.META_ADDR,
                                    0, cons.META_NUM,
                                    cons.META_LENGTH, KEY_LIST,
                                    item_list, VALUE_KEY_LIST)

    return packs