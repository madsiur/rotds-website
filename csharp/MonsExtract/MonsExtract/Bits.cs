using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace MonsExtract
{
    public static class Bits
    {
        private static void ShowError(int offset, int length)
        {
            throw new Exception("Error accessing data at $" + offset.ToString("X6") + " in " + length.ToString("X6") + " byte array.");
        }

        public static void SetInt(byte[] data, int offset, int value)
        {
            data[offset++] = (byte)(value & 0xFF);
            data[offset++] = (byte)((value >> 8) & 0xFF);
            data[offset] = (byte)((value >> 16) & 0xFF);
        }

        public static void SetShort(byte[] data, int offset, int set)
        {
            try
            {
                data[offset] = (byte)(set & 0xff);
                data[offset + 1] = (byte)(set >> 8);
            }
            catch
            {
                ShowError(offset, data.Length);
                throw new Exception();
            }
        }

        public static void Fill(byte[] src, byte value, int start, int size)
        {
            for (int i = start; i < size + start; i++)
                src[i] = value;
        }

        public static byte ToHiROM(byte value)
        {
            if (value < 0x40)
                value += 0xC0;

            return value;
        }

        public static int ToHiROM(int value)
        {
            if (value < 0x400000)
                value += 0xC00000;

            return value;
        }

        public static byte ToAbs(byte value)
        {
            if (value >= 0xC0)
                value -= 0xC0;

            return value;
        }

        public static int ToAbs(int value)
        {
            if (value >= 0xC00000)
                value -= 0xC00000;

            return value;
        }

        public static bool IsValidBank(byte value)
        {
            return (value <= 0x6F) || (value >= 0xC0 && value <= 0xFF);
        }

        public static bool IsValidOffset(int value)
        {
            return (value <= 0x6FFFFF) || (value >= 0xC00000 && value <= 0xFFFFFF);
        }

        public static bool IsMatchingOffset(byte[] data, int offset, int offsetROM, ref List<int[]> faults)
        {
            int offsetB = ByteManage.GetInt(data, ToAbs(offsetROM) + 1);

            if (ToHiROM(offset) != offsetB)
            {
                faults.Add(new[] { offsetROM, ToHiROM(offset), offsetB });
                return false;
            }

            return true;
        }

        public static bool IsMatchingShort(byte[] data, ushort val, int offsetROM, ref List<int[]> faults)
        {
            ushort valB = ByteManage.GetShort(data, ToAbs(offsetROM));

            if (val != valB)
            {
                faults.Add(new[] { offsetROM, val, valB });
                return false;
            }

            return true;
        }

        public static bool IsMatchingByte(byte[] data, byte val, int offsetROM, ref List<int[]> faults)
        {
            byte valB = data[ToAbs(offsetROM)];

            if (val != valB)
            {
                faults.Add(new[] { offsetROM, val, valB });
                return false;
            }

            return true;
        }

        public static int findArrayMax(byte[] data, int size)
        {
            if (size < 1 || size > 3)
                return 0;

            int max = 0;

            for (int i = 0; i < data.Length; i += size)
            {
                int current;

                if (size == 1)
                {
                    current = data[i];

                    if (current > max)
                        max = current;
                }
                else if (size == 2)
                {
                    current = ByteManage.GetShort(data, i);

                    if (current != 0xFFFF && current > max)
                        max = current;
                }
                else
                {
                    current = ByteManage.GetInt(data, i);

                    if (current != 0xFFFFFF && current > max)
                        max = current;
                }
            }
            
            return max;
        }

        public static void FillShort(byte[] data, ushort val)
        {
            int i = 0;
            try
            {
                for (i = 0; i < data.Length; i += 2)
                {
                    data[i] = (byte)(val & 0xff);
                    data[i + 1] = (byte)(val >> 8);
                }
            }
            catch (Exception)
            {
                ShowError(i, data.Length);
            }
        }

        public static void IncShort(byte[] data, ushort inc)
        {
            int i = 0;

            try
            {
                for (i = 0; i < data.Length; i += 2)
                {
                    ushort val = 0;
                    val += (ushort)(data[i + 1] << 8);
                    val += (ushort)(data[i]);
                    val += inc;
                    data[i] = (byte)(val & 0xff);
                    data[i + 1] = (byte)(val >> 8);
                }
            }
            catch (Exception)
            {
                ShowError(i, data.Length);
                throw new Exception();
            }
        }

        public static void setAsmArray(byte[] data, int[] asmArray, int[] varArray, int offset)
        {
            if (asmArray.Length != varArray.Length)
            {
                throw new Exception("ASM and variation arrays are not equal: " + asmArray.Length + " - " + varArray.Length);
            }

            for (int i = 0; i < asmArray.Length; i++)
            {
                SetInt(data, ToAbs(asmArray[i]) + 1, offset + varArray[i]);
            }
        }

        public static void setAsmArray(byte[] data, int[] asmArray, ushort val)
        {
            for (int i = 0; i < asmArray.Length; i++)
            {
                ByteManage.SetShort(data, ToAbs(asmArray[i]), val);
            }
        }

        public static void setAsmArray(byte[] data, int[] asmArray, byte val)
        {
            for (int i = 0; i < asmArray.Length; i++)
            {
                data[ToAbs(asmArray[i])] = val;
            }
        }

        public static void setData(byte[] dest, int offset, byte[] data, byte[] data2, byte[] data3)
        {
            ByteManage.SetByteArray(dest, offset, data);
            offset += data.Length;
            ByteManage.SetByteArray(dest, offset, data2);
            offset += data2.Length;
            ByteManage.SetByteArray(dest, offset, data3);
        }
    }
}
