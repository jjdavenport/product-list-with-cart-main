import { useTransition, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import confirmed from "../assets/icon-order-confirmed.svg";
import ModalItem from "./modal-item";

const Modal = ({ onClose, item, tablet }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    console.log(item);
  }, [item]);

  const backgroundTransitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 170, friction: 26 },
  });

  const dialogTransitions = useTransition(isOpen, {
    from: tablet ? { opacity: 0 } : { transform: "translateY(100%)" },
    enter: tablet ? { opacity: 1 } : { transform: "translateY(0%)" },
    leave: tablet ? { opacity: 0 } : { transform: "translateY(100%)" },
    config: { tension: 170, friction: 26 },
  });

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 310);
  };

  return (
    <>
      {backgroundTransitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
            />
          ),
      )}
      {dialogTransitions(
        (styles, item) =>
          item && (
            <div className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center md:items-center">
              <animated.dialog
                style={styles}
                className="pointer-events-auto z-50 flex w-full flex-col gap-6 rounded-b-none rounded-t-xl p-8 md:aspect-square md:w-5/12 md:rounded-lg"
                open
              >
                <img
                  className="w-2/12 md:w-1/12"
                  src={confirmed}
                  alt="Order Confirmed"
                />
                <div className="flex flex-col gap-2">
                  <span className="flex flex-col text-4xl font-bold text-roseC-900 md:flex-row md:gap-2">
                    Order <span>Confirmed</span>
                  </span>
                  <p className="text-roseC-500">We hope you enjoy your food!</p>
                </div>
                <div className="flex flex-1 flex-col gap-4 rounded-lg bg-roseC-50 p-4">
                  <ul className="flex divide-y-2">
                    <ModalItem item={item} />
                  </ul>
                  <div className="flex justify-between">
                    <span className="font-medium text-roseC-500">
                      Order total
                    </span>
                    <span className="text-2xl font-bold text-roseC-900">
                      $47.66
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-full rounded-full bg-redC p-3 text-white transition-colors duration-300 ease-in-out hover:bg-hoverButton"
                >
                  Start New Order
                </button>
              </animated.dialog>
            </div>
          ),
      )}
    </>
  );
};

export default Modal;
