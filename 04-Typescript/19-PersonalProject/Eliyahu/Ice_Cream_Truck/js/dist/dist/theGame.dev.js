"use strict";

var Player =
/** @class */
function () {
  function Player(name, points) {
    this.name = name;
    this.points = points;
  }

  return Player;
}();

var Costumer =
/** @class */
function () {
  function Costumer(side, img) {
    this.side = side;
    this.img = img;
    this.id = "cost" + Math.floor(Math.random() * 1000);
  }

  Costumer.prototype.addCostumerHtmlElement = function () {
    try {
      this.htmlElement = document.querySelector("#" + this.id);
      if (!this.htmlElement) throw new Error("can not find html element");
    } catch (error) {
      console.error(error);
    }
  };

  return Costumer;
}();

var costumers = [new Costumer('left', '../ילד1.gif'), new Costumer('right', '../ילד2.gif'), new Costumer('right', '../ילד3.gif'), new Costumer('left', '../ילד4.gif'), new Costumer('left', '../ילד5.gif'), new Costumer('left', '../ילד6.gif')];

var IceCream =
/** @class */
function () {
  function IceCream(name, color) {
    this.name = name;
    this.color = color;
  }

  return IceCream;
}();

var iceCreams = [new IceCream("chocolate", "brown"), new IceCream("banana", "yellow"), new IceCream("strawberry", "red")];
var lives = ["live", "live", "live", "live", "live"];
var selectedBalls = "";
var allBalls = "";
var wrongSounds = ["../sounds/angry-uuugh-86053.mp3"];
var a = new Audio("" + wrongSounds[0]);
a.play();

function KeyboardControl() {
  try {
    var i_1 = 0;
    var iceCream_1 = document.querySelector("#" + iceCreams[i_1].name);
    var nextIceCream_1 = document.querySelector("#" + iceCreams[i_1 + 1].name);
    iceCream_1.style.boxShadow = "0px 0px 4px 5px #ffffb9";
    nextIceCream_1.style.boxShadow = "none";
    var spoon_1 = document.querySelector("#spoon");
    var countBall_1 = 0;
    document.addEventListener('keyup', function (event) {
      switch (event.key) {
        case 'ArrowLeft':
          if (i_1 !== iceCreams.length - 1) {
            spoon_1.style.left = spoon_1.offsetLeft - 435 + "px";
          }

          if (i_1 === 0) {
            nextIceCream_1.style.boxShadow = "0px 0px 4px 5px #ffffb9";
            iceCream_1.style.boxShadow = "none";
            i_1++;
          } else {
            if (i_1 === iceCreams.length - 1) {
              var iceCream_2 = document.querySelector("#" + iceCreams[i_1].name);
              iceCream_2.style.boxShadow = "0px 0px 4px 5px #ffffb9";
              i_1 = i_1;
            } else {
              var nextIceCream_2 = document.querySelector("#" + iceCreams[i_1 + 1].name);
              var iceCream_3 = document.querySelector("#" + iceCreams[i_1].name);
              nextIceCream_2.style.boxShadow = "0px 0px 4px 5px #ffffb9";
              iceCream_3.style.boxShadow = "none";
              i_1++;
            }
          }

          break;

        case 'ArrowRight':
          if (i_1 !== 0) {
            spoon_1.style.left = spoon_1.offsetLeft - 225 + "px";
          }

          if (i_1 === iceCreams.length) {
            var previousIceCream = document.querySelector("#" + iceCreams[i_1 - 1].name);
            previousIceCream.style.boxShadow = "0px 0px 4px 5px #ffffb9";
          } else {
            if (i_1 === 0) {
              iceCream_1.style.boxShadow = "0px 0px 4px 5px #ffffb9";
              i_1 = i_1;
            } else {
              var previousIceCream = document.querySelector("#" + iceCreams[i_1 - 1].name);
              var iceCream_4 = document.querySelector("#" + iceCreams[i_1].name);
              previousIceCream.style.boxShadow = "0px 0px 4px 5px #ffffb9";
              iceCream_4.style.boxShadow = "none";
              i_1--;
            }
          }

          break;

        case 'ArrowUp':
          if (countBall_1 < 3) {
            countBall_1++;
            addIceCReamBall(iceCreams[i_1].color);
            selectedBalls += iceCreams[i_1].color + " ";
          }

          break;

        case 'Enter':
          if ("" + selectedBalls === "" + allBalls) {
            console.log("succes");
            success(10, numOfSuccesses());
            countBall_1 = 0;
          } else {
            wrong();
            countBall_1 = 0;
          }

          selectedBalls = "";
          removIceCReamBalls();
          break;

        case 'ArrowDown':
          removIceCReamBalls();
          selectedBalls = '';
          countBall_1 = 0;
          break;
      }
    });
  } catch (error) {
    console.error(error);
  }
}

var html = "";

