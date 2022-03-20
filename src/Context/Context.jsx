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
  const [isLogged, setLogged] = useState(false)
  const createUser = async (uid, user) => {
    await db.collection('users').doc(uid).set({...user});
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
        createUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export default UserContextProvider
//       .dy`                               `yh
//        -dh.                             `hd.           
//         .hm:                           .dh.            
//          `oms`      .:+ossso+:-       +mo`             
//            -hm/  :shs+:-...-/+shs:  -hd:               
//             `/dddh/`           `/hdymo`                
//               sNdm+.           `:hmNh`                 
//              +N:`:ydh+:.   `./sdh+.-ms                 
//`````````````.Ny`   .:shhhyyhyy/.`   /M:  ``````````    
//oyyyyyyyyyyyyhMdyyyyyyys.-My.:yyyyyyyyMdyyyyyyyyyyyy.   
//`````````````:M+````````  No  ```````.Ms````````````    
//              mh          -`         /M:                
//              -No         .`        .my                 
//               :my-       ds      `/ms`                 
//                .sds-`    mh    ./hh:                   
//                  .+hdho/:Nd:+shds:`                    
//                 .:+ydmyooooooyddyo/.`                  
//             `-oydy+:.          .:+ydhs/.               
//          `-sdho-`                   -/ydy/.            
//        .odd+.                          `/ymy:`         
//       -ymy-                                .+dh+`       
//     .hmo`                                     /hs     