/*import { useEffect, useReducer, useState } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USR_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  };
  if (action.type === 'INPUT_lmao') {
    return { value: state.value, isValid: state.value.includes('@') }
  }
}
const pswrdReducer = (state, action) => {
  if (action.type === 'USR_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  };
  if (action.type === 'INPUT_lmao') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
}
const Login = (props) => {

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

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        usrEmail.isValid && usrPswrd.isValid
      );
    }, 500);

    return () => { 
      clearTimeout(identifier) }

  }, [usrEmail.isValid, usrPswrd.isValid])

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

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(usrEmail.value, usrPswrd.value);
  };

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
//     .hmo`                                     /hs     */