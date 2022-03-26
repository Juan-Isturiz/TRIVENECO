
import { useParams } from 'react-router-dom'
import React, {useEffect, useState } from "react";
import {db} from "../../utils/firebaseConfig";
import styles from "./HotelParticular.module.css"

function searchingTerm(id){
    return function(x){
        return x.keyCode.toLowerCase().includes(id) || !id
    }
}

export function HotelParticular() {
    const {id}= useParams()
    const[docus,setDocus]=useState([]);
    
    
    useEffect(async ()=>{
        const docusList = await db.collection("hoteles").get()
        setDocus(docusList.docs.map((doc)=>doc.data()))
    },[])
    


    return (
        <div className={styles.container}>
            {docus.filter(searchingTerm(id)).map((doc)=><li key={doc.keyCode}>
                <h1 className={styles.titulo}>Nombre De la ciudad: </h1>
                <h3>{doc.nombre}</h3>
                <img src={doc.url} height="500px" width="600px"></img>
                <br/>
                <br/>
                <h1 className={styles.titulo}>Descripción: </h1>
                <h3 className={styles.descripcion}>{doc.descripcion}</h3>
                <h1 className={styles.titulo}>Casino: </h1>
                <h3 className={styles.descripcion}>{doc.Casino}</h3>
                <h1 className={styles.titulo}>Desayuno: </h1>
                <h3 className={styles.descripcion}>{doc.Comida}</h3>
                <h1 className={styles.titulo}>Playa: </h1>
                <h3 className={styles.descripcion}>{doc.Playa}</h3>
                <h1 className={styles.titulo}>Ciudad: </h1>
                <h3 className={styles.descripcion}>{doc.ciudad}</h3>
                <h1 className={styles.titulo}>Entretenimiento: </h1>
                <h3 className={styles.descripcion}>{doc.entretenimiento}</h3>
                <h1 className={styles.titulo}>Se permite mascota: </h1>
                <h3 className={styles.descripcion}>{doc.mascota}</h3>
<br/>
<br/>
                </li>)}
        </div>
    ) 
}

export default HotelParticular;