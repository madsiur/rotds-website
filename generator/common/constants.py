class Constants:

    _WEBSITE_DIR = "website"
    _COMMON_DIR = "common"
    _ROMS_DIR = "roms"
    _CHAR_DIR = "characters"
    _MUSIC_DIR = "music"
    _TEXT_DIR = "text"
    _FONT_DIR = "fonts"
    _GUIDE_DIR = "guide"
    _MISC_DIR = "misc"
    _GUIDE_MEDIA_DIR = "guidemedia"
    _ITEM_MEDIA_DIR = "itemsmedia"
    _ITEM_DETAIL_DIR = "itemdetails"
    _MAPS_IMG_DIR = "maps"
    _MEDIA_DIR = "media"
    _ROMDATA_DIR = "romdata"
    _NPC_DIR = "npcs"
    _MONS_DETAIL_DIR = "monsterdetails"
    _MONS_IMG_DIR = "monsters"
    _MONS_JSON_DIR = "monsters"
    _PORTRAITS_DIR = "portraits"
    _TEMPLATES_DIR = "templates"
    _MML_DIR = "mml"
    _SPC_DIR = "spc"
    _BRR_DIR = "brr"
    _FOLDER_SECTION = "folder"
    _BRR_SECTION = "brr"

    _WEBSITE_URL = "https://www.rotds.com/"
    _COMMON_TITLE = "RotDS - "
    _COMMON_DESC = "of the Return of the Dark Sorcerer official website."

    _DIFFICULTIES = ["normal", "hard", "extreme", "insane"]

    _GALLERY_URLS = [
        "monsters-1.html",
        "monsters-2.html",
        "monsters-3.html",
        "monsters-4.html",
        "espers.html",
    ]

    _BTN_DARK = "btn-dark"
    _BTN_SECONDARY = "btn-secondary"

    _COMMON_KEYWORDS = [
        "return of the dark sorcerer",
        "rotds",
        "ffvi rotds",
        "ff6 rotds",
        "ff6 hack",
        "ffvi hack",
        "ff6 romhack",
        "ffvi romhack",
        "ff6 rom hack",
        "ffvi rom hack",
        "ff6 mod",
        "ffvi mod",
        "ff6 hacking",
        "ffvi hacking",
        "ff6 modding",
        "ffvi modding",
        "romhack",
        "mod",
        "romhacking",
        "modding",
        "snes",
        "super nintendo",
        "squaresoft",
        "square-enix"
    ]

    _MAPS_KEYWORDS = [
        "map",
        "world map",
        "world of balance",
        "world of ruins"
    ]
    
    _MUSIC_KEYWORDS = [
        "music",
        "soundtrack",
        "ost",
        "original soundtrack",
        "music list",
        "soundtrack list",
        "ost list",
        "original soundtrack list",
        "music tracks",
        "brr",
        "spc",
        "spc songs",
        "brr samples",
        "instrument samples",
        "music samples",
        "spc 700",
        "spc-700"
    ]


    _MONSTER_KEYWORDS = [
        "monster", 
        "enemy",
        "boss",
        "monster stats",
        "enemy stats",
        "boss stats",
        "monster data",
        "enemy data",   
        "boss data",
        "monster information",
        "enemy information",
        "boss information",
        "monster details",
        "enemy details",
        "boss details",
        "monster sprites",
        "enemy sprites",
        "boss sprites"
    ]

    _ESPER_KEYWORDS = [
        "esper",
        "summon",
        "magicite",
        "summon",
        "esper sprites",
        "summon sprites"
    ]
    
    _CHARACTER_KEYWORDS = [
        "character",
        "playable character",
        "party member",
        "character stats",
        "playable character stats",
        "party member stats",
        "aurora",
        "cloud",
        "avalon",
        "oboro",
        "serin",
        "ronan",
        "tifa",
        "fusoya",
        "eiko",
        "otis",
        "mog",
        "arc",
        "golbez",
        "heartless",
        "astral",
        "reaper"
    ]

    _GUIDE_KEYWORDS = [
        "guide",
        "walkthrough",
        "strategy",
        "tips",
        "hints",
        "strategies",
        "bosses",
        "boss",
        "story",
        "plot"
    ]

    _NPCS_KEYWORDS = [
        "npc",
        "npcs",
        "non-playable character",
        "portrait",
        "sprite",
        "npc portrait",
        "npc sprite",
        "npc gallery",
        "npc list",
        "npc images"
    ]

    _ITEM_KEYWORDS = [
        "items",
        "game items",
        "armors",
        "relics",
        "weapons",
        "aethers",
        "helmets",
        "shields",
        "rods",
        "cloacks",
        "flairs",
        "bracers",
        "belts",
        "gloves",
        "boots",
        "rings",
        "amulets",
        "consumable",
        "consumables",
        "items list",
        "item list",
    ]

    _CHAR_NAME_ADDR = 0x0478C0
    _CHAR_NAME_LENGTH = 6
    _CHAR_NUM = 64

    _CMD_NAME_ADDR = 0x18CEA0
    _CMD_NAME_LENGTH = 7
    _CMD_NUM = 32

    _ITEM_NAME_ADDR = 0x12B300
    _ITEM_NAME_LENGTH = 13

    _ITEM_DATA_ADDR = 0x185000
    _ITEM_DATA_LENGTH = 30

    _ITEM_DESC_BASE_ADDR = 0x369A00
    _ITEM_DESC_BASE_PTR = 0x2D7AA0
    _ITEM_DESC_PTR_LENGTH = 0x02

    _ITEM_NUM = 256

    _SPELL_NAME_ADDR = 0x316100
    _SPELL_NAME_LENGTH = 9
    _SPELL_NUM = 54

    _ESPER_ATK_NAME_ADDR = 0x316F4E
    _ESPER_ATK_NAME_LENGTH = 16
    _ESPER_ATK_NUM = 27

    _ATK_NAME_ADDR = 0x31645E
    _ATK_NAME_LENGTH = 16
    _ATK_NUM = 175

    _MONS_STAT_NOR = 0x450400
    _MONS_STAT_HAR = 0x0F0000
    _MONS_STAT_EXT = 0x454C00
    _MONS_STAT_INS = 0x490000
    _MONS_STAT_LENGTH = 32

    _MONS_LOOT_ADDR = 0x0F3000
    _MONS_LOOT_LENGTH = 4

    _MONS_TORM_ADDR = 0x0F3D00
    _MONS_TORM_LENGTH = 4

    _MONS_INV_ADDR = 0x0F4300
    _MONS_INV_LENGTH = 2

    _MONS_SPRT_ADDR = 0x0F4600
    _MONS_SPRT_LENGTH = 2

    _MONS_SATK_NAME_ADDR = 0x3D0000
    _MONS_SATK_NAME_LENGTH = 16

    _MONS_NAME_ADDR = 0x0FC050
    _MONS_NAME_LENGTH = 10
    _MONS_NUM = 384

    _ESPER_NAME_ADDR = 0x3162E6
    _ESPER_NAME_LENGTH = 12
    _ESPER_NUM = 27

    _META_ADDR = 0x047F40
    _META_LENGTH = 4
    _META_NUM = 32

    _SMALL_FONT_ADDR = 0x0485C0
    _SMALL_FONT_LENGTH = 0xA00
    _SMALL_FONT_NUM_CHARS = 0xA0
    _SMALL_FONT_START_CHAR = 0x60
    _SMALL_FONT_PALETTE = [
        (0xB4, 0xC4, 0xDD), # background
        (0x00, 0x00, 0x00), # Black
        (0x80, 0x80, 0x80), # Gray
        (0xFF, 0xFF, 0xFF), # White
    ]

    TILE_LENGTH_2BPP = 16

    @property
    def WEBSITE_DIR(self):
        return self._WEBSITE_DIR
    
    @property
    def COMMON_DIR(self):
        return self._COMMON_DIR
    
    @property
    def ROMS_DIR(self):
        return self._ROMS_DIR
    
    @property
    def CHAR_DIR(self):
        return self._CHAR_DIR
    
    @property
    def MUSIC_DIR(self):
        return self._MUSIC_DIR
    
    @property
    def TEXT_DIR(self):
        return self._TEXT_DIR
    
    @property
    def FONT_DIR(self):
        return self._FONT_DIR
    
    @property
    def GUIDE_DIR(self):
        return self._GUIDE_DIR
    
    @property
    def MISC_DIR(self):
        return self._MISC_DIR
    
    @property
    def MEDIA_DIR(self):
        return self._MEDIA_DIR
    
    @property
    def ROMDATA_DIR(self):
        return self._ROMDATA_DIR
    
    @property
    def NPC_DIR(self):
        return self._NPC_DIR
    
    @property
    def GUIDE_MEDIA_DIR(self):
        return self._GUIDE_MEDIA_DIR
    
    @property
    def ITEM_MEDIA_DIR(self):
        return self._ITEM_MEDIA_DIR
    
    @property
    def ITEM_DETAIL_DIR(self):
        return self._ITEM_DETAIL_DIR
    
    @property
    def MAPS_IMG_DIR(self):
        return self._MAPS_IMG_DIR
    
    @property
    def MONS_DETAIL_DIR(self):
        return self._MONS_DETAIL_DIR
    
    @property
    def MONS_IMG_DIR(self):
        return self._MONS_IMG_DIR
    
    @property
    def MONS_JSON_DIR(self):
        return self._MONS_JSON_DIR
    
    @property
    def PORTRAITS_DIR(self):
        return self._PORTRAITS_DIR
    
    @property
    def TEMPLATES_DIR(self):
        return self._TEMPLATES_DIR
    
    @property
    def MML_DIR(self):
        return self._MML_DIR
    
    @property
    def SPC_DIR(self):
        return self._SPC_DIR
    
    @property
    def BRR_DIR(self):
        return self._BRR_DIR
    
    @property
    def FOLDER_SECTION(self):
        return self._FOLDER_SECTION
    
    @property
    def BRR_SECTION(self):
        return self._BRR_SECTION
    
    @property
    def WEBSITE_URL(self):
        return self._WEBSITE_URL
    
    @property
    def COMMON_TITLE(self):
        return self._COMMON_TITLE
    
    @property
    def COMMON_DESC(self):
        return self._COMMON_DESC
    
    @property
    def DIFFICULTIES(self):
        return self._DIFFICULTIES
    
    @property
    def GALLERY_URLS(self):
        return self._GALLERY_URLS
    
    @property
    def BTN_DARK(self):
        return self._BTN_DARK
    
    @property
    def BTN_SECONDARY(self):
        return self._BTN_SECONDARY
    
    @property
    def COMMON_KEYWORDS(self):
        return ", ".join(self._COMMON_KEYWORDS)
    
    @property
    def MAPS_KEYWORDS(self):
        return ", ".join(self._COMMON_KEYWORDS + self._MAPS_KEYWORDS)
    
    @property
    def MUSIC_KEYWORDS(self):
        return ", ".join(self._COMMON_KEYWORDS + self._MUSIC_KEYWORDS)
    
    @property
    def MONSTER_KEYWORDS(self):
        return ", ".join(self._COMMON_KEYWORDS + self._MONSTER_KEYWORDS)
    
    @property
    def ESPER_KEYWORDS(self):
        return ", ".join(self._COMMON_KEYWORDS + self._ESPER_KEYWORDS)
    
    @property
    def CHARACTER_KEYWORDS(self):
        return ", ".join(self._COMMON_KEYWORDS + self._CHARACTER_KEYWORDS)
    
    @property
    def GUIDE_KEYWORDS(self):
        return ", ".join(self._COMMON_KEYWORDS + self._GUIDE_KEYWORDS)
    
    @property
    def NPCS_KEYWORDS(self):
        return ", ".join(self._COMMON_KEYWORDS + self._NPCS_KEYWORDS)
    
    @property
    def ITEM_KEYWORDS(self):
        return ", ".join(self._COMMON_KEYWORDS + self._ITEM_KEYWORDS)
    
    @property
    def CHAR_NAME_ADDR(self):
        return self._CHAR_NAME_ADDR
    
    @property
    def CHAR_NAME_LENGTH(self):
        return self._CHAR_NAME_LENGTH
    
    @property
    def CHAR_NUM(self):
        return self._CHAR_NUM
    
    @property
    def CMD_NAME_ADDR(self):
        return self._CMD_NAME_ADDR
    
    @property
    def CMD_NAME_LENGTH(self):
        return self._CMD_NAME_LENGTH
    
    @property
    def CMD_NUM(self):
        return self._CMD_NUM
    
    @property
    def ITEM_NAME_ADDR(self):
        return self._ITEM_NAME_ADDR
    
    @property
    def ITEM_NAME_LENGTH(self):
        return self._ITEM_NAME_LENGTH
    
    @property
    def ITEM_DATA_ADDR(self):
        return self._ITEM_DATA_ADDR
    
    @property
    def ITEM_DATA_LENGTH(self):
        return self._ITEM_DATA_LENGTH
    
    @property
    def ITEM_DESC_BASE_ADDR(self):
        return self._ITEM_DESC_BASE_ADDR
    
    @property
    def ITEM_DESC_BASE_PTR(self):
        return self._ITEM_DESC_BASE_PTR
    
    @property
    def ITEM_DESC_PTR_LENGTH(self):
        return self._ITEM_DESC_PTR_LENGTH
    
    @property
    def ITEM_NUM(self):
        return self._ITEM_NUM
    
    @property
    def SPELL_NAME_ADDR(self):
        return self._SPELL_NAME_ADDR
    
    @property
    def SPELL_NAME_LENGTH(self):
        return self._SPELL_NAME_LENGTH
    
    @property
    def SPELL_NUM(self):
        return self._SPELL_NUM
    
    @property
    def ESPER_ATK_NAME_ADDR(self):
        return self._ESPER_ATK_NAME_ADDR
    
    @property
    def ESPER_ATK_NAME_LENGTH(self):
        return self._ESPER_ATK_NAME_LENGTH
    
    @property
    def ESPER_ATK_NUM(self):
        return self._ESPER_ATK_NUM
    
    @property
    def ATK_NAME_ADDR(self):
        return self._ATK_NAME_ADDR
    
    @property
    def ATK_NAME_LENGTH(self):
        return self._ATK_NAME_LENGTH
    
    @property
    def ATK_NUM(self):
        return self._ATK_NUM
    
    @property
    def MONS_STAT_NOR(self):
        return self._MONS_STAT_NOR
    
    @property
    def MONS_STAT_HAR(self):
        return self._MONS_STAT_HAR
    
    @property
    def MONS_STAT_EXT(self):
        return self._MONS_STAT_EXT
    
    @property
    def MONS_STAT_INS(self):
        return self._MONS_STAT_INS
    
    @property
    def MONS_STAT_LENGTH(self):
        return self._MONS_STAT_LENGTH
    
    @property
    def MONS_LOOT_ADDR(self):
        return self._MONS_LOOT_ADDR
    
    @property
    def MONS_LOOT_LENGTH(self):
        return self._MONS_LOOT_LENGTH
    
    @property
    def MONS_TORM_ADDR(self):
        return self._MONS_TORM_ADDR
    
    @property
    def MONS_TORM_LENGTH(self):
        return self._MONS_TORM_LENGTH
    
    @property
    def MONS_INV_ADDR(self):
        return self._MONS_INV_ADDR
    
    @property
    def MONS_INV_LENGTH(self):
        return self._MONS_INV_LENGTH
    
    @property
    def MONS_SPRT_ADDR(self):
        return self._MONS_SPRT_ADDR
    
    @property
    def MONS_SPRT_LENGTH(self):
        return self._MONS_SPRT_LENGTH
    
    @property
    def MONS_SATK_NAME_ADDR(self):
        return self._MONS_SATK_NAME_ADDR
    
    @property
    def MONS_SATK_NAME_LENGTH(self):
        return self._MONS_SATK_NAME_LENGTH
    
    @property
    def MONS_NAME_ADDR(self):
        return self._MONS_NAME_ADDR
    
    @property
    def MONS_NAME_LENGTH(self):
        return self._MONS_NAME_LENGTH
    
    @property
    def MONS_NUM(self):
        return self._MONS_NUM
    
    @property
    def ESPER_NAME_ADDR(self):
        return self._ESPER_NAME_ADDR
    
    @property
    def ESPER_NAME_LENGTH(self):
        return self._ESPER_NAME_LENGTH
    
    @property
    def ESPER_NUM(self):
        return self._ESPER_NUM
    
    @property
    def META_ADDR(self):
        return self._META_ADDR
    
    @property
    def META_LENGTH(self):
        return self._META_LENGTH
    
    @property
    def META_NUM(self):
        return self._META_NUM
    
    @property
    def SMALL_FONT_ADDR(self):
        return self._SMALL_FONT_ADDR
    
    @property
    def SMALL_FONT_LENGTH(self):
        return self._SMALL_FONT_LENGTH
    
    @property
    def SMALL_FONT_PALETTE(self):
        return self._SMALL_FONT_PALETTE
    
    @property
    def SMALL_FONT_NUM_CHARS(self):
        return self._SMALL_FONT_NUM_CHARS
    
    @property
    def SMALL_FONT_START_CHAR(self):
        return self._SMALL_FONT_START_CHAR
    
    @property
    def TILE_LENGTH_2BPP(self):
        return self.TILE_LENGTH_2BPP

