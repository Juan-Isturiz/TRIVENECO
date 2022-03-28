import { useState, useEffect } from 'react'
import { db } from "../../utils/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
export default function Habitaciones(props) {
    const [hab, setHab] = useState()
    const { doc } = props
    useEffect(() => {
        try {
            db.collection('hoteles').doc(doc).collection("habitaciones").onSnapshot((hab) => {
                
                setHab(hab.docs.map((doc) => {return doc.data()  }))
                

            })
        } catch (e) {
            console.log(e.message)
        }
    }, [])
    return (
        <>
            {hab === null ? <></> :
                hab.map(habitacion => {
                    <>
                    {console.log(habitacion)}
                    <Link to={`/Reservation/${doc}/${habitacion.keyCode2}`} style={{ color: "red" }}>
                        {habitacion.habitacion}
                    </Link>
                    </>
                }

                )

            }
            {console.log(doc)}
        </>
    )
}
