using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;
using System.Windows.Media.Imaging;

namespace MonsExtract
{
    public class Monster
    {
        public int id;
        public string name;
        public string filename = string.Empty;
    }

    public class Program
    {
        public const int NUM_MONS = 415;
        public const int MAX_MONS = 410;
        public static readonly int[] EXCLUDED_IDS = { 055, 163, 259, 262, 303, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 364, 371, 376, 379, 400, 411, 414 };
        public static readonly int[] UNTRIMMED_IDS = { 397, 398, 399, 412, 413 };

        static void Main(string[] args)
        {
            List<Monster> monsters = new List<Monster>();
            string currentFolder = Path.GetDirectoryName(Process.GetCurrentProcess().MainModule.FileName);
            DirectoryInfo rootDirectory = Directory.GetParent(Directory.GetParent(Directory.GetParent(Directory.GetParent(Directory.GetParent(currentFolder).FullName).FullName).FullName).FullName);
            string monsterJson = Path.Combine(rootDirectory.FullName, "common", "monsters.json");
            string websiteFolder = Path.Combine(rootDirectory.FullName, "website");
            string imageFolder = Path.Combine(websiteFolder, "monsters");
            string jsFile = Path.Combine(websiteFolder, "js", "generated", "monsters.js");

            if (!File.Exists(monsterJson))
            {
                Console.WriteLine(monsterJson + " does not exist.");
                Environment.Exit(0);
            }

            using (StreamReader r = new StreamReader(monsterJson))
            {
                string json = r.ReadToEnd();
                monsters = JsonConvert.DeserializeObject<List<Monster>>(json);
            }

            string[] files = Directory.GetFiles(currentFolder, "*.smc");

            if (files.Length == 0)
            {
                Console.WriteLine("No ROM file found.");
                Environment.Exit(0);
            }

            string fileName = files[0];
            FileStream fs = new FileStream(fileName, FileMode.Open, FileAccess.Read);
            BinaryReader br = new BinaryReader(fs);

            if (Directory.Exists(imageFolder))
            {
                Directory.Delete(imageFolder, true);
            }

            Directory.CreateDirectory(imageFolder);

            byte[] rom = br.ReadBytes((int)fs.Length);

            for (int i = 0; i < NUM_MONS; i++)
            {
                if (!EXCLUDED_IDS.Contains(i))
                {
                    Monster m = null;
                    string monsName = string.Empty;

                    if (i <= MAX_MONS)
                    {
                        m = monsters.Where(x => x.id == i).First();
                        monsName = m.name.ToLower().Trim().Replace(". ", "_").Replace(" ", "_").Replace(".", "_").Replace("-", "_");
                    }

                    Bitmap img = GetMonsImg(rom, i);
                    
                    // create filename
                    string strId = i < 10 ? "00" + i : i < 100 ? "0" + i : i.ToString();
                    string filename = monsName == string.Empty ? strId: strId + "_" + monsName;
                    if (i <= MAX_MONS)
                    {
                        m.filename = filename;
                    }
                    filename += ".png";

                    if (img != null)
                    {
                        if(!UNTRIMMED_IDS.Contains(i))
                        {
                            img = TrimBitmap(img);
                        }
                        img.Save(Path.Combine(imageFolder, filename), ImageFormat.Png);
                        Console.WriteLine("creating " + filename + "..");
                    }
                }
            }

            br.Close();
            fs.Close();

            // write js file
            string strJson = "const monsters = \n";
            strJson += JsonConvert.SerializeObject(monsters, Formatting.Indented) + ";";
            using (StreamWriter w = new StreamWriter(jsFile))
            {
                w.Write(strJson);
            }

            Console.WriteLine(" ");
            Console.WriteLine("Operation completed!");
            Console.ReadKey();
        }
        

