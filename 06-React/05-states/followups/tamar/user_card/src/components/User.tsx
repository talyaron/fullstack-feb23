import React, { FC } from 'react'

interface UserCardProp {
    name: string;
    lastname: string;
    id: number;
    counter: number;
}

const User: FC<UserCardProp> = ({name, lastname, counter}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{lastname}</h1>
        <button>+</button>
        <p>{counter}</p>
        <button>-</button>
    </div>
  )
}

export default User
