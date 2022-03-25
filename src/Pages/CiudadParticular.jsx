
import { useParams } from 'react-router-dom'
import React, {useEffect, useState } from "react";
import {db} from "../utils/firebaseConfig";

function searchingTerm(id){
    return function(x){
        return x.keyCode.toLowerCase().includes(id) || !id
    }
}

export function CiudadParticular() {
   
    const {id}= useParams()
    const[docus,setDocus]=useState([]);
    
    
    useEffect(async ()=>{
        const docusList = await db.collection("archivos").get()
        setDocus(docusList.docs.map((doc)=>doc.data()))
    },[])
    


    return (
        <div>
            {docus.filter(searchingTerm(id)).map((doc)=><li key={doc.keyCode}>
                <h3>{doc.nombre}</h3>
                <img src={doc.url} height="100px" width="100px"></img>
                <h3>{doc.descripcion}</h3>
                <h3>{doc.zona}</h3>
                <h3>{doc.lugar1}</h3>
                <h3>{doc.ranking}</h3>
                <h3>{doc.lugar}</h3>
                <img src={doc.url2} height="100px" width="100px"></img>
                <h3>{doc.descripcion2}</h3>
                <h3>{doc.lugar2}</h3>
                <img src={doc.url3} height="100px" width="100px"></img>
                <h3>{doc.descripcion3}</h3>

                </li>)}
        </div>
    )
}

export default CiudadParticular;