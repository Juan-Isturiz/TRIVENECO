import React,{useState,useEffect} from 'react'
import {db} from "../../utils/firebaseConfig"
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from '../Login/Login.module.css';
import { Link} from 'react-router-dom';
import styles from "./ShowData.module.css";




function searchingTerm(term){
    return function(x){
        return x.nombre.toLowerCase().includes(term) || !term
    }
}


function zoneFilter(term){
    return function(x){
        return x.zona.toLowerCase().includes(term) || !term
    }
}

export default function ShowData() {

    

    const[docus,setDocus]=useState([]);
    const[term,setTerm]=useState("")
    const[radio,setRadio]=useState("")

    

    useEffect(async ()=>{
    const docusList = await db.collection("ciudades").get()
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
            <div>
                <li className={classes.radioContainer}>
                <input type="radio" name="radio" value="Playa" onClick={e=>setRadio("playa")} /><h4 className={classes.radio}>Playa</h4>
                <input type="radio" name="radio" value="montaña" onClick={e=>setRadio("montaña")} /><h4 className={classes.radio}>Montaña</h4>
                <input type="radio" name="radio" value="Ciudad" onClick={e=>setRadio("ciudad")} /><h4 className={classes.radio}>Ciudad</h4>
                <input type="radio" name="radio" value="Campo" onClick={e=>setRadio("campo")} /><h4 className={classes.radio}>Campo</h4>
                <input type="radio" name="radio" value="" onClick={e=>setRadio("")} /><h4 className={classes.radio}>reset</h4>
                </li>
            </div>
            
        </form>
        </Card>
            {radio!=""?(
                <ul className={styles.cities}>
                {docus.filter(zoneFilter(radio)).filter(searchingTerm(term)).map((doc)=><li key={doc.keyCode} className={styles.elements}>
                <h3>{doc.nombre}</h3>
                <Link to ={`/CiudadParticular/${doc.keyCode}`}>
                <img src={doc.url} height="100px" width="100px"></img>
                </Link>
                <h3>{doc.ranking}</h3>
                
                </li>)}
                </ul>
                
            ):(
                <ul className={styles.cities}>
                {docus.filter(searchingTerm(term)).map((doc)=><li key={doc.keyCode} className={styles.elements}>
                <h3>{doc.nombre}</h3>
                <Link to ={`/CiudadParticular/${doc.keyCode}`}><img src={doc.url} height ="100px" width="100px"></img></Link>
                <h3>{doc.ranking}</h3>
                
                </li>)}
                </ul>
                )}
                
        </section>

        
    )
}
