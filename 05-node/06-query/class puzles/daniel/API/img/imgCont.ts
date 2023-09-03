import { _Img,Img} from './imgModel'

let images:Img[] =[];

// Get
export function getImg(req:any, res:any) {
    try {
        res.send({images})
    } catch (error) {
        console.error(error);
    }
}

// ADD
export function addImg(req:any, res:any) {
    try {
        // const { imgUrl} = req.body;
        const imgUrl:Img = req.body;
        // console.log({imgUrl});
        if(!imgUrl) throw new Error("Please complete all fields");

        const newImg = new Img(imgUrl);
        images.push(newImg);
        
        res.send({images})
    } catch (error) {
        console.error(error);
        res.status(500).send({error: error.message})
    }
}  

export function deleteImg(req:any, res:any) {
    try {
        const { id } = req.body;
        console.log(id);
        images = images.filter((img) => img.id!== id);
        res.send({images})
        
    } catch (error) {
        console.error(error);
        res.status({error})
    }
}

export function updateImg(req:any, res:any) {
    try {
        const { id, imgUrl} =req.body;
        console.log(req.body);
        if(!id ||!imgUrl) throw new Error("Please complete all fields");
        const img = images.find((img) => img.id === id);

        if(!img) throw new Error("Image not found");
        img.imgUrl = imgUrl;
        res.send({images});

    } catch (error) {
        console.error(error);
        res.send({error})
    }
}
