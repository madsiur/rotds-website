import common.helpers as helpers
import common.constants as cons
from .tables import tbl_menu_a, tbl_battle_b
from .monster_def import *
from .status_def import *
from .element_def import *

def create_list(rom, mons_filenames, item_list, spell_list, metamorph_list):
    LOOT_KEY_LIST = ["steal_rare", "steal_common",
                     "drop_rare", "drop_common"]
    SPIRIT_KEY_LIST = ["spirit_a", "spirit_b"]
    INVERSE_KEY_LIST = ["inverse_a", "inverse_b"]
    TORMENT_KEY_LIST = ["torment_a", "torment_b",
                        "torment_c", "torment_d"]
    VALUE_KEY_LIST = ["id", "name"]

    monsters = helpers.create_name_list(rom, cons.MONS_NAME_ADDR,
                                0, cons.MONS_NAME_LENGTH,
                                cons.MONS_NUM, tbl_menu_a)
        
    for i in range(cons.MONS_NUM):
        filename = [f for f in mons_filenames if (int)(f[0:3]) == i]
        if len(filename) == 0:
            monsters[i]["filename"] = "placeholder"
        else:
            monsters[i]["filename"] = filename[0].replace(".png", "")
    
    monsters = helpers.add_text_attr(rom, cons.MONS_SATK_NAME_ADDR,
                             cons.MONS_SATK_NAME_LENGTH,
                             monsters, tbl_battle_b,
                             "special_attack")
    
    for i in range (cons.MONS_NUM):
        loots = helpers.create_double_dict(rom, cons.MONS_LOOT_ADDR,
                                   i, cons.MONS_LOOT_LENGTH,
                                   LOOT_KEY_LIST, item_list,
                                   VALUE_KEY_LIST)
        spirits = helpers.create_double_dict(rom, cons.MONS_SPRT_ADDR,
                                     i, cons.MONS_SPRT_LENGTH,
                                     SPIRIT_KEY_LIST, spell_list,
                                     VALUE_KEY_LIST)
        inverses = helpers.create_double_dict(rom, cons.MONS_INV_ADDR,
                                      i, cons.MONS_INV_LENGTH,
                                      INVERSE_KEY_LIST, spell_list,
                                      VALUE_KEY_LIST)
        torments = helpers.create_double_dict(rom, cons.MONS_TORM_ADDR,
                                      i, cons.MONS_TORM_LENGTH,
                                      TORMENT_KEY_LIST, spell_list,
                                      VALUE_KEY_LIST)
        
        stats = {"normal": get_difficulty(rom, cons.MONS_STAT_NOR, i)}
        stats = {**stats, "hard": get_difficulty(rom, cons.MONS_STAT_HAR, i)}
        stats = {**stats, "extreme": get_difficulty(rom, cons.MONS_STAT_EXT, i)}
        stats = {**stats, "insane": get_difficulty(rom, cons.MONS_STAT_INS, i)}

        metamorph_id = stats["normal"]["metamorph_id"]
        metamorph = metamorph_list[metamorph_id]
        stats["normal"].pop("metamorph_id")
        stats["hard"].pop("metamorph_id")
        stats["extreme"].pop("metamorph_id")
        stats["insane"].pop("metamorph_id")

        fight_animation_id = stats["normal"]["fight_animation_id"]
        fight_animation = item_list[fight_animation_id]
        stats["normal"].pop("fight_animation_id")
        stats["hard"].pop("fight_animation_id")
        stats["extreme"].pop("fight_animation_id")
        stats["insane"].pop("fight_animation_id")

        monsters[i] = {**monsters[i],
                       "stats":stats,
                       "loots": loots,
                       "spirits": spirits,
                       "inverses": inverses,
                       "torments": torments,
                       "fight_animation": fight_animation,
                       "metamorph": metamorph}

    espers = helpers.create_name_list(rom, cons.ESPER_NAME_ADDR,
                              cons.MONS_NUM,cons.ESPER_NAME_LENGTH,
                              cons.ESPER_NUM, tbl_menu_a)
    
    return monsters

def get_difficulty(rom, difficulty, id):
    data = helpers.get_data(rom, difficulty, id, cons.MONS_STAT_LENGTH)

    speed = data[0]
    attack = data[1]
    hit_rate = data[2]
    evade = data[3]
    mblock = data[4]
    defense = data[5]
    mdef = data[6]
    mpow = data[7]
    hp = helpers.get_short(data, 8)
    mp = helpers.get_short(data, 10)
    exp = helpers.get_short(data, 12)
    gil = helpers.get_short(data, 14)
    level = data[16]
    metamorph_id = data[17] & 0x1F
    metamorph_rate = (data[17] & 0xE0) >> 5
    metamorph_rate = meta_rate_def[metamorph_rate]
    misc_1 = helpers.get_string_flags(misc_1_def, data[18])
    misc_2 = helpers.get_string_flags(misc_2_def, data[19])
    immun_1 = helpers.get_string_flags(status_def[0:8], data[20])
    immun_2 = helpers.get_string_flags(status_def[8:16], data[21])
    immun_3 = helpers.get_string_flags(status_def[16:24], data[22])
    absorb = helpers.get_string_flags(element_def, data[23])
    null = helpers.get_string_flags(element_def, data[24])
    weakness = helpers.get_string_flags(element_def, data[25])
    fight_animation_id = data[26]
    status_1 = helpers.get_string_flags(status_mons_def[0:8], data[27])
    status_2 = helpers.get_string_flags(status_mons_def[8:16], data[28])
    status_3 = helpers.get_string_flags(status_mons_def[16:24], data[29])
    status_4 = helpers.get_string_flags(status_mons_def[24:32], data[30])
    sp_atk_effect_id = data[31] & 0x3F
    special_attack_flags = helpers.get_string_flags(sp_atk_attr,
                                           (data[31] & 0xC0) >> 6, 2)


    misc = misc_1 + misc_2
    immunity = immun_1 + immun_2 + immun_3
    status = status_1 + status_2 + status_3 + status_4
    special_attack_effect = get_special_attack_effect(sp_atk_effect_id)

    diff_stats = {"speed": speed,
                  "attack": attack,
                  "hit_rate": hit_rate,
                  "mblock": mblock,
                  "evade": evade,
                  "defense": defense,
                  "mdef": mdef,
                  "mpow": mpow,
                  "hp": hp,
                  "mp": mp,
                  "gil": gil,
                  "exp": exp,
                  "level": level,
                  "immunity": immunity,
                  "status": status,
                  "absorb": absorb,
                  "null": null,
                  "weakness": weakness,
                  "misc": misc,
                  "metamorph_rate": metamorph_rate,
                  "metamorph_id" : metamorph_id,
                  "fight_animation_id": fight_animation_id,
                  "special_attack_effect": special_attack_effect,
                  "special_attack_flags": special_attack_flags}
    
    return diff_stats

def get_special_attack_effect(id):
    if id < 32:
        return "Inflict {0}".format(status_def[id])
    elif id < 48:
        factor = (id - 32 + 3) / 2
        return "{:.1f}x damage".format(factor)
    elif id == 48:
        return "Drain HP"
    elif id == 49:
        return "Drain MP"
    else:
        return "Remove Reflect"

    




        

            


