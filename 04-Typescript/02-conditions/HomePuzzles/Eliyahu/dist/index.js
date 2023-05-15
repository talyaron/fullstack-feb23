var w = prompt("הכנס משקל בקילוגרמים");
var h = prompt("הכנס גובה במטרים");
var weight = Number(w);
var height = Number(h);
var bmi = weight / (height * height);
if (bmi < 18.5) {
    document.write('אתה נמצא בתת משקל');
}
else {
    if (bmi <= 25) {
        document.write('משקלך תקין');
    }
    else {
        document.write('הנך בעל משקל עודף');
    }
}
