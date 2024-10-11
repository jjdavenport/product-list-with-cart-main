import confirmed from "./assets/icon-order-confirmed.svg";

const Modal = ({ onClose }) => {
  return (
    <>
      <dialog className="block rounded-lg p-4">
        <img src={confirmed} />
        <span>Order Confirmed</span>
        <p>We hope you enjoy your food!</p>
        <button onClick={onClose} className="rounded-full bg-redC text-white">
          Start New Order
        </button>
      </dialog>
    </>
  );
};

export default Modal;
