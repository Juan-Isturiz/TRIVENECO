import React, { useEffect, useState } from 'react'
import { DatePicker } from "@material-ui/pickers"
import { useParams } from 'react-router-dom'
import { storage, db } from "../../utils/firebaseConfig";
import Styles from "./Reservation.module.css"
import { v4 as uuidv4 } from 'uuid';

function searchingTerm(hotelid) {
    return function (x) {
        return x.keyCode2.includes(hotelid) || !hotelid;
    };
};


export default function Reservation() {


    const [booking, setBooking] = useState({
        room: null,
        price: null,
        person: null,
        checkInya: null,
        checkOutya: null,
        archivoUrl4: null
    })



    const id = useParams().id

    const type = useParams().type
    const KeyCodenew = uuidv4();
    const [docus, setDocus] = useState([])
    const [checkIn, changeCheckIn] = useState(new Date())
    const [checkOut, changeCheckOut] = useState(new Date())
    const [checkIn2, changeCheckIn2] = useState(new Date())



    useEffect(async () => {
        try {
            const docusList = await db.collection("hoteles").doc(id).collection('habitaciones').doc(type).get()
            setDocus(docusList.data())
            console.log(docus)
        } catch (e) {
            console.log(e.message)
        }
    }, [])


    const submitHandler = async (e) => {
        e.preventDefault()
        const coleccionRef = db.collection("reservas")
        const docu = await coleccionRef.doc(KeyCodenew).set({
            habitacion: docus.habitacion,
            precio: docus.personasHab,
            persona: docus.precioPerDay,
            checkIn: docus.timin,
            checkOut: docus.timax
        })

        alert("Se ha procesado su solicitud")
    }

    return (
        <form onSubmit={submitHandler} className={Styles.contenedor}>
            <section >
                <div >
                    <label> Fecha check-In</label>
                    <DatePicker value={checkIn} onChange={(newvalue)=>changeCheckIn(newvalue)} />
                </div>
                <div>
                    <label> Fecha check-Out</label>
                    <DatePicker value={checkOut} onChange={changeCheckOut} />
                </div>
                <>
                    <p>{docus.habitacion}</p>
                    <p>{docus.personasHab}</p>
                    <p>{docus.precioPerDay}</p>
                    <p>{changeCheckIn2(Date(docus.timin))}</p>
                    <p>{docus.timax}</p>
                    {  ( checkIn2.getTime()< checkIn.getTime() )?(
                         <button >Enviar</button>):( <button disabled="true">Enviar</button>)}
                    
                </>


            </section>
        </form>
    )

}
//{doc.filter(searchingTerm(type)).map((doc1) => (
//    <div key={doc1.keyCode2}>
//        <h1>habitacion</h1>
//        <h3 name="habit" >{doc1.habitacion}</h3>
//        <img src="doc1.archivoUrl4" alt="" value={doc1.archivoUrl4} name="foto" />
//
//        <h1>Precio por día</h1>
//        <h3 name="prec" >{doc1.precioPerDay}</h3>
//
//
//        <h1>Personas por habitacion</h1>
//        <h3 name="persona" >{doc1.personasHab}</h3>
//        <hr />
//        <hr />
//        <h1>disponible desde </h1>
//        <h3 name="checkInya" > {doc1.timin}</h3>
//        <h1>hasta</h1>
//        <h3 name="checkOutya" > {doc1.timax}</h3>
//        {(Date.now(doc1.timin) < checkIn.getTime()) || (Date.now(doc1.timin) == checkIn.getTime()) && (Date.now(doc1.timax) == checkOut.getTime()) || (Date.now(doc1.timax) > checkOut.getTime()) ? (<button>Enviar</button>) : (<button disabled="true">Enviar</button>)}
//
//    </div>
//
//))}