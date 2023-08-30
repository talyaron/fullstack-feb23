class Img {
    id?: string;
    constructor(
        public title: string,
        public url: string,
    ) {
        this.id = `id-${new Date().getTime()}-${Math.random()}`;
    }
}


async function getImages() {
    try {
        const response = await fetch("/API/pics/get-image");
        const result = await response.json();
        const { images } = result;
        console.log(images);
        return images;
    } catch (error) {
        console.error(error);
    }
}

async function addImage(image: Img) {
    try {
        const response = await fetch("/API/pics/add-image", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(image),
        });
        const images = await response.json();
        return images;
    } catch (error) {
        console.error(error);
    }
}

async function deleteImage(id: string) {
    try {
        const response = await fetch("/API/pics/delete-image", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
        const images = await response.json();
        return images;
    } catch (error) {
        console.error(error);
    }
}

async function updateImage(image: Img) {
    try {
        const response = await fetch("/API/pics/update-image", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(image),
        });
        const images = await response.json();
        return images;
    } catch (error) {
        console.error(error);
    }
}
