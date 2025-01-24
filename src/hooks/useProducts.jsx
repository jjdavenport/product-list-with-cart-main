import { useState } from "react";

const useProducts = () => {
  const [order, setOrder] = useState([]);
  const [modal, setModal] = useState(false);
  const reset = () => {
    setOrder([]);
    setModal(false);
  };

  const [product, setProduct] = useState({
    item: "",
    quantity: "",
    price: "",
  });

  return {
    order,
    modal,
    setModal,
    reset,
    product,
    setProduct,
  };
};

export default useProducts;
