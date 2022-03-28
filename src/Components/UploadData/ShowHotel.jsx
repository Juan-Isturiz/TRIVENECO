import React,{useState,useEffect} from 'react'
import {db} from "../../utils/firebaseConfig"
import Card from '../UI/Card/Card';
import styles from './View.module.css';
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
        <Card className={styles.CardContainer}>
        <h2>Encuentra tu hotel ideal</h2>
        <form className={styles.FormContainer}>
            <InputField type="buscador" placeholder="Filtrado por nombre" onChange= {e=>setTerm(e.target.value)}></InputField>
        </form>
        </Card>
        <ul className={styles.list}>
            {docus.filter(searchingTerm(term)).map((doc)=>
            <li key={doc.keyCode} className={styles.elements}>
                <div className={styles.ImgContainer}>
                    <Link to={`/HotelParticular/${doc.keyCode}`}>
                        <img 
                            src={doc.url}
                            className={styles.ElementImg}
                        ></img>
                    </Link>
                    <div className={styles.OverImg}>
                        <Link to={`/HotelParticular/${doc.keyCode}`}>
                            <h3 className={styles.Name}>{doc.nombre}</h3>
                        </Link>
                    </div>
                </div>
            </li>)}
        </ul>
        
        </section>
    )
}