import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { storage, db } from "../../utils/firebaseConfig";
import { v4 as uuidv4 } from 'uuid';


<<<<<<< HEAD
function Checkout() {
    const [docus, setDocus] = useState([])

    useEffect(async () => {
        try {
            const docusList = await db.collection("hoteles").doc(id).collection('habitaciones').doc(type).get()
            setDocus(docusList.data())
        } catch (e) {
            console.log(e.message)
        }
    }, [])

=======
function Checkout(props) {
    
    const paypal = useRef() 

>>>>>>> origin/style
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
<<<<<<< HEAD
                                description: docus.habitacion,
                                amount: {
                                    currency_code: "CAD",
                                    value: docus.precioPerDay
=======
                                description: "pene",
                                amount: {
                                    currency_code: "CAD",
                                    value: props.amount
>>>>>>> origin/style
                                },
                            },
                        ],
                    })
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture()
                    console.log(order)
                },
                onError: (err) => {
                    console.log(err)
                }
            })
            .render(paypal.current)
    }, [])


    return (
        <div ref={paypal}>PayPal</div>
    )
}

export default Checkout