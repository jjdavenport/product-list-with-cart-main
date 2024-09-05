import confirmed from "./assets/button-components/images/icon-order-confirmed.svg"

const Modal = ({ close }) => {
    return (
    <>
   <dialog className="block p-4 rounded-lg">
   <img src={confirmed} />
   <span>Order Confirmed</span>
   <p>We hope you enjoy your food!</p>
   <button
   onClick={() => close(false)}
   className="rounded-full text-white bg-redC">Start New Order</button>
    </dialog>
    </> 
    )}

export default Modal