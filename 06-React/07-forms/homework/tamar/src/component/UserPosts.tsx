import React from 'react'
import { getUserPosts } from './../api/userPostAPI';
import User from '../types/type';

const UserPosts = () => {
    const data: User = sessionStorage.getItem("userObj");
    if (!data) throw new Error("no user object found on session storage");

    const response = getUserPosts(data.id)
    return (
        <div>UserPosts</div>
    )
}

export default UserPosts