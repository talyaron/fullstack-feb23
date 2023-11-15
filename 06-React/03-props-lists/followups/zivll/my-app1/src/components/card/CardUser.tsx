import React, { FC } from 'react'
interface UserCardProps {
    userName: string,
    email: string
}
export const Card: FC<UserCardProps> = (userName, email) => {
    return (
        <div style={{
            height: "70%", borderRadius: "10%", backgroundColor: "#61dafb",
            display: "flex",
            padding: "15px",
            alignItems: "center",
            justifyContent: "center", flexDirection: "column"
        }}>
            <p>{email}</p></div>
    )
}

