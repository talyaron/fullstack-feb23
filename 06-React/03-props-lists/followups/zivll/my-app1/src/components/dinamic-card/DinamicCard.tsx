import React, { FC, useState } from 'react'



const DinamicCard = () => {
    const [userName, setUserName] = useState("Please select a user name")
    const [email, setEmail] = useState("Please select an email address")
    const selectUserName = () => {
        const newUserName = prompt("Please select a user name");
        if (!newUserName || newUserName === null) alert("You have to select a user name"); else (setUserName(newUserName)
        )
    }
    const selectEmail = () => {
        const newEmail = prompt("Please select an email address");
        if (!newEmail || newEmail === null) alert("You have to select a user name"); else (setEmail(newEmail)
        )
    }
    return (
        <div className='card dinamic-card'>
            <h1>{userName}</h1><p>{email}</p><button onClick={selectUserName}>Please select a user name</button><button onClick={selectEmail}>Please select an email address</button></div>
    )
}


export default DinamicCard