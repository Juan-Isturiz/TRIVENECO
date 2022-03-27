import React,{useEffect,useState}from 'react'
import {DatePicker} from "@material-ui/pickers"
import { useParams } from 'react-router-dom'
import {storage,db} from "../../utils/firebaseConfig";
import Styles from "./Reservation.module.css"


function searchingTerm(id){
    return function(x){
        return x.keyCode.toLowerCase().includes(id) || !id
    }
}

export default function Reservation() {

    const[checkIn,changeCheckIn]=useState(new Date())
    const[checkOut,changeCheckOut]=useState(new Date())


    return (<section className= {Styles.contenedor}>
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
