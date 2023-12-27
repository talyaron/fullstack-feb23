import React, { useEffect } from 'react'
import { useAppSelector } from '../app/hooks'
import { userSelector } from '../features/loggedInUser/userSlice'

const Header = () => {
    const user = useAppSelector(userSelector)

    useEffect(() => {
        console.log("user is changed")
    }, [user])
    return (
        <div>
            hello {user ? user.name : "stranger"}
        </div>
    )
}

export default Header