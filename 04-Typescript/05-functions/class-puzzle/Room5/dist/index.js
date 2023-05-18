function deleteSpaces(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            newStr += str[i];
        }
    }
    return newStr;
}
document.write(deleteSpaces("Hellow world nkgf gf gfdss ,,vdl rfe 43 3232 43"));