        public static Bitmap GetMonsImg(byte[] data, int index)
        {
            int offset = 0x2CD000 + index * 6;
            ushort gfxPtr = ByteManage.GetShort(data, offset); offset += 2;
            ushort palPtr = ByteManage.GetShortInverted(data, offset); offset += 2;
            byte mouldIndex = data[offset++];
            byte colorIndex = data[offset];

            bool is3bpp = (colorIndex & 0x80) == 0x80 ? true : false;
            int gfxOffset = (gfxPtr << 3) + 0x600000;
            bool isLargeMap = (palPtr & 0x8000) == 0x8000 ? true : false;
            int palOffset = ((palPtr & 0x3FF) << 4) + 0x127820;

            byte[] mould;

            if (isLargeMap)
                mould = ByteManage.GetByteArray(data, (ByteManage.GetShort(data, 0x29A822) + 0x290000) + mouldIndex * 32, 32);
            else
                mould = ByteManage.GetByteArray(data, (ByteManage.GetShort(data, 0x29A820) + 0x290000) + mouldIndex * 8, 8);

            int width = isLargeMap ? 128 : 64;
            int height = isLargeMap ? 128 : 64;

            byte[] pal = ByteManage.GetByteArray(data, palOffset, 32);
            System.Drawing.Color[] palette = new System.Drawing.Color[16];

            for (int i = 0; i < 16; i++)
            {
                ushort sC = ByteManage.GetShort(pal, i * 2);
                byte r = (byte)((sC % 32) * 8);
                byte g = (byte)(((sC / 32) % 32) * 8);
                byte b = (byte)(((sC / 1024) % 32) * 8);

                if (i == 0)
                    palette[i] = System.Drawing.Color.FromArgb(0, r, g, b);
                else
                    palette[i] = System.Drawing.Color.FromArgb(255, r, g, b);
            }

            Bitmap bmp = new Bitmap(width, height, System.Drawing.Imaging.PixelFormat.Format8bppIndexed);
            ColorPalette Cpal = bmp.Palette;

            for (int i = 0; i < 16; i++)
            {
                Cpal.Entries[i] = palette[i];
            }

            bmp.Palette = Cpal;

            byte[] moldData = GetMoldData(mould, isLargeMap);
            int size = CalcRomSize(moldData, is3bpp, isLargeMap);
            Byte[] gfxData = ByteManage.GetByteArray(data, gfxOffset, size);
            Bitmap b8bpp = createBitmap(bmp, gfxData, moldData, is3bpp, isLargeMap);

            return b8bpp;
        }

        public static byte[] GetMoldData(byte[] mold, bool isLargeMap)
        {
            byte[] moldData;

            if (!isLargeMap)
            {
                moldData = new byte[64];

                for (int y = 0; y < 8; y++)
                {
                    byte c = mold[y];

                    moldData[y * 8 + 0] = (byte)((c & 0x80) >> 7);
                    moldData[y * 8 + 1] = (byte)((c & 0x40) >> 6);
                    moldData[y * 8 + 2] = (byte)((c & 0x20) >> 5);
                    moldData[y * 8 + 3] = (byte)((c & 0x10) >> 4);
                    moldData[y * 8 + 4] = (byte)((c & 0x08) >> 3);
                    moldData[y * 8 + 5] = (byte)((c & 0x04) >> 2);
                    moldData[y * 8 + 6] = (byte)((c & 0x02) >> 1);
                    moldData[y * 8 + 7] = (byte)((c & 0x01) >> 0);
                }
            }
            else
            {
                moldData = new byte[256];

                for (int y = 0; y < 16; y++)
                {
                    for (int k = 0; k < 2; k++)
                    {
                        byte c = mold[y * 2 + k];

                        moldData[(y * 2 + k) * 8 + 0] = (byte)((c & 0x80) >> 7);
                        moldData[(y * 2 + k) * 8 + 1] = (byte)((c & 0x40) >> 6);
                        moldData[(y * 2 + k) * 8 + 2] = (byte)((c & 0x20) >> 5);
                        moldData[(y * 2 + k) * 8 + 3] = (byte)((c & 0x10) >> 4);
                        moldData[(y * 2 + k) * 8 + 4] = (byte)((c & 0x08) >> 3);
                        moldData[(y * 2 + k) * 8 + 5] = (byte)((c & 0x04) >> 2);
                        moldData[(y * 2 + k) * 8 + 6] = (byte)((c & 0x02) >> 1);
                        moldData[(y * 2 + k) * 8 + 7] = (byte)((c & 0x01) >> 0);
                    }
                }
            }

            return moldData;
        }

