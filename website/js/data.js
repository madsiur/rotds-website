const dirs = 
[
    "ost_a",
    "ost_b",
    "sfx"
];

const roms = 
{
    "rotds_a": [
        {
            "id": 1,
            "filename": "dw3_battle",
            "title": "Battle Theme",
            "game": "Dragon Warrior 3",
            "composer": "Koichi Sugiyama",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 67
        },
        {
            "id": 2,
            "filename": "bof_dejection",
            "title": "Dejection",
            "game": "Breath of Fire",
            "composer": "Y. Fujita, M. Yamaguchi, M. Fuji, Y. Shimomura, T. Nishimura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 93
        },
        {
            "id": 3,
            "filename": "totr_worlds",
            "title": "Between Two Worlds",
            "game": "Treasure of the Rudra",
            "composer": "Ryuji Sasai",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 160
        },
        {
            "id": 4,
            "filename": "ff6_wind",
            "title": "Wind",
            "game": "Final Fantasy VI",
            "composer": "Minoru Akao",
            "arranger": "N/A",
            "dir": 3,
            "duration": 240
        },
        {
            "id": 5,
            "filename": "mkr_emeraude",
            "title": "Emeraude's Theme",
            "game": "Magic Knight Rayearth",
            "composer": "Yayoi Wachi, Seirou Okamoto",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 115
        },
        {
            "id": 6,
            "filename": "dq_alefgard",
            "title": "Alefgard",
            "game": "DQ/FF4 Remix",
            "composer": "Koichi Sugiyama, Nobuo Uematsu",
            "arranger": "Gi Nattak, Jackimus",
            "dir": 1,
            "duration": 147
        },
        {
            "id": 7,
            "filename": "bl_jojo",
            "title": "Jojo and the God Dragons",
            "game": "Bahamut Lagoon",
            "composer": "Noriko Matsueda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 80
        },
        {
            "id": 8,
            "filename": "lf2_land",
            "title": "The Land Nobody Knew",
            "game": "Lufia II",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 212
        },
        {
            "id": 9,
            "filename": "ct_chest",
            "title": "Sealed Chest",
            "game": "Chrono Trigger",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 4
        },
        {
            "id": 10,
            "filename": "rs3_field",
            "title": "Field",
            "game": "Romancing Saga 3",
            "composer": "Kenji Ito",
            "arranger": "JCE3000GT",
            "dir": 1,
            "duration": 168
        },
        {
            "id": 11,
            "filename": "lom_moonlit",
            "title": "Moonlit City Roa",
            "game": "Legend of Mana",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 140
        },
        {
            "id": 12,
            "filename": "ar_sacrifices",
            "title": "Sacrifices",
            "game": "ActRaiser",
            "composer": "Yuzo Koshiro",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 96
        },
        {
            "id": 13,
            "filename": "bof2_hero",
            "title": "What It Takes To Be A Hero",
            "game": "Breath of Fire 2",
            "composer": "Yuko Takehara",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 96
        },
        {
            "id": 14,
            "filename": "ys5_lake",
            "title": "Misty Lake",
            "game": "Ys 5",
            "composer": "Naoki Kaneda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 166
        },
        {
            "id": 15,
            "filename": "ff7_cry",
            "title": "You Can Hear the Cry of the Planet",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 228
        },
        {
            "id": 16,
            "filename": "potc_pirate",
            "title": "He's a Pirate!",
            "game": "Pirate's of the Caribbean",
            "composer": "Klaus Badelt, Hans Zimmer",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 131
        },
        {
            "id": 17,
            "filename": "mtd_kraid",
            "title": "Kraid's Lair (Rock Remix)",
            "game": "Metroid",
            "composer": "Hirokazu Tanaka",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 185
        },
        {
            "id": 18,
            "filename": "ff4_calcobrena",
            "title": "Dancing Calcobrena",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 159
        },
        {
            "id": 19,
            "filename": "tcss_song",
            "title": "Song #1",
            "game": "T&C Skate Session",
            "composer": "Tsukasa Masuko",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 147
        },
        {
            "id": 20,
            "filename": "rs_schiele",
            "title": "Battle With Schiele",
            "game": "Romancing Saga",
            "composer": "Kenji Ito",
            "arranger": "Unknown",
            "dir": 1,
            "duration": 126
        },
        {
            "id": 21,
            "filename": "drkn_character",
            "title": "Character Creation",
            "game": "Drakkhen",
            "composer": "Hiroyuki Masuno",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 22,
            "filename": "totr_darkness",
            "title": "Edge of Darkness",
            "game": "Treasure of the Rudra",
            "composer": "Ryuji Sasai",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 192
        },
        {
            "id": 23,
            "filename": "ao2_forest",
            "title": "Land of Frozen Forest",
            "game": "Albert Odyssey 2",
            "composer": "Naoki Kodaka",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 114
        },
        {
            "id": 24,
            "filename": "z4_dungeon",
            "title": "Dungeon",
            "game": "Zelda IV (GBC)",
            "composer": "K. Totaka, M. Hamano, K. Ishikawa, K. Kondo",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 149
        },
        {
            "id": 25,
            "filename": "xnb_gaur",
            "title": "Gaur Plains",
            "game": "Xenoblade",
            "composer": "ACE+",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 26,
            "filename": "lal_megalomania",
            "title": "Megalomania",
            "game": "Live a Live",
            "composer": "Yoko Shimomura",
            "arranger": "Unknown",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 27,
            "filename": "lf_island",
            "title": "Island in the Void",
            "game": "Lufia 1",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 69
        },
        {
            "id": 28,
            "filename": "feg_army",
            "title": "Army of Grannvale 2",
            "game": "Fire Emblem: Genealogy of the Holy War",
            "composer": "Yuka Tsujiyoko",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 185
        },
        {
            "id": 29,
            "filename": "lag_voice",
            "title": "Voice of Spirits",
            "game": "Lagoon",
            "composer": "Hideki Suzuki",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 105
        },
        {
            "id": 30,
            "filename": "ff6_river",
            "title": "Rushing River",
            "game": "Final Fantasy VI",
            "composer": "Minoru Akao",
            "arranger": "N/A",
            "dir": 3,
            "duration": 240
        },
        {
            "id": 31,
            "filename": "ys3_shock",
            "title": "Shock of the Death God",
            "game": "Ys III",
            "composer": "Mieko Ishikawa",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 51
        },
        {
            "id": 32,
            "filename": "totr_zombies",
            "title": "Dance of the Zombies",
            "game": "Treasure of the Rudra",
            "composer": "Ryuji Sasai",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 33,
            "filename": "smtd_maridia",
            "title": "Maridia",
            "game": "Super Metroid",
            "composer": "Minako Hamano, Kenji Yamamoto",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 34,
            "filename": "lom_soul",
            "title": "Bonded by the Soul",
            "game": "Legend of Mana",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 94
        },
        {
            "id": 35,
            "filename": "ff8_way",
            "title": "Find Your Way",
            "game": "Final Fantasy VIII",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 220
        },
        {
            "id": 36,
            "filename": "rs_conflict",
            "title": "The Conflict",
            "game": "Romancing Saga",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 99
        },
        {
            "id": 37,
            "filename": "rs3_vanguard",
            "title": "Vanguard Take Off 2",
            "game": "Romancing Saga 3",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 53
        },
        {
            "id": 38,
            "filename": "ct_blackbird",
            "title": "Blackbird Interior",
            "game": "Chrono Trigger",
            "composer": "Minoru Akao",
            "arranger": "N/A",
            "dir": 3,
            "duration": 11
        },
        {
            "id": 39,
            "filename": "bof_romero",
            "title": "Romero Cave",
            "game": "Breath of Fire",
            "composer": "Y. Fujita, M. Yamaguchi, M. Fuji, Y. Shimomura, T. Nishimura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 89
        },
        {
            "id": 40,
            "filename": "vp_anxieties",
            "title": "Eternal Hydrogen Anxieties",
            "game": "Valkyrie Profile",
            "composer": "Motoi Sakuraba",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 185
        },
        {
            "id": 41,
            "filename": "trnm_spirits",
            "title": "Wandering Spirits",
            "game": "Terranigma",
            "composer": "Masanori Hikichi",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 42,
            "filename": "ffmq_foresta",
            "title": "Foresta",
            "game": "Final Fantasy Mystic Quest",
            "composer": "Ryuji Sasai, Yasuhiro Kawakami",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 168
        },
        {
            "id": 43,
            "filename": "lf2_earth",
            "title": "The Earth",
            "game": "Lufia II",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 136
        },
        {
            "id": 44,
            "filename": "sd3_bells",
            "title": "Decision Bells",
            "game": "Seiken Densetsu 3",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 186
        },
        {
            "id": 45,
            "filename": "ff2_town",
            "title": "Town",
            "game": "Final Fantasy II",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 102
        },
        {
            "id": 46,
            "filename": "aw_time",
            "title": "The Time Has Come",
            "game": "Aaron Walz Music",
            "composer": "Aaron Walz",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 110
        },
        {
            "id": 47,
            "filename": "sgf_victory",
            "title": "Victory!",
            "game": "Saga Frontier",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 33
        },
        {
            "id": 48,
            "filename": "ct_light",
            "title": "Silent Light",
            "game": "Chrono Tigger",
            "composer": "Nobuo Uematsu",
            "arranger": "JCE3000GT",
            "dir": 1,
            "duration": 129
        },
        {
            "id": 49,
            "filename": "tc2001_dre",
            "title": "Forgot About Dre",
            "game": "The Chronic 2001",
            "composer": "Dr. Dre",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 101
        },
        {
            "id": 50,
            "filename": "totr_flame",
            "title": "Flame And Arrow",
            "game": "Treasure of the Rudra",
            "composer": "Ryuji Sasai",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 60
        },
        {
            "id": 51,
            "filename": "top_cross",
            "title": "Take up the Cross",
            "game": "Tales of Phantasia",
            "composer": "Motoi Sakuraba, Shinji Tamura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 144
        },
        {
            "id": 52,
            "filename": "tc_shrine",
            "title": "Shrine",
            "game": "Treasure Conflix",
            "composer": "Junya Nakano",
            "arranger": "JCE3000GT",
            "dir": 1,
            "duration": 115
        },
        {
            "id": 53,
            "filename": "wa_castle",
            "title": "Adlehyde Castle",
            "game": "Wild Arms",
            "composer": "Michiko Naruke",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 113
        },
        {
            "id": 54,
            "filename": "ff7_temple",
            "title": "Forested Temple",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 209
        },
        {
            "id": 55,
            "filename": "kh2_afternoon",
            "title": "Lazy Afternoon",
            "game": "Kingdom Hearts II",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 171
        },
        {
            "id": 56,
            "filename": "xng_sleep",
            "title": "Back to Sleep",
            "game": "Xenogears",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 11
        },
        {
            "id": 57,
            "filename": "ff3_amur",
            "title": "Town of Amur",
            "game": "Final Fantasy III",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 102
        },
        {
            "id": 58,
            "filename": "ff6_ocean",
            "title": "Ocean",
            "game": "Final Fantasy VI",
            "composer": "Minoru Akao",
            "arranger": "N/A",
            "dir": 3,
            "duration": 240
        },
        {
            "id": 59,
            "filename": "lf2_sinistral",
            "title": "Sinistral Battle",
            "game": "Lufia II",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 195
        },
        {
            "id": 60,
            "filename": "som_wind",
            "title": "The Wind Never Ceases",
            "game": "Secret of Mana",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 135
        },
        {
            "id": 61,
            "filename": "mrpnt_exercice",
            "title": "Creative Exercise",
            "game": "Mario Paint",
            "composer": "Hirokazu Tanaka, Ryoji Yoshitomi, Kazumi Totaka",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 105
        },
        {
            "id": 62,
            "filename": "ff12_over",
            "title": "Game Over",
            "game": "Final Fantasy XII",
            "composer": "Hitoshi Sakimoto, Hayato Matsuo, Masaharu Iwata",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 16
        },
        {
            "id": 63,
            "filename": "lal_bird",
            "title": "The Bird Flies in the Sky, The Fish Swims in the River",
            "game": "Live A Live",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 104
        },
        {
            "id": 64,
            "filename": "z3_mountain",
            "title": "Death Mountain",
            "game": "The Legend of Zelda: A Link to the Past",
            "composer": "Koji Kondo",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 190
        },
        {
            "id": 65,
            "filename": "sgf_journey",
            "title": "Opening of a Journey",
            "game": "Saga Frontier",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 192
        },
        {
            "id": 66,
            "filename": "ff7_day",
            "title": "On That Day 5 Years Ago",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 188
        },
        {
            "id": 67,
            "filename": "ff_shop",
            "title": "Shop Theme",
            "game": "Final Fantasy I",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 52
        },
        {
            "id": 68,
            "filename": "ff8_plank",
            "title": "Only A Plank Between One And Perdition",
            "game": "Final Fantasy VIII",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 147
        },
        {
            "id": 69,
            "filename": "lal_psycho",
            "title": "Psycho Killing",
            "game": "Live A Live",
            "composer": "Yoko Shimomura",
            "arranger": "emberling",
            "dir": 1,
            "duration": 71
        },
        {
            "id": 70,
            "filename": "sd3_medicine",
            "title": "Strange Medicine",
            "game": "Seiken Densetsu 3",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 140
        },
        {
            "id": 71,
            "filename": "ff5_ronka",
            "title": "Machina Ronka",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 72,
            "filename": "bld_toronto",
            "title": "Town of Toronto",
            "game": "Brainlord",
            "composer": "Masanao Akahori",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 182
        },
        {
            "id": 73,
            "filename": "ffmq_doom",
            "title": "Doom Castle",
            "game": "Final Fantasy Mystic Quest",
            "composer": "Ryuji Sasai, Yasuhiro Kawakami",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 169
        },
        {
            "id": 74,
            "filename": "ff6_burning",
            "title": "Burning House",
            "game": "Final Fantasy VI",
            "composer": "Minoru Akao",
            "arranger": "N/A",
            "dir": 3,
            "duration": 240
        },
        {
            "id": 75,
            "filename": "xnb_mechonis",
            "title": "Mechonis Field",
            "game": "Xenoblade",
            "composer": "ACE+",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 76,
            "filename": "rmb_stage",
            "title": "Stage Theme",
            "game": "Rambo",
            "composer": "Tohru Hasabe",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 118
        },
        {
            "id": 77,
            "filename": "ct_tyrano",
            "title": "Tyrano Lair",
            "game": "Chrono Trigger Beta",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 142
        },
        {
            "id": 78,
            "filename": "kaw_teamwork",
            "title": "Teamwork",
            "game": "King Aurther's World",
            "composer": "Justin Scharvona",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 107
        },
        {
            "id": 79,
            "filename": "trnm_underworld",
            "title": "Underworld",
            "game": "Terranigma",
            "composer": "Masanori Hikichi",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 80,
            "filename": "ff10_seymour",
            "title": "Fight With Seymour",
            "game": "Final Fantasy X",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 81,
            "filename": "cstvn_sotn_painting",
            "title": "Lost Painting",
            "game": "Castlevania SOTN",
            "composer": "Michiru Yamane",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 82,
            "filename": "cfh_chocobo",
            "title": "Chocobo From Hell",
            "game": "Chocobo From Hell",
            "composer": "Andrew Thompson",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 131
        },
        {
            "id": 83,
            "filename": "vp_nostalgia",
            "title": "Nostalgia Into Hope",
            "game": "Valkyrie Profile",
            "composer": "Motoi Sakuraba",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 84,
            "filename": "ct_mountain",
            "title": "Singing Mountain",
            "game": "Chrono Trigger",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 106
        },
        {
            "id": 85,
            "filename": "z3_world",
            "title": "Dark World Dungeon",
            "game": "The Legend of Zelda: A Link to the Past",
            "composer": "Koji Kondo",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 126
        },
        {
            "id": 86,
            "filename": "som_ghost",
            "title": "Rose and Ghost",
            "game": "Secret of Mana",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 141
        },
        {
            "id": 87,
            "filename": "ff_town",
            "title": "Town",
            "game": "Final Fantasy I",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 52
        },
        {
            "id": 88,
            "filename": "rs_minstrel",
            "title": "Minstrel's Song",
            "game": "Romancing Saga",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 96
        },
        {
            "id": 89,
            "filename": "swom_decision",
            "title": "Time of Decision",
            "game": "Sword of Mana",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 137
        },
        {
            "id": 90,
            "filename": "sm64_lullaby",
            "title": "Piranha Plant Lullaby",
            "game": "Super Mario 64",
            "composer": "Koji Kondo",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 178
        },
        {
            "id": 91,
            "filename": "som_memories",
            "title": "Kind Memories",
            "game": "Secret of Mana",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 95
        },
        {
            "id": 92,
            "filename": "evo_ocean",
            "title": "Ocean of Origin",
            "game": "E.V.O. Search for Eden",
            "composer": "Koichi Sugiyama",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 159
        },
        {
            "id": 93,
            "filename": "sgf_trick",
            "title": "Trick",
            "game": "Saga Frontier",
            "composer": "Kenji Ito",
            "arranger": "Tsushiy",
            "dir": 1,
            "duration": 121
        },
        {
            "id": 94,
            "filename": "ct_dome",
            "title": "Unused Keeper's Dome",
            "game": "Chrono Trigger Beta",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 82
        },
        {
            "id": 95,
            "filename": "so_should",
            "title": "What Should Be",
            "game": "Star Ocean",
            "composer": "Motoi Sakuraba",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 96,
            "filename": "som_happening",
            "title": "A Curious Happening",
            "game": "Secret of Mana",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 101
        },
        {
            "id": 97,
            "filename": "sd3_machine",
            "title": "Faith Total Machine",
            "game": "Seiken Densetsu 3",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 155
        },
        {
            "id": 98,
            "filename": "dq2_requiem",
            "title": "Requiem",
            "game": "Dragon Quest 2",
            "composer": "Koichi Sugiyama",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 110
        },
        {
            "id": 99,
            "filename": "pkm_gym",
            "title": "Gym Battle",
            "game": "Pokemon red/blue/yellow",
            "composer": "Junichi Masuda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 128
        },
        {
            "id": 100,
            "filename": "ys_step",
            "title": "First Step Towards Wars",
            "game": "Ys",
            "composer": "Ryo Yonemitsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 123
        },
        {
            "id": 101,
            "filename": "top_resurrection",
            "title": "Resurrection",
            "game": "Tales of Phantasia",
            "composer": "Motoi Sakuraba, Shinji Tamura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 141
        },
        {
            "id": 102,
            "filename": "mtlmx_forget",
            "title": "The One Who Cannot Forget",
            "game": "Metal Max 2",
            "composer": "Satoshi Kadokura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 96
        },
        {
            "id": 103,
            "filename": "doom_halls",
            "title": "Dark Halls",
            "game": "Doom",
            "composer": "Bobby Prince",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 104,
            "filename": "bfm_plan",
            "title": "Terrible Plan of the Vambees",
            "game": "Brave Fencer Musashi",
            "composer": "Tsuyoshi Sekito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 153
        },
        {
            "id": 105,
            "filename": "cc_garden",
            "title": "Garden of the Gods",
            "game": "Chrono Cross",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 106,
            "filename": "mmx_boss",
            "title": "Boss Appears",
            "game": "Mega Man X",
            "composer": "Alph Lyla group",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 18
        },
        {
            "id": 107,
            "filename": "tc_ship",
            "title": "Salvage Ship",
            "game": "Treasure Conflix",
            "composer": "Junya Nakano",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 100
        },
        {
            "id": 108,
            "filename": "ct_wormhole",
            "title": "Wormhole",
            "game": "Chrono Trigger",
            "composer": "Minoru Akao",
            "arranger": "N/A",
            "dir": 3,
            "duration": 24
        },
        {
            "id": 109,
            "filename": "vp_world",
            "title": "Rise Above the World",
            "game": "Valkyrie Profile",
            "composer": "Motoi Sakuraba",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 160
        },
        {
            "id": 110,
            "filename": "smtd_norfair",
            "title": "Lower Norfair",
            "game": "Super Metroid",
            "composer": "Minako Hamano, Kenji Yamamoto",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 111,
            "filename": "ff7_fight",
            "title": "Those Who Fight",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 134
        },
        {
            "id": 112,
            "filename": "ff9_eiko",
            "title": "Eiko's Theme",
            "game": "Final Fantasy IX",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 113,
            "filename": "ffmq_battle",
            "title": "Battle Theme",
            "game": "Final Fantasy Mystic Quest",
            "composer": "Ryuji Sasai, Yasuhiro Kawakami",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 127
        },
        {
            "id": 114,
            "filename": "so3_moon",
            "title": "Reflected Moon",
            "game": "Star Ocean 3",
            "composer": "Motoi Sakuraba",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 115,
            "filename": "skd2_chase",
            "title": "The Chase",
            "game": "Suikoden II",
            "composer": "Miki Higashino, Keiko Fukami",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 213
        },
        {
            "id": 116,
            "filename": "dkc2_bop",
            "title": "Hot Head Bop",
            "game": "Donkey Kong Country 2",
            "composer": "David Wise",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 221
        },
        {
            "id": 117,
            "filename": "lf2_sorrow",
            "title": "Sorrow of Parting",
            "game": "Lufia II",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 150
        },
        {
            "id": 118,
            "filename": "xnb_names",
            "title": "You Will Know Our Names",
            "game": "Xenoblade",
            "composer": "ACE+",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 119,
            "filename": "lf2_battle",
            "title": "Battle Theme",
            "game": "Lufia II",
            "composer": "Yasunori Shiono",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 86
        },
        {
            "id": 120,
            "filename": "ff5_earth",
            "title": "Cursed Earth",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 100
        },
        {
            "id": 121,
            "filename": "ff4_town",
            "title": "Welcome to Our Town",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 77
        },
        {
            "id": 122,
            "filename": "sgf_battle",
            "title": "Battle #5",
            "game": "Saga Frontier",
            "composer": "Kenji Ito",
            "arranger": "Tsushiy",
            "dir": 1,
            "duration": 152
        },
        {
            "id": 123,
            "filename": "ff5_bridge",
            "title": "Clash on the Big Bridge",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 137
        },
        {
            "id": 124,
            "filename": "xng_emperor",
            "title": "Grahf Emperor of Darkness",
            "game": "Xenogears",
            "composer": "Yasunori Mitsuda",
            "arranger": "Tsushiy",
            "dir": 1,
            "duration": 217
        },
        {
            "id": 125,
            "filename": "ff5_tenderness",
            "title": "Tenderness in the Air",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 142
        },
        {
            "id": 126,
            "filename": "smrpg_boss",
            "title": "Fight Against an Armed Boss",
            "game": "Super Mario RPG",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 106
        },
        {
            "id": 127,
            "filename": "btm_ruins",
            "title": "Laboratory Ruins",
            "game": "Batman: The Video Game",
            "composer": "Naoki Kodaka",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 122
        },
        {
            "id": 128,
            "filename": "erp_countdown",
            "title": "Final Countdown",
            "game": "Europe",
            "composer": "N/A",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 129,
            "filename": "ar2_palace",
            "title": "Ice Palace",
            "game": "ActRaiser 2",
            "composer": "Yuzo Koshiro",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 32
        },
        {
            "id": 130,
            "filename": "xng_bonds",
            "title": "Bonds of Sea and Fire",
            "game": "Xenogears",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 171
        },
        {
            "id": 131,
            "filename": "ff6_ww3",
            "title": "The Wedding Waltz #3",
            "game": "Final Fantasy VI",
            "composer": "Nobuo Uematsu",
            "arranger": "N/A",
            "dir": 1,
            "duration": 32
        },
        {
            "id": 132,
            "filename": "ys_chambers",
            "title": "Darm Tower Upper Chambers",
            "game": "Ys",
            "composer": "Ryo Yonemitsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 64
        },
        {
            "id": 133,
            "filename": "ff5_exdeath",
            "title": "Neo Exdeath",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 134,
            "filename": "wa_zed",
            "title": "Zed's Theme",
            "game": "Wild Arms",
            "composer": "Michiko Naruke",
            "arranger": "Gi Nattak, emberling",
            "dir": 1,
            "duration": 80
        },
        {
            "id": 135,
            "filename": "ff2_kashuon",
            "title": "Kashuon Castle (Battle Remix)",
            "game": "Final Fantasy II",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 190
        },
        {
            "id": 136,
            "filename": "udt_megalovania",
            "title": "Megalovania",
            "game": "Undertale",
            "composer": "Toby Fox",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 137,
            "filename": "wk_determination",
            "title": "Determination",
            "game": "William Kage Music",
            "composer": "William Kage",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 136
        },
        {
            "id": 138,
            "filename": "avgn_fuckballs",
            "title": "Future Fuckballs 2010",
            "game": "Angry Video Game Nerd Adventures",
            "composer": "FreakZone Games",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 139,
            "filename": "fft_battle",
            "title": "Unavoidable Battle",
            "game": "Final Fantasy Tactics",
            "composer": "Masaharu Iwata",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 180
        },
        {
            "id": 140,
            "filename": "zll_windfish",
            "title": "Balad of the Windfish",
            "game": "The Legend of Zelda: Link's Awakening",
            "composer": "Kazumi Totaka, Minako Hamano, Kozue Ishikawa",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 141,
            "filename": "etb__business",
            "title": "Pokey Means Business",
            "game": "Earthbound",
            "composer": "Keiichi Suzuki, Hirokazu Tanaka",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 200
        },
        {
            "id": 142,
            "filename": "ff9_waltz",
            "title": "Black Waltz",
            "game": "Final Fantasy IX",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 90
        },
        {
            "id": 143,
            "filename": "fft_ramza",
            "title": "Ramza's Theme",
            "game": "Final Fantasy Tactics",
            "composer": "Hitoshi Sakimoto",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 51
        },
        {
            "id": 144,
            "filename": "drkn_night",
            "title": "Earth Night",
            "game": "Drakkhen",
            "composer": "Hiroyuki Masuno",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 145,
            "filename": "ff6_overture_1",
            "title": "Overture 1",
            "game": "Final Fantasy VI",
            "composer": "Nobuo Uematsu",
            "arranger": "N/A",
            "dir": 1,
            "duration": 103
        },
        {
            "id": 146,
            "filename": "sd3_fission",
            "title": "Nuclear Fission",
            "game": "Seiken Densetsu 3",
            "composer": "Hiroki Kikuta",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 180
        },
        {
            "id": 147,
            "filename": "lf_evil",
            "title": "Wave of Evil",
            "game": "Lufia 1",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 64
        },
        {
            "id": 148,
            "filename": "sf2_guile",
            "title": "Guile's Theme",
            "game": "Street Fighter 2",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 128
        },
        {
            "id": 149,
            "filename": "ff6_aria",
            "title": "Aria di Mezzo Carattere",
            "game": "Final Fantasy VI",
            "composer": "Nobuo Uematsu",
            "arranger": "N/A",
            "dir": 1,
            "duration": 233
        },
        {
            "id": 150,
            "filename": "dms_allant",
            "title": "Old King Allant",
            "game": "Demon's Souls",
            "composer": "Shunsuke Kida",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 76
        },
        {
            "id": 151,
            "filename": "7th_saizer",
            "title": "Valsu Saizer",
            "game": "7th Saga",
            "composer": "Norihiko Yamanuki",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 144
        },
        {
            "id": 152,
            "filename": "bfm_nightime",
            "title": "Nightime",
            "game": "Brave Fencer Musashi",
            "composer": "Tsuyoshi Sekito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 153,
            "filename": "lf2_duel",
            "title": "The Last Duel",
            "game": "Lufia II",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 145
        },
        {
            "id": 154,
            "filename": "ff4_golbez",
            "title": "Golbez, Clad In Darkness",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 114
        },
        {
            "id": 155,
            "filename": "jc_battle",
            "title": "Battle ~ Drill",
            "game": "Jade Cocoon",
            "composer": "Kimitaka Matsumae",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 161
        },
        {
            "id": 156,
            "filename": "rs3_king",
            "title": "Year of the Holy King",
            "game": "Romancing Saga 3",
            "composer": "Kenji Ito",
            "arranger": "JCE3000GT",
            "dir": 1,
            "duration": 99
        },
        {
            "id": 157,
            "filename": "ff4_boss",
            "title": "Boss Theme",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "MetroidQuest",
            "dir": 1,
            "duration": 126
        },
        {
            "id": 158,
            "filename": "rs_city",
            "title": "Crystal City",
            "game": "Romancing Saga",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 110
        },
        {
            "id": 159,
            "filename": "dq7_days",
            "title": "Days of Sadness",
            "game": "Dragon Quest VII",
            "composer": "Koichi Sugiyama",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 212
        },
        {
            "id": 160,
            "filename": "ff7_fight_further",
            "title": "Those Who Fight Further",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 207
        },
        {
            "id": 161,
            "filename": "skd_reminiscence",
            "title": "Reminiscence Ensemble Version",
            "game": "Suikoden 2",
            "composer": "Miki Higashino, Keiko Fukami",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 146
        },
        {
            "id": 162,
            "filename": "ff6_overture_2",
            "title": "Overture 2",
            "game": "Final Fantasy VI",
            "composer": "Nobuo Uematsu",
            "arranger": "N/A",
            "dir": 1,
            "duration": 41
        },
        {
            "id": 163,
            "filename": "sm3_airships",
            "title": "Airships",
            "game": "Super Mario 3",
            "composer": "Koji Kondo",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 67
        },
        {
            "id": 164,
            "filename": "sw_cantina",
            "title": "Cantina",
            "game": "Star Wars",
            "composer": "John Williams",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 64
        },
        {
            "id": 165,
            "filename": "ff8_machine_gun",
            "title": "The Man With The Machine Gun",
            "game": "Final Fantasy VIII",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 168
        },
        {
            "id": 166,
            "filename": "iog_dream",
            "title": "Will's Dream",
            "game": "Illusion of Gaia",
            "composer": "Yasuhiro Kawasaki",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 210
        },
        {
            "id": 167,
            "filename": "bl_campbell",
            "title": "Green Land Campbell",
            "game": "Bahamut Lagoon",
            "composer": "Noriko Matsueda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 158
        },
        {
            "id": 168,
            "filename": "smrpg_mallow",
            "title": "Mallow Finds Out He Is Not A Tadpole",
            "game": "Super Mario RPG",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 42
        },
        {
            "id": 169,
            "filename": "ob_wall",
            "title": "Wall of Defense",
            "game": "Ogre Battle",
            "composer": "Masaharu Iwata, Hitoshi Sakimoto",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 170,
            "filename": "shfc2_village",
            "title": "Elven Village",
            "game": "Shining Force II",
            "composer": "Motoaki Takenouchi",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 91
        },
        {
            "id": 171,
            "filename": "ct_lavos",
            "title": "Lavos Core",
            "game": "Chrono Trigger",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 208
        },
        {
            "id": 172,
            "filename": "mmpr_city",
            "title": "Stage 1, City",
            "game": "Mighty Morphin Power Rangers",
            "composer": "Kinuyo Yamashita, Iku Mizutani",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 198
        },
        {
            "id": 173,
            "filename": "ct_shell",
            "title": "Inside the Shell",
            "game": "Chrono Trigger",
            "composer": "Minoru Akao",
            "arranger": "N/A",
            "dir": 3,
            "duration": 71
        },
        {
            "id": 174,
            "filename": "ff5_crickets",
            "title": "Crickets",
            "game": "Final Fantasy V",
            "composer": "Minoru Akao",
            "arranger": "N/A",
            "dir": 3,
            "duration": 240
        },
        {
            "id": 175,
            "filename": "rs_beat",
            "title": "Beat Them Up!",
            "game": "Romancing Saga",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 202
        },
        {
            "id": 176,
            "filename": "sf2_vega",
            "title": "Vega's Theme",
            "game": "Street Fighter II",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 104
        },
        {
            "id": 177,
            "filename": "rs2_heroes",
            "title": "Seven Heroes Battle",
            "game": "Romancing Saga 2",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 158
        },
        {
            "id": 178,
            "filename": "ffx_yuna",
            "title": "Yuna's Decision",
            "game": "Final Fantasy X",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 194
        },
        {
            "id": 179,
            "filename": "udt_bonetrousle",
            "title": "Bonetrousle",
            "game": "Undertale",
            "composer": "Toby Fox",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 115
        },
        {
            "id": 180,
            "filename": "shfc_sad",
            "title": "Sad Theme",
            "game": "Shining Force 1",
            "composer": "Motoaki Takenouchi",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 139
        },
        {
            "id": 181,
            "filename": "smrpg_sewers",
            "title": "Kero Sewers",
            "game": "Super Mario RPG",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 59
        },
        {
            "id": 182,
            "filename": "ff4_world",
            "title": "Somewhere in the World",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 47
        },
        {
            "id": 183,
            "filename": "ff6_river_raft",
            "title": "The Raft and the Flowing River",
            "game": "Final Fantasy VI",
            "composer": "Minoru Akao",
            "arranger": "N/A",
            "dir": 3,
            "duration": 15
        },
        {
            "id": 184,
            "filename": "ff6_fire",
            "title": "Fire!",
            "game": "Final Fantasy VI",
            "composer": "Minoru Akao",
            "arranger": "N/A",
            "dir": 3,
            "duration": 6
        },
        {
            "id": 185,
            "filename": "ff6_train",
            "title": "Dream of a Train",
            "game": "Final Fantasy VI",
            "composer": "Minoru Akao",
            "arranger": "N/A",
            "dir": 3,
            "duration": 240
        },
        {
            "id": 186,
            "filename": "ff6_chocobo",
            "title": "Chocobos Running",
            "game": "Final Fantasy VI",
            "composer": "Minoru Akao",
            "arranger": "N/A",
            "dir": 3,
            "duration": 1
        },
        {
            "id": 187,
            "filename": "ff3_cloud",
            "title": "Cloud of Darkness",
            "game": "Final Fantasy III",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 97
        },
        {
            "id": 188,
            "filename": "pq_lullaby",
            "title": "Godom Lullaby",
            "game": "Paladin's Quest",
            "composer": "Kohei Tanaka",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 189,
            "filename": "som_oracle",
            "title": "Oracle",
            "game": "Secret of Mana",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 171
        },
        {
            "id": 190,
            "filename": "som_dance",
            "title": "Meridian Dance",
            "game": "Secret of Mana",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 210
        },
        {
            "id": 191,
            "filename": "ff4_dreadful",
            "title": "Dreadful Battle",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 177
        },
        {
            "id": 192,
            "filename": "ff5_decisive",
            "title": "The Decisive Battle",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 193,
            "filename": "rsms_prelude",
            "title": "Prelude to Battle",
            "game": "Romancing Saga Minstrel Song",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 232
        },
        {
            "id": 194,
            "filename": "rs2_last",
            "title": "Last Battle",
            "game": "Romancing Saga 2",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 162
        },
        {
            "id": 195,
            "filename": "ct_battle_2",
            "title": "Unused Battle 2",
            "game": "Chrono Trigger",
            "composer": "Yasunori Mitsuda",
            "arranger": "MetroidQuest",
            "dir": 1,
            "duration": 73
        },
        {
            "id": 196,
            "filename": "alundra_dust",
            "title": "Dust to Dust",
            "game": "Alundra",
            "composer": "Kohei Tanaka",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 208
        },
        {
            "id": 197,
            "filename": "ff5_boss",
            "title": "Boss Theme",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 135
        },
        {
            "id": 198,
            "filename": "swom_victory",
            "title": "Believe in Victory",
            "game": "Sword of Mana",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 199,
            "filename": "q2_rage",
            "title": "Rage",
            "game": "Quake 2",
            "composer": "Sascha Dikiciyan",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 200,
            "filename": "ct_boss2",
            "title": "Boss Battle 2",
            "game": "Chrono Trigger",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 180
        },
        {
            "id": 201,
            "filename": "kh_forze",
            "title": "Forze Del Male",
            "game": "Kingdom Hearts",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 213
        },
        {
            "id": 202,
            "filename": "ff7_jenova",
            "title": "J-E-N-O-V-A",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 133
        },
        {
            "id": 203,
            "filename": "ff9_boss",
            "title": "Boss Battle",
            "game": "Final Fantasy IX",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 231
        },
        {
            "id": 204,
            "filename": "iog_adrift",
            "title": "Adrift",
            "game": "Illusion of Gaia",
            "composer": "Yasuhiro Kawasaki",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 62
        },
        {
            "id": 205,
            "filename": "sd3_wolf",
            "title": "Left Handed Wolf",
            "game": "Seiken Densetsu 3",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 162
        },
        {
            "id": 206,
            "filename": "ej2_lorenzo",
            "title": "Lorenzo's Soil",
            "game": "Earthworm Jim 2",
            "composer": "Tommy Tallarico",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 207,
            "filename": "z3_dark_world",
            "title": "Dark World",
            "game": "The Legend of Zelda: A Link to the Past",
            "composer": "Koji Kondo",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 118
        },
        {
            "id": 208,
            "filename": "ffmq_boss",
            "title": "Boss Theme",
            "game": "Final Fantasy Mystic Quest",
            "composer": "Ryuji Sasai, Yasuhiro Kawakami",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 98
        },
        {
            "id": 209,
            "filename": "ffmq_king",
            "title": "Dark King",
            "game": "Final Fantasy Mystic Quest",
            "composer": "Ryuji Sasai, Yasuhiro Kawakami",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 119
        },
        {
            "id": 210,
            "filename": "cc_emotions",
            "title": "Singing Emotions",
            "game": "Chrono Cross",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 144
        },
        {
            "id": 211,
            "filename": "vp_leaf",
            "title": "Turn Over a New Leaf",
            "game": "Valkyrie Profile",
            "composer": "Motoi Sakuraba",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 86
        },
        {
            "id": 212,
            "filename": "skd2_neclord",
            "title": "Gothic Neclord",
            "game": "Suikoden II",
            "composer": "Miki Higashino, Keiko Fukami",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 226
        },
        {
            "id": 213,
            "filename": "mmx_storm_eagle",
            "title": "Storm Eagle (Storm Eagle & Flame Mammoth mix/medley)",
            "game": "Mega Man X",
            "composer": "Alph Lyla group",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 214
        },
        {
            "id": 214,
            "filename": "gs2_battle",
            "title": "Felix Battle Theme",
            "game": "Golden Sun 2",
            "composer": "Motoi Sakuraba",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 102
        },
        {
            "id": 215,
            "filename": "fz_field",
            "title": "Fire Field (Metal Remix)",
            "game": "F-Zero",
            "composer": "Yumiko Kanki, Naoto Ishida",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 229
        },
        {
            "id": 216,
            "filename": "ffl2_aspiration",
            "title": "Aspiration",
            "game": "Final Fantasy Legend II",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 72
        },
        {
            "id": 217,
            "filename": "top_village",
            "title": "Ary Village",
            "game": "Tales of Phantasia",
            "composer": "Motoi Sakuraba, Shinji Tamura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 67
        },
        {
            "id": 218,
            "filename": "evo_boss",
            "title": "Boss Theme",
            "game": "E.V.O. Search for Eden",
            "composer": "Koichi Sugiyama",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 140
        },
        {
            "id": 219,
            "filename": "som_danger",
            "title": "Danger",
            "game": "Secret of Mana",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 235
        },
        {
            "id": 220,
            "filename": "z3_village",
            "title": "Kakariko Village",
            "game": "The Legend of Zelda: A Link to the Past",
            "composer": "Koji Kondo",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 192
        },
        {
            "id": 221,
            "filename": "smrpg_smithy",
            "title": "Fight Against Smithy",
            "game": "Super Mario RPG",
            "composer": "Yoko Shimomura",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 100
        },
        {
            "id": 222,
            "filename": "ff7_costa",
            "title": "Costa Del Sol",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 1,
            "duration": 133
        },
        {
            "id": 223,
            "filename": "smtd_boss",
            "title": "Boss Theme",
            "game": "Super Metroid/Prime",
            "composer": "Minako Hamano, Kenji Yamamoto",
            "arranger": "Jackimus",
            "dir": 1,
            "duration": 126
        },
        {
            "id": 224,
            "filename": "ff9_final",
            "title": "The Final Battle",
            "game": "Final Fantasy IX",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 225,
            "filename": "ff11_recollection",
            "title": "Recollection",
            "game": "Final Fantasy XI",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 226,
            "filename": "ff6_ending",
            "title": "Ending Song 2",
            "game": "Final Fantasy VI",
            "composer": "Nobuo Uematsu",
            "arranger": "N/A",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 227,
            "filename": "ff5_hurry",
            "title": "Hurry! Hurry!",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 48
        },
        {
            "id": 228,
            "filename": "ff5_book",
            "title": "Sealed Book",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 81
        },
        {
            "id": 229,
            "filename": "pg_carol_anne",
            "title": "Carol Anne's Theme",
            "game": "Poltergheist",
            "composer": "Jerry Goldsmith",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 128
        },
        {
            "id": 230,
            "filename": "ff4_paladin",
            "title": "The Paladin",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 20
        },
        {
            "id": 231,
            "filename": "rtsd_overworld",
            "title": "Overworld",
            "game": "RPG Tsukuru Super Dante",
            "composer": "Shigeharu Isoda, Mitsuhiro Arisaka",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 217
        },
        {
            "id": 232,
            "filename": "lf_war",
            "title": "Spoils of War",
            "game": "Lufia 1",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 58
        },
        {
            "id": 233,
            "filename": "ff7_god",
            "title": "Birth of a God",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 1,
            "duration": 236
        },
        {
            "id": 234,
            "filename": "totr_chaser",
            "title": "Spirit Chaser",
            "game": "Treasure of the Rudras",
            "composer": "Ryuji Sasai",
            "arranger": "Gi Nattak, emberling",
            "dir": 1,
            "duration": 109
        },
        {
            "id": 235,
            "filename": "swom_pain",
            "title": "Unrelenting Pain",
            "game": "Sword of Mana",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 115
        },
        {
            "id": 236,
            "filename": "dbz_battle",
            "title": "Battle Theme #7",
            "game": "Dragon Ball Z Budokai",
            "composer": "Kenji Yamamoto",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 141
        },
        {
            "id": 237,
            "filename": "fnaf_travel",
            "title": "8 Bit Travel",
            "game": "Five Nights at Freddys",
            "composer": "Leon Riskin",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 238,
            "filename": "ff6_maria",
            "title": "Draco and Maria Singing",
            "game": "Final Fantasy VI",
            "composer": "Nobuo Uematsu",
            "arranger": "N/A",
            "dir": 1,
            "duration": 43
        },
        {
            "id": 239,
            "filename": "trnm_ressurection",
            "title": "Ressurection",
            "game": "Terranigma",
            "composer": "Masanori Hikichi",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 24
        },
        {
            "id": 240,
            "filename": "tc_title",
            "title": "Title",
            "game": "Treasure Conflix",
            "composer": "Junya Nakano",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 93
        },
        {
            "id": 241,
            "filename": "wa_win",
            "title": "Win!",
            "game": "Wild Arms",
            "composer": "Michiko Naruke",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 27
        },
        {
            "id": 242,
            "filename": "lf2_island",
            "title": "Island in the Void",
            "game": "Lufia 2",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 173
        },
        {
            "id": 243,
            "filename": "xng_awakening",
            "title": "Awakening",
            "game": "Xenogears",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 237
        },
        {
            "id": 244,
            "filename": "ff8_force",
            "title": "Force Your Way",
            "game": "Final Fantasy VIII",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 1,
            "duration": 226
        },
        {
            "id": 245,
            "filename": "rs_tears",
            "title": "Heartfelt Tears",
            "game": "Romancing Saga",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 146
        },
        {
            "id": 246,
            "filename": "ebrk_berserker",
            "title": "Berserker",
            "game": "Energy Breaker",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 107
        },
        {
            "id": 247,
            "filename": "emnm_influence",
            "title": "Under the Influence",
            "game": "Eminem",
            "composer": "Dr. Dre",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 248,
            "filename": "arcana_armageddon",
            "title": "Second Armageddon",
            "game": "Arcana",
            "composer": "Jun Ishikawa, Hirokazu Ando",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 128
        },
        {
            "id": 249,
            "filename": "rs3_devils",
            "title": "Four Noble Devils",
            "game": "Romancing Saga 3",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 137
        },
        {
            "id": 250,
            "filename": "ff7_flowers",
            "title": "Flowers Blooming in the Church",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 251,
            "filename": "top_night",
            "title": "Bright Moonlit Night",
            "game": "Tales of Phantasia",
            "composer": "Motoi Sakuraba, Shinji Tamura",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 128
        },
        {
            "id": 252,
            "filename": "rs3_alarm",
            "title": "Alarm",
            "game": "Romancing Saga 3",
            "composer": "Minoru Akao",
            "arranger": "N/A",
            "dir": 3,
            "duration": 240
        },
        {
            "id": 253,
            "filename": "iog_womb",
            "title": "In the Earthen Womb",
            "game": "Illusion of Gaia",
            "composer": "Yasuhiro Kawasaki",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 240
        },
        {
            "id": 254,
            "filename": "kq6_bookworm",
            "title": "The Bookworm",
            "game": "King's Quest VI",
            "composer": "Chris Braymen",
            "arranger": "Gi Nattak",
            "dir": 1,
            "duration": 145
        }
    ],
    "rotds_b": [
        {
            "id": 1,
            "filename": "bof2_counter",
            "title": "Cross Counter",
            "game": "Breath of Fire 2",
            "composer": "Yuko Takehara",
            "arranger": "emberling",
            "dir": 2,
            "duration": 58
        },
        {
            "id": 2,
            "filename": "ff12_power",
            "title": "Lust for Power",
            "game": "Final Fantasy XII",
            "composer": "Hayato Matsuo",
            "arranger": "emberling",
            "dir": 2,
            "duration": 182
        },
        {
            "id": 3,
            "filename": "top_curtain",
            "title": "Raising a Curtain",
            "game": "Tales of Phantasia",
            "composer": "Motoi Sakuraba, Shinji Tamura",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 5,
            "filename": "ffmq_shrine",
            "title": "Shrine of Light",
            "game": "Final Fantasy Mystic Quest",
            "composer": "Ryuji Sasai, Yasuhiro Kawakami",
            "arranger": "emberling",
            "dir": 2,
            "duration": 192
        },
        {
            "id": 6,
            "filename": "ebrk_bells",
            "title": "The Prayer Bells do not Toll",
            "game": "Energy Breaker",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 181
        },
        {
            "id": 7,
            "filename": "ps2_mystery",
            "title": "Mystery",
            "game": "Phantasy Star 2",
            "composer": "Tokuhiko Uwabo",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 77
        },
        {
            "id": 8,
            "filename": "ff9_gargan_roo",
            "title": "Gargan Roo",
            "game": "Final Fantasy IX",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 88
        },
        {
            "id": 9,
            "filename": "ct_chest",
            "title": "Sealed Chest",
            "game": "Chrono Trigger",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 4
        },
        {
            "id": 10,
            "filename": "fe_doors",
            "title": "Doors of Destiny",
            "game": "Fire Emblem: Genealogy of the Holy War",
            "composer": "Yuka Tsujiyoko",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 173
        },
        {
            "id": 11,
            "filename": "ff7_town",
            "title": "Mining Town",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 168
        },
        {
            "id": 12,
            "filename": "totr_city",
            "title": "Underwater City",
            "game": "Treasure of the Rudra",
            "composer": "Ryuji Sasai",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 105
        },
        {
            "id": 13,
            "filename": "tod_fangs",
            "title": "Bared Fangs",
            "game": "Tales of Destiny",
            "composer": "Motoi Sakuraba",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 142
        },
        {
            "id": 14,
            "filename": "lal_speech",
            "title": "Uranus' Speech",
            "game": "Live A Live",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 85
        },
        {
            "id": 15,
            "filename": "swon_chain",
            "title": "Chain of Fate",
            "game": "Sword of Mana",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 224
        },
        {
            "id": 16,
            "filename": "potc_pirate",
            "title": "He's a Pirate!",
            "game": "Pirate's of the Caribbean",
            "composer": "Klaus Badelt, Hans Zimmer",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 131
        },
        {
            "id": 17,
            "filename": "wcr2_orc1",
            "title": "Orc 1",
            "game": "Warcraft 2",
            "composer": "Glenn Stafford",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 18,
            "filename": "ff4_calcobrena",
            "title": "Dancing Calcobrena",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 159
        },
        {
            "id": 19,
            "filename": "crstl_fields",
            "title": "Wild Fields",
            "game": "Crystalis",
            "composer": "Yoko Osaka",
            "arranger": "emberling",
            "dir": 2,
            "duration": 112
        },
        {
            "id": 20,
            "filename": "rs_coup",
            "title": "Coup de Grace",
            "game": "Romancing Saga",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 144
        },
        {
            "id": 21,
            "filename": "ffmq_rock",
            "title": "Rock Theme",
            "game": "Final Fantasy Mystic Quest",
            "composer": "Ryuji Sasai, Yasuhiro Kawakami",
            "arranger": "emberling",
            "dir": 2,
            "duration": 51
        },
        {
            "id": 22,
            "filename": "fmgh_nature",
            "title": "Nature",
            "game": "Front Mission: Gun Hazard",
            "composer": "N. Uematsu, Y. Mitsuda, J. Nakano, M. Hamauzu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 162
        },
        {
            "id": 23,
            "filename": "sd3_winter",
            "title": "Another Winter",
            "game": "Seiken Densetsu 3",
            "composer": "Hiroki Kikuta",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 24,
            "filename": "sd3_paths",
            "title": "Few Paths Forbidden",
            "game": "Seiken Densetsu 3",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 180
        },
        {
            "id": 25,
            "filename": "xnb_gaur",
            "title": "Gaur Plains",
            "game": "Xenoblade",
            "composer": "ACE+",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 26,
            "filename": "swon_courage",
            "title": "Touched by Courage and Pride",
            "game": "Sword of Mana",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 186
        },
        {
            "id": 27,
            "filename": "fmgh_silencer",
            "title": "Silencer",
            "game": "Front Mission: Gun Hazard",
            "composer": "N. Uematsu, Y. Mitsuda, J. Nakano, M. Hamauzu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 128
        },
        {
            "id": 28,
            "filename": "bl_matelite",
            "title": "Matelite's Theme",
            "game": "Bahamut Lagoon",
            "composer": "Noriko Matsueda",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 29,
            "filename": "rs_village",
            "title": "Deserted Village",
            "game": "Romancing Saga",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 135
        },
        {
            "id": 31,
            "filename": "ff5_exdeath",
            "title": "The Evil Lord Exdeath",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 120
        },
        {
            "id": 32,
            "filename": "smw2_castle",
            "title": "Castle",
            "game": "Super Mario World 2: Yoshi's Island",
            "composer": "Koji Kondo",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 117
        },
        {
            "id": 33,
            "filename": "ff4_illus_world",
            "title": "Illusionary World",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 87
        },
        {
            "id": 34,
            "filename": "ot_sunshade",
            "title": "Sunshade City",
            "game": "Octopath Traveler",
            "composer": "Yasunori Nishiki",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 35,
            "filename": "rng_cathedral",
            "title": "Cursed Cathedral",
            "game": "RednGreen",
            "composer": "RednGreen Music",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 152
        },
        {
            "id": 36,
            "filename": "rs3_battle",
            "title": "The Battle",
            "game": "Romancing Saga 3",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 186
        },
        {
            "id": 37,
            "filename": "swom_battlefield",
            "title": "Endless Battlefield",
            "game": "Sword of Mana",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 94
        },
        {
            "id": 39,
            "filename": "smtd_crateria",
            "title": "Crateria",
            "game": "Super Metroid",
            "composer": "Minako Hamano, Kenji Yamamoto",
            "arranger": "emberling",
            "dir": 2,
            "duration": 207
        },
        {
            "id": 40,
            "filename": "xnbc2_tantal",
            "title": "Kingdom Of Tantal (Day)",
            "game": "Xenoblade Chronicles 2",
            "composer": "ACE",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 41,
            "filename": "cc_dragon",
            "title": "Ancient Dragon's Stronghold",
            "game": "Chrono Cross",
            "composer": "Yasunori Mitsuda",
            "arranger": "emberling",
            "dir": 2,
            "duration": 238
        },
        {
            "id": 42,
            "filename": "swom_village",
            "title": "Village",
            "game": "Sword of Mana",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 184
        },
        {
            "id": 43,
            "filename": "sd3_counterpoint",
            "title": "Weird Counterpoint",
            "game": "Seiken Densetsu 3",
            "composer": "Hiroki Kikuta",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 44,
            "filename": "fe_truth",
            "title": "Truth, Despair, and Hope",
            "game": "Fire Emblem: The Sacred Stones",
            "composer": "Yoshihiko Kitamura, Saki Haruyama, Yoshito Hirano",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 190
        },
        {
            "id": 45,
            "filename": "bof3_farm",
            "title": "The Farm",
            "game": "Breath of Fire 3",
            "composer": "Yoshino Aoki, Akari Kaida",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 163
        },
        {
            "id": 46,
            "filename": "rs2_kujinshi",
            "title": "Battle With Kujinshi",
            "game": "Romancing Saga 2",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 90
        },
        {
            "id": 47,
            "filename": "ffmq_victory",
            "title": "Victory Theme",
            "game": "Final Fantasy Mystic Quest",
            "composer": "Ryuji Sasai, Yasuhiro Kawakami",
            "arranger": "emberling",
            "dir": 2,
            "duration": 17
        },
        {
            "id": 48,
            "filename": "ff10_path",
            "title": "Path of Repentance",
            "game": "Final Fantasy X",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 127
        },
        {
            "id": 49,
            "filename": "eb_snowman",
            "title": "Snowman",
            "game": "Earthbound",
            "composer": "Keiichi Suzuki, Hirokazu Tanaka",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 143
        },
        {
            "id": 50,
            "filename": "ffx_battle",
            "title": "Battle",
            "game": "Final Fantasy X",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 179
        },
        {
            "id": 51,
            "filename": "totr_battle",
            "title": "Battle for the Fields",
            "game": "Treasure of the Rudra",
            "composer": "Ryuji Sasai",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 75
        },
        {
            "id": 52,
            "filename": "dkcl2_garden",
            "title": "Garden of Memories",
            "game": "Dark Cloud 2",
            "composer": "Tomohito Nishiura",
            "arranger": "Cecil188",
            "dir": 2,
            "duration": 160
        },
        {
            "id": 53,
            "filename": "ffmq_gale",
            "title": "Mount Gale",
            "game": "Final Fantasy Mystic Quest",
            "composer": "Ryuji Sasai, Yasuhiro Kawakami",
            "arranger": "emberling",
            "dir": 2,
            "duration": 110
        },
        {
            "id": 54,
            "filename": "som_intruder",
            "title": "Holy Intruder",
            "game": "Secret of Mana",
            "composer": "Hiroki Kikuta",
            "arranger": "emberling",
            "dir": 2,
            "duration": 62
        },
        {
            "id": 55,
            "filename": "rs3_katrina",
            "title": "Katrina's Theme",
            "game": "Romancing Saga 3",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 88
        },
        {
            "id": 56,
            "filename": "ff4_night",
            "title": "Good Night",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Tsushiy",
            "dir": 2,
            "duration": 10
        },
        {
            "id": 57,
            "filename": "cc_arni",
            "title": "Arni Village",
            "game": "Chrono Cross",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak, emberling",
            "dir": 2,
            "duration": 126
        },
        {
            "id": 59,
            "filename": "sgf_battle",
            "title": "Battle #3",
            "game": "Saga Frontier",
            "composer": "Kenji Ito",
            "arranger": "Tsushiy",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 60,
            "filename": "lf2_mountain",
            "title": "Towering Mountain",
            "game": "Lufia 2",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 209
        },
        {
            "id": 61,
            "filename": "so2_stream",
            "title": "Pure a Stream",
            "game": "Star Ocean 2",
            "composer": "Motoi Sakuraba",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 62,
            "filename": "chopin_march",
            "title": "Funeral March",
            "game": "Chopin",
            "composer": "N/A",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 15
        },
        {
            "id": 63,
            "filename": "ml_world",
            "title": "World 4",
            "game": "Mario Land",
            "composer": "Hirokazu Tanaka",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 191
        },
        {
            "id": 64,
            "filename": "cc_pyre",
            "title": "Mount Pyre",
            "game": "Chrono Cross",
            "composer": "Yasunori Mitsuda",
            "arranger": "emberling",
            "dir": 2,
            "duration": 192
        },
        {
            "id": 65,
            "filename": "rd_promise",
            "title": "Far Promise ~ Dream Shore",
            "game": "Radical Dreamers",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 66
        },
        {
            "id": 66,
            "filename": "ff8_law",
            "title": "Martial Law",
            "game": "Final Fantasy VIII",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 208
        },
        {
            "id": 67,
            "filename": "bof2_dance",
            "title": "Clumsy Dance",
            "game": "Breath of Fire 2",
            "composer": "Yuko Takehara",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 114
        },
        {
            "id": 68,
            "filename": "ej_tanjerines",
            "title": "Anything But Tangerines",
            "game": "Earthworm Jim",
            "composer": "Tommy Tallarico",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 236
        },
        {
            "id": 69,
            "filename": "totr_flame",
            "title": "Flame And Arrow",
            "game": "Treasure of the Rudra",
            "composer": "Ryuji Sasai",
            "arranger": "emberling",
            "dir": 2,
            "duration": 59
        },
        {
            "id": 70,
            "filename": "fm_war",
            "title": "The Evils of War",
            "game": "Front Mission",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 81
        },
        {
            "id": 71,
            "filename": "fmgh_message",
            "title": "Message of Genoce",
            "game": "Front Mission: Gun Hazard",
            "composer": "N. Uematsu, Y. Mitsuda, J. Nakano, M. Hamauzu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 166
        },
        {
            "id": 72,
            "filename": "brnl_toronto",
            "title": "Town of Toronto",
            "game": "Brainlord",
            "composer": "Masanao Akahori",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 182
        },
        {
            "id": 73,
            "filename": "ff8_lion",
            "title": "Maybe I'm a Lion",
            "game": "Final Fantasy VIII",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 75,
            "filename": "ff14_azys",
            "title": "Azys Lla",
            "game": "Final Fantasy XIV",
            "composer": "Masayoshi Soken",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 76,
            "filename": "ff5_light",
            "title": "Searching the Light",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 84
        },
        {
            "id": 77,
            "filename": "gs_lighthouse",
            "title": "Venus Lighthouse",
            "game": "Golden Sun",
            "composer": "Motoi Sakuraba",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 160
        },
        {
            "id": 78,
            "filename": "kaw_havoc",
            "title": "Havoc",
            "game": "King Arthur's World",
            "composer": "Justin Scharvona",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 141
        },
        {
            "id": 79,
            "filename": "cc_sea",
            "title": "Dead Sea",
            "game": "Chrono Cross",
            "composer": "Yasunori Mitsuda",
            "arranger": "Jackimus, Gi Nattak",
            "dir": 2,
            "duration": 226
        },
        {
            "id": 80,
            "filename": "sg_time",
            "title": "Time Eater",
            "game": "Sonic Generations",
            "composer": "Jun Senoue",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 81,
            "filename": "trnm_sealed",
            "title": "Sealed",
            "game": "Terranigma",
            "composer": "Masanori Hikichi",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 96
        },
        {
            "id": 82,
            "filename": "jts_headquaters",
            "title": "Headquarters",
            "game": "Journey to Silius",
            "composer": "Naoki Kodaka",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 102
        },
        {
            "id": 83,
            "filename": "so_time",
            "title": "Calm Time",
            "game": "Star Ocean",
            "composer": "Motoi Sakuraba",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 158
        },
        {
            "id": 84,
            "filename": "ff10_zanarkan",
            "title": "To Zanarkand",
            "game": "Final Fantasy X",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 85,
            "filename": "ff4_darkness",
            "title": "Into the Darkness",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Tsushiy",
            "dir": 2,
            "duration": 101
        },
        {
            "id": 86,
            "filename": "ff4hol_vulpes",
            "title": "Vulpes (day)",
            "game": "Final Fantasy: The 4 Heroes of Light",
            "composer": "Naoshi Mizuta",
            "arranger": "Tsushiy",
            "dir": 2,
            "duration": 126
        },
        {
            "id": 87,
            "filename": "z3_shop",
            "title": "Shop",
            "game": "The Legend of Zelda: Ocarina of Time",
            "composer": "Koji Kondo",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 115
        },
        {
            "id": 88,
            "filename": "trnm_forest",
            "title": "Evergreen Forest",
            "game": "Terranigma",
            "composer": "Masanori Hikichi",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 89,
            "filename": "ct_will",
            "title": "Those Without the Will to Live",
            "game": "Chrono Trigger",
            "composer": "Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 167
        },
        {
            "id": 90,
            "filename": "ff5_box",
            "title": "Music Box",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 61
        },
        {
            "id": 91,
            "filename": "ff9_sorrow",
            "title": "Unforgettable Sorrow",
            "game": "Final Fantasy IX",
            "composer": "Nobuo Uematsu",
            "arranger": "Tsushiy",
            "dir": 2,
            "duration": 186
        },
        {
            "id": 92,
            "filename": "bof2_beauty",
            "title": "Sleeping Beauty",
            "game": "Breath of Fire 2",
            "composer": "Yuko Takehara",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 64
        },
        {
            "id": 93,
            "filename": "ff8_witches",
            "title": "Succession of Witches",
            "game": "Final Fantasy VIII",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 197
        },
        {
            "id": 94,
            "filename": "ff9_world",
            "title": "Crystal World",
            "game": "Final Fantasy IX",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 204
        },
        {
            "id": 95,
            "filename": "snc_sonic",
            "title": "Sonic.exe",
            "game": "Kyu S. Music",
            "composer": "Kyu S.",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 96,
            "filename": "ff3_tozas",
            "title": "Cute Little Tozas",
            "game": "Final Fantasy III",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 83
        },
        {
            "id": 97,
            "filename": "xng_giant",
            "title": "Steel Giant",
            "game": "Xenogears",
            "composer": "Yasunori Mitsuda",
            "arranger": "emberling",
            "dir": 2,
            "duration": 132
        },
        {
            "id": 98,
            "filename": "iog_whispers",
            "title": "Ominous Whispers",
            "game": "Illusion of Gaia",
            "composer": "Yasuhiro Kawasaki",
            "arranger": "emberling",
            "dir": 2,
            "duration": 218
        },
        {
            "id": 99,
            "filename": "pkm_battle",
            "title": "Trainer Battle",
            "game": "Pokemon red/blue/yellow",
            "composer": "Junichi Masuda",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 212
        },
        {
            "id": 100,
            "filename": "ys3_seal",
            "title": "Seal of Time",
            "game": "Ys3",
            "composer": "Mieko Ishikawa",
            "arranger": "emberling",
            "dir": 2,
            "duration": 102
        },
        {
            "id": 101,
            "filename": "som_star",
            "title": "The Dark Star",
            "game": "Secret of Mana",
            "composer": "Hiroki Kikuta",
            "arranger": "emberling",
            "dir": 2,
            "duration": 132
        },
        {
            "id": 102,
            "filename": "rs3_palace",
            "title": "Underwater Palace",
            "game": "Romancing Saga 3",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 138
        },
        {
            "id": 103,
            "filename": "dm2_doom",
            "title": "Doom",
            "game": "Doom II",
            "composer": "Bobby Prince",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 104,
            "filename": "ff7_snow",
            "title": "Buried in the Snow",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 105,
            "filename": "rd_flame",
            "title": "Frozen Flame",
            "game": "Radical Dreamers",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 156
        },
        {
            "id": 106,
            "filename": "smtd_incoming",
            "title": "Hostiles Incoming",
            "game": "Super Metroid",
            "composer": "Minako Hamano, Kenji Yamamoto",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 64
        },
        {
            "id": 107,
            "filename": "khb_place",
            "title": "Enter the Place",
            "game": "Koi Ha Balance",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 50
        },
        {
            "id": 109,
            "filename": "top_overworld",
            "title": "Overworld Theme 3",
            "game": "Tales of Phantasia",
            "composer": "Motoi Sakuraba, Shinji Tamura",
            "arranger": "emberling",
            "dir": 2,
            "duration": 164
        },
        {
            "id": 110,
            "filename": "gs_ruins",
            "title": "Tunnel Ruins",
            "game": "Golden Sun",
            "composer": "Motoi Sakuraba",
            "arranger": "emberling",
            "dir": 2,
            "duration": 174
        },
        {
            "id": 111,
            "filename": "ff7_fight",
            "title": "Those Who Fight",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 134
        },
        {
            "id": 112,
            "filename": "ff9_eiko",
            "title": "Eiko's Theme",
            "game": "Final Fantasy IX",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 113,
            "filename": "lal_knock",
            "title": "Knock You Down!",
            "game": "Live A Live",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 231
        },
        {
            "id": 114,
            "filename": "eldr_madeline",
            "title": "Madeline's Theme",
            "game": "Electric Dreams",
            "composer": "Giorgio Moroder",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 115,
            "filename": "top_spirit",
            "title": "Fighting of the Spirit",
            "game": "Tales of Phantasia",
            "composer": "Motoi Sakuraba, Shinji Tamura",
            "arranger": "emberling",
            "dir": 2,
            "duration": 180
        },
        {
            "id": 116,
            "filename": "kh_wish",
            "title": "A Very Small Wish",
            "game": "Kingdom Hearts",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 121
        },
        {
            "id": 117,
            "filename": "top_mint",
            "title": "Mint's Theme",
            "game": "Tales of Phantasia",
            "composer": "Motoi Sakuraba, Shinji Tamura",
            "arranger": "emberling",
            "dir": 2,
            "duration": 214
        },
        {
            "id": 118,
            "filename": "xnb_names",
            "title": "You Will Know Our Names",
            "game": "Xenoblade",
            "composer": "ACE+",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 119,
            "filename": "bof_battling",
            "title": "Battling",
            "game": "Breath of Fire",
            "composer": "Y. Fujita, M. Yamaguchi, M. Fuji, Y. Shimomura, T. Nishimura",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 68
        },
        {
            "id": 120,
            "filename": "cc_marshes",
            "title": "Hydra Marshes",
            "game": "Chrono Cross",
            "composer": "Yasunori Mitsuda",
            "arranger": "emberling",
            "dir": 2,
            "duration": 187
        },
        {
            "id": 121,
            "filename": "ff4_troian",
            "title": "Troian Beauty",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 94
        },
        {
            "id": 122,
            "filename": "sgf_battle_2",
            "title": "Battle #2",
            "game": "Saga Frontier",
            "composer": "Kenji Ito",
            "arranger": "Tsushiy",
            "dir": 2,
            "duration": 194
        },
        {
            "id": 123,
            "filename": "ff5_clash",
            "title": "Clash on the Big Bridge",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 137
        },
        {
            "id": 124,
            "filename": "bl_gudruff",
            "title": "Gudruff's Theme",
            "game": "Bahamut Lagoon",
            "composer": "Noriko Matsueda",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 165
        },
        {
            "id": 125,
            "filename": "xng_clouds",
            "title": "The Sky Clouds and You",
            "game": "Xenogears",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 201
        },
        {
            "id": 126,
            "filename": "sf2_ken",
            "title": "Ken's Theme",
            "game": "Street Fighter 2",
            "composer": "Yoko Shimomura",
            "arranger": "emberling",
            "dir": 2,
            "duration": 123
        },
        {
            "id": 127,
            "filename": "mm9_flash",
            "title": "Flash in the Dark",
            "game": "Megaman 9",
            "composer": "Ryo Kawakami",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 96
        },
        {
            "id": 128,
            "filename": "es3_morrowind",
            "title": "Morrowind Theme",
            "game": "Elder Scrolls III",
            "composer": "Jeremy Soule",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 123
        },
        {
            "id": 129,
            "filename": "ar2_palace",
            "title": "Ice Palace",
            "game": "ActRaiser 2",
            "composer": "Yuzo Koshiro",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 32
        },
        {
            "id": 130,
            "filename": "totr_sanctuary",
            "title": "Sanctuary",
            "game": "Treasure of the Rudra",
            "composer": "Ryuji Sasai",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 105
        },
        {
            "id": 131,
            "filename": "ff6_ww3",
            "title": "The Wedding Waltz #3",
            "game": "Final Fantasy VI",
            "composer": "Nobuo Uematsu",
            "arranger": "N/A",
            "dir": 2,
            "duration": 32
        },
        {
            "id": 132,
            "filename": "cstvn3_aquarious",
            "title": "Aquarious",
            "game": "Castlevania 3",
            "composer": "Konami Kukeiha Club",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 71
        },
        {
            "id": 133,
            "filename": "ff4_zeromus",
            "title": "Zeromus",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 177
        },
        {
            "id": 134,
            "filename": "kss_race",
            "title": "Gourmet Race",
            "game": "Kirby Super Star",
            "composer": "Jun Ishikawa",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 125
        },
        {
            "id": 135,
            "filename": "lo_barrel",
            "title": "The Gun Barrel of Battle",
            "game": "Lost Odyssey",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 181
        },
        {
            "id": 136,
            "filename": "udt_megalovania",
            "title": "Megalovania",
            "game": "Undertale",
            "composer": "Toby Fox",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 137,
            "filename": "so2_operation",
            "title": "Rescue Operation",
            "game": "Star Ocean 2",
            "composer": "Motoi Sakuraba",
            "arranger": "emberling",
            "dir": 2,
            "duration": 116
        },
        {
            "id": 138,
            "filename": "avgn_fuckballs",
            "title": "Future Fuckballs 2010",
            "game": "Angry Video Game Nerd Adventures",
            "composer": "FreakZone Games",
            "arranger": "Jakcimus",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 139,
            "filename": "xng_knight",
            "title": "Red Knight",
            "game": "Xenogears",
            "composer": "Yasunori Mitsuda",
            "arranger": "emberling",
            "dir": 2,
            "duration": 148
        },
        {
            "id": 140,
            "filename": "dq3_world",
            "title": "Unknown World",
            "game": "Dragon Quest 3",
            "composer": "Koichi Sugiyama",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 133
        },
        {
            "id": 141,
            "filename": "lf2_battle_2",
            "title": "Battle 2",
            "game": "Lufia 2",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 142,
            "filename": "smtd_brain",
            "title": "Mother Brain",
            "game": "Super Metroid",
            "composer": "Minako Hamano, Kenji Yamamoto",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 143,
            "filename": "ias_redemption",
            "title": "Path of Redemption",
            "game": "I Am Setsuna",
            "composer": "Tomoki Miyoshi",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 151
        },
        {
            "id": 144,
            "filename": "udt_waters",
            "title": "Quiet Waters",
            "game": "Undertale",
            "composer": "Toby Fox",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 59
        },
        {
            "id": 145,
            "filename": "ff6_overture_1",
            "title": "Overture 1",
            "game": "Final Fantasy VI",
            "composer": "Nobuo Uematsu",
            "arranger": "N/A",
            "dir": 2,
            "duration": 103
        },
        {
            "id": 146,
            "filename": "sd3_fission",
            "title": "Nuclear Fission",
            "game": "Seiken Densetsu 3",
            "composer": "Hiroki Kikuta",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 180
        },
        {
            "id": 147,
            "filename": "fmgh_sentinal",
            "title": "Sentinal",
            "game": "Front Mission: Gun Hazard",
            "composer": "N. Uematsu, Y. Mitsuda, J. Nakano, M. Hamauzu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 148,
            "filename": "xng_flight",
            "title": "Flight",
            "game": "Xenogears",
            "composer": "Yasunori Mitsuda",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 149,
            "filename": "ff6_aria",
            "title": "Aria di Mezzo Carattere",
            "game": "Final Fantasy VI",
            "composer": "Nobuo Uematsu",
            "arranger": "N/A",
            "dir": 2,
            "duration": 233
        },
        {
            "id": 150,
            "filename": "ab_closed",
            "title": "Closed In Upon Me",
            "game": "Altered Beast",
            "composer": "Kazuhiko Nagai",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 76
        },
        {
            "id": 151,
            "filename": "bof2_god",
            "title": "Please, God",
            "game": "Breath of Fire 2",
            "composer": "Yuko Takehara",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 57
        },
        {
            "id": 152,
            "filename": "fft_silence",
            "title": "Silence at Night",
            "game": "Final Fantasy Tactics",
            "composer": "Hitoshi Sakimoto, Masaharu Iwata",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 163
        },
        {
            "id": 153,
            "filename": "bof2_wings",
            "title": "White Wings",
            "game": "Breath of Fire 2",
            "composer": "Yuko Takehara",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 168
        },
        {
            "id": 154,
            "filename": "ff4_golbez",
            "title": "Golbez, Clad In Darkness",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 114
        },
        {
            "id": 155,
            "filename": "rd_confrontation",
            "title": "Final Confrontation",
            "game": "Radical Dreamers",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 116
        },
        {
            "id": 156,
            "filename": "ct_zeal",
            "title": "Zeal Palace",
            "game": "Chrono Trigger",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 216
        },
        {
            "id": 157,
            "filename": "ff4_boss",
            "title": "Boss Theme",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "MetroidQuest",
            "dir": 2,
            "duration": 126
        },
        {
            "id": 158,
            "filename": "totr_village",
            "title": "Holiday in the Village",
            "game": "Treasure of the Rudra",
            "composer": "Ryuji Sasai",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 160
        },
        {
            "id": 159,
            "filename": "ln2_memories",
            "title": "Somber Memories",
            "game": "Lunar 2",
            "composer": "Noriyuki Iwadare",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 186
        },
        {
            "id": 160,
            "filename": "ff7_fight_further",
            "title": "Those Who Fight Further",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 207
        },
        {
            "id": 161,
            "filename": "bof_alan",
            "title": "Alan and Cerl",
            "game": "Breath of Fire",
            "composer": "Y. Fujita, M. Yamaguchi, M. Fuji, Y. Shimomura, T. Nishimura",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 119
        },
        {
            "id": 162,
            "filename": "ff6_overture_2",
            "title": "Overture 2",
            "game": "Final Fantasy VI",
            "composer": "Nobuo Uematsu",
            "arranger": "N/A",
            "dir": 2,
            "duration": 41
        },
        {
            "id": 163,
            "filename": "sn_act_1",
            "title": "Flying Battery Zone Act 1",
            "game": "Sonic & Knuckles",
            "composer": "Howard Drossin",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 80
        },
        {
            "id": 164,
            "filename": "dt_bone",
            "title": "Skull Bone 1",
            "game": "Dynami Tracer",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 105
        },
        {
            "id": 165,
            "filename": "ff8_machine_gun",
            "title": "The Man With The Machine Gun",
            "game": "Final Fantasy VIII",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 168
        },
        {
            "id": 166,
            "filename": "evrqst_kelethin",
            "title": "Kelethin",
            "game": "Everquest",
            "composer": "Jay Barbeau",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 167,
            "filename": "ff9_hills",
            "title": "Crossing Those Hills",
            "game": "Final Fantasy IX",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 168,
            "filename": "dc2_brinks",
            "title": "Palm Brinks",
            "game": "Dark Cloud 2",
            "composer": "Tomohito Nishiura",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 155
        },
        {
            "id": 169,
            "filename": "lf2_watchtowers",
            "title": "Watchtowers of the Seal",
            "game": "Lufia II",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 91
        },
        {
            "id": 170,
            "filename": "som_whisper",
            "title": "Whisper And Mantra",
            "game": "Secret of Mana",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 171,
            "filename": "eo3_waves",
            "title": "The End of the Raging Waves",
            "game": "Etrian Odyssey III",
            "composer": "Yuzo Koshiro",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 172,
            "filename": "xnbc2_morardain",
            "title": "Mor Ardain",
            "game": "Xenoblade Chronicles 2",
            "composer": "ACE",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 175,
            "filename": "sd3_sacrifice",
            "title": "Sacrifice",
            "game": "Seiken Densetsu 3",
            "composer": "Hiroki Kikuta",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 176,
            "filename": "fzc_big_blue",
            "title": "Big Blue",
            "game": "F-Zero Climax",
            "composer": "Kenji Hikita",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 146
        },
        {
            "id": 177,
            "filename": "rs3_last_battle",
            "title": "The Last Battle",
            "game": "Romancing SaGa 3",
            "composer": "Kenji Ito",
            "arranger": "Tsushiy",
            "dir": 2,
            "duration": 215
        },
        {
            "id": 178,
            "filename": "rd_girl",
            "title": "Star Stealing Girl",
            "game": "Radical Dreamers",
            "composer": "Yasunori Mitsuda",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 193
        },
        {
            "id": 179,
            "filename": "smrpg_booster",
            "title": "And My Name's Booster",
            "game": "Super Mario RPG",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 113
        },
        {
            "id": 180,
            "filename": "dsg_moon",
            "title": "Red Moon",
            "game": "Disgaea",
            "composer": "Tenpei Sato",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 181,
            "filename": "cc_child",
            "title": "Lost Child of Time",
            "game": "Chrono Cross",
            "composer": "Yasunori Mitsuda",
            "arranger": "emberling",
            "dir": 2,
            "duration": 171
        },
        {
            "id": 182,
            "filename": "ff4_world",
            "title": "Somewhere in the World",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 47
        },
        {
            "id": 187,
            "filename": "ff3_cloud",
            "title": "Cloud of Darkness",
            "game": "Final Fantasy III",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 97
        },
        {
            "id": 188,
            "filename": "totr_mines",
            "title": "The Quest For Rudra's Mines",
            "game": "Treasure of the Rudra",
            "composer": "Ryuji Sasai",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 184
        },
        {
            "id": 189,
            "filename": "sd3_mana",
            "title": "Secret of Mana",
            "game": "Seiken Densetsu 3",
            "composer": "Hiroki Kikuta",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 182
        },
        {
            "id": 190,
            "filename": "ct_theme",
            "title": "Main Theme",
            "game": "Chrono Trigger",
            "composer": "Yasunori Mitsuda",
            "arranger": "emberling",
            "dir": 2,
            "duration": 236
        },
        {
            "id": 191,
            "filename": "ff4_dreadful",
            "title": "Dreadful Battle",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Tsushiy",
            "dir": 2,
            "duration": 177
        },
        {
            "id": 192,
            "filename": "ff5_decisive",
            "title": "The Decisive Battle",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 193,
            "filename": "rsms_justice",
            "title": "Beliving My Justice",
            "game": "Romancing Saga Minstrel Song",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 201
        },
        {
            "id": 194,
            "filename": "rs2_last",
            "title": "Last Battle",
            "game": "Romancing Saga 2",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 164
        },
        {
            "id": 195,
            "filename": "ct_battle_1",
            "title": "Battle 1",
            "game": "Chrono Trigger",
            "composer": "Yasunori Mitsuda",
            "arranger": "emberling",
            "dir": 2,
            "duration": 90
        },
        {
            "id": 196,
            "filename": "sd3_sea",
            "title": "Innocent Sea",
            "game": "Seiken Densetsu 3",
            "composer": "Hiroki Kikuta",
            "arranger": "emberling",
            "dir": 2,
            "duration": 147
        },
        {
            "id": 197,
            "filename": "ff1_boss",
            "title": "Boss Battle B",
            "game": "Final Fantasy I",
            "composer": "Nobuo Uematsu",
            "arranger": "Tsushiy",
            "dir": 2,
            "duration": 115
        },
        {
            "id": 198,
            "filename": "ff3_battle_2",
            "title": "Battle 2",
            "game": "Final Fantasy III",
            "composer": "Nobuo Uematsu",
            "arranger": "Tsushiy",
            "dir": 2,
            "duration": 91
        },
        {
            "id": 199,
            "filename": "fm_logic",
            "title": "Destructive Logic",
            "game": "Front Mission",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 116
        },
        {
            "id": 200,
            "filename": "ct_revolution",
            "title": "World Revolution",
            "game": "Chrono Trigger",
            "composer": "Yasunori Mitsuda",
            "arranger": "emberling",
            "dir": 2,
            "duration": 210
        },
        {
            "id": 201,
            "filename": "lal_illusion",
            "title": "Illusion",
            "game": "Live A Live",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 126
        },
        {
            "id": 202,
            "filename": "ff7_jenova",
            "title": "J-E-N-O-V-A",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 133
        },
        {
            "id": 203,
            "filename": "ff9_boss",
            "title": "Boss Battle",
            "game": "Final Fantasy IX",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 231
        },
        {
            "id": 204,
            "filename": "ffa_overworld",
            "title": "Overworld",
            "game": "Final Fantasy Adventure",
            "composer": "Kenji Ito",
            "arranger": "JCE3000GT",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 205,
            "filename": "ff7_hurry",
            "title": "Hurry!",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 136
        },
        {
            "id": 206,
            "filename": "dkc2_blast",
            "title": "Bramble Blast",
            "game": "Donkey King Country 2",
            "composer": "David Wise",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 207,
            "filename": "z3_dark_world",
            "title": "Dark World",
            "game": "The Legend of Zelda: A Link to the Past",
            "composer": "Koji Kondo",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 118
        },
        {
            "id": 208,
            "filename": "ffmq_boss",
            "title": "Boss Theme",
            "game": "Final Fantasy Mystic Quest",
            "composer": "Ryuji Sasai, Yasuhiro Kawakami",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 98
        },
        {
            "id": 209,
            "filename": "ffmq_king",
            "title": "Dark King",
            "game": "Final Fantasy Mystic Quest",
            "composer": "Ryuji Sasai, Yasuhiro Kawakami",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 119
        },
        {
            "id": 210,
            "filename": "ff5_lenna",
            "title": "Lenna's Theme",
            "game": "Final Fantasy V",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 169
        },
        {
            "id": 211,
            "filename": "stp_argonians",
            "title": "Argonians",
            "game": "Startropics",
            "composer": "Yoshio Hirai",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 61
        },
        {
            "id": 212,
            "filename": "skd2_neclord",
            "title": "Gothic Neclord",
            "game": "Suikoden II",
            "composer": "Miki Higashino, Keiko Fukami",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 226
        },
        {
            "id": 213,
            "filename": "mmx_storm_eagle",
            "title": "Storm Eagle (Storm Eagle & Flame Mammoth mix/medley)",
            "game": "Mega Man X",
            "composer": "Alph Lyla group",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 214
        },
        {
            "id": 214,
            "filename": "gs2_battle",
            "title": "Isaac Battle Theme",
            "game": "Golden Sun 2",
            "composer": "Motoi Sakuraba",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 142
        },
        {
            "id": 215,
            "filename": "ffmq_dome",
            "title": "Lava Dome",
            "game": "Final Fantasy Mystic Quest",
            "composer": "Ryuji Sasai, Yasuhiro Kawakami",
            "arranger": "emberling",
            "dir": 2,
            "duration": 186
        },
        {
            "id": 216,
            "filename": "ff9_spirit",
            "title": "Spirit of the Hunt",
            "game": "Final Fantasy IX",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 207
        },
        {
            "id": 217,
            "filename": "swom_sun",
            "title": "Rising Sun",
            "game": "Sword of Mana",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 110
        },
        {
            "id": 218,
            "filename": "lf_battle_2",
            "title": "Battle 2",
            "game": "Lufia",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 136
        },
        {
            "id": 219,
            "filename": "lom_pain",
            "title": "Pain in the Universe",
            "game": "Legend of Mana",
            "composer": "Yoko Shimomura",
            "arranger": "emberling",
            "dir": 2,
            "duration": 189
        },
        {
            "id": 220,
            "filename": "z3_village",
            "title": "Kakariko Village",
            "game": "The Legend of Zelda: A Link to the Past",
            "composer": "Koji Kondo",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 192
        },
        {
            "id": 221,
            "filename": "smrpg_smithy",
            "title": "Fight Against Smithy",
            "game": "Super Mario RPG",
            "composer": "Yoko Shimomura",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 100
        },
        {
            "id": 222,
            "filename": "dkc2_interlude",
            "title": "Forest Interlude Remix",
            "game": "Donkey Kong Country 2",
            "composer": "David Wise",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 223,
            "filename": "smtd_boss",
            "title": "Boss Theme",
            "game": "Super Metroid/Prime",
            "composer": "Minako Hamano, Kenji Yamamoto",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 126
        },
        {
            "id": 224,
            "filename": "ff9_final",
            "title": "The Final Battle",
            "game": "Final Fantasy IX",
            "composer": "Nobuo Uematsu",
            "arranger": "Jackimus",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 225,
            "filename": "nes_atreyu",
            "title": "Atreyu's Quest",
            "game": "Neverending Story",
            "composer": "Klaus Doldinger",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 226,
            "filename": "ff6_ending",
            "title": "Ending Song 2",
            "game": "Final Fantasy VI",
            "composer": "Nobuo Uematsu",
            "arranger": "N/A",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 227,
            "filename": "ff1_dungeon",
            "title": "Dungeon",
            "game": "Final Fantasy I",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 48
        },
        {
            "id": 228,
            "filename": "tc_temple",
            "title": "Cloud Temple",
            "game": "Treasure Conflix",
            "composer": "Junya Nakano",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 48
        },
        {
            "id": 229,
            "filename": "sm64_castle",
            "title": "Peach's Castle",
            "game": "Super Mario 64",
            "composer": "Koji Kondo",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 134
        },
        {
            "id": 230,
            "filename": "ff4_paladin",
            "title": "The Paladin",
            "game": "Final Fantasy IV",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 20
        },
        {
            "id": 231,
            "filename": "ms_footstep",
            "title": "My Footstep On This World",
            "game": "Metal Saga",
            "composer": "Satoshi Kadokura",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 198
        },
        {
            "id": 232,
            "filename": "lal_cry",
            "title": "Cry-A-Live",
            "game": "Live A Live",
            "composer": "Yoko Shimomura",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 84
        },
        {
            "id": 233,
            "filename": "ff7_god",
            "title": "Birth of a God",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 236
        },
        {
            "id": 234,
            "filename": "lf_battle_3",
            "title": "Battle 3",
            "game": "Lufia 1",
            "composer": "Yasunori Shiono",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 145
        },
        {
            "id": 235,
            "filename": "top_absentminded",
            "title": "Be Absentminded",
            "game": "Tales of Phantasia",
            "composer": "Motoi Sakuraba, Shinji Tamura",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 194
        },
        {
            "id": 236,
            "filename": "rs3_castle",
            "title": "Gen's Castle Battle",
            "game": "Romancing Saga 3",
            "composer": "Kenji Ito",
            "arranger": "Tsushiy",
            "dir": 2,
            "duration": 207
        },
        {
            "id": 237,
            "filename": "ff9_alone",
            "title": "You're Not Alone!",
            "game": "Final Fantasy IX",
            "composer": "Nobuo Uematsu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 238,
            "filename": "ff6_maria",
            "title": "Draco and Maria Singing",
            "game": "Final Fantasy VI",
            "composer": "Nobuo Uematsu",
            "arranger": "N/A",
            "dir": 2,
            "duration": 43
        },
        {
            "id": 239,
            "filename": "grnds_tenderness",
            "title": "Lots of Tenderness",
            "game": "Grounseed",
            "composer": "Ryu Umemoto, Ryuu Takami",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 139
        },
        {
            "id": 240,
            "filename": "sd3_fly",
            "title": "Can You Fly, Sister?",
            "game": "Seiken Densetsu 3",
            "composer": "Hiroki Kikuta",
            "arranger": "emberling",
            "dir": 2,
            "duration": 206
        },
        {
            "id": 241,
            "filename": "so2_mind",
            "title": "Strike Your Mind",
            "game": "Star Ocean 2",
            "composer": "Motoi Sakuraba",
            "arranger": "emberling",
            "dir": 2,
            "duration": 20
        },
        {
            "id": 242,
            "filename": "z3_castle",
            "title": "Majestic Castle",
            "game": "The Legend of Zelda: A Link to the Past",
            "composer": "Koji Kondo",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 161
        },
        {
            "id": 243,
            "filename": "iog_boss",
            "title": "Boss Battle",
            "game": "Illusion of Gaia",
            "composer": "Yasuhiro Kawasaki",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 124
        },
        {
            "id": 244,
            "filename": "ff8_force",
            "title": "Force Your Way",
            "game": "Final Fantasy VIII",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 226
        },
        {
            "id": 245,
            "filename": "xng_tears",
            "title": "Tears of the Stars Hearts of the People",
            "game": "Xenogears",
            "composer": "Yasunori Mitsuda",
            "arranger": "emberling",
            "dir": 2,
            "duration": 198
        },
        {
            "id": 246,
            "filename": "ff8_afraid",
            "title": "Don't Be Afraid",
            "game": "Final Fantasy VIII",
            "composer": "Nobuo Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 160
        },
        {
            "id": 247,
            "filename": "ct_burn",
            "title": "Burn! Bobonga!",
            "game": "Chrono Trigger",
            "composer": "Uematsu",
            "arranger": "emberling",
            "dir": 2,
            "duration": 77
        },
        {
            "id": 248,
            "filename": "ob_war",
            "title": "Guerilla War",
            "game": "Ogre Battle",
            "composer": "Masaharu Iwata, Hitoshi Sakimoto",
            "arranger": "emberling",
            "dir": 2,
            "duration": 137
        },
        {
            "id": 249,
            "filename": "rs3_devils",
            "title": "Four Noble Devils 2",
            "game": "Romancing Saga 3",
            "composer": "Kenji Ito",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 170
        },
        {
            "id": 250,
            "filename": "ff7_aerith",
            "title": "Aerith's Theme",
            "game": "Final Fantasy VII",
            "composer": "Nobuo Uematsu",
            "arranger": "Tsushiy",
            "dir": 2,
            "duration": 236
        },
        {
            "id": 251,
            "filename": "aglq_love",
            "title": "When You Confess Love",
            "game": "Angelique",
            "composer": "Chinatsu Kuzuu",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 253,
            "filename": "iog_womb",
            "title": "In the Earthen Womb",
            "game": "Illusion of Gaia",
            "composer": "Yasuhiro Kawasaki",
            "arranger": "emberling",
            "dir": 2,
            "duration": 240
        },
        {
            "id": 254,
            "filename": "eb_hihihi",
            "title": "Hi Hi Hi",
            "game": "Earthbound",
            "composer": "Keiichi Suzuki, Hirokazu Tanaka",
            "arranger": "Gi Nattak",
            "dir": 2,
            "duration": 81
        }
    ]
};

