import React, { FC } from 'react'
interface UserProps {
    id: string,
    name: string,
    userName: string,
    email: string,
    phone: string,
    website: string,
    age: number
}

const User: FC<UserProps> = ({ id, name, userName, email, phone, website, age }) => {
    return (
        <div className='card'><p>age: {age}</p><p>name: {name}</p><p>user name: {userName}</p><p>email: {email}</p><p>phone: {phone}</p><p>website: {website}</p><p>id: {id}</p></div>

    )
}

export default User