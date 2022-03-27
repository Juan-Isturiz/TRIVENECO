
import { useParams } from 'react-router-dom'
import React, {useEffect, useState } from "react";
import {db} from "../utils/firebaseConfig";
import styles from "./HotelParticular.module.css"
import Reservation from "./Reservation"
import { Link, useNavigate } from 'react-router-dom';


function searchingTerm(id){
    
    return function(x){
        return x.keyCode.toLowerCase().includes(id) || !id
    }
}

export function HotelParticular() {
    const {id}= useParams()
    const[docus,setDocus]=useState([]);
    const[organizado,setorganizado]=useState([]);
    
    
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
                <h1 className={styles.titulo}>Se permiten mascotas: </h1>
                <h3 className={styles.descripcion}>{doc.mascota}</h3>

                <br/>
                <br/>
                <h1 className={styles.titulo}>Intalaciones: </h1>
                <h3 className={styles.titulo}>{doc.lugar}</h3>
                <img src={doc.url2} height="500px" width="600px"></img>
                <br/>
                <br/>
                <h1 className={styles.titulo}>Descripción</h1>
           
                <h3 className={styles.descripcion}>{doc.descripcion2}</h3>
                
                <br/>
                <br/>
                <h3 className={styles.titulo}>{doc.lugar2}</h3>
                <img src={doc.url3} height="500px" width="600px"></img>
                <br/>
                <br/>
                <h1 className={styles.titulo}>Descripción</h1>
                
                <h3 className={styles.descripcion}>{doc.descripcion3}</h3>
<br/>
<br/>
<br/>
<br/>

            <h3 className={styles.h3}>Seleccione la habitación:</h3>
               {doc.lista2.map((docu)=><div key={keyCodes} >
                   {docu.habitacion}
                   <Link to={`/Reserva/${keyCodes}`}>Hoteles</Link>
               
               </div>)}</li>)}

                
                
                <Reservation></Reservation>
        </div>
    ) 
}

export default HotelParticular;