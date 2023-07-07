// 1) get an image URL from the user, and add the image to the DOM. 
// 2) get five image URLs from the user and print five images on the DOM.
// 3) do task number 2. Store items using array of a class. create a method for rendering an image to the dom. , render all of them to the DOM

class UserImg {
    
    constructor(public url: string ) {

    }
    render() {
        const img = document.createElement('img');
        img.src = this.url;
        document.getElementById('root')?.appendChild(img);
      }
}

function UserImage() {
    const urls: UserImg[] = [];  
    
    for (let i = 0; i < 5; i++){
        const userUrl = prompt(`enter image url ${i + 1}`);
        if(userUrl) {
            const userImg = new UserImg(userUrl);
            urls.push(userImg);
        }
    
    }

    renderImages(urls);

    function renderImages(imageItems:UserImg[]){
        imageItems.forEach((imageItem)=> {
            imageItem.render();
        });
    }
}

UserImage();
