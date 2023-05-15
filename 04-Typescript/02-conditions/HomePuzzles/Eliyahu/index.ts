const w = prompt("הכנס משקל בקילוגרמים");
const h = prompt("הכנס גובה במטרים");
const weight = Number(w);
const height = Number(h);

let bmi = weight / (height * height)

if (bmi < 18.5) {
    document.write('אתה נמצא בתת משקל')
}
else {
    if (bmi <= 25) {
        document.write('משקלך תקין')
    }
    else {
        document.write('הנך בעל משקל עודף')

    }
}
