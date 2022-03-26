import { useParams} from 'react-router-dom'
import React, {useEffect, useState } from "react";
import {storage,db} from "../utils/firebaseConfig";
import ReservationGen from "../Components/Reservation/ReservationGen.jsx"


function searchingTerm(id){
    return function(x){
        return x.keyCode.toLowerCase().includes(id) || !id
    }
}

export default function addHab() {
    
        const {id}= useParams()
        const[docus,setDocus]=useState([]);
        const[archivoUrl4, setArchivoUrl4] = useState("");



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
                
        const coleccionRef =  db.collection("hoteles")
        .child("users").child(userUid).child("activities").push();
        const docu = await coleccionRef.doc(id).child("precioPerDay").push(precioPerDay)
        
    }
        
        
        useEffect(async ()=>{
            const docusList = await db.collection("hoteles").get()
            setDocus(docusList.docs.map((doc)=>doc.data()))
        },[])
    return (
        <div>
            {docus.filter(searchingTerm(id)).map((doc)=><div key={doc.keyCode}>
            <form onSubmit={submitHandler}>
            <h3>Foto de la habitacion:</h3>
            <input type="file" onChange={archivoHandler4}/>
            <ReservationGen/>
            <button>
            
                Enviar</button>
            </form>
            </div>)}
        </div>
    )
}
