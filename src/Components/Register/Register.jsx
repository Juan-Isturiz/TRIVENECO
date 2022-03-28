import { set, useForm, } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react'
import Card from '../UI/Card/Card';
import classes from '../Login/Login.module.css';
import Button from '../UI/Button/Button';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { auth, db, currentLog } from "../../utils/firebaseConfig";
import { UserContext } from "../../Context/Context";


const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState,
    getFieldState
  } = useForm({
    mode: "onChange",
    defaultValues: {
      displayName: '',
      email:'',
      password: '',
      phoneNumber: null,
    }
  })

  const { setUser, setLogged, createUser } = useContext(UserContext)


  const onSubmit = async (data) => {
    try {
      const response =await auth.createUserWithEmailAndPassword(data.email, data.password);
      setLogged(true),
      setUser(currentLog())
      console.log(data.phoneNumber)
      currentLog().updateProfile({displayName: data.displayName, photoURL:"https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"})
      const usrdata = {rol: 1,email:response.user.email, reservas:{}}
      createUser(response.user.uid,usrdata)
      navigate("/");
    }
    catch (e) {
      if (e.message ==='The email address is already in use by another account.'){
        alert(e.message)
      }
    }
  };
  //getFieldState
  return (
    <Card className={classes.login}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${classes.control} ${getFieldState('displayName', formState).invalid === true ? classes.invalid : ''}`}>
          <label
            htmlFor="nombre"
            id="nombre">
            Nombre Completo
          </label>
          <input
            {...register(
              "displayName",
              {
                required: 'Por favor ingrese su nombre',
                minLength: {
                  value: 4,
                  message: 'Por favor ingrese un nombre válido'
                }
              })}
            type="text"
            placeholder="Enter a name"

          />
        </div>
        <div className={`${classes.control} ${getFieldState('email').invalid === true ? classes.invalid : ''}`}>
          <label htmlFor="email" id="email">Email</label>
          <input {...register("email", {
            required: "Por favor ingrese un correo",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Por favor ingrese un correo válido"
            }
          })} type="text" placeholder="Enter your email" />
        </div>
        <div className={`${classes.control} ${getFieldState('password').invalid === true ? classes.invalid : ''}`}>
          <label htmlFor="password" id="password">password</label>
          <input {...register("password", {
            required: 'Por favor ingrese una contraseña',
            minLength: {
              value: 8,
              message: 'La contraseña debe tener al menos 8 caracteres'
            }
          })} type="password" placeholder="Enter your Password" />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} onClick={onSubmit} disabled={!formState.isValid}>
            Sign up
          </Button>
          <div className={classes.buttons}>
            </div>
        </div>
      </form>
    </Card>
  )

}
export default Register