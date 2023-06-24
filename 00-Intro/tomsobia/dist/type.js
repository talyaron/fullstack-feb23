var num = prompt("give me a number between 1-5");
var num2 = parseInt(num);
var tom;
switch (num2) {
    case 1:
        tom = "hadar";
        break;
    case 2:
        tom = "doriel";
        break;
    case 3:
        tom = "nave";
        break;
    case 4:
        tom = "alisa";
        break;
    case 5:
        tom = "shiran";
        break;
    default:
        tom = "unknown";
        break;
}
console.log(tom);
