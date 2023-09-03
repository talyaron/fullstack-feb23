import { users } from '../users/userModel';
import { Image, UserImage, images, UserImages, } from './imgesModel';

export function getImages(req: any, res: any) {
    try {
        res.send({ images });
    } catch (error) {
        console.error(error);
    }
}


export function  addImg(req: any, res: any) {
    try {
        const { title, imgUrl, email } = req.body;
        console.log({ title, imgUrl, email })
        if (!title || !imgUrl) throw new Error("Please complete all fields");
        if (!email) throw new Error("no email");

        const newImg = new Image({ imgUrl, title });
        images.push(newImg);

        //find user
        const user = users.find((user: any) => user.email === email);
        if (!user) throw new Error("user not found");
        UserImages.push(new UserImage(user, newImg));
        
        const _userImages = UserImages.filter((UserImage) => UserImage.user.email === email);

        const _images = _userImages.map((UserImage) => UserImage.img); //returns only tasks of user

        res.send({ images: _images });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
export function getUserImages(req: any, res: any) {
    try {
        //get email from query
        const { email } = req.query;
        if (!email) {
            throw new Error("email is required");
        }
        //get user tasks
        const _userImages = UserImages.filter((UserImage) => UserImage.user.email === email);
        const _images  = _userImages.map((UserImages) => UserImages.img); //returns only tasks of user

        res.send({ images: _images });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

