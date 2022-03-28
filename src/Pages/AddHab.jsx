import { useParams} from 'react-router-dom'
import React, {useEffect, useState } from "react";
import {storage,db} from "../utils/firebaseConfig";
import ReservationGen from "../Components/Reservation/ReservationGen.jsx"
import { v4 as uuidv4 } from 'uuid';




export default function addHab() {
    
        const {id}= useParams()
        const[archivoUrl4, setArchivoUrl4] = useState("");
        const[listahab, setlistahab] = useState([]);
        


        const archivoHandler4 = async (e)=>{

            const archivo4= e.target.files[0]
            const storageRef4 = storage.ref()
            const archivoPath4 = storageRef4.child(archivo4.name)
            await archivoPath4.put(archivo4)
            console.log('archivo cargado:' ,archivo4.name)
            const enlaceUrl4 = await archivoPath4.getDownloadURL();
            setArchivoUrl4(enlaceUrl4)


        }

    const submitHandler = async (e)=>{
        e.preventDefault()
        const timax= e.target.timax.value
        const timin= e.target.timin.value
        const personasHab= e.target.personasHab.value
        const precioPerDay=e.target.precioPerDay.value
        const habitacion =e.target.habitacion.value

        if(!precioPerDay){
            alert("No hay precio")
            return}
            
            if(!habitacion){
                alert("No hay nombre de habitacion")
                return}
                const keyCode2= uuidv4();
        listahab.push({timax:timax,keyCode2:keyCode2, timin:timin,personasHab:personasHab,precioPerDay:precioPerDay,habitacion:habitacion,archivoUrl4:archivoUrl4})
        
        db.collection("hoteles").doc(id).update({lista3:listahab})
        alert("Se ha procesado su solicitud")
        
    }
    
        
    return (
        <div>
            <form onSubmit={submitHandler}>
            <h3>Foto de la habitacion:</h3>
            <input type="file" onChange={archivoHandler4}/>
            <ReservationGen/>
            <button>
            
                Enviar</button>
            </form>
            
        </div>
    )
}
