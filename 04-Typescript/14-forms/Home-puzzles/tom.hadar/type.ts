// class
class Uzer {
  constructor(public imgUrl, public width) {}
}

const Imgarr = [];

function UrlWidth(event) {
  try {
    event.preventDefault();
    const imgUrl = event.target.elements.imgUrl.value;
    const width = event.target.elements.width.value;
    const data = new Uzer(imgUrl, width);
    Imgarr.push(data);

    const root = document.querySelector("#root");
    event.target.reset();
    render(Imgarr, root);
  } catch (error) {
    console.log(error);
  }
}
function render(uzer:Uzer [],root) {
  
  const html = uzer.map((uzer) => {
      return `<div>
      <img src="${uzer.imgUrl}" style="width: ${uzer.width}px;">
      </div>`;
    }).join("");
   

     root.innerHTML = html;
}


// class Uzer {
//     constructor(public imgUrl:any,public width:number) {}
// }

// const Imgarr = [];

// function UrlWidth(event) {
//     try {
//         event.preventDefault();
//         const imgUrl = event.target.elements.imgUrl.value;
//         const width = event.target.elements.width.value;
//         const data = new Uzer(imgUrl, width);
//         console.log(data);
//         Imgarr.push(data);

//         const root = document.querySelector("#root");
//         event.target.reset();
//         render(Imgarr, root);
//     } catch (error) {
//         console.log(error);
//     }
// }

// function render(uzer, root) {
//     const html = uzer.map((uzer) => {
//         return `<div>
//             <img src="${uzer.imgUrl}" style="width: ${uzer.width}px;">
//         </div>`;
//     }).join("");

//         root.innerHTML = html;

// }
