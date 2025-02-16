import type React from "react";
import type { UserType } from "../page";

type UserProps = {
    user: UserType
}

export const User: React.FC<UserProps> = ({user}) => {


    return(
        <div>
            Coucou <span>{user.name.last}</span>
        </div>
    )
}