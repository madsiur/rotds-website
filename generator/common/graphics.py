import sys
import math
from PIL import Image
from sprites.snes_palette import Snes_Palette

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

def convert_4bpp_tile(tile_data):
    tile = [[0] * 8 for _ in range(8)]

    for i in range(8):
        for j in range(8):
            byte_index = i * 4 + (j // 2)
            if j % 2 == 0:
                tile[i][j] = (tile_data[byte_index] >> 4) & 0x0F
            else:
                tile[i][j] = tile_data[byte_index] & 0x0F

    return tile

def get_4bpp_tile(rom_tile: bytearray):
    tile = [0] * 64
    i = 0
    for y in range(8):
        c = rom_tile[i]
        i = i + 1
        tile[7 + y * 8] += (c & 0x01) >> 0
        tile[6 + y * 8] += (c & 0x02) >> 1
        tile[5 + y * 8] += (c & 0x04) >> 2
        tile[4 + y * 8] += (c & 0x08) >> 3
        tile[3 + y * 8] += (c & 0x10) >> 4
        tile[2 + y * 8] += (c & 0x20) >> 5
        tile[1 + y * 8] += (c & 0x40) >> 6
        tile[0 + y * 8] += (c & 0x80) >> 7
        c = rom_tile[i]
        i = i + 1
        tile[7 + y * 8] += (c & 0x01) << 1
        tile[6 + y * 8] += (c & 0x02) >> 0
        tile[5 + y * 8] += (c & 0x04) >> 1
        tile[4 + y * 8] += (c & 0x08) >> 2
        tile[3 + y * 8] += (c & 0x10) >> 3
        tile[2 + y * 8] += (c & 0x20) >> 4
        tile[1 + y * 8] += (c & 0x40) >> 5
        tile[0 + y * 8] += (c & 0x80) >> 6

    for y in range(8):
        c = rom_tile[i]
        i = i + 1
        tile[7 + y * 8] += (c & 0x01) << 2
        tile[6 + y * 8] += (c & 0x02) << 1
        tile[5 + y * 8] += (c & 0x04) >> 0
        tile[4 + y * 8] += (c & 0x08) >> 1
        tile[3 + y * 8] += (c & 0x10) >> 2
        tile[2 + y * 8] += (c & 0x20) >> 3
        tile[1 + y * 8] += (c & 0x40) >> 4
        tile[0 + y * 8] += (c & 0x80) >> 5
        c = rom_tile[i]
        i = i + 1
        tile[7 + y * 8] += (c & 0x01) << 3
        tile[6 + y * 8] += (c & 0x02) << 2
        tile[5 + y * 8] += (c & 0x04) << 1
        tile[4 + y * 8] += (c & 0x08) >> 0
        tile[3 + y * 8] += (c & 0x10) >> 1
        tile[2 + y * 8] += (c & 0x20) >> 2
        tile[1 + y * 8] += (c & 0x40) >> 3
        tile[0 + y * 8] += (c & 0x80) >> 4

    return tile

def get_poses(poselist: list, poses: list):
    fullposes = []
    for id in range(len(poselist)):
        pose_id = poselist[id] - 1
        fullposes.append(poses[pose_id])
    return fullposes

def create_sheets(filepath: str, tiles: list, palettes: list[Snes_Palette], poses: list):
    for pal_id in range(0, len(palettes)):
        filename = f"{filepath}_{pal_id}"
        create_sheet(filename, tiles, palettes[pal_id], poses)

def create_sheet(filepath: str, tiles: list, palette: Snes_Palette, poses: list):
    width = min(8, len(poses))
    height = math.ceil(len(poses) / 8)

    output = Image.new("P", (width * 16, height * 24))
    palette_flat = palette.to_flat_rgba()
    output.putpalette(palette_flat, rawmode='RGBA')

    pixels = bytearray(width * 16 * height * 24)
    for y in range(height):
        for x in range(width):
            pose = poses[y * width + x]
            for t in range(6):
                tile = tiles[pose[t]]
                dx = (t % 2) * 8
                dy = (t // 2) * 8
                for y1 in range(8):
                    row_start = (y * 24 + dy + y1) * (width * 16) + x * 16 + dx
                    pixels[row_start:row_start+8] = bytes(tile[y1*8:y1*8+8])

    output.putdata(pixels)
    img_doubled = output.resize((output.width * 2, output.height * 2), resample=Image.Resampling.NEAREST)
    filename = f"{filepath}.png"
    img_doubled.save(filename)
    print(f"Creating {filename}")

def get_new_tile(tile: list):
    return [p for y in range(8) for p in reversed(tile[y*8:(y+1)*8])]

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