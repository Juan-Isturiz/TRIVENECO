
import React, {useEffect, useState } from "react";
import {db} from "../utils/firebaseConfig";


export function CiudadParticular() {

    const[docus,setDocus]=useState([]);
    
    useEffect(async ()=>{
        const docusList = await db.collection("archivos").get()
        setDocus(docusList.docs.map((doc)=>doc.data()))
        setDoc(docus.filter)
    },[])


    return (
        docus
    )
}

export default CiudadParticular;