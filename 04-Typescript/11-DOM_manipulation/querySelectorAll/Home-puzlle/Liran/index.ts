class ImgUrl {
    address: string

    constructor(address: string) {
        try {
            if (!address) throw new Error("Input Error");
            this.address = address;
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        try {
            const root = document.querySelector("#root")
            if (root == null) throw new Error("Can't catch #root");
            root.innerHTML += `<img src="${this.address}">`
            return
        } catch (error) {
            console.error(error);

        }
    }
};

function imgToDom(urlList: ImgUrl[]) {
    try {
        if (urlList === null) throw new Error("Error in Array")
        urlList.forEach((imgAddress, index) =>
            setTimeout(() => imgAddress.render(), (index - 4) * 500)
        )

    } catch (error) {
        console.error(error)
    }


}

// Main
const inputLength = 5;
let countInput = 0;
const imgList: ImgUrl[] = new Array(inputLength);
while (countInput < inputLength) {
    const imgUrl = prompt(`Please enter image number ${countInput + 1} url`)
    if (imgUrl !== null && imgUrl !== "") {
        imgList.push(new ImgUrl(imgUrl))
        countInput++
    }
}

imgToDom(imgList);





