import Button from "./button";
import QuantityButton from "./quantity-button";
import { useState } from "react";

const Product = ({ img, name, price, category }) => {
  const [button, setButton] = useState(false);
  const toggle = () => {
    setButton(!button);
  };
  return (
    <>
      <article>
        {button ? (
          <QuantityButton onClick={toggle} />
        ) : (
          <Button onClick={toggle} />
        )}
        <img src={img} />
        <span>{category}</span>
        <span>{name}</span>
        <span>{price}</span>
      </article>
    </>
  );
};

export default Product;
