import React,{useState,useEffect} from 'react'
import {db} from "../../utils/firebaseConfig"
import "../../Pages/LandPage/LandPage.module.css";




export default function ShowHotel() {
    const[docus,setDocus]=useState([]);

    useEffect(async ()=>{
    const docusList = await db.collection("hoteles").get()
    setDocus(docusList.docs.map((doc)=>doc.data()))

},[])
    return (
        <ul>
            {docus.map((doc)=><li key={doc.keyCode}>
            <h3>{doc.nombre}</h3>
            <img src={doc.url} height="100px" width="100px"></img>
            <h3>{doc.descripcion}</h3>
            </li>)}
        </ul>
    )
}