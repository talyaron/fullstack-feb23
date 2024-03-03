import "./user.scss"
import { FC } from 'react'

interface UserProps {
    id: number
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    age: number

}

const User: FC<UserProps> = ({ id, name, username, email, phone, website, age }) => {
    return (

        <div style={{ border: "1px solid black", width: "250px" }}>
            <h2>{name ? name : "no name"}</h2>
            <p>id:{id}</p>
            <h3>{username}</h3>
            <h3>{age} years old</h3>
            <p>phone number:{phone}</p>
            <p>email adress:{email}</p>
            <p>website:{website}</p>
        </div>
    )
}

export default User

// , name, ,age