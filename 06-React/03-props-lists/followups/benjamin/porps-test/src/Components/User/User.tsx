import React , {FC} from 'react'
import "./user.scss"

interface UserProps{
    name:string,
    email:string
    className?: string;
}

const User:FC<UserProps> = ({name,email}) => {
  return (
    <div>
        <div className="wrapper">
            <p className='name'>{name}</p>
            <p className='email'>{email}</p>
        </div>
    </div>
  )
}

export default User
