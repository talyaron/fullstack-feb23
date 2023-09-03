import { users } from '../users/userModel';
import { Image, UserImage, images, UserImages, } from './imgesModel';

export function getImages(req: any, res: any) {
    try {
        res.send({ images });
    } catch (error) {
        console.error(error);
    }
}