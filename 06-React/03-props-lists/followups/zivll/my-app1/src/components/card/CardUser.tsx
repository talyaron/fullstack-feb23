import React, { FC } from 'react'
export interface UserCardProps {
    userName: string,
    email: string,
    // children: React.ReactNode
}
export const Card: FC<UserCardProps> = ({ userName, email }) => {
    return (
        <div className='card'>
            <h1>{userName}</h1><p>{email}</p></div>
    )
}

