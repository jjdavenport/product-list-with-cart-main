import confirmed from "../assets/icon-order-confirmed.svg";
import ModalItem from "./modal-item";

const Modal = ({ onClose, item }) => {
  return (
    <>
      <div className="fixed inset-0 z-40 flex h-full min-h-screen w-full items-end justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out md:items-center">
        <dialog className="z-50 flex w-full flex-col gap-6 rounded-b-none rounded-t-xl p-8 md:w-5/12 md:rounded-lg">
          <img className="w-2/12 md:w-1/12" src={confirmed} />
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-bold text-roseC-900">
              Order Confirmed
            </span>
            <p className="text-roseC-500">We hope you enjoy your food!</p>
          </div>
          <div className="flex flex-col gap-4 bg-roseC-50 p-4">
            <ul className="divide-y-2">
              <ModalItem item={item} />
            </ul>
            <div className="flex justify-between text-roseC-900">
              <span>Order total</span>
              <span className="text-2xl font-bold">$47.66</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full rounded-full bg-redC p-2 text-white transition-colors duration-300 ease-in-out hover:bg-hoverButton"
          >
            Start New Order
          </button>
        </dialog>
      </div>
    </>
  );
};

export default Modal;
