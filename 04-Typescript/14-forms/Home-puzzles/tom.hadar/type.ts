// class Img{
//     constructor(public imgUrl, public width){}
// }

// const imgs= []

// function UrlWidth(event){
//     try {
//     event.preventDefault();
//     const imgURl= event.target.elements.imgUrl.value;
//     const width= event.target.elements.width.value;
//     const data= new Img(imgURl,width);
//     imgs.push(data);
//     console.log(imgs);
//     event.target.reset()
//     const root= document.querySelector("#root")
//     hadar(imgs,root)
//     } catch (error) {
//         console.error(error)
//     }
// }
// function hadar(imgs,root){
//     try {
//         const html= imgs.map((imgs)=>{
//           return `<div>
//           <img src="${imgs.imgUrl}" style="width${imgs.width}px;"></div> `  
//         }).join("")

//         root.innerHTML= html
//     } catch (error) {
//         console.error(error)
//     }
    
// }