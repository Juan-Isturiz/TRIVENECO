import React,{useState} from 'react'
import {storage} from "../../utils/firebaseConfig"

export default function ReservationGen() {

    const[archivoUrl, setArchivoUrl] = useState("");

    const archivoHandler = async (e)=>{

        const archivo= e.target.files[0]
        const storageRef = storage.ref()
        const archivoPath = storageRef.child(archivo.name)
        await archivoPath.put(archivo)
        console.log('archivo cargado:' ,archivo.name)
        const enlaceUrl = await archivoPath.getDownloadURL();
        setArchivoUrl(enlaceUrl)
    }

    const handleChange = (e) => {
        setSelected(e.target.value)
      }

    return (
        <div>
            <h3>nombre: </h3>
            <h3>Foto de la habitacion:</h3>
            <input type="file" name="imagenhab" value={archivoUrl} onChange={archivoHandler}/>
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
        </div>
    )
}