const brrs = 
[
    {
        "id": 1,
        "name": "spanish guitar",
        "game": "FF6",
        "loop": 34827,
        "env": 65521,
        "pitch": 64928,
        "filename": "FF6_spanish_guitar"
    },
    {
        "id": 2,
        "name": "electric bass",
        "game": "FF6",
        "loop": 45315,
        "env": 65518,
        "pitch": 43328,
        "filename": "FF6_electric_bass"
    },
    {
        "id": 3,
        "name": "wind flute",
        "game": "FF6",
        "loop": 22791,
        "env": 65504,
        "pitch": 45184,
        "filename": "FF6_wind_flute"
    },
    {
        "id": 4,
        "name": "sitar",
        "game": "FF6",
        "loop": 14607,
        "env": 65523,
        "pitch": 33792,
        "filename": "FF6_sitar"
    },
    {
        "id": 5,
        "name": "cello",
        "game": "FF6",
        "loop": 18192,
        "env": 65504,
        "pitch": 45088,
        "filename": "FF6_cello"
    },
    {
        "id": 6,
        "name": "chorus",
        "game": "FF6",
        "loop": 14598,
        "env": 65504,
        "pitch": 44928,
        "filename": "FF6_chorus"
    },
    {
        "id": 7,
        "name": "flute",
        "game": "YI",
        "loop": 16644,
        "env": 65504,
        "pitch": 57688,
        "filename": "YI_flute"
    },
    {
        "id": 8,
        "name": "french horn",
        "game": "FF6",
        "loop": 1032,
        "env": 65504,
        "pitch": 64928,
        "filename": "FF6_french_horn"
    },
    {
        "id": 9,
        "name": "atma synth",
        "game": "FF6",
        "loop": 36099,
        "env": 65504,
        "pitch": 36864,
        "filename": "FF6_atma_synth"
    },
    {
        "id": 10,
        "name": "oboe",
        "game": "FF6",
        "loop": 54789,
        "env": 65504,
        "pitch": 43286,
        "filename": "FF6_oboe"
    },
    {
        "id": 11,
        "name": "organ",
        "game": "FF6",
        "loop": 15105,
        "env": 65504,
        "pitch": 48784,
        "filename": "FF6_organ"
    },
    {
        "id": 12,
        "name": "piano",
        "game": "FF6",
        "loop": 37140,
        "env": 65519,
        "pitch": 45152,
        "filename": "FF6_piano"
    },
    {
        "id": 13,
        "name": "strings",
        "game": "FF6",
        "loop": 8451,
        "env": 65504,
        "pitch": 44960,
        "filename": "FF6_strings"
    },
    {
        "id": 14,
        "name": "trumpet",
        "game": "FF6",
        "loop": 516,
        "env": 65504,
        "pitch": 43264,
        "filename": "FF6_trumpet"
    },
    {
        "id": 15,
        "name": "hihat closed",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_hihat_closed"
    },
    {
        "id": 16,
        "name": "e.piano",
        "game": "CT",
        "loop": 29445,
        "env": 65517,
        "pitch": 20936,
        "filename": "CT_e_piano"
    },
    {
        "id": 17,
        "name": "hihat opened",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_hihat_opened"
    },
    {
        "id": 18,
        "name": "cymbal",
        "game": "FF6",
        "loop": 35850,
        "env": 65518,
        "pitch": 0,
        "filename": "FF6_cymbal"
    },
    {
        "id": 19,
        "name": "synth strings",
        "game": "FF4",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF4_synth_strings"
    },
    {
        "id": 20,
        "name": "snare",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_snare"
    },
    {
        "id": 21,
        "name": "snapping",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_snapping"
    },
    {
        "id": 22,
        "name": "timpani",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 63744,
        "filename": "FF6_timpani"
    },
    {
        "id": 23,
        "name": "conga",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_conga"
    },
    {
        "id": 24,
        "name": "acoustic bass",
        "game": "FF6",
        "loop": 30726,
        "env": 65516,
        "pitch": 46928,
        "filename": "FF6_acoustic_bass"
    },
    {
        "id": 25,
        "name": "pizzo string",
        "game": "FF6",
        "loop": 52485,
        "env": 65525,
        "pitch": 28672,
        "filename": "FF6_pizzo_string"
    },
    {
        "id": 26,
        "name": "trombone",
        "game": "FF6",
        "loop": 37896,
        "env": 65504,
        "pitch": 64928,
        "filename": "FF6_trombone"
    },
    {
        "id": 27,
        "name": "harp",
        "game": "FF6",
        "loop": 40707,
        "env": 65520,
        "pitch": 43328,
        "filename": "FF6_harp"
    },
    {
        "id": 28,
        "name": "bass",
        "game": "FF6",
        "loop": 32772,
        "env": 65504,
        "pitch": 64928,
        "filename": "FF6_bass"
    },
    {
        "id": 29,
        "name": "picked string",
        "game": "FF6",
        "loop": 31491,
        "env": 65520,
        "pitch": 64928,
        "filename": "FF6_picked_string"
    },
    {
        "id": 30,
        "name": "distortion guitar",
        "game": "FF6",
        "loop": 64005,
        "env": 65504,
        "pitch": 10688,
        "filename": "FF6_distortion_guitar"
    },
    {
        "id": 31,
        "name": "ocarina",
        "game": "FF6",
        "loop": 59139,
        "env": 65504,
        "pitch": 47615,
        "filename": "FF6_ocarina"
    },
    {
        "id": 32,
        "name": "marimba",
        "game": "FF6",
        "loop": 6156,
        "env": 65514,
        "pitch": 43264,
        "filename": "FF6_marimba"
    },
    {
        "id": 33,
        "name": "hard snare",
        "game": "SOM",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "SOM_hard_snare"
    },
    {
        "id": 34,
        "name": "kick drum",
        "game": "FF6",
        "loop": 25860,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_kick_drum"
    },
    {
        "id": 35,
        "name": "cowbell",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_cowbell"
    },
    {
        "id": 36,
        "name": "tubular bell",
        "game": "FF6",
        "loop": 16653,
        "env": 65514,
        "pitch": 34816,
        "filename": "FF6_tubular_bell"
    },
    {
        "id": 37,
        "name": "pipe organ",
        "game": "FF6",
        "loop": 55554,
        "env": 65504,
        "pitch": 42920,
        "filename": "FF6_pipe_organ"
    },
    {
        "id": 38,
        "name": "woot",
        "game": "FF6",
        "loop": 49158,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_woot"
    },
    {
        "id": 39,
        "name": "percussion",
        "game": "UNK",
        "loop": 0,
        "env": 65504,
        "pitch": 17360,
        "filename": "UNK_percussion"
    },
    {
        "id": 40,
        "name": "rock organ",
        "game": "CT",
        "loop": 64005,
        "env": 65504,
        "pitch": 43264,
        "filename": "CT_rock_organ"
    },
    {
        "id": 41,
        "name": "breath",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 17152,
        "filename": "FF6_breath"
    },
    {
        "id": 42,
        "name": "finger snap",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 32767,
        "filename": "FF6_finger_snap"
    },
    {
        "id": 43,
        "name": "rimshot",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_rimshot"
    },
    {
        "id": 44,
        "name": "contrabass",
        "game": "FF6",
        "loop": 30468,
        "env": 65504,
        "pitch": 50432,
        "filename": "FF6_contrabass"
    },
    {
        "id": 45,
        "name": "guiro",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_guiro"
    },
    {
        "id": 46,
        "name": "conga 2",
        "game": "FF6",
        "loop": 56328,
        "env": 65523,
        "pitch": 0,
        "filename": "FF6_conga_2"
    },
    {
        "id": 47,
        "name": "shaker",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_shaker"
    },
    {
        "id": 48,
        "name": "wood block",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_wood_block"
    },
    {
        "id": 49,
        "name": "bright piano",
        "game": "FF6",
        "loop": 16902,
        "env": 65517,
        "pitch": 0,
        "filename": "FF6_bright_piano"
    },
    {
        "id": 50,
        "name": "acoustic guitar",
        "game": "FF6",
        "loop": 64779,
        "env": 65520,
        "pitch": 26876,
        "filename": "FF6_acoustic_guitar"
    },
    {
        "id": 51,
        "name": "bagpipe",
        "game": "FF6",
        "loop": 57867,
        "env": 65504,
        "pitch": 28384,
        "filename": "FF6_bagpipe"
    },
    {
        "id": 52,
        "name": "strings",
        "game": "TOTR",
        "loop": 6912,
        "env": 44448,
        "pitch": 57497,
        "filename": "TOTR_strings"
    },
    {
        "id": 53,
        "name": "melodic tom",
        "game": "UNK",
        "loop": 0,
        "env": 65521,
        "pitch": 0,
        "filename": "UNK_melodic_tom"
    },
    {
        "id": 54,
        "name": "sawtooth",
        "game": "UNK",
        "loop": 60420,
        "env": 65504,
        "pitch": 43360,
        "filename": "UNK_sawtooth"
    },
    {
        "id": 55,
        "name": "tambourine",
        "game": "FF6",
        "loop": 63765,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_tambourine"
    },
    {
        "id": 56,
        "name": "tenor male voice",
        "game": "FF6",
        "loop": 6912,
        "env": 65504,
        "pitch": 32768,
        "filename": "FF6_tenor_male_voice"
    },
    {
        "id": 57,
        "name": "bass male voice",
        "game": "FF6",
        "loop": 30468,
        "env": 65504,
        "pitch": 34816,
        "filename": "FF6_bass_male_voice"
    },
    {
        "id": 58,
        "name": "female voice",
        "game": "FF6",
        "loop": 4866,
        "env": 65504,
        "pitch": 10724,
        "filename": "FF6_female_voice"
    },
    {
        "id": 59,
        "name": "pipe organ 2",
        "game": "FF6",
        "loop": 6912,
        "env": 65504,
        "pitch": 38144,
        "filename": "FF6_pipe_organ_2"
    },
    {
        "id": 60,
        "name": "metal sound",
        "game": "RS3",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "RS3_metal_sound"
    },
    {
        "id": 61,
        "name": "metal sound",
        "game": "FF6",
        "loop": 53775,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_metal_sound"
    },
    {
        "id": 62,
        "name": "xylophone",
        "game": "FF6",
        "loop": 21510,
        "env": 65516,
        "pitch": 43360,
        "filename": "FF6_xylophone"
    },
    {
        "id": 63,
        "name": "tribal shout 1",
        "game": "RD",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "RD_tribal_shout_1"
    },
    {
        "id": 64,
        "name": "slap bass",
        "game": "RS3",
        "loop": 12552,
        "env": 65518,
        "pitch": 54144,
        "filename": "RS3_slap_bass"
    },
    {
        "id": 65,
        "name": "tribal shout 2",
        "game": "RD",
        "loop": 34836,
        "env": 65504,
        "pitch": 57088,
        "filename": "RD_tribal_shout_2"
    },
    {
        "id": 66,
        "name": "electric guitar 1",
        "game": "RS3",
        "loop": 24072,
        "env": 65504,
        "pitch": 8704,
        "filename": "RS3_electric_guitar_1"
    },
    {
        "id": 67,
        "name": "electric guitar 2",
        "game": "RS3",
        "loop": 23307,
        "env": 65504,
        "pitch": 59136,
        "filename": "RS3_electric_guitar_2"
    },
    {
        "id": 68,
        "name": "strings",
        "game": "RS3",
        "loop": 42246,
        "env": 65504,
        "pitch": 6144,
        "filename": "RS3_strings"
    },
    {
        "id": 69,
        "name": "voice 1",
        "game": "RS3",
        "loop": 41988,
        "env": 65504,
        "pitch": 26112,
        "filename": "RS3_voice_1"
    },
    {
        "id": 70,
        "name": "voice 2",
        "game": "RS3",
        "loop": 13353,
        "env": 65504,
        "pitch": 739,
        "filename": "RS3_voice_2"
    },
    {
        "id": 71,
        "name": "voice 3",
        "game": "RS3",
        "loop": 24837,
        "env": 65504,
        "pitch": 8960,
        "filename": "RS3_voice_3"
    },
    {
        "id": 72,
        "name": "trumpet",
        "game": "RS3",
        "loop": 29445,
        "env": 65504,
        "pitch": 0,
        "filename": "RS3_trumpet"
    },
    {
        "id": 73,
        "name": "violin",
        "game": "RS3",
        "loop": 46089,
        "env": 65504,
        "pitch": 18176,
        "filename": "RS3_violin"
    },
    {
        "id": 74,
        "name": "snare drum 1",
        "game": "RS3",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "RS3_snare_drum_1"
    },
    {
        "id": 75,
        "name": "celesta",
        "game": "RS3",
        "loop": 17925,
        "env": 65516,
        "pitch": 57600,
        "filename": "RS3_celesta"
    },
    {
        "id": 76,
        "name": "e.piano",
        "game": "RS3",
        "loop": 30210,
        "env": 65516,
        "pitch": 57600,
        "filename": "RS3_e_piano"
    },
    {
        "id": 77,
        "name": "cembalo",
        "game": "RS3",
        "loop": 20229,
        "env": 65488,
        "pitch": 0,
        "filename": "RS3_cembalo"
    },
    {
        "id": 78,
        "name": "open hihat",
        "game": "RS3",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "RS3_open_hihat"
    },
    {
        "id": 79,
        "name": "closed hihat",
        "game": "RS3",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "RS3_closed_hihat"
    },
    {
        "id": 80,
        "name": "open pedal hihat",
        "game": "RS3",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "RS3_open_pedal_hihat"
    },
    {
        "id": 81,
        "name": "harp",
        "game": "RS3",
        "loop": 3078,
        "env": 65517,
        "pitch": 20992,
        "filename": "RS3_harp"
    },
    {
        "id": 82,
        "name": "piano",
        "game": "RS3",
        "loop": 49416,
        "env": 60654,
        "pitch": 57344,
        "filename": "RS3_piano"
    },
    {
        "id": 83,
        "name": "synth strings",
        "game": "RS3",
        "loop": 51204,
        "env": 65504,
        "pitch": 7680,
        "filename": "RS3_synth_strings"
    },
    {
        "id": 84,
        "name": "whistle",
        "game": "RS3",
        "loop": 13317,
        "env": 65505,
        "pitch": 6528,
        "filename": "RS3_whistle"
    },
    {
        "id": 85,
        "name": "agogo",
        "game": "RS3",
        "loop": 0,
        "env": 65520,
        "pitch": 0,
        "filename": "RS3_agogo"
    },
    {
        "id": 86,
        "name": "snare drum 2",
        "game": "RS3",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "RS3_snare_drum_2"
    },
    {
        "id": 87,
        "name": "acoustic bass",
        "game": "RS3",
        "loop": 57093,
        "env": 65518,
        "pitch": 54176,
        "filename": "RS3_acoustic_bass"
    },
    {
        "id": 88,
        "name": "french horn",
        "game": "RS3",
        "loop": 13068,
        "env": 65504,
        "pitch": 65024,
        "filename": "RS3_french_horn"
    },
    {
        "id": 89,
        "name": "dirty sax",
        "game": "SMRPG",
        "loop": 48900,
        "env": 65504,
        "pitch": 6353,
        "filename": "SMRPG_dirty_sax"
    },
    {
        "id": 90,
        "name": "metal bang",
        "game": "FF6",
        "loop": 11280,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_metal_bang"
    },
    {
        "id": 91,
        "name": "orch hit",
        "game": "THG",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "THG_orch_hit"
    },
    {
        "id": 92,
        "name": "saxish",
        "game": "SMRPG",
        "loop": 28929,
        "env": 65504,
        "pitch": 43113,
        "filename": "SMRPG_saxish"
    },
    {
        "id": 93,
        "name": "timpani",
        "game": "FF4",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF4_timpani"
    },
    {
        "id": 94,
        "name": "flute",
        "game": "FF6",
        "loop": 16644,
        "env": 65504,
        "pitch": 57688,
        "filename": "FF6_flute"
    },
    {
        "id": 95,
        "name": "hard snare",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_hard_snare"
    },
    {
        "id": 96,
        "name": "violin",
        "game": "FF6",
        "loop": 5898,
        "env": 65504,
        "pitch": 36096,
        "filename": "FF6_violin"
    },
    {
        "id": 97,
        "name": "kick drum",
        "game": "CT",
        "loop": 25860,
        "env": 65504,
        "pitch": 0,
        "filename": "CT_kick_drum"
    },
    {
        "id": 98,
        "name": "crowd noise",
        "game": "FF6",
        "loop": 4608,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6_crowd_noise"
    },
    {
        "id": 99,
        "name": "bottle blow",
        "game": "FF6",
        "loop": 60420,
        "env": 65504,
        "pitch": 43360,
        "filename": "FF6_bottle_blow"
    },
    {
        "id": 100,
        "name": "soft bass drum",
        "game": "RS3",
        "loop": 30726,
        "env": 65504,
        "pitch": 57688,
        "filename": "RS3_soft_bass_drum"
    },
    {
        "id": 101,
        "name": "tam",
        "game": "RS3",
        "loop": 56328,
        "env": 65504,
        "pitch": 0,
        "filename": "RS3_tam"
    },
    {
        "id": 102,
        "name": "trans bass drum",
        "game": "RS3",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "RS3_trans_bass_drum"
    },
    {
        "id": 103,
        "name": "hard snare",
        "game": "CT",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "CT_hard_snare"
    },
    {
        "id": 104,
        "name": "grand piano",
        "game": "CT",
        "loop": 31491,
        "env": 65518,
        "pitch": 20992,
        "filename": "CT_grand_piano"
    },
    {
        "id": 105,
        "name": "chorus",
        "game": "CT",
        "loop": 1797,
        "env": 65504,
        "pitch": 15360,
        "filename": "CT_chorus"
    },
    {
        "id": 106,
        "name": "electric guitar",
        "game": "CT",
        "loop": 17925,
        "env": 65504,
        "pitch": 40908,
        "filename": "CT_electric_guitar"
    },
    {
        "id": 107,
        "name": "music box",
        "game": "CT",
        "loop": 28431,
        "env": 65523,
        "pitch": 55204,
        "filename": "CT_music_box"
    },
    {
        "id": 108,
        "name": "english horn",
        "game": "CT",
        "loop": 3594,
        "env": 65517,
        "pitch": 57600,
        "filename": "CT_english_horn"
    },
    {
        "id": 109,
        "name": "guitar",
        "game": "CT",
        "loop": 31749,
        "env": 65504,
        "pitch": 65024,
        "filename": "CT_guitar"
    },
    {
        "id": 110,
        "name": "pizzicato",
        "game": "CT",
        "loop": 0,
        "env": 65514,
        "pitch": 0,
        "filename": "CT_pizzicato"
    },
    {
        "id": 111,
        "name": "trumpet",
        "game": "CT",
        "loop": 39942,
        "env": 65504,
        "pitch": 57708,
        "filename": "CT_trumpet"
    },
    {
        "id": 112,
        "name": "piano",
        "game": "CT",
        "loop": 23823,
        "env": 65248,
        "pitch": 21148,
        "filename": "CT_piano"
    },
    {
        "id": 113,
        "name": "future strings",
        "game": "CT",
        "loop": 6912,
        "env": 65504,
        "pitch": 21504,
        "filename": "CT_future_strings"
    },
    {
        "id": 114,
        "name": "harp",
        "game": "CT",
        "loop": 29445,
        "env": 65504,
        "pitch": 21148,
        "filename": "CT_harp"
    },
    {
        "id": 115,
        "name": "flute",
        "game": "CT",
        "loop": 48135,
        "env": 65504,
        "pitch": 65280,
        "filename": "CT_flute"
    },
    {
        "id": 116,
        "name": "marimba",
        "game": "CT",
        "loop": 0,
        "env": 65504,
        "pitch": 17152,
        "filename": "CT_marimba"
    },
    {
        "id": 117,
        "name": "wind flute",
        "game": "CT",
        "loop": 48135,
        "env": 65504,
        "pitch": 65280,
        "filename": "CT_wind_flute"
    },
    {
        "id": 118,
        "name": "sax",
        "game": "CT",
        "loop": 62733,
        "env": 65504,
        "pitch": 54016,
        "filename": "CT_sax"
    },
    {
        "id": 119,
        "name": "bass",
        "game": "RD",
        "loop": 32007,
        "env": 65521,
        "pitch": 2816,
        "filename": "RD_bass"
    },
    {
        "id": 120,
        "name": "brass",
        "game": "TC",
        "loop": 25353,
        "env": 65504,
        "pitch": 72,
        "filename": "TC_brass"
    },
    {
        "id": 121,
        "name": "synth strings",
        "game": "TC",
        "loop": 42504,
        "env": 65504,
        "pitch": 57088,
        "filename": "TC_synth_strings"
    },
    {
        "id": 122,
        "name": "kick",
        "game": "SOM",
        "loop": 21768,
        "env": 65504,
        "pitch": 0,
        "filename": "SOM_kick"
    },
    {
        "id": 123,
        "name": "tub bell",
        "game": "FF7",
        "loop": 27657,
        "env": 65515,
        "pitch": 33096,
        "filename": "FF7_tub_bell"
    },
    {
        "id": 124,
        "name": "synth kick drum",
        "game": "SOM",
        "loop": 37638,
        "env": 65504,
        "pitch": 32767,
        "filename": "SOM_synth_kick_drum"
    },
    {
        "id": 125,
        "name": "rim hit",
        "game": "SOM",
        "loop": 35850,
        "env": 65504,
        "pitch": 38960,
        "filename": "SOM_rim_hit"
    },
    {
        "id": 126,
        "name": "vox",
        "game": "SOM",
        "loop": 11787,
        "env": 65504,
        "pitch": 49152,
        "filename": "SOM_vox"
    },
    {
        "id": 127,
        "name": "metal chime",
        "game": "SOM",
        "loop": 40974,
        "env": 65516,
        "pitch": 0,
        "filename": "SOM_metal_chime"
    },
    {
        "id": 128,
        "name": "steam",
        "game": "SOM",
        "loop": 10755,
        "env": 65518,
        "pitch": 32767,
        "filename": "SOM_steam"
    },
    {
        "id": 129,
        "name": "tubular bell",
        "game": "SOM",
        "loop": 15105,
        "env": 65421,
        "pitch": 61952,
        "filename": "SOM_tubular_bell"
    },
    {
        "id": 130,
        "name": "strings",
        "game": "SOM",
        "loop": 15363,
        "env": 65504,
        "pitch": 48544,
        "filename": "SOM_strings"
    },
    {
        "id": 131,
        "name": "chorus",
        "game": "SOM",
        "loop": 6912,
        "env": 65248,
        "pitch": 57856,
        "filename": "SOM_chorus"
    },
    {
        "id": 132,
        "name": "flute",
        "game": "SOM",
        "loop": 17418,
        "env": 65504,
        "pitch": 64992,
        "filename": "SOM_flute"
    },
    {
        "id": 133,
        "name": "brass section",
        "game": "SOM",
        "loop": 42762,
        "env": 65504,
        "pitch": 35872,
        "filename": "SOM_brass_section"
    },
    {
        "id": 134,
        "name": "xylophone",
        "game": "SOM",
        "loop": 19971,
        "env": 65518,
        "pitch": 57408,
        "filename": "SOM_xylophone"
    },
    {
        "id": 135,
        "name": "synth trumpet",
        "game": "SOM",
        "loop": 24579,
        "env": 65504,
        "pitch": 49008,
        "filename": "SOM_synth_trumpet"
    },
    {
        "id": 136,
        "name": "industrial bang echo",
        "game": "SOM",
        "loop": 43545,
        "env": 65504,
        "pitch": 0,
        "filename": "SOM_industrial_bang_echo"
    },
    {
        "id": 137,
        "name": "brass synth",
        "game": "SMRPG",
        "loop": 30468,
        "env": 65504,
        "pitch": 65065,
        "filename": "SMRPG_brass_synth"
    },
    {
        "id": 138,
        "name": "future bass synth",
        "game": "SMRPG",
        "loop": 9225,
        "env": 65514,
        "pitch": 6353,
        "filename": "SMRPG_future_bass_synth"
    },
    {
        "id": 139,
        "name": "e.piano",
        "game": "TC",
        "loop": 5382,
        "env": 65519,
        "pitch": 65024,
        "filename": "TC_e_piano"
    },
    {
        "id": 140,
        "name": "metal bang",
        "game": "SMRPG",
        "loop": 37638,
        "env": 65504,
        "pitch": 0,
        "filename": "SMRPG_metal_bang"
    },
    {
        "id": 141,
        "name": "pan flute",
        "game": "FF6",
        "loop": 30468,
        "env": 65504,
        "pitch": 65280,
        "filename": "FF6_pan_flute"
    },
    {
        "id": 142,
        "name": "piano",
        "game": "SOM",
        "loop": 30219,
        "env": 65516,
        "pitch": 43488,
        "filename": "SOM_piano"
    },
    {
        "id": 143,
        "name": "distortion guitar",
        "game": "TOTR",
        "loop": 31500,
        "env": 48992,
        "pitch": 55232,
        "filename": "TOTR_distortion_guitar"
    },
    {
        "id": 144,
        "name": "tam",
        "game": "TOTR",
        "loop": 40716,
        "env": 36754,
        "pitch": 64178,
        "filename": "TOTR_tam"
    },
    {
        "id": 145,
        "name": "timpani",
        "game": "TOTR",
        "loop": 9741,
        "env": 36754,
        "pitch": 64146,
        "filename": "TOTR_timpani"
    },
    {
        "id": 146,
        "name": "english horn",
        "game": "TOTR",
        "loop": 29214,
        "env": 36704,
        "pitch": 57338,
        "filename": "TOTR_english_horn"
    },
    {
        "id": 147,
        "name": "bassoon",
        "game": "TOTR",
        "loop": 59913,
        "env": 65504,
        "pitch": 54154,
        "filename": "TOTR_bassoon"
    },
    {
        "id": 148,
        "name": "clarinet",
        "game": "TOTR",
        "loop": 60162,
        "env": 40864,
        "pitch": 57338,
        "filename": "TOTR_clarinet"
    },
    {
        "id": 149,
        "name": "clap",
        "game": "TOTR",
        "loop": 48900,
        "env": 65504,
        "pitch": 0,
        "filename": "TOTR_clap"
    },
    {
        "id": 150,
        "name": "brass",
        "game": "TOTR",
        "loop": 32781,
        "env": 36800,
        "pitch": 54154,
        "filename": "TOTR_brass"
    },
    {
        "id": 151,
        "name": "overdrive guitar",
        "game": "SD3",
        "loop": 37140,
        "env": 61408,
        "pitch": 550,
        "filename": "SD3_overdrive_guitar"
    },
    {
        "id": 152,
        "name": "acoustic guitar",
        "game": "SD3",
        "loop": 49683,
        "env": 65504,
        "pitch": 65359,
        "filename": "SD3_acoustic_guitar"
    },
    {
        "id": 153,
        "name": "banjo",
        "game": "SD3",
        "loop": 24846,
        "env": 65516,
        "pitch": 64613,
        "filename": "SD3_banjo"
    },
    {
        "id": 154,
        "name": "overdrive guitar",
        "game": "GH",
        "loop": 32265,
        "env": 65504,
        "pitch": 52224,
        "filename": "GH_overdrive_guitar"
    },
    {
        "id": 155,
        "name": "e.piano",
        "game": "GH",
        "loop": 55812,
        "env": 65518,
        "pitch": 62464,
        "filename": "GH_e_piano"
    },
    {
        "id": 156,
        "name": "ride cymbal",
        "game": "GH",
        "loop": 44550,
        "env": 65516,
        "pitch": 0,
        "filename": "GH_ride_cymbal"
    },
    {
        "id": 157,
        "name": "halo",
        "game": "FM",
        "loop": 30468,
        "env": 65504,
        "pitch": 65520,
        "filename": "FM_halo"
    },
    {
        "id": 158,
        "name": "bass synth hit",
        "game": "SOM",
        "loop": 16902,
        "env": 65519,
        "pitch": 64608,
        "filename": "SOM_bass_synth_hit"
    },
    {
        "id": 159,
        "name": "brass",
        "game": "SD3",
        "loop": 6921,
        "env": 65514,
        "pitch": 53888,
        "filename": "SD3_brass"
    },
    {
        "id": 160,
        "name": "snare",
        "game": "SD3",
        "loop": 51720,
        "env": 65504,
        "pitch": 0,
        "filename": "SD3_snare"
    },
    {
        "id": 161,
        "name": "shaker",
        "game": "RD",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "RD_shaker"
    },
    {
        "id": 162,
        "name": "sax",
        "game": "FM",
        "loop": 45831,
        "env": 65504,
        "pitch": 64720,
        "filename": "FM_sax"
    },
    {
        "id": 163,
        "name": "gong",
        "game": "LAL",
        "loop": 57618,
        "env": 61356,
        "pitch": 0,
        "filename": "LAL_gong"
    },
    {
        "id": 164,
        "name": "brass synth",
        "game": "FM",
        "loop": 30210,
        "env": 65504,
        "pitch": 50336,
        "filename": "FM_brass_synth"
    },
    {
        "id": 165,
        "name": "synth bass",
        "game": "FM",
        "loop": 47877,
        "env": 65504,
        "pitch": 57584,
        "filename": "FM_synth_bass"
    },
    {
        "id": 166,
        "name": "piano",
        "game": "FM",
        "loop": 45582,
        "env": 65504,
        "pitch": 64768,
        "filename": "FM_piano"
    },
    {
        "id": 167,
        "name": "choir",
        "game": "GH",
        "loop": 21768,
        "env": 65504,
        "pitch": 12272,
        "filename": "GH_choir"
    },
    {
        "id": 168,
        "name": "marimba",
        "game": "LAL",
        "loop": 46080,
        "env": 53077,
        "pitch": 57393,
        "filename": "LAL_marimba"
    },
    {
        "id": 169,
        "name": "electric steel guitar",
        "game": "GH",
        "loop": 7944,
        "env": 65519,
        "pitch": 50432,
        "filename": "GH_electric_steel_guitar"
    },
    {
        "id": 170,
        "name": "synth bass",
        "game": "GH",
        "loop": 42762,
        "env": 65504,
        "pitch": 47824,
        "filename": "GH_synth_bass"
    },
    {
        "id": 171,
        "name": "conga drum",
        "game": "RS3",
        "loop": 51462,
        "env": 65504,
        "pitch": 59392,
        "filename": "RS3_conga_drum"
    },
    {
        "id": 172,
        "name": "harp",
        "game": "GH",
        "loop": 29445,
        "env": 65519,
        "pitch": 20944,
        "filename": "GH_harp"
    },
    {
        "id": 173,
        "name": "snare",
        "game": "RD",
        "loop": 0,
        "env": 65518,
        "pitch": 0,
        "filename": "RD_snare"
    },
    {
        "id": 174,
        "name": "female voice",
        "game": "RD",
        "loop": 0,
        "env": 65519,
        "pitch": 55040,
        "filename": "RD_female_voice"
    },
    {
        "id": 175,
        "name": "reed organ",
        "game": "GH",
        "loop": 28164,
        "env": 65504,
        "pitch": 24576,
        "filename": "GH_reed_organ"
    },
    {
        "id": 176,
        "name": "synth strings",
        "game": "CT",
        "loop": 6912,
        "env": 65504,
        "pitch": 59888,
        "filename": "CT_synth_strings"
    },
    {
        "id": 177,
        "name": "trombone",
        "game": "GH",
        "loop": 61710,
        "env": 65504,
        "pitch": 43216,
        "filename": "GH_trombone"
    },
    {
        "id": 178,
        "name": "drum sequence",
        "game": "TC",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "TC_drum_sequence"
    },
    {
        "id": 179,
        "name": "synth voice",
        "game": "GH",
        "loop": 5124,
        "env": 65504,
        "pitch": 6848,
        "filename": "GH_synth_voice"
    },
    {
        "id": 180,
        "name": "synth strings",
        "game": "GH",
        "loop": 28422,
        "env": 65504,
        "pitch": 6144,
        "filename": "GH_synth_strings"
    },
    {
        "id": 181,
        "name": "plucked string",
        "game": "FF6",
        "loop": 0,
        "env": 65504,
        "pitch": 39936,
        "filename": "FF6_plucked_string"
    },
    {
        "id": 182,
        "name": "strings",
        "game": "SMRPG",
        "loop": 42246,
        "env": 65504,
        "pitch": 65152,
        "filename": "SMRPG_strings"
    },
    {
        "id": 183,
        "name": "accordion",
        "game": "SMRPG",
        "loop": 30468,
        "env": 65504,
        "pitch": 7496,
        "filename": "SMRPG_accordion"
    },
    {
        "id": 184,
        "name": "grand piano",
        "game": "SD3",
        "loop": 43011,
        "env": 53197,
        "pitch": 65478,
        "filename": "SD3_grand_piano"
    },
    {
        "id": 185,
        "name": "violin",
        "game": "SMRPG",
        "loop": 37638,
        "env": 65504,
        "pitch": 57433,
        "filename": "SMRPG_violin"
    },
    {
        "id": 186,
        "name": "piano",
        "game": "SMRPG",
        "loop": 8460,
        "env": 65519,
        "pitch": 61042,
        "filename": "SMRPG_piano"
    },
    {
        "id": 187,
        "name": "french horn",
        "game": "SMRPG",
        "loop": 46596,
        "env": 65504,
        "pitch": 57549,
        "filename": "SMRPG_french_horn"
    },
    {
        "id": 188,
        "name": "clarinet",
        "game": "SMRPG",
        "loop": 48900,
        "env": 65504,
        "pitch": 64743,
        "filename": "SMRPG_clarinet"
    },
    {
        "id": 189,
        "name": "classic guitar",
        "game": "FF7",
        "loop": 14091,
        "env": 65515,
        "pitch": 39650,
        "filename": "FF7_classic_guitar"
    },
    {
        "id": 190,
        "name": "harmonica",
        "game": "RS3",
        "loop": 47628,
        "env": 65504,
        "pitch": 6400,
        "filename": "RS3_harmonica"
    },
    {
        "id": 191,
        "name": "organ",
        "game": "LAL",
        "loop": 58881,
        "env": 65504,
        "pitch": 9984,
        "filename": "LAL_organ"
    },
    {
        "id": 192,
        "name": "cymbal",
        "game": "RS3",
        "loop": 18441,
        "env": 65520,
        "pitch": 0,
        "filename": "RS3_cymbal"
    },
    {
        "id": 193,
        "name": "e.guitar synth",
        "game": "EB",
        "loop": 20994,
        "env": 65504,
        "pitch": 43113,
        "filename": "EB_e_guitar_synth"
    },
    {
        "id": 194,
        "name": "strings",
        "game": "CV4",
        "loop": 51462,
        "env": 65504,
        "pitch": 41088,
        "filename": "CV4_strings"
    },
    {
        "id": 195,
        "name": "synth",
        "game": "TOTR",
        "loop": 21252,
        "env": 65504,
        "pitch": 57032,
        "filename": "TOTR_synth"
    },
    {
        "id": 196,
        "name": "ride",
        "game": "GH",
        "loop": 32772,
        "env": 65522,
        "pitch": 49152,
        "filename": "GH_ride"
    },
    {
        "id": 197,
        "name": "maraca",
        "game": "FF6T",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "FF6T_maraca"
    },
    {
        "id": 198,
        "name": "trumpet",
        "game": "ARS",
        "loop": 12036,
        "env": 65512,
        "pitch": 54960,
        "filename": "ARS_trumpet"
    },
    {
        "id": 199,
        "name": "synth",
        "game": "CS",
        "loop": 40716,
        "env": 65504,
        "pitch": 62064,
        "filename": "CS_synth"
    },
    {
        "id": 200,
        "name": "piano",
        "game": "SD3",
        "loop": 25887,
        "env": 65514,
        "pitch": 52768,
        "filename": "SD3_piano"
    },
    {
        "id": 201,
        "name": "bass",
        "game": "FF6T",
        "loop": 18948,
        "env": 65516,
        "pitch": 64672,
        "filename": "FF6T_bass"
    },
    {
        "id": 202,
        "name": "future",
        "game": "SMRPG",
        "loop": 30468,
        "env": 65504,
        "pitch": 65505,
        "filename": "SMRPG_future"
    },
    {
        "id": 203,
        "name": "guitar",
        "game": "TOTR",
        "loop": 33288,
        "env": 65517,
        "pitch": 57456,
        "filename": "TOTR_guitar"
    },
    {
        "id": 204,
        "name": "matal bang",
        "game": "SD3",
        "loop": 51713,
        "env": 65518,
        "pitch": 0,
        "filename": "SD3_matal_bang"
    },
    {
        "id": 205,
        "name": "crash",
        "game": "FF5",
        "loop": 32772,
        "env": 65520,
        "pitch": 49152,
        "filename": "FF5_crash"
    },
    {
        "id": 206,
        "name": "dulcimer",
        "game": "FFX",
        "loop": 25611,
        "env": 65517,
        "pitch": 43264,
        "filename": "FFX_dulcimer"
    },
    {
        "id": 207,
        "name": "vox",
        "game": "SO2",
        "loop": 6165,
        "env": 36672,
        "pitch": 63744,
        "filename": "SO2_vox"
    },
    {
        "id": 208,
        "name": "dulcimer",
        "game": "SOM",
        "loop": 10755,
        "env": 65519,
        "pitch": 64608,
        "filename": "SOM_dulcimer"
    },
    {
        "id": 209,
        "name": "orchit",
        "game": "TOTR",
        "loop": 58125,
        "env": 36352,
        "pitch": 54720,
        "filename": "TOTR_orchit"
    },
    {
        "id": 210,
        "name": "synth bell",
        "game": "FF6T",
        "loop": 30210,
        "env": 65517,
        "pitch": 57600,
        "filename": "FF6T_synth_bell"
    },
    {
        "id": 211,
        "name": "bell",
        "game": "SOM",
        "loop": 15105,
        "env": 65421,
        "pitch": 61952,
        "filename": "SOM_bell"
    },
    {
        "id": 212,
        "name": "piano 2",
        "game": "SD3",
        "loop": 25638,
        "env": 65515,
        "pitch": 12287,
        "filename": "SD3_piano_2"
    },
    {
        "id": 213,
        "name": "piano 3",
        "game": "SD3",
        "loop": 2064,
        "env": 65519,
        "pitch": 32768,
        "filename": "SD3_piano_3"
    },
    {
        "id": 214,
        "name": "clavinet",
        "game": "TOTR",
        "loop": 20229,
        "env": 65519,
        "pitch": 53856,
        "filename": "TOTR_clavinet"
    },
    {
        "id": 215,
        "name": "pizzo",
        "game": "SD3",
        "loop": 23823,
        "env": 65514,
        "pitch": 3936,
        "filename": "SD3_pizzo"
    },
    {
        "id": 216,
        "name": "tom",
        "game": "SMRPG",
        "loop": 0,
        "env": 65504,
        "pitch": 32768,
        "filename": "SMRPG_tom"
    },
    {
        "id": 217,
        "name": "timbale",
        "game": "RS3",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "RS3_timbale"
    },
    {
        "id": 218,
        "name": "bassoon",
        "game": "SMRPG",
        "loop": 41988,
        "env": 65504,
        "pitch": 64597,
        "filename": "SMRPG_bassoon"
    },
    {
        "id": 219,
        "name": "snare",
        "game": "FF5",
        "loop": 0,
        "env": 65504,
        "pitch": 32768,
        "filename": "FF5_snare"
    },
    {
        "id": 220,
        "name": "prg10",
        "game": "CT",
        "loop": 2304,
        "env": 65504,
        "pitch": 57600,
        "filename": "CT_prg10"
    },
    {
        "id": 221,
        "name": "conga",
        "game": "CT",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "CT_conga"
    },
    {
        "id": 222,
        "name": "open hihat",
        "game": "CT",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "CT_open_hihat"
    },
    {
        "id": 223,
        "name": "oh",
        "game": "CT",
        "loop": 0,
        "env": 65504,
        "pitch": 32768,
        "filename": "CT_oh"
    },
    {
        "id": 224,
        "name": "bass 2",
        "game": "FF6T",
        "loop": 12552,
        "env": 65518,
        "pitch": 54144,
        "filename": "FF6T_bass_2"
    },
    {
        "id": 225,
        "name": "sitar",
        "game": "FF6T",
        "loop": 534,
        "env": 65518,
        "pitch": 54784,
        "filename": "FF6T_sitar"
    },
    {
        "id": 226,
        "name": "sitar",
        "game": "CT",
        "loop": 33546,
        "env": 65518,
        "pitch": 65518,
        "filename": "CT_sitar"
    },
    {
        "id": 227,
        "name": "soft cymbal",
        "game": "CT",
        "loop": 15114,
        "env": 65523,
        "pitch": 65024,
        "filename": "CT_soft_cymbal"
    },
    {
        "id": 228,
        "name": "magus laugh",
        "game": "CT",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "CT_magus_laugh"
    },
    {
        "id": 229,
        "name": "bright piano",
        "game": "CT",
        "loop": 54291,
        "env": 65518,
        "pitch": 47988,
        "filename": "CT_bright_piano"
    },
    {
        "id": 230,
        "name": "future bell",
        "game": "CT",
        "loop": 0,
        "env": 65268,
        "pitch": 8960,
        "filename": "CT_future_bell"
    },
    {
        "id": 231,
        "name": "shaker",
        "game": "TC",
        "loop": 0,
        "env": 65504,
        "pitch": 0,
        "filename": "TC_shaker"
    },
    {
        "id": 232,
        "name": "string",
        "game": "CT",
        "loop": 5142,
        "env": 65504,
        "pitch": 50477,
        "filename": "CT_string"
    },
    {
        "id": 233,
        "name": "drum track",
        "game": "SMRPG",
        "loop": 9216,
        "env": 65504,
        "pitch": 0,
        "filename": "SMRPG_drum_track"
    },
    {
        "id": 234,
        "name": "trombone",
        "game": "SMRPG",
        "loop": 42246,
        "env": 65504,
        "pitch": 21646,
        "filename": "SMRPG_trombone"
    },
    {
        "id": 235,
        "name": "timpani",
        "game": "SMRPG",
        "loop": 63498,
        "env": 65504,
        "pitch": 0,
        "filename": "SMRPG_timpani"
    },
    {
        "id": 236,
        "name": "cowbell",
        "game": "SMRPG",
        "loop": 25860,
        "env": 65504,
        "pitch": 0,
        "filename": "SMRPG_cowbell"
    },
    {
        "id": 237,
        "name": "snare drum",
        "game": "SMRPG",
        "loop": 51720,
        "env": 65504,
        "pitch": 0,
        "filename": "SMRPG_snare_drum"
    },
    {
        "id": 238,
        "name": "shaker",
        "game": "SMRPG",
        "loop": 33795,
        "env": 65504,
        "pitch": 0,
        "filename": "SMRPG_shaker"
    },
    {
        "id": 239,
        "name": "closed hihat",
        "game": "SMRPG",
        "loop": 37638,
        "env": 65504,
        "pitch": 0,
        "filename": "SMRPG_closed_hihat"
    },
    {
        "id": 240,
        "name": "piano 2",
        "game": "SMRPG",
        "loop": 28440,
        "env": 65516,
        "pitch": 21510,
        "filename": "SMRPG_piano_2"
    },
    {
        "id": 241,
        "name": "piano 3",
        "game": "SMRPG",
        "loop": 10515,
        "env": 65517,
        "pitch": 11839,
        "filename": "SMRPG_piano_3"
    },
    {
        "id": 242,
        "name": "bass guitar",
        "game": "SMRPG",
        "loop": 16644,
        "env": 65518,
        "pitch": 53929,
        "filename": "SMRPG_bass_guitar"
    },
    {
        "id": 243,
        "name": "synth bass",
        "game": "TOTR",
        "loop": 58125,
        "env": 65504,
        "pitch": 57682,
        "filename": "TOTR_synth_bass"
    },
    {
        "id": 244,
        "name": "pipe organ",
        "game": "LAL",
        "loop": 38403,
        "env": 65408,
        "pitch": 43100,
        "filename": "LAL_pipe_organ"
    },
    {
        "id": 245,
        "name": "strings",
        "game": "LAL",
        "loop": 6663,
        "env": 65472,
        "pitch": 39212,
        "filename": "LAL_strings"
    },
    {
        "id": 246,
        "name": "guitar",
        "game": "LAL",
        "loop": 28164,
        "env": 36726,
        "pitch": 20768,
        "filename": "LAL_guitar"
    },
    {
        "id": 247,
        "name": "brass",
        "game": "LAL",
        "loop": 35085,
        "env": 65504,
        "pitch": 10240,
        "filename": "LAL_brass"
    },
    {
        "id": 248,
        "name": "chorus",
        "game": "LAL",
        "loop": 6912,
        "env": 64392,
        "pitch": 5376,
        "filename": "LAL_chorus"
    },
    {
        "id": 249,
        "name": "kick drum",
        "game": "LAL",
        "loop": 46854,
        "env": 65504,
        "pitch": 0,
        "filename": "LAL_kick_drum"
    },
    {
        "id": 250,
        "name": "snare",
        "game": "LAL",
        "loop": 63498,
        "env": 65525,
        "pitch": 62464,
        "filename": "LAL_snare"
    },
    {
        "id": 251,
        "name": "machine sound",
        "game": "LAL",
        "loop": 53508,
        "env": 65184,
        "pitch": 32512,
        "filename": "LAL_machine_sound"
    },
    {
        "id": 252,
        "name": "snap",
        "game": "LAL",
        "loop": 7428,
        "env": 65504,
        "pitch": 32512,
        "filename": "LAL_snap"
    },
    {
        "id": 253,
        "name": "percussion",
        "game": "LAL",
        "loop": 19722,
        "env": 65504,
        "pitch": 0,
        "filename": "LAL_percussion"
    },
    {
        "id": 254,
        "name": "timpani",
        "game": "LAL",
        "loop": 63765,
        "env": 65457,
        "pitch": 50176,
        "filename": "LAL_timpani"
    },
    {
        "id": 255,
        "name": "pizzo",
        "game": "LAL",
        "loop": 28680,
        "env": 48755,
        "pitch": 46848,
        "filename": "LAL_pizzo"
    }
];