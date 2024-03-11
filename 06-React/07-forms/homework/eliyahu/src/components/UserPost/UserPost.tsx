import { FC, useEffect, useState } from 'react'
import { getUserPosts } from '../../api/postsApi'

interface UserPostProps {
    user: any
}
const UserPost: FC<UserPostProps> = ({ user }) => {

    const [posts, setPosts] = useState([])

    const userPosts = async (userId: number) => {
        try {
            const userPosts = await getUserPosts(userId)
            setPosts(userPosts)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        userPosts(user.id)
    }, [])

    const imgUrl = "https://picsum.photos/600/200"

    return (
        <>
            {posts.length > 0 ? (

                posts.map((post: any) => {
                    return (
                        <div style={{ border: "1px solid black" }}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                            <div style={{ display: "flex" }}>
                                {post.tags.map((tag: string) => {
                                    return (
                                        <p>{`#${tag}`}</p>
                                    )
                                })}
                            </div>
                            <img src={imgUrl} alt="random image" />
                            <p>{post.reactions}</p>
                        </div>
                    )
                })
            ) : <p>null</p>}
        </>
    )
}

export default UserPost