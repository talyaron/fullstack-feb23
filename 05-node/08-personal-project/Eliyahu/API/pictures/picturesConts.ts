import { UserModel, users } from "../users/userModels"
import { Picture, pictures, UserPicture, usersPictures, tags, PictureModel } from "./picturesModels"


export async function getPictures(req: any, res: any) {
    try {
        const picturesDB = await PictureModel.find({})
        res.send({ pictures: picturesDB })
    } catch (error) {
        console.error(error.massage)
    }
}

export async function getUserPictures(req: any, res: any) {
    try {
        const { email } = req.query;
        if (!email) {
            throw new Error("email is required");
        }
        const userPicturesDB = await PictureModel.find({email:email})
        res.send({userPictures: userPicturesDB})
        // const usersPicturesDB = await UserPictureModel.find({})
        // res.send({ usersPictures: usersPicturesDB })
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
        const title = picture.title
        const imgUrl = picture.imgUrl
        const location = picture.location
        const pictureTags = picture.tags
        const area = picture.area
        const { newTag } = picture
        if (newTag) {
            pictureTags.push(newTag)
            tags.push(newTag)
        }

        const publishDate = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString('en-US', {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
        })
        const { email } = req.query;
        if (!email) {
            throw new Error("email is required");
        }

        const _picture = new PictureModel({ title, imgUrl, location, tags, area, publishDate, email })
        const pictureDB = await _picture.save()


        res.send({ ok: true, picture:pictureDB })
    } catch (error) {
        console.error(error.massage)

    }
}

export async function deletePicture(req: any, res: any) {
    try {
        const { id } = req.body
        const pictureDB = await PictureModel.findByIdAndDelete(id)
        const picturesDB = await PictureModel.find({})
        res.send({ pictures: picturesDB })
    } catch (error) {
        console.error(error.massage)

    }
}

export async function updatePicture(req: any, res: any) {
    try {
        const { title, imgUrl, location, id } = req.body
        if (!title || !imgUrl || !location || !id) throw new Error("Please complete all details");

        const pictureDB = await PictureModel.findByIdAndUpdate(id, { title: title, imgUrl: imgUrl, location: location }, { new: true })
        const picturesDB = await PictureModel.find({})
        res.send({ pictures: picturesDB })
    } catch (error) {
        console.error(error.massage)

    }
}
