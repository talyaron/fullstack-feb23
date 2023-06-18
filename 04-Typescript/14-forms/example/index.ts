function handleInput(event) {
    console.dir(event)
    console.log(event.target.value);
    const root = document.querySelector('#root');
    if(root) {
        root.innerHTML = event.target.value;
    }
}

function handleSubmit(ev:any){
    try {
        ev.preventDefault();
        console.dir(ev);
       const username = ev.target.username.value;
        const password = ev.target.password.value;
        const date = new Date(ev.target.date.value);
        const age = ev.target.age.valueAsNumber;
        const result = {age, date, password, username};
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