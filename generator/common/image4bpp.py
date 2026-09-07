from collections.abc import Iterable
from os import PathLike
import struct
import zlib
import binascii

from sprites.snes_palette import Snes_Palette


class Image4bpp:
    def __init__(
        self,
        size: tuple[int, int],
        palette: Snes_Palette,
        transparent_index: int | None = 0,
    ):
        width, height = size

        if width < 0 or height < 0:
            raise ValueError("image dimensions must not be negative")

        if len(palette) == 0:
            raise ValueError("palette must contain at least one color")

        if len(palette) > 16:
            raise ValueError("4bpp images support a maximum of 16 colors")

        if (
            transparent_index is not None
            and not 0 <= transparent_index < len(palette)
        ):
            raise ValueError("transparent_index is outside the palette")

        self.width = width
        self.height = height
        self.palette = palette
        self.transparent_index = transparent_index
        self._pixels = [0] * (width * height)

    @property
    def size(self) -> tuple[int, int]:
        return self.width, self.height

    def putdata(
        self,
        data: Iterable[int],
        scale: float = 1.0,
        offset: int = 0,
    ) -> None:

        pixels = [
            int(value * scale + offset)
            for value in data
        ]

        expected_size = self.width * self.height

        if len(pixels) != expected_size:
            raise ValueError(
                f"expected {expected_size} pixels, got {len(pixels)}"
            )

        for pixel in pixels:
            if not 0 <= pixel <= 15:
                raise ValueError(
                    f"4bpp pixel value must be between 0 and 15, got {pixel}"
                )

        self._pixels = pixels

    def getdata(self) -> list[int]:
        return self._pixels.copy()

    def resize(
        self,
        size: tuple[int, int],
        resample: str | int | None = "nearest",
    ) -> "Image4bpp":
        if resample not in (None, "nearest", 0):
            raise ValueError("Image4bpp only supports nearest-neighbor resizing")

        new_width, new_height = size
        if new_width < 0 or new_height < 0:
            raise ValueError("image dimensions must not be negative")

        resized = Image4bpp(
            size,
            self.palette,
            transparent_index=self.transparent_index,
        )

        if new_width == 0 or new_height == 0:
            return resized

        pixels = [0] * (new_width * new_height)
        for y in range(new_height):
            source_y = y * self.height // new_height
            destination_row = y * new_width
            source_row = source_y * self.width
            for x in range(new_width):
                source_x = x * self.width // new_width
                pixels[destination_row + x] = self._pixels[source_row + source_x]

        resized.putdata(pixels)
        return resized

    def _make_palette_chunk(self) -> bytes:
        palette_data = bytearray()

        for color in self.palette:
            palette_data.extend((
                color.R & 0xFF,
                color.G & 0xFF,
                color.B & 0xFF,
            ))

        return bytes(palette_data)

    def _make_alpha_chunk(self) -> bytes:
        alpha_data = bytearray()

        for index, color in enumerate(self.palette):
            alpha = max(0, min(255, color.A))

            if index == self.transparent_index:
                alpha = 0

            alpha_data.append(alpha)

        return bytes(alpha_data)

    def _make_scanlines(self) -> bytes:
        scanlines = bytearray()
        bytes_per_row = (self.width + 1) // 2

        for y in range(self.height):
            row = self._pixels[
                y * self.width:(y + 1) * self.width
            ]

            packed_row = bytearray()

            for x in range(0, self.width, 2):
                high_nibble = row[x] << 4

                if x + 1 < self.width:
                    low_nibble = row[x + 1]
                else:
                    low_nibble = 0

                packed_row.append(high_nibble | low_nibble)

            if len(packed_row) != bytes_per_row:
                raise ValueError("invalid packed row size")

            scanlines.append(0)
            scanlines.extend(packed_row)

        return bytes(scanlines)

    @staticmethod
    def _chunk(chunk_type: bytes, data: bytes) -> bytes:
        length = struct.pack(">I", len(data))
        crc = binascii.crc32(chunk_type + data) & 0xFFFFFFFF

        return (
            length
            + chunk_type
            + data
            + struct.pack(">I", crc)
        )

    def to_png_bytes(self) -> bytes:
        signature = b"\x89PNG\r\n\x1a\n"

        ihdr = struct.pack(
            ">IIBBBBB",
            self.width,
            self.height,
            4,  # 4 bits per pixel
            3,  # indexed-color PNG
            0,  # compression method
            0,  # filter method
            0,  # no interlace
        )

        png = bytearray(signature)

        png.extend(self._chunk(b"IHDR", ihdr))
        png.extend(self._chunk(b"PLTE", self._make_palette_chunk()))
        png.extend(self._chunk(b"tRNS", self._make_alpha_chunk()))

        compressed_scanlines = zlib.compress(self._make_scanlines())
        png.extend(self._chunk(b"IDAT", compressed_scanlines))
        png.extend(self._chunk(b"IEND", b""))

        return bytes(png)

    def save(self, file: str | bytes | PathLike[str]) -> None:
        with open(file, "wb") as output:
            output.write(self.to_png_bytes())