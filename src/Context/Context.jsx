import { useState, useEffect, createContext } from 'react';
export const UserContext = createContext(null);
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        displayName: 'NiggerFaggot',
        email: 'Cock Sucker',
        photoURL: 'Ganga',
        emailVerified:false
    })
    const [isLogged, setLogged] = useState(false)

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                isLogged,
                setLogged
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider