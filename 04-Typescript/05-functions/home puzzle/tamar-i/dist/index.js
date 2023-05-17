//1
function hello(jander) {
    if (jander == 'mail') {
        return ("Hello sir");
    }
    else {
        if (jander == 'female') {
            return ("Hello miss");
        }
        else
            return ("hello");
    }
}
var jander = prompt("what is your jander?");
document.write(hello(jander));
