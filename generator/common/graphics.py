import sys
from PIL import Image

def convert_2bpp_tile(tile_data):
    tile = [[0]*8 for _ in range(8)]

    for i in range(8):
        low_byte = tile_data[i*2]
        high_byte = tile_data[i*2 + 1]

        for j in range(8):
            low_bit = (low_byte >> (7-j)) & 1
            high_bit = (high_byte >> (7-j)) & 1
            color_index = (high_bit << 1) | low_bit
            tile[i][j] = color_index

    return tile

def draw_tile(img: Image.Image, tile, x, y, palette):
    for i in range(8):
        for j in range(8):
            color = palette[tile[i][j]]
            img.putpixel((x+j, y+i), color)

def save_image(img: Image.Image, file_path: str):
    try:
        img.save(file_path)
        print(f"Saved image {file_path}")
    except ValueError as e:
        print(f"An ValueError occurred while saving {file_path}: {e}")
        sys.exit()
    except KeyError as e:
        print(f"An KeyError occurred while saving {file_path}: {e}")
        sys.exit()
    except IOError as e:
        print(f"An IOError occurred while saving {file_path}: {e}")
        sys.exit()