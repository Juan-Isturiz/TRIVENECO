import{useState} from "react"
import styles from "./Checkout.module.css"
import Checkout from "../PayPal/PayPal"

const PaypalCheckoutButton = (props) =>{
   const [checkout, setCheckOut] = useState(false) 
   
    return ( 
        <div className={styles.Checkoutbtn}>
            {checkout ? (
                <Checkout amount={props.amount}/> 
            ) : (
                <button onClick = {() => {
                    setCheckOut(true)
                }}>
                    Checkout
                </button>
            )}
        </div>

    )
}

export default PaypalCheckoutButton