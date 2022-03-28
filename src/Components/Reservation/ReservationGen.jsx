import React,{useState} from 'react'
import {storage} from "../../utils/firebaseConfig"
import {DatePicker} from "@material-ui/pickers"


export default function ReservationGen() {
    
    const [ObjectSelected, setSelected]= useState([]);
    const[archivoUrl4, setArchivoUrl4] = useState("");
    const[checkInmin,changeCheckInmin]=useState(new Date())
    const[checkOutmax,changeCheckOutmax]=useState(new Date())

    const handleChange = (e) => {
        setSelected(e.target.value)
      }

    return (
        <div>
            <h3>nombre: </h3>
            
            <hr/>
            <h3>titulo: </h3>
            <input type="text" name="habitacion" placeholder="inserte título de habitación" size="50" maxLength="40"/>
            <hr/>
            <h3>precio</h3>
            <input type="text" name="precioPerDay" placeholder="inserte precio por día" size="50" maxLength="40"/>
            <hr/>
            <h3>personas:</h3>
            <select onChange={(e) => handleChange(e)} name="personasHab">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
   		    </select>
            <hr/>
            <div>
            <label> Fecha check-In</label>
            <DatePicker value={checkInmin} onChange={changeCheckInmin} name="timin"/>
       
        </div>
        
        <hr/>
        <div>
        <label> Fecha check-Out</label>
        <DatePicker value={checkOutmax} onChange={changeCheckOutmax} name="timax"/>
  
    </div>
        </div>
    )
}
