import React, { FC } from 'react'
import { useAppSelector } from '../../app/hooks'
import { userSelector, userstateSelector } from '../../features/loggedInUser/userSlice'

interface TitleProps {
    title: string
}

const Title: FC<TitleProps> = ({ title }) => {
    const user = useAppSelector(userSelector)
    return (
        <div>
            {user && user.name ? user.name : null},
            {title}
        </div>
    )
}

export default Title