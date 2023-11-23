import {FC} from "react";
import { users } from "../util/users";


interface UserProps{
    id : number;
    name : string;
    lastName : string;
    countert : number;

}

const UserCard : FC<UserProps> = () => {
    return (
        <div key={users.id}>
            <p>{users.}</p>

        </div>
    )
}

export default User
