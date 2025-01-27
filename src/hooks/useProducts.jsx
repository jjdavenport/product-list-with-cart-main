import { useState, useEffect } from "react";

const useProducts = ({ tablet }) => {
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);

  const incrementOrder = (product) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.name === product.name);
      if (existingItem) {
        return prevOrder.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevOrder, { ...product, quantity: 1 }];
    });
  };

  const decrementOrder = (productName) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const reset = () => {
    setOrder([]);
    setModal(false);
  };

  useEffect(() => {
    !tablet && modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [modal, tablet]);

  return {
    order,
    modal,
    setModal,
    reset,
    decrementOrder,
    incrementOrder,
  };
};

export default useProducts;
