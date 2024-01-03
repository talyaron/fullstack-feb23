import { useEffect } from "react"
import { useAppSelector } from "../../app/hooks"
import { userSelector } from "../../features/loggedInUser/userSlice"

const Header = () => {
    const user = useAppSelector(userSelector)

    // you can run useEffect on redux selectors!
    useEffect(() => {
        console.log("changed user")
    }, [user])

    return (
        <div>
            Navbar
            viteLogo
            hello {user && user.name ? user.name : null}
        </div>
    )
}

export default Header