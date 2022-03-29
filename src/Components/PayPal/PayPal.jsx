import React, { useEffect, useRef,useState } from 'react'
import { useParams } from 'react-router-dom'
import {storage,db} from "../../utils/firebaseConfig";
import { v4 as uuidv4 } from 'uuid';

function searchingTerm(hotelid) {
    return function (x) {
        return x.keyCode2.includes(hotelid) || !hotelid;
    };
};

function Checkout() {

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
    
    const paypal = useRef() 

    useEffect(async () => {
        const docusList = await db.collection("reservas").get()
        setDocus(docusList.docs.map((doc) => doc.data()))
    }, [])

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: doc1.habitacion,
                                amount: {
                                    currency_code: "CAD",
                                    value: doc1.precioPerDay
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