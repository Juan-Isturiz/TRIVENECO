
import { useParams } from 'react-router-dom'
import React, {useEffect, useState } from "react";
import {db} from "../utils/firebaseConfig";
import styles from "./CiudadParticular.module.css"

function searchingTerm(id){
    return function(x){
        return x.keyCode.toLowerCase().includes(id) || !id
    }
}

export function CiudadParticular() {
   
    const {id}= useParams()
    const[docus,setDocus]=useState([]);
    
    
    useEffect(async ()=>{
        const docusList = await db.collection("ciudades").get()
        setDocus(docusList.docs.map((doc)=>doc.data()))
    },[])
    


    return (
        <div className={styles.container}>
            {docus.filter(searchingTerm(id)).map((doc)=><li key={doc.keyCode}>
                <h1 className={styles.titulo}>Nombre De la ciudad: </h1>
                <h3>{doc.nombre}</h3>
                <img src={doc.url} height="100px" width="100px"></img>
                <br/>
                <br/>
                <h1 className={styles.titulo}>Descripción: </h1>
                <h3>{doc.descripcion}</h3>
                <h1 className={styles.titulo}>Zona: </h1>
                <h3>{doc.zona}</h3>
                <h1 className={styles.titulo}>Ranking: </h1>
                <h3>{doc.ranking}</h3>
                <br/>
                <br/>
                <h1 className={styles.titulo}>Lugares de interés: </h1>
                <h1 className={styles.titulo}>Primer lugar </h1>
                <h3 className={styles.titulo}>{doc.lugar}</h3>
                <img src={doc.url2} height="100px" width="100px"></img>
                <h3 className={styles.titulo}>{doc.descripcion1}</h3>
                
                <h1 className={styles.titulo}>Segundo lugar: </h1>
                <h3 className={styles.titulo}>{doc.lugar2}</h3>
                <img src={doc.url3} height="100px" width="100px"></img>
                <h1 className={styles.titulo}>Descripción</h1>
                <h3>{doc.descripcion2}</h3>

                </li>)}
        </div>
    ) 
}

export default CiudadParticular;