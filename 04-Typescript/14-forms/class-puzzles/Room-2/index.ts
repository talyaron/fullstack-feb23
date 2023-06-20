// create a form for user profile (with name, image (url), preferd color, year of birth)
// On submit, add the new profiles in to an array of class User

// Render all instances of user into cards of profiles

function handleSubmit(ev:any){
    try {
        ev.preventDefault();
        console.dir(ev);
        const username = ev.target.username.value;
        const imgURL = ev.target.imgURL.value;
        const birthYear = ev.target.birthYear.value;
      
        const result = {username, imgURL, birthYear};
        console.log(result)
        
    } catch (error) {
        console.error(error);
    }
}

function handleColor(ev:any){
    try {
       
    
        document.body.style.backgroundColor = ev.target.value;  
    } catch (error) {
        console.error(error);
    }
}