
import { useParams } from 'react-router-dom'
import React, {useEffect, useState } from "react";
import {db} from "../utils/firebaseConfig";


export function CiudadParticular() {

    const id =useParams()
    const[docus,setDocus]=useState([]);
    const [docusList, setDoc] = useState([]);
    
    useEffect(async ()=>{
        const docusList = await db.collection("archivos").get()
        setDocus(docusList.docs.map((doc)=>doc.data()))
        setDoc(docus.filter)
    },[])


    return (
        <div></div>
    )
}

export default CiudadParticular;