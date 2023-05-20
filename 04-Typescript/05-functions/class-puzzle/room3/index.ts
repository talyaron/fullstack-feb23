const userName= String (prompt("הכנס בבקשה את שמך"));


function Name (userName1:string ) {
     
    for(let i=0; i<userName1.length; i++) {
        if (userName1[i]=== " ") {
            userName1.replace (userName1[i], '');

        }

    }
    return (userName1)

    
}

const Bar= Name(userName)