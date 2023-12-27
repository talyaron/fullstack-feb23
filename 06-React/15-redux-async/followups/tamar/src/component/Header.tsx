import { useAppSelector } from "../app/hooks"
import { userSelector } from "../features/loggedUser/userSlice"

const Header = () => {
    const user = useAppSelector(userSelector)

    return (
        <div>
            Hello from header {user && user.name ? user.name : null}
        </div>
    )
}

export default Header
