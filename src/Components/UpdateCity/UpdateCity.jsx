//import React from "react";
//import styles from "./Modify_pa.module.css";
//import { Link } from "react-router-dom";
//import { auth, db } from "../../Utils/FireBaseConfig";
//import { useState, useContext } from "react";
//import { UserContext } from "../../Context/UserContext";
//import { app } from "../../Utils/FireBaseConfig";
//import { useHistory } from "react-router";
//
//function UpdateCity() {
//
//    const history = useHistory();
//    const [values, setValues] = useState({
//        nombreCiudad: "",
//        nombreLugarInteres: "",
//        nombreLugarInteres2: "",
//        descripcionArchivo: "",
//        descripcionArchivo2: "",
//        descripcionArchivo3: "",
//        zonaArchivo: "",
//        rankingArchivo: "",
//      }); 
//
//      const handleOnChange = (event) => {
//        const { value, keyCode: inputName } = event.target;
//        setValues({ ...values, [inputName]: value });
//        console.log(inputName, value);
//      };
//      
//      const handleSubmit = async (e) => {
//        if (values.nombreCiudad === "") {
//          user.name = user.name;
//        } else {
//          db.collection("users").doc(user.id).update({
//            name: values.name,
//          });
//        }
//
//
//  return (
//    <div>UpdateCity</div>
//  )
//}
//
//export default UpdateCity