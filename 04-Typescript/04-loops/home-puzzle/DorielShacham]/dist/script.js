var btnOne = document.querySelector("#taskOne > button");
var btnTwo = document.querySelector("#taskTwo > button");
var btnThree = document.querySelector("#taskThree > button");
//button one
btnOne === null || btnOne === void 0 ? void 0 : btnOne.addEventListener('mouseover', function (e) {
    btnOne.style.transition = '0.3s';
    btnOne.style.opacity = "0.3";
});
btnOne === null || btnOne === void 0 ? void 0 : btnOne.addEventListener('mouseout', function (e) {
    btnOne.style.opacity = "1";
});
//button two
btnTwo === null || btnTwo === void 0 ? void 0 : btnTwo.addEventListener('mouseover', function (ev) {
    btnTwo.style.transition = '0.3s';
    btnTwo.style.opacity = "0.3";
});
btnTwo === null || btnTwo === void 0 ? void 0 : btnTwo.addEventListener('mouseout', function (ev) {
    btnTwo.style.opacity = "1";
});
//button three
btnThree === null || btnThree === void 0 ? void 0 : btnThree.addEventListener('mouseover', function (eve) {
    btnThree.style.transition = '0.3s';
    btnThree.style.opacity = "0.3";
});
btnThree === null || btnThree === void 0 ? void 0 : btnThree.addEventListener('mouseout', function (eve) {
    btnThree.style.opacity = "1";
});
//1. create a loop which says "99 Bottles of Beer on the wall. take one down pass it around, and 98 bootle of beer on the wall"... untill you get to zero bottles.
function taskOne() {
    for (var aaa = 100; aaa >= 0; aaa--) {
        console.log(aaa + " Bottles of beer on the wall");
        document.write((aaa + " Bottles of beer on the wall").concat("<br>"));
    }
}
taskOne();
//2. calculate with a varibal and a loop how much is 1+2+3+...+n
function taskTwo() {
    var n = 10;
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        //let prev = sum;
        sum += i;
        document.write((sum - i + "  +  " + i + "  = " + sum).concat("<br>"));
    }
}
taskTwo();
//3. calculate with loop inside a loop, how much is (1+2+3+...+n)*(1...j) multply by j
function taskThree() {
    var n = 10;
    var mul = 5;
    var sum = 0;
    for (var j = 1; j <= mul; j++) {
        sum = 0;
        for (var i = 0; i <= n; i++) {
            sum += i;
        }
        document.write((sum + " * " + j + " = " + sum * j).concat("<br>"));
    }
}
taskThree();
//learn about while loop
