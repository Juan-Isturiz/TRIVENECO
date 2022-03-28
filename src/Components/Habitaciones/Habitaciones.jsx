import { useState, useEffect } from 'react'
import { db } from "../../utils/firebaseConfig";
import { Link } from "react-router-dom";
export default function Habitaciones(props) {
    const [hab, setHab] = useState([{
        habitacion: "",
        keyCode2: null
    }])
    const { doc } = props
    useEffect(() => {
        try {
            db.collection('hoteles').doc(doc).collection("habitaciones").onSnapshot((hab) => {

                setHab(hab.docs.map((doc) => { return doc.data() }))


            })
        } catch (e) {
            console.log(e.message)
        }
    }, [])
    return (
        <div>
            {hab === null ? <></> :
                hab.map(cualto => {
                    return (
                        <>
                        <Link to={`/Reservation/${doc}/${cualto.keyCode2}`} style={{ color: "red" }}>
                            {cualto.habitacion}
                        </Link>
                        <br/>
                        </>
                    )
                }

                )

            }
            {console.log(doc)}
        </div>
    )
}

//
//
//