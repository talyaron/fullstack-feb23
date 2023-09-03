import { users } from "../users/userModels"
import { Picture, pictures, UserPicture, usersPictures } from "./picturesModels"


export const getPictures = (req, res) => {
    try {
        res.send({ usersPictures })
    } catch (error) {
        console.error(error.massage)
    }
}

export const addPicture = (req, res) => {
    try {
        const picture = req.body;
        const emailUser=picture.emailUser
        const currentPicture = new Picture(picture.title, picture.imgUrl, picture.location, picture.tags, picture.area)
        pictures.push(currentPicture)
       const currentUser = users.find(user=>user.email===emailUser)
       usersPictures.push(new UserPicture(currentUser,currentPicture))


        res.send({ usersPictures })
    } catch (error) {
        console.error(error.massage)

    }
}

export const deletePicture = (req, res) => {
    try {
        const { id } = req.body
        const indexAtUsersPictures = usersPictures.findIndex((element) => element.picture.id === id);
        const indexAtPictures = pictures.findIndex((picture) => picture.id === id);
        if (indexAtUsersPictures === -1|| indexAtPictures===-1) {
            throw new Error("picture not found");
        }
        usersPictures.splice(indexAtUsersPictures, 1);
        pictures.splice(indexAtPictures,1)
        res.send({ usersPictures })
    } catch (error) {
        console.error(error.massage)

    }
}

export const updatePicture = (req, res)=>{
    try {
        const {title,tags,id} = req.body
        if(!title||!tags||!id) throw new Error("Please complete all details");
        const pictureUser = usersPictures.find(element=>element.picture.id===id)

        if(!pictureUser) throw new Error("Picture not found");
        pictureUser.picture.title = title
        pictureUser.picture.tags = tags
        res.send({usersPictures})
    } catch (error) {
        console.error(error.massage)  
        
    }
}