function addIceCReamBall(color) {
  try {
    var holderCone = document.querySelector("#ballsInCone");
    html += "<div id = \"ballInCone\" style=\"background-color: " + color + ";\"</div>";
    holderCone.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function removIceCReamBalls() {
  try {
    var holderCone = document.querySelector("#ballsInCone");
    html = ""; // html += `<div id = "ballInCone" style="background-color: ${color};"</div>`

    holderCone.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
} // function chooseCostumer(i: number) {
//     try {
//         // const currentCostumer = costumers[i].htmlElement
//         // if (!currentCostumer) throw new Error("can not find any costumer")
//         document.addEventListener('keyup', (event: KeyboardEvent) => {
//             switch (event.key) {
//                 case 'Enter':
//                     // currentCostumer.style.boxShadow = "0px 0px 4px 5px #ffff00"
//                     if (`${selectedBalls}` === `${allBalls}`) {
//                         console.log(`succes`);
//                         success(10, numOfSuccesses())
//                     }
//                     selectedBalls = ``
//                     // allBalls=``
//                     // else{
//                     //     console.log(`wrong`);
//                     //     wrong()
//                     // }
//                     // if (`${selectedBalls}` != `${allBalls}`) {    
//                     // }            
//                     removIceCReamBalls()
//             }
//         })
//     } catch (error) {
//         console.error(error)
//     }
// }


function getPlayer() {
  try {
    var player = localStorage.getItem("player");
    if (!player) throw new Error("can not find player");
    var playerToObject = JSON.parse(player);
    var name = playerToObject.name;
    var currentPlayer = new Player(name, 0);
    var root = document.querySelector("#mainName");
    if (!root) throw new Error("can not found root element");
    var html_1 = "<h1> " + currentPlayer.name + "'s ICE CREAM TRUCK </h1>";
    root.innerHTML = html_1;
  } catch (error) {
    console.error(error);
  }
}

var costumersEntraces = setInterval(renderCostumers, 6000);

function renderGamePage(rootElement) {
  try {
    var html_2 = "<div class=\"crop\">\n            <img src=\"../ice cream truck.gif\" alt=\"\">\n            </div>";
    if (!rootElement) throw new Error("can not found root element");
    rootElement.innerHTML = html_2;
    renderLives(document.querySelector("#lives"));
    getPlayer();
    KeyboardControl();
    costumersEntraces;
  } catch (error) {
    console.error(error);
  }
}

var i = 0;

function renderLives(rootElement) {
  try {
    var html_3 = "";
    lives.forEach(function (live) {
      if (live === "live") {
        html_3 += "<img src=\"../\u05D2\u05DC\u05D9\u05D3\u05D4 \u05D7\u05D9\u05D9\u05DD.gif\" alt=\"\">";
      }
    });
    if (!rootElement) throw new Error("can not found root element");
    rootElement.innerHTML = html_3;
  } catch (error) {
    console.error(error);
  }
}

function costumerIn(costumer) {
  try {
    var getIn = function getIn() {
      try {
        if (!bubbleElement_1) throw new Error("can not find bubble element");
        if (!costumer.htmlElement) throw new Error("can not find costumer element");

        if (startPosition_1 === location_1) {
          clearInterval(entrace_1);
          bubbleElement_1.style.display = 'block';
          setTimeout(setInterval, 4000, getOut, speed_1); // const exit = setInterval(getOut, speed);
        } else {
          startPosition_1++;

          if (costumer.side === 'right') {
            costumer.htmlElement.style.right = startPosition_1 + '%';
          } else {
            costumer.htmlElement.style.left = startPosition_1 + '%';
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    var getOut = function getOut() {
      try {
        // const exit = setInterval(getOut, speed);
        if (!bubbleElement_1) throw new Error("can not find bubble element");
        if (!costumer.htmlElement) throw new Error("can not find costumer element");

        if (location_1 === 100) {// clearInterval(exit);
        } else {
          bubbleElement_1.style.display = 'none';
          location_1++;

          if (costumer.side === 'right') {
            costumer.htmlElement.style.right = location_1 + '%';
          } else {
            costumer.htmlElement.style.left = location_1 + '%';
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    var speed_1 = Math.floor(Math.random() * 50);
    var location_1 = Math.floor(Math.random() * 37 + 25);
    var bubbleElement_1 = document.querySelector("#bubble" + costumer.id);
    var startPosition_1 = 0;
    var entrace_1 = setInterval(getIn, speed_1);
  } catch (error) {
    console.error(error);
  }
} // function costumerOut(costumer: Costumer, startPosition: Function) {
//     try {
//         const bubbleElement: HTMLElement | null = document.querySelector(`#bubble${costumer.id}`)
//         const speed = Math.floor(Math.random() * 50)
//         const exit = setInterval(getOut, speed);
//         function getOut() {
//             try {
//                 if (!bubbleElement) throw new Error("can not find bubble element")
//                 if (!costumer.htmlElement) throw new Error("can not find costumer element")
//                 if (startPosition === 100) {
//                     clearInterval(exit);
//                 } else {
//                     bubbleElement.style.display = 'none'
//                     startPosition++;
//                     if (costumer.side === 'right') {
//                         costumer.htmlElement.style.right = startPosition + '%';
//                     } else {
//                         costumer.htmlElement.style.left = startPosition + '%';
//                     }
//                 }
//             } catch (error) {
//                 console.error(error)
//             }
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }


function renderCostumers() {
  try {
    var costumersElement_1 = document.querySelector("#costumers");
    if (!costumersElement_1) throw new Error("can not find costumers element");
    var ball1_1 = iceCreams[Math.floor(Math.random() * iceCreams.length)].color;
    var ball2_1 = iceCreams[Math.floor(Math.random() * iceCreams.length)].color;
    var ball3_1 = iceCreams[Math.floor(Math.random() * iceCreams.length)].color;
    var html_4 = "";
    costumers.forEach(function (costumer) {
      if (costumer.side === 'left') {
        html_4 += "<div class=\"costumer\" id=\"" + costumer.id + "\" style=\"left: -220px;\">";
      } else {
        html_4 += "<div class=\"costumer\" id=\"" + costumer.id + "\" style=\"right:-200px;\">";
      }

      html_4 += "<img src=\"" + costumer.img + "\">\n            <div class=\"bubble\" id=\"bubble" + costumer.id + "\">\n            <img src=\"../Speech bubble.gif\" alt=\"\">\n            <div id=\"iceCreamBalls\">\n            <div class=\"iceCreamBall\" style=\"background-color:" + ball1_1 + " ;\">\n            <div class=\"iceCreamBall\" style=\"background-color:" + ball2_1 + " ;\">\n            <div class=\"iceCreamBall\" style=\"background-color:" + ball3_1 + " ;\"></div>\n            </div>\n            </div>\n            </div>\n            </div>\n            </div>";
      costumersElement_1.innerHTML = html_4;
    });
    costumers.forEach(function (costumer) {
      costumer.addCostumerHtmlElement();
    });
    allBalls = ball1_1 + " " + ball2_1 + " " + ball3_1 + " ";
    costumerIn(costumers[i]); // setTimeout(costumerOut, 2000, costumers[i],)

    i++;

    if (i === costumers.length) {
      i = 0;
    }
  } catch (error) {
    console.error(error);
  }
}

function wrong() {
  try {
    var a_1 = new Audio("./yummy.mp3");
    a_1.play();
    var liveToEarase = lives.findIndex(function (live) {
      return live === "live";
    });
    lives[liveToEarase] = "";
    renderLives(document.querySelector("#lives")); // renderGamePage(document.querySelector("#truck"))

    if (liveToEarase === 4) {
      gameOver();
    }
  } catch (error) {
    console.error(error);
  }
}

function finishLevel(finish) {
  try {
    if (finish) {
      var wishes = ['GOOD JOB', 'WELL DONE', 'EXCELLENT', 'GREAT'];
      var html_5 = "<h1> " + wishes[Math.floor(Math.random() * wishes.length)] + " </h1>";
      var rootElement = document.querySelector("#main");
      if (!rootElement) throw new Error("can not found root element");
      rootElement.innerHTML = html_5;
      clearInterval(costumersEntraces);
      return true;
    }
  } catch (error) {
    console.error(error);
  }
}

function gameOver() {
  try {
    var html_6 = "<h1> GAME OVER</h1>";
    var rootElement = document.querySelector("#main");
    if (!rootElement) throw new Error("can not found root element");
    rootElement.innerHTML = html_6;
    clearInterval(costumersEntraces);
    return true;
  } catch (error) {
    console.error(error);
  }
}

function success(scoreOfSuccess, numOfSuccesses) {
  try {
    var coverScore = document.querySelector("#cover");
    if (!coverScore) throw new Error("can not found cover element");
    if (!numOfSuccesses) throw new Error("can not found number of successes");
    var height = 170 - scoreOfSuccess * numOfSuccesses;
    coverScore.style.height = height + "px";

    if (height <= 25) {
      finishLevel(true);
    }
  } catch (error) {
    console.error(error);
  }
}

var numberOfSuccesses = 0;

function numOfSuccesses() {
  try {
    numberOfSuccesses++;
    return numberOfSuccesses;
  } catch (error) {
    console.error(error);
  }
}

renderGamePage(document.querySelector("#truck")); // costumerIn(costumers[Math.floor(Math.random() * costumers.length)], Math.floor(Math.random() * 50), Math.floor(Math.random() * 37 + 25))
// renderCostumers()
// Math.floor(Math.random() * costumers.length)
// costumerIn(costumers[0], 20, 40)
// costumerIn(costumers[1], Math.floor(Math.random() * 50), 10)
// costumerIn(costumers[2], Math.floor(Math.random() * 50), Math.floor(Math.random() * 37 + 25))