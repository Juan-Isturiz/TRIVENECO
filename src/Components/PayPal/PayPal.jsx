import React, { useEffect, useRef,useState } from 'react'
import { useParams } from 'react-router-dom'
import {storage,db} from "../../utils/firebaseConfig";
import { v4 as uuidv4 } from 'uuid';


function Checkout(props) {
    
    const paypal = useRef() 

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "pene",
                                amount: {
                                    currency_code: "CAD",
                                    value: props.amount
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
    <div ref={paypal}></div>
  )
}

export default Checkout