class Snes_Color:
    def __init__(self, r: int = 0, g: int = 0, b: int = 0, a: int = 255):
        self.R = r
        self.G = g
        self.B = b
        self.A = a

    def __repr__(self) -> str:
        return f"Color({self.R}, {self.G}, {self.B}, {self.A})"

    def to_hex(self) -> str:
        return f"#{self.R:02X}{self.G:02X}{self.B:02X}"

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Snes_Color):
            return NotImplemented
        return (self.R, self.G, self.B, self.A) == (other.R, other.G, other.B, other.A)