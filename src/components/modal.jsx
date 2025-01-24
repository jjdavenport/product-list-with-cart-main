import confirmed from "../assets/icon-order-confirmed.svg";
import ModalItem from "./modal-item";

const Modal = ({ onClose, total, thumbnail, quantity, item, price }) => {
  return (
    <>
      <dialog className="block rounded-lg p-4">
        <div className="flex flex-col">
          <img src={confirmed} />
          <span>Order Confirmed</span>
          <p>We hope you enjoy your food!</p>
        </div>
        <div>
          <ModalItem
            thumbnail={thumbnail}
            quantity={quantity}
            item={item}
            price={price}
          />
          <div className="flex justify-between">
            <span>Order total</span>
            <span>{total}</span>
          </div>
        </div>
        <button onClick={onClose} className="rounded-full bg-redC text-white">
          Start New Order
        </button>
      </dialog>
    </>
  );
};

export default Modal;
