import greenIcon from "./assets/button-components/images/icon-carbon-neutral.svg"
import OrderConfirmed from "./order-confirmed"
import { useState } from "react"

const Cart = () => {
    const [button, setButton] = useState()
    const click = () => {
        setButton()
    }
    return (
        <>
        <section className="p-4 bg-roseC-50 flex flex-col h-fit rounded-lg gap-2">
        <h2 className="text-redC font-bold text-2xl">Your Cart
        </h2>
        <div className="flex justify-between"><span>Order total</span><span></span></div>
        <span className="bg-roseC-100 flex rounded-lg p-4 justify-center gap-2 text-roseC-500 font-semibold"><img src={greenIcon} alt="" />This is a carbon neutral delivery</span>
        <button
        onClick={click}
        className="rounded-full text-white bg-redC h-10 hover:bg-roseC-900">Confirm order</button>
        </section>
        </>
    )
}

export default Cart