interface UserType {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}

interface UserPostsType {
    "id": number,
    "title": string,
    "body": string,
    "userId": number, // user id is 5
    "tags": string[],
    "reactions": number,
}