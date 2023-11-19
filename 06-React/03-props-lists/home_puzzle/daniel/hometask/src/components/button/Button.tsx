// create a button component, and deliver the onclick method as props.
import React,{FC, useState} from 'react'
import App from '../../App'

interface ButtonProps {
    username: string;
    color: string;
    children: React.ReactNode
}

const Button:FC <ButtonProps> = ({username,children,color}) => {
    const [isActive, setIsActive] = useState(false)

  return (
    <div>
        <h1 style={{color}}>User name: {username}</h1>
        {isActive ? (
          <div>
            <p>{children}</p>
            <button onClick={()=>setIsActive(false)}>Remove</button>
          </div>
        ) : (<button onClick={()=>setIsActive(true)}>Show</button>)
        }
    </div>
  
  )
}

export default Button