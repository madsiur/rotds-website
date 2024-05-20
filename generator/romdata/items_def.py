import romdata.status_def as status

class ItemDefinition:
    # $D85000
    type_flags = [
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
        "Not used (heavy armor)",
        "Not used (imp gear)"
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
        "MP + 12.5%",

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
        "Fill ATB gauge at battle start",

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
        0x08: "",
        0x09: "-1",
        0x0A: "-2",
        0x0B: "-3",
        0x0C: "-4",
        0x0D: "-5",
        0x0E: "-6",
        0x0F: "-7",
        0x10: "+1",
        0x20: "+2",
        0x30: "+3",
        0x40: "+4",
        0x50: "+5",
        0x60: "+6",
        0x70: "+7",
        0x80: "",
        0x90: "-1",
        0xA0: "-2",
        0xB0: "-3",
        0xC0: "-4",
        0xD0: "-5",
        0xE0: "-6",
        0xF0: "-7"
    }

    stat_names = [
        "Might",
        "Speed",
        "Stamina",
        "Magic"
    ]

    # $D85012
    spell_flags = [
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
        "Limit",
        "Unknown",
        "Unknown",
        "Unknown",
        "Same damage from back row",
        "Two-handed",
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
    item_actor_status_4 = status.status_def[24:32]
    item_actor_status_4[0] = "Rage"
    item_actor_status_4[1] = "Freeze"
    item_actor_status_3 = status.status_def[16:24]
    item_actor_status_2 = status.status_def[8:16]
    item_actor_status_1 = status.status_def[0:8]

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
        0x10: "+10%",
        0x20: "+20%",
        0x30: "+30%",
        0x40: "+40%",
        0x50: "+50%",
        0x60: "-10%",
        0x70: "-20%",
        0x80: "-30%",
        0x90: "-40%",
        0xA0: "-50%"
    }

    # $D8501B
    block_special_effect = [
        "Dagger parry",
        "Sword parry",
        "Shield block",
        "Cape dodge",
    ]

    block_type = [
        "Physical attack",
        "Magic attack",
    ]

    weapon_special_effect = {
        0x00: "None",
        0x01: "Randomly steal",
        0x02: "Atma Weapon GFX",
        0x03: "Randomly kill",
        0x04: "2x damage for humans and plants",
        0x05: "Drain HP",
        0x06: "Draiin MP",
        0x07: "MP critical",
        0x08: "Randomly throw weapon",
        0x09: "Serpent Rod",
        0x0A: "Stronger on low HP",
        0x0B: "Randomly cast Wind Slash",
        0x0C: "2x damae for dragons",
        0x0D: "Randomly slice",
        0x0E: "Unused",
        0x0F: "MP critical (unused)"
    }

    item_special_effect = {i: "Unknown" for i in range(256)}
    item_special_effect[0x00] = "None"
    item_special_effect[0x01] = "Magicite"
    item_special_effect[0x02] = "Atomic Ball"
    item_special_effect[0x03] = "Make target disappear"
    item_special_effect[0x04] = "itemname-238, itemname-239"
    item_special_effect[0x05] = "Warp"
    item_special_effect[0x06] = "Recruit Arc (unused)"
    item_special_effect[0x08] = "battlecommandname-28"
    item_special_effect[0x09] = "battlecommandname-24"
    item_special_effect[0x0A] = "battlecommandname-5"
    item_special_effect[0x0B] = "battlecommandname-14"
    item_special_effect[0x0C] = "battlecommandname-17"
    item_special_effect[0x0D] = "battlecommandname-13"
    item_special_effect[0x0E] = "itemname-167"
    item_special_effect[0x0F] = "itemname-169"
    item_special_effect[0x49] = "Vysage"
    item_special_effect[0x4A] = "Soul Calibur"
    item_special_effect[0x4B] = "Jump"
    item_special_effect[0x5E] = "Force Field"
    item_special_effect[0x5F] = "Run"
    item_special_effect[0x65] = "Paladin Icon"
    item_special_effect[0x66] = "HP drain + Regen"
    item_special_effect[0x69] = "Force Field"
    item_special_effect[0x6C] = "Charm"
    item_special_effect[0x79] = "1/2 HP/MP"
    item_special_effect[0x7A] = "1/4 HP/MP"
    item_special_effect[0x7B] = "Cast Quick"
    item_special_effect[0xFF] = "None"

    # first character of name
    sub_type = {
        0x63: "Cryogen",
        0x64: "Relic",
        0x65: "Rod",
        0x66: "Rod",
        0x67: "Spear",
        0x68: "Spear",
        0x69: "Shield",
        0x6A: "Knife",
        0x6B: "Large Sword",
        0x6C: "Sword",
        0x6D: "Shield",
        0x6E: "Light Helmet",
        0x6F: "Medium Helmet",
        0x70: "Mage Helmet",
        0x71: "Heavy Helmet",
        0x72: "Mage Armor",
        0x73: "Light Armor",
        0x74: "Cloak",
        0x75: "Special",
        0x76: "Scythe",
        0x77: "Anchor",
        0x78: "Axe",
        0x79: "Mace",
        0x7A: "Gun",
        0x7B: "Boomerang",
        0x7C: "Hammer",
        0x7D: "Item",
        0x7E: "Item",
        0x7F: "Tab",
        0xD8: "Knife",
        0xD9: "Sword",
        0xDA: "Spear",
        0xDB: "Katana",
        0xDC: "Rod",
        0xDD: "Glove",
        0xDE: "Stars",
        0xDF: "Flair",
        0xE0: "Ninja",
        0xE1: "Claw",
        0xE2: "Heavy Shield",
        0xE3: "Heavy Helmet",
        0xE4: "Heavy Armor",
        0xE5: "Aether",
        0xE6: "Scroll",
        0xE7: "Relic",
        0xFE: 'None',
        0xFF: 'None'
    }




        