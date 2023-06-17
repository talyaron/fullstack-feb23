
const gameboard:any= document.querySelector(".gameboard")

// function readyBoard(){
    //     for(let i=0 ;i<64; i++){
        //         gameboard?.innerHTML+=`<div id="box${i}" class="gameboard__box"></div>`;
        //     }
        // }
        
        
        function readyBoard(){

            for(let j = 1; j <= 1  ; j++){

                for (let i = 1; i <= 8  ; i++) {
                    const box = document.createElement('div');
                    box.id = `box${i} I`;
                    box.className = 'gameboard__box';
                
                    if (i % 2 === 1) {
                      box.style.backgroundColor="black"
                    }
                    gameboard.appendChild(box);
                  }


                for (let k = 9; k <= 16  ; k++) {
                    const box = document.createElement('div');
                    box.id = `box${k} K`;
                    box.className = 'gameboard__box';
                
                    if (k % 2 ) {
                      box.style.backgroundColor="black"
                    }
                    gameboard.appendChild(box);
                  }
                }
            }
            