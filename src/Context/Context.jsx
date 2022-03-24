import { useState, useEffect, createContext } from 'react';
import { db, auth, currentLog } from '../utils/firebaseConfig';


export const UserContext = createContext(null);
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    displayName: 'visitor',
    email: 'exmple@correo.com',
    photoURL: 'Ganga',
    emailVerified: false,
    uid: 1
  })

  const loggerOut = async () => {
    await auth.signOut();
    setLogged(false)
    setUser({
      displayName: 'visitor',
      email: 'exmple@correo.com',
      photoURL: 'Ganga',
      emailVerified: false,
      uid: 1

    })
  }


  const [isLogged, setLogged] = useState(false)
  const createUser = async (uid, user) => {
    await db.collection('users').doc(uid).set({ ...user });
  };
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.email)
        setLogged(true)
        setUser(currentLog())
      }
    });
  }, []);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        setLogged,
        createUser,
        loggerOut
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider
