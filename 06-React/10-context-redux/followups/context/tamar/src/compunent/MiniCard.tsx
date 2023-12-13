import React, { useContext } from 'react'
import { UserContext } from '../contexts/userContext'

const MiniCard = () => {
    const { user } = useContext(UserContext)

    return (
        <div>
            <p>hello from Mini-card {user ? user.name : null}</p>
        </div>
    )
}

export default MiniCard
