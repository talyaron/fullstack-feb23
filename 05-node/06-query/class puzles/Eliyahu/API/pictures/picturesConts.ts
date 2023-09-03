import { users } from "../users/userModels"
import { Picture, pictures, UserPicture, usersPictures, tags } from "./picturesModels"


export const getPictures = (req, res) => {
    try {
        res.send({ usersPictures })
    } catch (error) {
        console.error(error.massage)
    }
}

export const getTags = (req, res) => {
    try {
        res.send({ tags })
    } catch (error) {
        console.error(error.massage)
    }
}

export const addPicture = (req, res) => {
    try {
        const picture = req.body;
        const emailUser = picture.emailUser
        const { newTag } = picture
        if (newTag) {
            picture.tags.push(newTag)
            tags.push(newTag)
        }
        const currentPicture = new Picture(picture.title, picture.imgUrl, picture.location, picture.tags, picture.area)
        const currentUser = users.find(user => user.email === emailUser)
        usersPictures.push(new UserPicture(currentUser, currentPicture))


        res.send({ usersPictures, tags })
    } catch (error) {
        console.error(error.massage)

    }
}

export const deletePicture = (req, res) => {
    try {
        const { id } = req.body
        const indexAtUsersPictures = usersPictures.findIndex((element) => element.picture.id === id);
        if (indexAtUsersPictures === -1 ) {
            throw new Error("picture not found");
        }
        usersPictures.splice(indexAtUsersPictures, 1);
        res.send({ usersPictures })
    } catch (error) {
        console.error(error.massage)

    }
}

export const updatePicture = (req, res) => {
    try {
        const { title, imgUrl, location, id } = req.body
        if (!title || !imgUrl || !location ||!id) throw new Error("Please complete all details");
        const pictureUser = usersPictures.find(element => element.picture.id === id)

        if (!pictureUser) throw new Error("Picture not found");
        pictureUser.picture.title = title
        pictureUser.picture.imgUrl = imgUrl
        pictureUser.picture.location = location
        res.send({ usersPictures })
    } catch (error) {
        console.error(error.massage)

    }
}

