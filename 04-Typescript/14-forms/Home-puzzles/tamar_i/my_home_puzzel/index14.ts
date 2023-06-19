function addImage(event: any){
    try {
        
        event.preventDefault();
        console.dir(event);

        const imgURL: string = event.target.imgURL.value;
        const imgWidthSize: number = event.targer.imgWidthSize.value;
        console.log(imgURL, imgWidthSize);

        const root = document.querySelector('#root');
        if(root) {
            root.innerHTML = `${imgURL}`;
            
        }

    } catch (error) {
       console.error(error) ;
    }
}