import React,{useEffect,useState}from 'react'
import {DatePicker} from "@material-ui/pickers"
import { useParams } from 'react-router-dom'
import {storage,db} from "../utils/firebaseConfig";

function searchingTerm(id){
    return function(x){
        return x.keyCode.toLowerCase().includes(id) || !id
    }
}

export default function Reservation() {

    const {id}= useParams()
    const[docus,setDocus]=useState([]);

    const[checkIn,changeCheckIn]=useState(new Date())
    const[checkOut,changeCheckOut]=useState(new Date())

    useEffect(async ()=>{
        const docusList = await db.collection("hoteles").get()
        setDocus(docusList.docs.map((doc)=>doc.data()))
    },[])

    return (<section>
        {docus.filter(searchingTerm(id)).map((doc)=><li key={doc.keyCode}>
        <div>
            <label> Fecha check-In</label>
            <DatePicker value={checkIn} onChange={changeCheckIn}/>
        </div>
        <div>
        <label> Fecha check-Out</label>
        <DatePicker value={checkOut} onChange={changeCheckOut}/>
        </div>
    </li>)}
    </section>
    )

}
