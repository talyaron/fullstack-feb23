// 2) create checkers board (דמקה)
// create a pawn that moves accross the board. (using the keyboard)
// 3) create many pawns that can move (press one of them and move it using the keyboard)

const Pawns = document.querySelectorAll(`.pawn`);
Pawns.forEach((pawn: HTMLDivElement) => {
  pawn.addEventListener(`click`, (event) => {
    addingClassByClick(pawn);
  });
});

for (let i = 0; i < Pawns.length; i++) {
  if (Pawns[i].classList[2] === `clicked`) {
    break;
  } else
    Pawns[i].onclick = (ev: KeyboardEvent) => {
      console.dir(ev);
      document.addEventListener("keyup", (event: KeyboardEvent) => {
        for (let i = 0; i < Pawns.length; i++) {
          if (Pawns[i].classList[2] === `clicked`) {
            switch (event.key) {
              case "ArrowUp":
                Pawns[i].style.top = `${Pawns[i].offsetTop - 112.5}px`;
                event.stopImmediatePropagation();

                break;
              case "ArrowDown":
                Pawns[i].style.top = `${Pawns[i].offsetTop + 112.5}px`;

                event.stopImmediatePropagation();

                break;
              case "ArrowLeft":
                Pawns[i].style.left = `${Pawns[i].offsetLeft - 112.5}px`;
                event.stopImmediatePropagation();

                break;
              case "ArrowRight":
                Pawns[i].style.left = `${Pawns[i].offsetLeft + 112.5}px`;
                event.stopImmediatePropagation();

                break;
            }
            console.dir(event);
          }
        }
      });
    };
}

function addingClassByClick(pawn) {
  try {
    pawn.classList.add(`clicked`);
    for (let i = 0; i < Pawns.length; i++) {
      for (let n = 0; n < Pawns[i].classList.length; n++)
        if (Pawns[i].classList[n] === `clicked`) {
          Pawns[i].classList.remove(`clicked`);
        }
      pawn.classList.add(`clicked`);
    }
    return pawn;
  } catch (error) {
    console.error(error);
    return;
  }
}

// Pawns.forEach((pawn: HTMLDivElement) => {
//   pawn.onclick = (ev) => {
//     console.dir(ev);
//     document.addEventListener("keyup", (event: KeyboardEvent) => {
//       for (let i = 0; i < Pawns.length; i++) {
//         debugger;
//         // for (let n = 0; n < Pawns[i].classList.length; n++)
//         if (Pawns[i].classList[2] === `clicked`) {
//           switch (event.key) {
//             case "ArrowUp":
//               Pawns[i].style.top = `${Pawns[i].offsetTop - 112.5}px`;

//               break;
//             case "ArrowDown":
//               Pawns[i].style.top = `${Pawns[i].offsetTop + 112.5}px`;

//               break;
//             case "ArrowLeft":
//               Pawns[i].style.left = `${Pawns[i].offsetLeft - 112.5}px`;

//               break;
//             case "ArrowRight":
//               Pawns[i].style.left = `${Pawns[i].offsetLeft + 112.5}px`;

//               break;
//           }
//         }
//       }
//     });
//   };
//   // debugger;
// });

// Pawns.forEach((pawn: HTMLDivElement) => {
//   pawn.onclick = (ev) => {
//     for (let i = 0; i < Pawns.length; i++) {
//       for (let n = 0; n < Pawns[i].classList.length; n++)
//         if (Pawns[i].classList[n] === `clicked`) {
//           switch (Pawns[i].key) {
//             case "ArrowUp":
//               pawn.style.top = `${pawn.offsetTop - 112}px`;
//               break;
//             case "ArrowDown":
//               pawn.style.top = `${pawn.offsetTop + 112}px`;
//               break;
//             case "ArrowLeft":
//               pawn.style.left = `${pawn.offsetLeft - 112}px`;
//               break;
//             case "ArrowRight":
//               pawn.style.left = `${pawn.offsetLeft + 112}px`;
//               break;
//           }
//         }

//       // let n = Pawns[i].classList.length;
//     }
//   };
// });

// Pawns.forEach((pawn: HTMLDivElement) => {
//   for (let i = 0; i < Pawns.length; i++) {
//     for (let n = 0; n < Pawns[i].classList.length; n++)
//       if (Pawns[i].classList[n] === `clicked`) {
//         Pawns[i].onclick = (pawn) => () => {
//           switch (pawn.key) {
//             case "ArrowUp":
//               pawn.style.top = `${pawn.offsetTop - 112}px`;
//               break;
//             case "ArrowDown":
//               pawn.style.top = `${pawn.offsetTop + 112}px`;
//               break;
//             case "ArrowLeft":
//               pawn.style.left = `${pawn.offsetLeft - 112}px`;
//               break;
//             case "ArrowRight":
//               pawn.style.left = `${pawn.offsetLeft + 112}px`;
//               break;
//           }
//         };

//         // let n = Pawns[i].classList.length;
//       }
//   }
// });

// // for (let i = 0; i < Pawns.length; i++) {
// //   if (Pawns[i].classList === `pa`) {
// //   }
// // }

// console.dir(Pawns);

// // const Pawns = document.querySelectorAll(`.pawn`);
// // Pawns.forEach((pawn: HTMLDivElement) => {
// //   pawn.addEventListener(`click`, (ev) => {
// //     console.dir(ev);

// //     document.addEventListener("keyup", (event: KeyboardEvent) => {
// //       console.log(event);
// //       // if (pawn.click()) {
// //       //   event.stopImmediatePropagation;
// //       // }
// //       switch (event.key) {
// //         case "ArrowUp":
// //           pawn.style.top = `${pawn.offsetTop - 112}px`;
// //           break;
// //         case "ArrowDown":
// //           pawn.style.top = `${pawn.offsetTop + 112}px`;
// //           break;
// //         case "ArrowLeft":
// //           pawn.style.left = `${pawn.offsetLeft - 112}px`;
// //           break;
// //         case "ArrowRight":
// //           pawn.style.left = `${pawn.offsetLeft + 112}px`;
// //           break;
// //       }
// //     });
// //   });
// //   // debugger;
// // });
