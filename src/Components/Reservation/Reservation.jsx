import React,{useEffect,useState}from 'react'
import {DatePicker} from "@material-ui/pickers"
import { useParams } from 'react-router-dom'
import {storage,db} from "../../utils/firebaseConfig";
import Styles from "./Reservation.module.css"
import { v4 as uuidv4 } from 'uuid';

function searchingTerm(hotelid) {
    return function (x) {
        return x.keyCode2.includes(hotelid) || !hotelid;
    };
};


export default function Reservation() {

    function setText(docus){
     
        return (
           <div>
               {docus.map((doc) => ( 
          
          <div key={doc.keyCode}>
              {doc.lista2.filter(searchingTerm(type)).map((doc1) => (
                 <div key={doc1.keyCode2}>
                 <h3 name="habit" >{sethabit(doc1.habitacion)}</h3>
                 <h3 name="prec" >{setprec(doc1.precioPerDay)}</h3>
                 <h3 name="persona" >{setpersona(doc1.personasHab)}</h3>
                 <h3 name="checkInya" > {setcheckInya(doc1.timin)}</h3>
                 <h3 name="checkOutya" > {setcheckOutya(doc1.timax)}</h3>
                 <h3 name="archivoUrl4" > {setarchivoUrl4(doc1.archivoUrl4)}</h3>
                  </div>
                  
              ))}

          </div>
          
      ))}</div>
      )
      }
        
    
     const[habit, sethabit] = useState([]);
     const[archivoUrl4, setarchivoUrl4] = useState([]);
     const[prec, setprec] = useState([]);
     const[persona, setpersona] = useState([]);
     const[checkInya, setcheckInya] = useState([]);
     const[checkOutya, setcheckOutya] = useState([]);
     


    const id= useParams().id
    const type= useParams().type
    const KeyCodenew= uuidv4();
    const[docus,setDocus]= useState([])
    const[checkIn,changeCheckIn]=useState(new Date)
    const[checkOut,changeCheckOut]=useState(new Date)
    const[listahab, setlistahab] = useState([]);



    useEffect(async ()=>{
        const docusList = await db.collection("hoteles").get()
        setDocus(docusList.docs.map((doc)=>doc.data()))
    
    },[])
    

    const submitHandler = async (e)=>{
        e.preventDefault()
        
        setText(docus)
        const coleccionRef =  db.collection("reservas")
        const docu = await coleccionRef.doc(KeyCodenew).set({habitacion:habit,precio:prec,persona:persona,checkIn:checkInya,checkOut:checkOutya})


        const keyCode2= uuidv4();
        listahab.push({timax:checkOut,keyCode2:keyCode2, timin:checkInya[0],personasHab:persona[0],precioPerDay:prec[0],habitacion:habit[0],archivoUrl4:archivoUrl4[0]})



        const keyCode3= uuidv4();
        listahab.push({timax:checkOutya[0],keyCode2:keyCode3, timin:checkIn,personasHab:persona[0],precioPerDay:prec[0],habitacion:habit[0],archivoUrl4:archivoUrl4[0]})


        db.collection("hoteles").doc(id).update({lista2:listahab})

        alert("Se ha procesado su solicitud") 
    }

    return (
        <form onSubmit={submitHandler} className={Styles.contenedor}>
    <section >
        <div >
            <label> Fecha check-In</label>
            <DatePicker value={checkIn} onChange={changeCheckIn} />
        </div>
        <div>
        <label> Fecha check-Out</label>
        <DatePicker value={checkOut} onChange={changeCheckOut} />
        </div>
        
        {docus.map((doc) => ( 
          
            <div key={doc.keyCode}>
                {doc.lista2.filter(searchingTerm(type)).map((doc1) => (
                    <div key={doc1.keyCode2}>
                    <h1>habitacion</h1> 
                    <h3 name="habit" >{doc1.habitacion}</h3>
                    <img src="doc1.archivoUrl4" alt="" value ={doc1.archivoUrl4} name="foto"/>

                    <h1>Precio por día</h1> 
                    <h3 name="prec" >{doc1.precioPerDay}</h3>
                   
                   
                    <h1>Personas por habitacion</h1> 
                    <h3 name="persona" >{doc1.personasHab}</h3>
                    <hr/>
                    <hr/>
                    <h1>disponible desde </h1>
                    <h3 name="checkInya" > {doc1.timin}</h3>
                    <h1>hasta</h1>
                    <h3 name="checkOutya" > {doc1.timax}</h3>
                    { (Date.now(doc1.timin) < checkIn.getTime() ) || (Date.now(doc1.timin) == checkIn.getTime() )&& (Date.now(doc1.timax) == checkOut.getTime() ) || (Date.now(doc1.timax)> checkOut.getTime() )?( <button>Enviar</button>):( <button disabled="true">Enviar</button>)}
                    
                    </div>
                    
                ))}

            </div>
        ))}
            
    
    </section>
    </form>
    )

}
