import React,{useEffect,useState}from 'react'
import {DatePicker} from "@material-ui/pickers"
import { useParams } from 'react-router-dom'
import {storage,db} from "../../utils/firebaseConfig";
import Styles from "./Reservation.module.css"

function searchingTerm(hotelid) {
    return function (x) {
        return x.keyCode2.includes(hotelid) || !hotelid;
    };
}



export default function Reservation() {
    const hotelid= useParams()
    const[docus,setDocus]= useState([])
    const[checkIn,changeCheckIn]=useState(new Date())
    const[checkOut,changeCheckOut]=useState(new Date())
    

    useEffect(async ()=>{
        const docusList = await db.collection("hoteles").get()
        setDocus(docusList.docs.map((doc)=>doc.data()))
    
    },[])
    

    return (
        
    <section className= {Styles.contenedor}>
        {docus.map((doc) => ( 
            <div key={doc.keyCode}>
                {doc.lista2.filter(searchingTerm(hotelid)).map((doc1) => ( 
                    <h3 key={doc1.keyCode2}>{doc1.habitacion}</h3>
                ))}

            </div>
        ))}
            
                
                
               
        <div >
            <label> Fecha check-In</label>
            <DatePicker value={checkIn} onChange={changeCheckIn}/>
        </div>
        <div>
        <label> Fecha check-Out</label>
        <DatePicker value={checkOut} onChange={changeCheckOut}/>
        </div>
    </section>
    )

}
