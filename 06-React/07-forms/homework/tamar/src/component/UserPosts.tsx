import React from 'react'
import { getUserPosts } from './../api/userPostAPI';
import UserType from '../types/type';
import UserPostsType from '../types/type';
import { FaHeart, FaRegComment } from "react-icons/fa";

const UserPosts = async () => {
    const data: UserType = sessionStorage.getItem("userObj");
    console.log("at userposts the data from session storage is:", data)
    if (!data) throw new Error("no user object found on session storage");

    const response = await getUserPosts(data)
    console.log("At userposts the response after getuserposts is:", response)

    return (
        <div>

            <div className='blogHeader'>
                <img>{data.image}</img>
                <h2>{data.username}</h2>
                <h3>2 hours ago</h3>
                <a>...</a>
            </div>
            <div className='blogMain'>
                <h1>{response.title}</h1>
                <p>{response.body}</p>
                <a>{response.tags}</a>
            </div>
            <div className='blogFooter'>
                <button>
                    <FaHeart style={{ color: 'red' }}>{response.reactions}</FaHeart>
                </button>
                <button>
                    <FaRegComment>15</FaRegComment>
                </button>
                <button>icon back
                    {/* <FaRotateRight /> */}
                </button>
            </div>
        </div>
    )
}

export default UserPosts