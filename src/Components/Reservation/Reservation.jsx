import React,{useState}from 'react'
import {DatePicker} from "@material-ui/pickers"


export default function Reservation() {

    const[checkIn,changeCheckIn]=useState(new Date())
    const[checkOut,changeCheckOut]=useState(new Date())

    const tiempo= checkOut.getTime() - checkIn.getTime()
    console.log(tiempo)

    return (<section>
        <div>
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
