import status_def as status
import element_def as elements

class ItemDefinition:
    # $D85000
    item_type = {
        0x00: "Tool",
        0x01: "Weapon",
        0x02: "Armor",
        0x03: "Shield",
        0x04: "Hat",
        0x05: "Relic",
        0x06: "Item"
    }

    item_type_flags = [
        "",
        "",
        "",
        "",
        "Can be throw",
        "Usable in battle",
        "Usable in menu",
        "Unknown"
    ]

    # $D85001
    character_byte_1 = [
        "charactername-0",
        "charactername-1",
        "charactername-2",
        "charactername-3",
        "charactername-4",
        "charactername-5",
        "charactername-6",
        "charactername-7"
    ]

    # $D85002
    character_byte_2 = [
        "charactername-8",
        "charactername-9",
        "charactername-10",
        "charactername-11",
        "charactername-12",
        "charactername-13",
        "Unused (heavy armor)",
        "Unused (imp gear)"
    ]

    # $D85005
    field_effect = [
        "50% less encounters",
        "No encounter",
        "Unknown",
        "Unknown",
        "Unknown",
        "Not used",
        "Unknown",
        "Not used"
    ]

    # $D85006
    status_immunity_1 = status.status_def[0:8]
    
    # $D85007
    status_immunity_2 = status.status_def[8:16]
    
    # $D85008
    status_helpful = status.status_def[16:24]
    status_helpful[0] = "Float"

    relic_effects = [
        "Raise Fight damage",
        "Raise Magic damage",
        "HP + 25%",
        "HP + 50%",
        "HP + 12.5%",
        "MP + 25%",
        "MP + 50%",
        "MP + 12.5%"
        "Gale Hairpin",
        "Back Guard",
        "Jump → Cannon",
        "Magic → X-Magic",
        "Not used",
        "Not used",
        "Summon → Call",
        "Jump 2 to 4 times",
        "Increase Steal rate",
        "Raise Magic damage",
        "",
        "Increase Torment rate",
        "100% hit rate",
        "Spells cost 50% less",
        "Spells cost 75% less",
        "Might + 50%",
        "Fight → X-Fight",
        "Randomly counterattack",
        "Randomly evade",
        "Gauntlet effect",
        "Genji Glove effect",
        "Not used",
        "Protect weak allies",
        "Fill ATB gauge at battle start"
        "Shell when HP is low",
        "Protect when HP is low",
        "Reflect when HP is low",
        "Double experience",
        "Double Gil",
        "Proc spells 1/4th of the time",
        "Unknown",
        "Make character undead"
    ]

    # $D85009
    relic_effects_1 = relic_effects[0:8]
    
    # $D8500A
    relic_effects_2 = relic_effects[8:16]
    
    # $D8500B
    relic_effects_3 = relic_effects[16:24]
    
    # $D8500C
    relic_effects_4 = relic_effects[24:32]
    
    # $D8500D
    relic_effects_5 = relic_effects[32:40]

    # $D8500E
    targeting_flags = [
        "Can move cursor",
        "One side only",
        "Auto-select ally",
        "Auto-select one side",
        "Auto-Confirm",
        "Manual party select",
        "Enemy default",
        "Random target"
    ]

    # $D85010-$D85011
    stat_bonuses = {
        0x00: "",
        0x01: "+1",
        0x02: "+2",
        0x03: "+3",
        0x04: "+4",
        0x05: "+5",
        0x06: "+6",
        0x07: "+7",
        0x09: "-1",
        0x0A: "-2",
        0x0B: "-3",
        0x0C: "-4",
        0x0D: "-5",
        0x0E: "-6",
        0x0F: "-7"
    }

    stat_names = [
        "Might",
        "Speed",
        "Stamina",
        "Magic"
    ]

    # $D85012
    weapon_spell_flags = [
        "",
        "",
        "",
        "",
        "",
        "",
        "Random spell cast",
        "Break after use"
    ]

    # $D85013
    weapon_flags = [
        "Unknown",
        "SwTech",
        "Unknown",
        "Unknown",
        "Unknown",
        "Two-handed",
        "Prevent Silence",
        "Enable Runic"
    ]

    item_flags = [
        "Unknown",
        "Damage Undead",
        "Unknown",
        "Restore HP",
        "Restore MP",
        "Remove status",
        "Cause damage",
        "Fractional power (1/16s)"
    ]

    # $D85015-$D85018
    item_actor_status_1 = status.status_def[24:32]
    item_actor_status_1[0] = "Rage"
    item_actor_status_1[1] = "Freeze"
    item_actor_status_3 = status.status_def[16:24]
    item_actor_status_4 = status.status_def[0:8]
    item_actor_status_2 = [
        "Unknown",
        "Unknown",
        "Unknown",
        "Unknown",
        "Unknown",
        "Unknown",
        "Unknown",
        "Unknown"
    ]

    # $D8501A
    status_harmful = status.status_def[8:16]

    # $D8501A
    evasion = {
        0x00: "",
        0x01: "+10%",
        0x02: "+20%",
        0x03: "+30%",
        0x04: "+40%",
        0x05: "+50%",
        0x06: "-10%",
        0x07: "-20%",
        0x08: "-30%",
        0x09: "-40%",
        0x0A: "-50%",
    }

    # $D8501B
    block_special_effect = [
        "Dagger parry",
        "Sword parry",
        "Shield block",
        "Cape dodge",
        "Physical attack",
        "Magic attack",
    ]

    weapon_special_effect = {
        0x00: "None",
        0x01: "itemname-4",
        0x02: "itemname-28",
        0x03: "itemname-5, itemname-41, itemname-76, itemname-80",
        0x04: "itemname-6",
        0x05: "itemname-28",
        0x06: "itemname-22",
        0x07: "MP critical",
        0x08: "itemname-73, itemname-75",
        0x09: "itemname-81, itemname-82,",
        0x0A: "itemname-9",
        0x0B: "itemname-46",
        0x0C: "itemname-51",
        0x0D: "itemname-25",
        0x0E: "itemname-23",
        0x0F: "MP critical (more)"
    }

    item_special_effect = {
        0x00: "None",
        0x01: "itemname-249",
        0x02: "itemname-250",
        0x03: "itemname-252",
        0x04: "itemname-238, itemname-239",
        0x05: "itemname-253",
        0x06: "itemname-254",
        0x07: "battlecommandname-28",
        0x08: "battlecommandname-24",
        0x09: "battlecommandname-5",
        0x0A: "battlecommandname-14",
        0x0B: "battlecommandname-17",
        0x0C: "battlecommandname-13",
        0x0D: "itemname-167",
        0x0E: "itemname-169",
        0xFF: "None"
    }




        