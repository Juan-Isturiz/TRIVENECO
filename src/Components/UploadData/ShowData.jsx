import React,{ useState, useEffect } from 'react'
import { db } from "../../utils/firebaseConfig"
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from '../Login/Login.module.css';
import { Link } from 'react-router-dom';
import styles from "./ShowData.module.css";
import InputField from '../UI/InputField/InputField';
import { FaFilter } from 'react-icons/fa'
import { AiOutlineClear } from 'react-icons/ai'



const searchingTerm = (term) => {
    return function(x){
        return x.nombre.toLowerCase().includes(term) || !term
    }
}


function zoneFilter(term){
    return function(x){
        return x.zona.toLowerCase().includes(term) || !term
    }
}

 const ShowData = () => {

    

    const[docus,setDocus]=useState([]);
    const[term,setTerm]=useState("")
    const[radio,setRadio]=useState("")

    

    useEffect(async ()=>{
    const docusList = await db.collection("ciudades").get()
    setDocus(docusList.docs.map((doc)=>doc.data()))
    })

    const [filter, setFilter] = useState(false)

    return (
        <section>
            <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#generadorAndy293923923232323232323" data-width="100%" data-numposts="1"></div>
        {/* <Card className={classes.login2} > */}
        <Card className={styles.CardContainer}>
        <h2>Busca una ciudad</h2>
        <form className={styles.FormContainer}>
            <div className={classes.control1}>
            <InputField type="buscador" id="buscador" placeholder="Filtrado por nombre" onChange={e=>setTerm(e.target.value)} />
            </div>
            <div className={classes.actions}>
            </div>
            <Button onClick={() => setFilter(!filter)} type='button' className={styles.FilterButton}><FaFilter /></Button>
            {filter && <div>
                <li className={styles.RadioContainer}>
                <label htmlFor=""><input type="radio" name="radio" value="Playa" onClick={e=>setRadio("playa")} />Playa</label>
                <label htmlFor=""><input type="radio" name="radio" value="montaña" onClick={e=>setRadio("montaña")} />Montaña</label>
                <label htmlFor=""><input type="radio" name="radio" value="Ciudad" onClick={e=>setRadio("ciudad")} />Ciudad</label>
                <label htmlFor=""><input type="radio" name="radio" value="Campo" onClick={e=>setRadio("campo")} />Campo</label>
                <label htmlFor=""><AiOutlineClear onClick={e=>setRadio("")} size="1.7rem"/></label>
                </li>
            </div>}
            
            
        </form>
        </Card>
            {radio!=""?(
                <ul className={styles.cities}>
                {docus.filter(zoneFilter(radio)).filter(searchingTerm(term)).map((doc)=><li key={doc.keyCode} className={styles.elements}>
                <Link to ={`/CiudadParticular/${doc.keyCode}`}>
                <img src={doc.url} height="100px" width="100px"></img>
                <h3>{doc.ranking}</h3>
                </Link>
                </li>)}
                </ul>
                
            ):(
                <ul className={styles.cities}>
                {docus.filter(searchingTerm(term)).map((doc)=><li key={doc.keyCode} className={styles.elements}>
                <Link to ={`/CiudadParticular/${doc.keyCode}`}>
                <h3>{doc.nombre}</h3>
                <img src={doc.url} height="100px" width="100px"></img>
                <h3>{doc.ranking}</h3>
                </Link>
                </li>)}
                </ul>
                )}
                
        </section>

        
    )
}

export default ShowData;