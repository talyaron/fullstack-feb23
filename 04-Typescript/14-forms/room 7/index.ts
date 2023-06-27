function handleInput(event) {
    console.dir(event)
    console.log(event.target.value);
    const root = document.querySelector('#root');
    if(root) {
        root.innerHTML = event.target.value;
    }
}