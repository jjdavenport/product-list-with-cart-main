import { useState, useEffect } from "react";

const useProducts = ({ tablet }) => {
  const [order, setOrder] = useState([]);
  const [modal, setModal] = useState(false);

  const reset = () => {
    setOrder([]);
    setModal(false);
  };

  useEffect(() => {
    !tablet && modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [modal, tablet]);

  const [product, setProduct] = useState({
    id: new Date(),
    img: "",
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
