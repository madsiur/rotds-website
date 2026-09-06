from sprites.snes_color import Snes_Color

class Snes_Palette:
    def __init__(self, raw_bytes: bytes | bytearray | list[int] | None = None):
        self._colors: list[Snes_Color] = []
        if raw_bytes is not None:
            self.load(raw_bytes)

    def load(self, data: bytes | bytearray | list[int]) -> None:
        if isinstance(data, (bytes, bytearray)):
            values = [int.from_bytes(data[i:i+2], 'little') for i in range(0, len(data), 2)]
        else:
            values = list(data)
        self._colors = [self._to_color(v) for v in values]

    @classmethod
    def _to_color(cls, value: int) -> Snes_Color:
        r5 = value & 0x001F
        g5 = (value & 0x03E0) >> 5
        b5 = (value & 0x7C00) >> 10
        return Snes_Color(
            r=r5 * 255 // 31,
            g=g5 * 255 // 31,
            b=b5 * 255 // 31
        )

    @classmethod
    def _from_color(cls, c: Snes_Color) -> int:
        r5 = min(31, round(c.R * 31 / 255))
        g5 = min(31, round(c.G * 31 / 255))
        b5 = min(31, round(c.B * 31 / 255))
        return (b5 << 10) | (g5 << 5) | r5

    def to_flat_rgba(self, transparent_index: int = 0, size: int = 256) -> list[int]:
        out: list[int] = []
        for i, c in enumerate(self._colors):
            alpha = 0 if i == transparent_index else 255
            out.extend([c.R, c.G, c.B, alpha])
        out += [0, 0, 0, 0] * (size - len(self._colors))
        return out

    def __len__(self) -> int:
        return len(self._colors)

    def __getitem__(self, index: int) -> Snes_Color:
        return self._colors[index]

    def __iter__(self):
        return iter(self._colors)

    def set_color(self, index: int, color: Snes_Color) -> None:
        self._colors[index] = color

    def to_bytes(self) -> bytes:
        out = bytearray()
        for c in self._colors:
            out += self._from_color(c).to_bytes(2, 'little')
        return bytes(out)

    def __repr__(self) -> str:
        return f"SNESPalette({len(self)} colors)"