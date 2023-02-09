function toHexString(number, padding) {
    var strNum = number.toString(16).toUpperCase();
    var loop = padding - strNum.length > 0 ? padding - strNum.length: 0;
    for(var i = 0; i < loop; i++) {
        strNum = "0" + strNum;
    }
    return strNum;
}