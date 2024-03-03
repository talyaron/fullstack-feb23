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

        <div style={{border:"1px solid black"}}>
            <h1>{name ? name : "no name"}</h1>
            <p>id:{id}</p>
            <h2>{username}</h2>
            <h3>{age} years old</h3>
            <p>phone number:{phone}</p>
            <p>email adress:{email}</p>
            <p>website:{website}</p>
        </div>
    )
}

export default User

// , name, ,age