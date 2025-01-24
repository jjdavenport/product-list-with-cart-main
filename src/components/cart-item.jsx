import icon from "../assets/icon-remove-item.svg";

const CartItem = ({ item, quantity, price }) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span>{item}</span>
        <div>
          <span>{quantity}</span>
          <span>@ {price}</span>
          <span>{price * quantity}</span>
        </div>
      </div>
      <button>
        <img src={icon} />
      </button>
    </div>
  );
};

export default CartItem;