        public static int CalcRomSize(byte[] moldData, bool is3bpp, bool isLargeMap)
        {
            byte tileSize;
            byte numTiles = 0;

            if (is3bpp)
                tileSize = 24;
            else
                tileSize = 32;

            if (!isLargeMap)
            {
                for (int y = 0; y < 8; y++)
                {
                    for (int x = 0; x < 8; x++)
                    {
                        if (moldData[y * 8 + x] == 1)
                            numTiles++;
                    }
                }
            }
            else
            {            
                for (int y = 0; y < 16; y++)
                {
                    for (int x = 0; x < 16; x++)
                    {
                        if (moldData[y * 16 + x] == 1)
                            numTiles++;
                    }
                }
            }

            if ((tileSize * numTiles) == 0)
                return 8;
            else
                return tileSize * numTiles;
        }

        public static Bitmap TrimBitmap(Bitmap source)
        {
            LockBitmap lb = new LockBitmap(source);
            lb.LockBits();
            Rectangle srcRect;
            int stride = source.Width;
            try
            {
                int xMin = 128, xMax = 0, yMin = 128, yMax = 0;

                // Find xMin
                for (int x = 0; x < source.Width; x++)
                {
                    bool stop = false;

                    for (int y = 0; y < source.Height; y++)
                    {
                        byte alpha = lb.Pixels[y * stride + x];
                        if (alpha != 0)
                        {
                            xMin = x;
                            stop = true;
                            break;
                        }
                    }
                    if (stop)
                        break;
                }

                // Find yMin
                for (int y = 0; y < source.Height; y++)
                {
                    bool stop = false;
                    for (int x = 0; x < source.Width; x++)
                    {
                        byte alpha = lb.Pixels[y * stride + x];
                        if (alpha != 0)
                        {
                            yMin = y;
                            stop = true;
                            break;
                        }
                    }
                    if (stop)
                        break;
                }

                // Find xMax
                for (int x = source.Width - 1; x >= xMin; x--)
                {
                    bool stop = false;
                    for (int y = 0; y < source.Height; y++)
                    {
                        byte alpha = lb.Pixels[y * stride + x];
                        if (alpha != 0)
                        {
                            xMax = x;
                            stop = true;
                            break;
                        }
                    }
                    if (stop)
                        break;
                }

                // Find yMax
                for (int y = source.Height - 1; y >= yMin; y--)
                {
                    bool stop = false;
                    for (int x = 0; x < source.Width; x++)
                    {
                        byte alpha = lb.Pixels[y * stride + x];

                        if (alpha != 0)
                        {
                            yMax = y;
                            stop = true;
                            break;
                        }
                    }
                    if (stop)
                        break;
                }
                srcRect = Rectangle.FromLTRB(xMin, yMin, xMax+1, yMax+1);
            }
            finally
            {
                lb.UnlockBits();
            }

            Bitmap cropped = null;

            if (srcRect != null)
            {
                cropped = source.Clone(srcRect, System.Drawing.Imaging.PixelFormat.Format8bppIndexed);
            }
            
            return cropped;
        }
        public static Bitmap createBitmap(Bitmap source, byte[] graphicsData, byte[] mold, bool is3bpp, bool isLargeMap)
        {
            int moldPtr = 0;
            int graphPtr = 0;
            byte[] tile = new byte[64];
            byte[] graphics;

            LockBitmap lBmp = new LockBitmap(source);
            System.Drawing.Color[] pal = source.Palette.Entries;
            lBmp.LockBits();

            // if size is 64x64
            if (!isLargeMap)
            {
                for (int y = 0; y < 8; y++)
                {
                    for (int x = 0; x < 8; x++)
                    {
                        // if there's a tile present in the 8x8 mold array
                        if (mold[moldPtr++] == 1)
                        {
                            if (!is3bpp)
                            {
                                // Get the graphics of the tile
                                graphics = ByteManage.GetByteArray(graphicsData, graphPtr, 32);
                                graphPtr += 32;
                            }
                            else
                            {
                                graphics = ByteManage.GetByteArray(graphicsData, graphPtr, 24);
                                graphPtr += 24;
                            }

                            // Get a 8x8 indexed tile
                            tile = loadTile(graphics, is3bpp);

                            for (int y2 = 0; y2 < 8; y2++)
                            {
                                for (int x2 = 0; x2 < 8; x2++)
                                {
                                    lBmp.Pixels[(y * 8 + y2) * source.Width + (x * 8 + x2)] = tile[y2 * 8 + x2];
                                }
                            }
                        }
                    }
                }
            }
            else
            {
                for (int y = 0; y < 16; y++)
                {
                    for (int x = 0; x < 16; x++)
                    {
                        if (mold[moldPtr++] == 1)
                        {
                            if (!is3bpp)
                            {
                                graphics = ByteManage.GetByteArray(graphicsData, graphPtr, 32);
                                graphPtr += 32;
                            }
                            else
                            {
                                graphics = ByteManage.GetByteArray(graphicsData, graphPtr, 24);
                                graphPtr += 24;
                            }

                            tile = loadTile(graphics, is3bpp);

                            for (int y2 = 0; y2 < 8; y2++)
                            {
                                for (int x2 = 0; x2 < 8; x2++)
                                {
                                    lBmp.Pixels[(y * 8 + y2) * source.Width + (x * 8 + x2)] = tile[y2 * 8 + x2];
                                }
                            }
                        }
                    }
                }
            }

            lBmp.UnlockBits();

            return source;
        }

