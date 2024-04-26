import common.helpers as helpers
from common.constants import Constants
from romdata.items import ItemList

class MetamorphPack:
    def __init__(self, id: int, items: bytearray):
        self.id = id
        self.item_1 = items[0]
        self.item_2 = items[1]
        self.item_3 = items[2]
        self.item_4 = items[3]

class MetamorphPackList(list):
    def __init__(self):
        super().__init__()
        self.cons = Constants()

    def create_list(self, rom: bytearray):
        for id in range(self.cons.META_NUM):
            items = helpers.get_bin_data(rom, id, self.cons.META_ADDR, self.cons.META_LENGTH)
            self.append(MetamorphPack(id, items))

    def get_dict(self, id: int, item_list: ItemList):
        pack = {}
        pack["id"] = id
        pack["metamorph_a"] = item_list.get_dict(self[id].item_1)
        pack["metamorph_b"] = item_list.get_dict(self[id].item_2)
        pack["metamorph_c"] = item_list.get_dict(self[id].item_3)
        pack["metamorph_d"] = item_list.get_dict(self[id].item_4)
        return pack