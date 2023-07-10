game:

A red ball bounces through an obstacle course.
Can get points by collecting coins.
Can get increased features by collecting "color change". 
The obstacles are challenging: climbing ladders, jumping between disappearing bricks, moving on moving shelves.
You have to be careful of bombs, arrows, simulated (not solid) bricks, not falling doun. 
Design from the bottom up -> starts on the ground and climbs up on a "brick building".
The goal - to reach as high as possible.
It is necessary to prevent the possibility of going out of the boundaries of the game.

3 page: 1-login, 2-game , 3-higher score

help: https://www.w3schools.com/graphics/game_intro.asp 

model:
enteties: red-ball, bricks (not move but some are simulated some are not), errows(move), bombs (not move), shelves (not move but disappeared)

controllers:
red-ball:
0) bouncing ball -> https://javacodepoint.com/how-to-build-a-bouncing-ball-using-javascript/
1) move right and left  
2) jump high use "acclelerate function"
3) disqualificaion - blink and lose point
4) collect point when hit coine
5) fall down - use gravity property and gravitySpeed - game over (start from begining)

bricks:
6) simulate / solid can mack the ball fall down

errow:
7) move from right to lefr or from left to right - when hit disappear and disqualifies

bombs:
8) disappear and dosqualifies when hit

shelve:
9) blink - appear and disappear all the time, when disappear the ball can fall down


