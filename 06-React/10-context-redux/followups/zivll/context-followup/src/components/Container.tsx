import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'

const Container = () => {
    const { user } = useContext(UserContext)
    console.log(user);

    return (
        <div>
            <p>
                my name is: {user ? user.name : null}<br />
                my address is: {user ? user.address.city : null},&nbsp;
                {user ? user.address.street : null},&nbsp;
                {user ? user.address.suite : null},&nbsp;
                {user ? user.address.zipcode : null}<br />
                {/* {/* and my zipcode is: {user ? user.zipcode : null}<br /> */}
                you can reach me at: {user ? user.phone : null}<br />
            </p>
        </div>
    )
}

export default Container