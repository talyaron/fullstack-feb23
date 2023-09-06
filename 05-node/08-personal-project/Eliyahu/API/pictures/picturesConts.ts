import { users } from "../users/userModels"
import { Picture, pictures, UserPicture, usersPictures, tags, PictureModel } from "./picturesModels"


export async function getPictures (req:any, res:any) {
    try {
        const picturesDB = await PictureModel.find({})
        res.send({pictures:picturesDB})
        // res.send({ usersPictures })
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

export async function addPicture(req: any, res: any) {
    try {
        const picture = req.body;
        const emailUser = picture.emailUser
        const title = picture.title
        const imgUrl = picture.imgUrl
        const location = picture.location
        const tags = picture.tags
        const area = picture.area
        const { newTag } = picture
        if (newTag) {
            picture.tags.push(newTag)
            tags.push(newTag)
        }


        // const currentPicture = new Picture(picture.title, picture.imgUrl, picture.location, picture.tags, picture.area)
        const _picture = new PictureModel({ title, imgUrl, location, tags, area })
        const pictureDB = await _picture.save()
        console.log(pictureDB);

        // const currentUser = users.find(user => user.email === emailUser)
        // usersPictures.push(new UserPicture(currentUser, currentPicture))

        res.send({ ok: true })
        // res.send({ usersPictures, tags })
    } catch (error) {
        console.error(error.massage)

    }
}

export const deletePicture = (req, res) => {
    try {
        const { id } = req.body
        const indexAtUsersPictures = usersPictures.findIndex((element) => element.picture.id === id);
        if (indexAtUsersPictures === -1) {
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
        if (!title || !imgUrl || !location || !id) throw new Error("Please complete all details");
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

