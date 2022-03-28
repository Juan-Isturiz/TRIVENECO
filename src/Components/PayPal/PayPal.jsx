import React, { useEffect, useRef } from 'react'

function Checkout() {
    
    const paypal = useRef() 

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Nice cock bro",
                                amount: {
                                    currency_code: "CAD",
                                    value: 650.0
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