import React,{useState,useEffect} from 'react'
import {db} from "../../utils/firebaseConfig"
import Card from '../UI/Card/Card';
import classes from '../Login/Login.module.css';
import { Link} from 'react-router-dom';




function searchingTerm(term){
    return function(x){
        return x.nombre.toLowerCase().includes(term) || !term
    }
}

export default function ShowHotel() {


    const[docus,setDocus]=useState([]);
    const[term,setTerm]=useState("")

    useEffect(async ()=>{
    const docusList = await db.collection("hoteles").get()
    setDocus(docusList.docs.map((doc)=>doc.data()))

},[])
    return (
        <section>
        <Card className={classes.login2} >
        <form>
            <div className={`${classes.control1}
            `}>
                 <label htmlFor="buscador">Buscador</label>
            <input
                type="buscador"
                id="buscador"
                placeholder="Filtrado por nombre"
                onChange={e=>setTerm(e.target.value)}
            />
            </div>
            <div className={classes.actions}>
            </div>        
        </form>
        </Card>
        <ul>
            {docus.filter(searchingTerm(term)).map((doc)=><li key={doc.keyCode}>
            <h3>{doc.nombre}</h3>
            <Link to ={`/HotelParticular/${doc.keyCode}`}><img src={doc.url} height="100px" width="100px"></img></Link>
            <h3>{doc.descripcion}</h3>
            </li>)}
        </ul>
        
        </section>
    )
}