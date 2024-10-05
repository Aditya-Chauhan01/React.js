import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>     {/*  The "provider" component allows any component within its child hierarchy to access the values or functions it provides.*/}
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

/* note: childern ke ander kuch bhi ho skta hai ek component bhi or compo ke ander ek compo.
components ke bhar hm wrapper rkhenge jo ki context hoga
*/