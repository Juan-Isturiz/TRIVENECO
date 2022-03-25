
import React, {useEffect, useState } from "react";
import {db} from "../utils/firebaseConfig";


export function jsonParticular() {

    const[docus,setDocus]=useState([]);
    
    
    useEffect(async ()=>{
        const docusList = await db.collection("archivos").get()
        setDocus(docusList.docs.map((doc)=>doc.data()))
    },[])


    return (
        docus
    )
}

export default jsonParticular;