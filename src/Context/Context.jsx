import { useState, useEffect, createContext } from 'react';
import { auth, db } from "../utils/firebaseConfig";

export const UserContext = createContext(null);
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        displayName: 'Visitor',
        email: '',
        photoURL: '',
        emailVerified:false
    })
    const [isLogged, setLogged] = useState(false)

    const getUserProfile = async (email) => {
        const usersRef = db.collection("users");
    
        const usersCollection = await usersRef.where("email", "==", email).get();
    
        const profile = usersCollection.docs[0];
    
        if (!profile) return null;
    
        return {
          id: profile.id,
          ...profile.data(),
        };
    };

    const createUser = async (userId, data) => {
        return db
          .collection("users")
          .doc(userId)
          .set({ ...data });
      };

      useEffect(() => {
        auth.onAuthStateChanged(async (firebaseUser) => {
          if (firebaseUser) {
            let profile = await getUserProfile(firebaseUser.email);
    
            console.log({ fullProfile: profile });
    
            if (!profile) {
              profile = {
                name: firebaseUser.displayName,
                email: firebaseUser.email,
                photo: firebaseUser.photoURL,
              };
    
              await createUser(firebaseUser.uid, profile);
            }
    
            setUser(profile);
          } else {
            setUser(null);
          }
        });
        return () => {};
      }, []);

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
