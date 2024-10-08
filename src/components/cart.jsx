import greenIcon from "./button-components/images/icon-carbon-neutral.svg";
import { useState } from "react";
import Modal from "./modal";

const Cart = () => {
  const [modal, setModal] = useState(false);
  const open = () => setModal(true);
  return (
    <>
      <section className="flex h-fit flex-col gap-2 rounded-lg bg-roseC-50 p-4">
        <h2 className="text-2xl font-bold text-redC">Your Cart</h2>
        <div className="flex justify-between">
          <span>Order total</span>
          <span></span>
        </div>
        <span className="flex justify-center gap-2 rounded-lg bg-roseC-100 p-4 font-semibold text-roseC-500">
          <img src={greenIcon} alt="" />
          This is a carbon neutral delivery
        </span>
        <button
          onClick={open}
          className="h-10 rounded-full bg-redC text-white hover:bg-roseC-900"
        >
          Confirm order
        </button>
      </section>
      {modal && <Modal close={setModal} />}
    </>
  );
};

export default Cart;
