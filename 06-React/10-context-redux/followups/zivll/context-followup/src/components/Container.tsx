import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'

const Container = () => {
    const { user } = useContext(UserContext)
    console.log(user);

    return (
        <div>
            <p>
                my name is: {user ? user.name : null}<br />
                you can reach me at: {user ? user.phone : null}<br />
            </p>
        </div>
    )
}

export default Container