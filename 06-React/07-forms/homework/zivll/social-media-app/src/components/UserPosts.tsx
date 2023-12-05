import { useEffect, useState } from 'react';
import { getAllUsersPost } from '../api/userPosts';
interface UserPostProps {
    id: number
    title: string;
    body: string;
    userId: number
    tags: [string]
    reactions: string
}
const UserPosts = () => {

    const userId = sessionStorage.getItem('userId');
    const [post, setPost] = useState<UserPostProps>(Object)
    if (!userId) throw new Error("User id not found")
    const userPost = async () => {
        try {


            const userPosts = await getAllUsersPost(userId);
            const result = userPosts.find((post: { id: number; }) => post.id === Number(userId))
            setPost(result)
        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        userPost();
    }, []);
    return (

        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <p>{post.tags.length}</p>
            <p>{post.reactions}</p>
            <p>{post.userId}</p>
            <p>{post.id}</p>
        </div>
    )
}

export default UserPosts