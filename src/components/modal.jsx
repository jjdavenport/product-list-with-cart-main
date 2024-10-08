import confirmed from "./button-components/images/icon-order-confirmed.svg";

const Modal = ({ close }) => {
  return (
    <>
      <dialog className="block rounded-lg p-4">
        <img src={confirmed} />
        <span>Order Confirmed</span>
        <p>We hope you enjoy your food!</p>
        <button
          onClick={() => close(false)}
          className="rounded-full bg-redC text-white"
        >
          Start New Order
        </button>
      </dialog>
    </>
  );
};

export default Modal;
