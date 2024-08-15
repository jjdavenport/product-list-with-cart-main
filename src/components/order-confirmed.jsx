import Confirmed from "./assets/button-components/images/icon-order-confirmed.svg"
import { useState } from "react"

const OrderConfirmed = () => {
    const [popup, setPopup] = useState(true)
    const click = () => {
        setPopup(true)
    }
    return (
        <>
        {popup (
   <dialog>
   <img src={Confirmed} />
   <span>Order Confirmed</span>
   <p>We hope you enjoy your food!</p>
   <button
   onClick={click}
   className="rounded-full text-white bg-redC">Start New Order</button>
</dialog>)}
 </>
    )
}

export default OrderConfirmed