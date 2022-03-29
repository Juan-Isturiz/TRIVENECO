import { useState, useEffect, createContext } from 'react';
import { db, auth, currentLog } from '../utils/firebaseConfig';
import { useNavigate } from 'react-router-dom';

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
  const [rol, setRol] =useState(0)
  const getRol = async () => {
    try {
        const userData = await db.collection("users").doc(user.uid).get();
        setRol(userData.data().rol);
    } catch (error) {
        console.log(error.message);
    }
};
  const history = useNavigate();
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
    history('/')
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
          const usr = {
            email: user.email,
            rol: 1
          }

          createUser(user.uid, usr)
        }
        setLogged(true)
        setUser(currentLog())
        getRol()
        console.log(rol)
      }
    });
  }, []);
  useEffect(()=>{getRol()},[user])
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        setLogged,
        createUser,
        loggerOut,
        rol
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider
