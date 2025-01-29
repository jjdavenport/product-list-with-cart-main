import icon from "../assets/icon-carbon-neutral.svg";
import CartItem from "./cart-item";

const Cart = ({ onClick, order, onDelete }) => {
  const totalItems = order.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = order
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);
  return (
    <>
      <aside className="flex h-fit min-w-[22rem] flex-col gap-4 rounded-xl bg-white px-8 py-6">
        <h2 className="text-2xl font-bold text-redC">
          Your Cart ({totalItems})
        </h2>
        <ul className="flex flex-col gap-2 divide-y divide-roseC-100 border-b border-b-roseC-100">
          {order.map((i, index) => (
            <CartItem onClick={onDelete} key={index} item={i} />
          ))}
        </ul>
        <div className="flex items-center justify-between text-roseC-900">
          <span className="text-roseC-500">Order total</span>
          <span className="text-2xl font-bold">${totalPrice}</span>
        </div>
        <span className="flex justify-center gap-1 whitespace-nowrap rounded-lg bg-roseC-50 px-10 py-4 text-sm font-semibold text-roseC-500">
          <img src={icon} />
          This is a <span className="text-roseC-900">carbon neutral</span>
          delivery
        </span>
        <button
          onClick={onClick}
          className="rounded-full bg-redC p-3 text-white transition-colors duration-300 ease-in-out hover:bg-hoverButton"
        >
          Confirm order
        </button>
      </aside>
    </>
  );
};

export default Cart;
