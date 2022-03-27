import React,{useState,useEffect} from 'react'
import {db} from "../../utils/firebaseConfig"
import Card from '../UI/Card/Card';
import classes from '../Login/Login.module.css';
import styles from './ShowHotel.module.css';
import InputField from '../UI/InputField/InputField';
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
        {/* <Card className={classes.login2} > */}
        <Card className={styles.HotelSearcher}>
        <h2>Encuentra tu hotel ideal</h2>
        <form>
            <div className={classes.control1}>
                 {/* <label htmlFor="buscador">Encuentra tu hotel ideal</label> */}
            <InputField type="buscador" placeholder="Filtrado por nombre" onChange= {e=>setTerm(e.target.value)}></InputField>

            </div>
            <div className={classes.actions}>
            </div> {/* qué hace este div? lo vi aquí y ta vacío hm */}
        </form>
        </Card>
        <ul className={styles.HotelList}>
            {docus.filter(searchingTerm(term)).map((doc)=>
            <li key={doc.keyCode}>
            <h3>{doc.nombre}</h3>
            <div className={styles.PhotoAndDescription}>
            <img src={doc.url} width="200px"></img>
            <p>{doc.descripcion}</p></div>
            </li>)}
        </ul>
        
        </section>
    )
}