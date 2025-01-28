import { useTransition, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import confirmed from "../assets/icon-order-confirmed.svg";
import ModalItem from "./modal-item";

const Modal = ({ onClose, order, tablet }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

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
                className="pointer-events-auto z-50 flex w-full flex-col gap-6 rounded-b-none rounded-t-xl outline-none ~sm/xl:~p-6/8 md:aspect-square md:max-h-screen md:w-5/12 md:max-w-screen-sm md:rounded-lg"
                open
              >
                <img className="w-2/12 md:w-1/12" src={confirmed} />
                <div className="flex flex-col gap-2">
                  <span className="flex flex-col font-bold text-roseC-900 ~sm/xl:~text-3xl/4xl md:flex-row md:gap-2">
                    Order <span>Confirmed</span>
                  </span>
                  <p className="text-roseC-500">We hope you enjoy your food!</p>
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4 rounded-lg bg-roseC-50 ~sm/xl:~p-2/4">
                  <ul className="flex max-h-96 flex-col gap-2 divide-y divide-roseC-100">
                    {order.map((i, index) => (
                      <ModalItem key={index} item={i} />
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-roseC-500 ~sm/xl:~text-sm/base">
                      Order total
                    </span>
                    <span className="font-bold text-roseC-900 ~sm/xl:~text-xl/2xl">
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
