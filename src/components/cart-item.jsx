import icon from "./assets/icon-remove-item.svg";

const CartItem = ({ order }) => {
  return (
    <div className="flex justify-between">
      <div></div>
      <div>
        <img src={icon} />
      </div>
    </div>
  );
};

export default CartItem;
