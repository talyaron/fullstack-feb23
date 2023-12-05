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

        <div className='post'>
            <div className="writer">
                <img className="writer-image" src="" alt="" />
                <h3 className="writer-name">mosh</h3>
                <p className='time'>2 huors ago</p>
                <div className="more">...</div>
            </div>
            <div className="post-desc">
                <p>{post.title}</p>
                <p>{post.body}</p>
            </div>
            <div className="img">
                <img src="" alt="" />
            </div>
            <div className="post-actions">
                <p>{post.tags.length}</p>
                <p>{post.reactions}</p>
            </div>
        </div>
    )
}

export default UserPosts