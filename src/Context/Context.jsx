import { useState, useEffect, createContext } from 'react';
import { db, auth, currentLog } from '../utils/firebaseConfig';


export const UserContext = createContext(null);
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    displayName: 'visitor',
    email: 'exmple@correo.com',
    photoURL: 'Ganga',
    emailVerified: false,
    uid: "1",
    metadata: {
      creationTime: 5,
      lastSignInTime: 4
    }
  })

  const loggerOut = async () => {
    await auth.signOut();
    setLogged(false)
    setUser({
      displayName: 'visitor',
      email: 'exmple@correo.com',
      photoURL: 'Ganga',
      emailVerified: false,
      uid: "1",
      metadata: {
        creationTime: 5,
        lastSignInTime: 4
      }

    })
  }
  const clienteActivo = async () => {
    await auth.signOut();
    setLogged(false)
    setUser({
      displayName: 'visitor',
      email: 'exmple@correo.com',
      photoURL: 'Ganga',
      emailVerified: false,
      uid: "1",
      metadata: {
        creationTime: 5,
        lastSignInTime: 4
      }

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
        if (user.metadata.creationTime === user.metadata.lastSignInTime) {
          const  usr ={
            email : user.email,
            rol : 1
          }
          
          createUser(user.uid,usr)
        }
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