        public static byte[] loadTile(byte[] graphics, bool is3bpp)
        {
            byte[] tile = new byte[64];
            int i = 0;
            byte c;


            for (int y = 0; y < 8; y++)
            {
                c = graphics[i++];

                tile[7 + y * 8] += (byte)((c & 0x01) >> 0);
                tile[6 + y * 8] += (byte)((c & 0x02) >> 1);
                tile[5 + y * 8] += (byte)((c & 0x04) >> 2);
                tile[4 + y * 8] += (byte)((c & 0x08) >> 3);
                tile[3 + y * 8] += (byte)((c & 0x10) >> 4);
                tile[2 + y * 8] += (byte)((c & 0x20) >> 5);
                tile[1 + y * 8] += (byte)((c & 0x40) >> 6);
                tile[0 + y * 8] += (byte)((c & 0x80) >> 7);

                c = graphics[i++];

                tile[7 + y * 8] += (byte)((c & 0x01) << 1);
                tile[6 + y * 8] += (byte)((c & 0x02) >> 0);
                tile[5 + y * 8] += (byte)((c & 0x04) >> 1);
                tile[4 + y * 8] += (byte)((c & 0x08) >> 2);
                tile[3 + y * 8] += (byte)((c & 0x10) >> 3);
                tile[2 + y * 8] += (byte)((c & 0x20) >> 4);
                tile[1 + y * 8] += (byte)((c & 0x40) >> 5);
                tile[0 + y * 8] += (byte)((c & 0x80) >> 6);
            }

            for (int y = 0; y < 8; y++)
            {
                c = graphics[i++];

                tile[7 + y * 8] += (byte)((c & 0x01) << 2);
                tile[6 + y * 8] += (byte)((c & 0x02) << 1);
                tile[5 + y * 8] += (byte)((c & 0x04) >> 0);
                tile[4 + y * 8] += (byte)((c & 0x08) >> 1);
                tile[3 + y * 8] += (byte)((c & 0x10) >> 2);
                tile[2 + y * 8] += (byte)((c & 0x20) >> 3);
                tile[1 + y * 8] += (byte)((c & 0x40) >> 4);
                tile[0 + y * 8] += (byte)((c & 0x80) >> 5);

                if (!is3bpp)
                {
                    c = graphics[i++];

                    tile[7 + y * 8] += (byte)((c & 0x01) << 3);
                    tile[6 + y * 8] += (byte)((c & 0x02) << 2);
                    tile[5 + y * 8] += (byte)((c & 0x04) << 1);
                    tile[4 + y * 8] += (byte)((c & 0x08) >> 0);
                    tile[3 + y * 8] += (byte)((c & 0x10) >> 1);
                    tile[2 + y * 8] += (byte)((c & 0x20) >> 2);
                    tile[1 + y * 8] += (byte)((c & 0x40) >> 3);
                    tile[0 + y * 8] += (byte)((c & 0x80) >> 4);
                }
            }

            return tile;
        }
    }
}
