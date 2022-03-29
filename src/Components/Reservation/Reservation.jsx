import React, { useEffect, useState } from 'react'
import { DatePicker } from "@material-ui/pickers"
import { useParams } from 'react-router-dom'
import { storage, db, date } from "../../utils/firebaseConfig";
import Styles from "./Reservation.module.css"
import { v4 as uuidv4 } from 'uuid';
import Button from '../UI/Button/Button'
import PaypalCheckoutButton from '../Checkout/Checkout';
import Checkout from '../PayPal/PayPal';

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
    const sacarMes = (a) => {
        switch (a) {
            case 'January': return 0;
            case 'February': return 1;
            case 'March': return 2;
            case 'April': return 3;
            case 'May': return 4;
            case 'June': return 5;
            case 'July': return 6;
            case 'August': return 7;
            case 'September': return 8;
            case 'October': return 9;
            case 'November': return 10;
            case 'December': return 11

        }
    }
    const sacarDia = (dia) => {
        let date
        let aux
        switch (dia) {

            case dia.includes('st'):
                aux = dia.split('s')
                return parseInt(aux[0])
            case dia.includes('nd'):
                aux = dia.split('n')
                return parseInt(aux[0])
            case dia.includes('rd'):
                aux = dia.split('r')
                return parseInt(aux[0])
            default:
                aux = dia.split('t')
                return parseInt(aux[0])

        }
    }
    const compareDates = (dateDBin, dateDBout, dateBookin, dateBookout) => {
        if (typeof (dateDBin) === 'string' && typeof (dateDBout) === 'string') {
            let [monthIn, dateIn] = dateDBin.split(' ')
            let [monthOut, dateOut] = dateDBout.split(' ')

            monthIn = sacarMes(monthIn)
            monthOut = sacarMes(monthOut)
            dateOut = sacarDia(dateOut)
            dateIn = sacarDia(dateIn)
            console.log(`meses ${(dateBookin.getMonth() >= monthIn && dateBookin.getMonth() <= monthOut) && (dateBookout.getMonth() <= monthOut && dateBookout.getMonth() >= monthIn)}`)
            if ((dateBookin.getMonth() >= monthIn && dateBookin.getMonth() <= monthOut) && (dateBookout.getMonth() <= monthOut && dateBookout.getMonth() >= monthIn) && dateBookin.getMonth() <= dateBookout.getMonth()) {
                if (dateBookin.getMonth() !== monthIn && dateBookout.getMonth() !== monthOut) {
                    return true

                } else if (dateBookin.getMonth() === dateBookout.getMonth()) {
                    return (
                        dateBookin.getDate() >= dateIn &&
                        dateBookin.getDate() <= dateOut &&
                        dateBookout.getDate() <= dateOut &&
                        dateBookout.getDate() >= dateIn &&
                        dateBookout.getDate() >= dateBookin.getDate()
                    )
                } else {
                    let state
                    if (dateBookin.getMonth() === monthIn) {
                        state = dateBookin.getDate() >= dateIn
                    }
                    if (dateBookout.getMonth() === monthOut) {
                        dateBookout.getDate() <= dateOut
                    }
                    return state

                }
            }
            return false
        }
    }

    const id = useParams().id

    const type = useParams().type
    const KeyCodenew = uuidv4();
    const [docus, setDocus] = useState([])
    const [checkIn, changeCheckIn] = useState(new Date())
    const [checkOut, changeCheckOut] = useState(new Date())
    const [pay, setPay]= useState(false)


    useEffect(async () => {
        try {
            const docusList = await db.collection("hoteles").doc(id).collection('habitaciones').doc(type).get()
            setDocus(docusList.data())
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
    const Checkout =()=>{
        setPay(true)
    }
    return (
        <form onSubmit={submitHandler} className={Styles.contenedor}>
            <section >
                <div >
                    <label> Fecha check-In</label>
                    <DatePicker value={checkIn} onChange={(newvalue) => changeCheckIn(newvalue)} />
                </div>
                <div>
                    <label> Fecha check-Out</label>
                    <DatePicker value={checkOut} onChange={changeCheckOut} />
                </div>
                <>
                    <p>{docus.habitacion}</p>
                    <p>{docus.personasHab}</p>
                    <p>{docus.precioPerDay}</p>
                    <p>{docus.timin}</p>
                    <p>{docus.timax}</p>
                    <Button
                        type='submit'
                        onClick= {Checkout}
                        disabled={
                            !compareDates(docus.timin, docus.timax, checkIn, checkOut)
                        }
                    >
                        {console.log(compareDates(docus.timin, docus.timax, checkIn, checkOut))}
                        Enviar
                    </Button>

                </>

                      {pay && <PaypalCheckoutButton/>}  
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




//{ console.log(compareDates(docus.timin, docus.timax, checkIn, checkOut)) }
//{ console.log((checkIn)) }
//{ console.log((docus.timax.split(' '))) }
//{ console.log(checkOut) }
//{ console.log(`checkin  ${Date.now(docus.timin) <= checkIn.getTime()}`) }
//{ console.log(`checkout ${docus.timax >= checkOut.getTime()}`) }        (dateBookin.getMonth() >= monthIn && dateBookin.getMonth() <= monthOut) && (dateBookout.getMonth() <= monthOut && dateBookout.getMonth() >= monthIn)