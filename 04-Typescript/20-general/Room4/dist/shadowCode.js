var container = document.querySelector('.container');
var shadow = document.querySelector('.shadow');
container.addEventListener('mousemove', function (event) {
    var rect = container.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    shadow.style.left = x + 'px';
    shadow.style.top = y + 'px';
});
