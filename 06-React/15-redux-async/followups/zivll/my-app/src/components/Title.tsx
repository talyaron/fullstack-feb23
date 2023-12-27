import React, { FC } from 'react'
import { useAppSelector } from '../app/hooks';
import { userSelector } from '../features/loggedInUser/userSlice';

interface TitleProps {
    title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
    const user = useAppSelector(userSelector)
    return (
        <div>
            hello, i am {title}, and a little bird told me that your name is<strong> {user ? user.name : null}</strong>
        </div>
    )
}

export default Title