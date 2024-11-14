import greenIcon from "./assets/icon-carbon-neutral.svg";
import Modal from "./modal";
import CartItem from "./cart-item";

const Cart = ({ modal, setModal, onClose, order }) => {
  return (
    <>
      <section className="flex h-fit flex-col gap-2 rounded-lg bg-roseC-50 p-4">
        <h2 className="text-2xl font-bold text-redC">
          Your Cart {order.quantity}
        </h2>
        {order.length > 0 && <CartItem />}
        <div className="flex justify-between">
          <span>Order total</span>
          <span></span>
        </div>
        <span className="flex justify-center gap-2 rounded-lg bg-roseC-100 p-4 font-semibold text-roseC-500">
          <img src={greenIcon} />
          This is a carbon neutral delivery
        </span>
        <button
          onClick={() => setModal(true)}
          className="h-10 rounded-full bg-redC text-white hover:bg-roseC-900"
        >
          Confirm order
        </button>
      </section>
      {modal && <Modal onClose={onClose} />}
    </>
  );
};

export default Cart;
