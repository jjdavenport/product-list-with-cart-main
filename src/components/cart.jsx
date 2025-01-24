import icon from "../assets/icon-carbon-neutral.svg";
import Modal from "./modal";
import CartItem from "./cart-item";

const Cart = ({ modal, onClick, onClose, order }) => {
  return (
    <>
      <section className="flex h-fit flex-col gap-2 rounded-lg bg-white p-4">
        <h2 className="text-2xl font-bold text-redC">
          Your Cart ({!order ? order.items : 7})
        </h2>
        {order.map((i, index) => (
          <CartItem
            key={index}
            item={i.item}
            quantity={i.quantity}
            price={i.price}
          />
        ))}
        <div className="flex items-center justify-between text-roseC-900">
          <span>Order total</span>
          <span className="text-2xl font-bold">$47.66</span>
        </div>
        <span className="flex justify-center gap-2 whitespace-nowrap rounded-lg bg-roseC-50 p-4 font-semibold text-roseC-500">
          <img src={icon} />
          This is a <span className="text-roseC-900">carbon neutral</span>
          delivery
        </span>
        <button
          onClick={onClick}
          className="h-10 rounded-full bg-redC text-white transition-colors duration-300 ease-in-out hover:bg-hoverButton"
        >
          Confirm order
        </button>
      </section>
      {modal && <Modal item={order} onClose={onClose} />}
    </>
  );
};

export default Cart;
