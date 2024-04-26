import os
import sys
import common.helpers as helpers
import common.graphics as graphics
from PIL import Image

def extract_small_font(file_path, rom, cons=helpers.get_constants()):
    font_data = rom[cons.SMALL_FONT_ADDR:cons.SMALL_FONT_ADDR+cons.SMALL_FONT_LENGTH]
    img = Image.new("RGB", (16 * 8, (cons._SMALL_FONT_NUM_CHARS//16)*8))
    for i in range(0, len(font_data), 16):
        tile_data = font_data[i:i+16]
        tile = graphics.convert_2bpp_tile(tile_data)
        x = int((i % 256) / 2)
        y = int((i // 256) * 8)
        print(f"Drawing tile {i//16} at ({x}, {y})")
        graphics.draw_tile(img, tile, x, y, cons.SMALL_FONT_PALETTE)
    graphics.save_image(img, os.path.join(file_path, "small_font.png"))
