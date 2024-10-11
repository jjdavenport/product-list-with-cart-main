import Button from "./button";
import QuantityButton from "./quantity-button";
import { useState } from "react";

const Product = ({ img, name, price, category, order }) => {
  const [button, setButton] = useState(false);
  const toggle = () => {
    setButton(!button);
  };

  const change = (quantity) => {
    order({ price }, quantity);
  };

  return (
    <>
      <article className="flex flex-col items-center gap-1">
        <img
          src={img}
          className={`${button && "outline outline-2 outline-redC"} rounded-lg`}
        />
        {button ? (
          <QuantityButton quantity={change} onClick={toggle} />
        ) : (
          <Button onClick={toggle} />
        )}
        <div className="flex w-full flex-col items-start gap-1">
          <span>{category}</span>
          <span>{name}</span>
          <span>{price}</span>
        </div>
      </article>
    </>
  );
};

export default Product;
