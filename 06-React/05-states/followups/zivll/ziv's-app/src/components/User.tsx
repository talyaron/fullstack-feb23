import React, { FC } from 'react'
import { counter, decreaseCounter, increasCounter } from '../controllers/counter'

export interface UserProps {
    name: string,
    lastname: string,
    id: number,
    counter: number,
}

const User: FC<UserProps> = ({ name, lastname, id }) => {
    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>lastname: {lastname}</p>
        </div>
    )
}

export default User