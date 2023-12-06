import { useEffect, useState } from 'react';
import { getAllUsersPost } from '../api/userPosts';
interface Post {
    id: number
    title: string;
    body: string;
    userId: number
    tags: [string]
    reactions: string
}
interface User {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    token: string,
}
const Post = () => {

    const userFromStorage = sessionStorage.getItem('user');
    if (!userFromStorage) throw new Error("no user at storage")
    const user: User = JSON.parse(userFromStorage)
    const [posts, setPosts] = useState<Post[]>()
    const [allPost, setAllPost] = useState<JSX.Element[]>()
    const userPost = async () => {
        try {
            const allPosts: Post[] = await getAllUsersPost();
            const result = allPosts.filter((post) => post.userId === user.id)
            setPosts(result);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        userPost();
    }, []);
    useEffect(() => {
        if (posts === undefined) return;
        const userPosts = posts.map((post: Post) => {
            const image = `https://picsum.photos/id/${Math.round(Math.random() * 50)}/400/200`
            return (
                <div className='post'>
                    <div className="writer">
                        <img className="writer-image" src={user.image} alt="" />
                        <div className="writer-name-and-time">
                            <h3 className="writer-name">{user.firstName} {user.lastName}</h3>
                            <p className='time'>2 huors ago</p>

                        </div>

                        <div className="more">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ellipsis-horizontal">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>

                        </div>
                    </div>
                    <div className="post-desc">
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <div className='tags'>{post.tags.map((tag: string) => { return <p className='tag'>#{tag} </p> })}</div>
                    </div>
                    <div className="img">
                        <img src={image}
                            // "https://picsum.photos/id//400/200"
                            alt="post-image" />
                    </div>
                    <div className="post-actions">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path opacity="1" fill="#CE3240" className='heart' d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
                        <p>{post.reactions}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" className='comment'><path opacity="1" fill="#1E3050" d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" /></svg>
                        <p>{post.tags.length}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="uturn">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512" className='send'><path opacity="1" fill="#1E3050" d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" /></svg>
                    </div>
                </div>
            )
        });
        setAllPost(userPosts);
    }, [posts]);
    return (
        <div className="post-body">
            {allPost}
        </div>
    )
}

export default Post