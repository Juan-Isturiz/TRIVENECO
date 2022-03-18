import { useState, useEffect, createContext } from 'react';
export const UserContext = createContext(null);
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
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