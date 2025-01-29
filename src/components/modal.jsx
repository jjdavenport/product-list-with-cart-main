import { useTransition, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
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

  const total = order
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);

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
                className="pointer-events-auto z-50 flex max-h-screen w-full flex-col rounded-b-none rounded-t-xl outline-none ~sm/xl:~gap-6/8 ~sm/xl:~p-6/10 md:aspect-square md:max-h-screen md:w-6/12 md:max-w-screen-sm md:rounded-xl xl:w-5/12"
                open
              >
                <img className="w-2/12 md:w-1/12" src={confirmed} />
                <div className="flex flex-col ~sm/xl:~gap-4/6">
                  <span className="flex flex-col font-bold text-roseC-900 ~sm/xl:~text-3xl/5xl ~sm/xl:~gap-2/3 md:flex-row">
                    Order <span>Confirmed</span>
                  </span>
                  <p className="text-roseC-500">We hope you enjoy your food!</p>
                </div>
                <div className="flex flex-1 flex-col justify-between rounded-lg bg-roseC-50 ~sm/xl:~pl-4/8">
                  <ul className="flex max-h-[15rem] flex-col overflow-y-auto scrollbar scrollbar-track-roseC-100 scrollbar-thumb-roseC-900 ~sm/xl:~py-4/0 ~sm/xl:~pr-4/8 md:h-[17rem] md:max-h-none lg:h-[20rem]">
                    {order.map((i, index) => (
                      <ModalItem key={index} item={i} />
                    ))}
                  </ul>
                  <div className="flex items-center justify-between ~sm/xl:~pt-4/2 ~sm/xl:~pr-4/8 ~sm/xl:~pb-4/8">
                    <span className="text-roseC-500 ~sm/xl:~text-sm/base">
                      Order total
                    </span>
                    <span className="font-bold text-roseC-900 ~sm/xl:~text-xl/3xl">
                      ${total}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-full rounded-full bg-redC text-white transition-colors duration-300 ease-in-out ~sm/xl:~p-3/4 hover:bg-hoverButton"
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

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  order: PropTypes.array.isRequired,
  tablet: PropTypes.bool.isRequired,
};

export default Modal;
