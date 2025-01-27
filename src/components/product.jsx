import Button from "./button";
import QuantityButton from "./quantity-button";
import { useState } from "react";

const Product = ({
  img,
  name,
  price,
  category,
  quantity,
  decrement,
  increment,
}) => {
  const [button, setButton] = useState(quantity);

  const toggle = () => {
    setButton(!button);
  };

  const handleIncrement = () => {
    increment({ name, price, category, img });
    setButton(true);
  };

  const handleDecrement = () => {
    decrement(name);
    if (quantity === 0) setButton(false);
  };

  return (
    <>
      <li className="flex flex-col items-center ~sm/md:~gap-2/0">
        <img
          src={img}
          className={`${
            button ? "outline-offset-0 outline-redC" : "outline-transparent"
          } rounded-lg object-cover object-center outline outline-2 transition-all duration-300 ease-in-out`}
        />
        <div className="relative flex h-12 w-full justify-center ~sm/md:~-mt-8/6">
          <div
            className={`absolute transition-all duration-300 ease-in-out ${
              button ? "z-10 scale-90 opacity-0" : "z-20 scale-100 opacity-100"
            }`}
          >
            <Button onClick={toggle} />
          </div>
          <div
            className={`absolute transition-all duration-300 ease-in-out ${
              button ? "z-20 scale-100 opacity-100" : "z-10 scale-90 opacity-0"
            }`}
          >
            <QuantityButton
              quantity={quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start">
          <span className="text-sm text-roseC-400">{category}</span>
          <span className="whitespace-nowrap font-semibold text-roseC-900">
            {name}
          </span>
          <span className="font-semibold text-redC">${price.toFixed(2)}</span>
        </div>
      </li>
    </>
  );
};

export default Product;
