import { useEffect, useReducer,useContext, useState } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { UserContext } from '../../Context/Context';
import { auth, googleProvider, facebookProvider, currentLog} from "../../utils/firebaseConfig";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';


// ///////////////////////Reducer Functions////////////
const emailReducer = (state, action) => {


  if (action.type === 'USR_INPUT') {
    return { value: action.val, isValid: action.val.includes('@'&&'.') }
  };
  if (action.type === 'INPUT_lmao') {
    return { value: state.value, isValid: state.value.includes('@'&&'.') }
  }
}
const pswrdReducer = (state, action) => {
  if (action.type === 'USR_INPUT') {
    return { value: action.val, isValid: action.val.trim().length >= 8 }
  };
  if (action.type === 'INPUT_lmao') {
    return { value: state.value, isValid: state.value.trim().length >= 8 }
  }
}
// ////////////////MAIN COMPONENT////////////////
const Login = (props) => {
  ///////// State Declarations //////////////////

  const { setUser, setLogged, createUser,user} = useContext(UserContext)//CONTEXT
  
  const userSetter =()=>
    {
      setUser(currentLog())
      setLogged(true)
    }
  const navigate = useNavigate();

  const [formIsValid, setFormIsValid] = useState(false);

  const [usrEmail, dispatchEmail] = useReducer(emailReducer,

    {
      value: '',
      isValid: null
    });

  const [usrPswrd, dispatchPswrd] = useReducer(pswrdReducer,

    {
      value: '',
      isValid: null
    });
  //////////////////////////////////////////////////////////

  /////////////////////////// Effects Handle///////////////
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        usrEmail.isValid && usrPswrd.isValid
      );
    }, 500);

    return () => { 
      clearTimeout(identifier) }

  }, [usrEmail.isValid, usrPswrd.isValid])
  /////////////////////////////////////////////////////////


  /////// Reducer Handlers ////////////////////////////////
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USR_INPUT', val: event.target.value })
  };

  const passwordChangeHandler = (event) => {
    dispatchPswrd({ type: 'USR_INPUT', val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_lmao' });
  };

  const validatePasswordHandler = () => {
    dispatchPswrd({ type: 'INPUT_lmao' });
  };
  ///////////////////////////HANDLERS///////////////////////////////////


  const handleGoogleLogin = async () => { //GOOGLE
    try{
      
      await auth.signInWithPopup(googleProvider);
      userSetter()
      navigate('/')
      
    }catch(e){
      console.log(e.message)
      alert("Tiempo de espera agotado, intente de nuevo")
    }
  }

  const handleFacebookLogin = async () => { //Facebook
    try{
      await auth.signInWithPopup(facebookProvider);
      userSetter()
      if (user.metadata.creationTime === user.metadata.lastSignInTime){
        const  usr ={
          email : user.email,
          rol : 1
        }
        
        createUser(user.uid,usr)
      }
      navigate('/')
      
    }catch(e){
      console.log(e.message)
      alert("Tiempo de espera agotado, intente de nuevo")
    }
  }
  
  const submitHandler = async (e) => { //EMAIL
    e.preventDefault();
    try{
      await auth.signInWithEmailAndPassword(usrEmail.value, usrPswrd.value);
      navigate('/')
      userSetter()
    }catch(e){
      alert("Usuario o Contraseña invalido, por favor verifique e intente de nuevo.")
    }
    
  };
  //==================================================/
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${usrEmail.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={usrEmail.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${usrPswrd.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={usrPswrd.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
      <div className={classes.RegisterRedirectContainer}>
        No tienes cuenta? <Link to="/Signup" className={classes.RegisterRedirect}>Regístrate aquí</Link>
      </div>
      {/* <Button onClick={handleGoogleLogin}>gugel</Button> */}
      <div className={classes.buttons}>
        <FcGoogle onClick={handleGoogleLogin} size="40px" className={classes.btn}/>
        <ImFacebook onClick={handleFacebookLogin} size="40px" color="#4267B2" className={classes.btn} /> {/* TODO handle facebook and twitter login @diego */}
        <BsTwitter size="40px" color="#1DA1F2" className={classes.btn} />
      </div>
    </Card>
  );
};

export default Login;                                            
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