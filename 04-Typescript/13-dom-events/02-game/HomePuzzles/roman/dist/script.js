// 2) create checkers board (דמקה)
// create a pawn that moves accross the board. (using the keyboard)
// 3) create many pawns that can move (press one of them and move it using the keyboard)
var checker = document.querySelectorAll(".checker");
console.log(checker);
var checker_rows = {};
// console.log(checker_rows)
// for(let i=0; i<=(checker_rows.black + checker_rows.white); i++){
//     var data = `<div class="black" ></div><div class="white"></div><div class="black" >` 
//     checkers?.innerHTML += data;
// }
// checker.addEventListener('click', () =>{
//     this.target.classList.add('active')
// });
// document.addEventListener('click', function handleClick(event) {
//     checker.forEach(pawn => {
//         console.log(pawn)
// });
//     event.target.classList.toggle('active');
// });
checker.forEach(function (item) {
    item.addEventListener("click", function () {
        item.classList.toggle("active");
    });
    document.addEventListener('keyup', function (event) {
        //if arrow up go up. if arrow down go down...
        if (item.classList.contains('active')) {
            switch (event.key) {
                case 'ArrowUp':
                    console.log(item.style.top);
                    if (item.style.top.slice(0, -2) == 2) {
                        return;
                    }
                    else
                        item.style.top = item.offsetTop - 50 + "px";
                    break;
                case 'ArrowDown':
                    // console.log(checker.style.top)
                    if (item.style.top.slice(0, -2) >= 352) {
                        item.style.top = '352px';
                        return;
                    }
                    else
                        item.style.top = item.offsetTop + 50 + "px";
                    break;
                case 'ArrowLeft':
                    if (item.style.left.slice(0, -2) <= 0) {
                        item.style.left = '0px';
                        return;
                    }
                    else
                        item.style.left = item.offsetLeft - 50 + "px";
                    break;
                case 'ArrowRight':
                    if (item.style.left.slice(0, -2) > 300) {
                        // checker.style.left = '350px'
                        console.log(item.style.left.slice(0, -2));
                        item.style.left = "350px";
                        return;
                    }
                    else
                        item.style.left = item.offsetLeft + 50 + "px";
                    console.log(item.style.left.slice(0, -2));
                    break;
                case " ":
                    console.log(item.style.left);
                    break;
            }
        }
    });
});
