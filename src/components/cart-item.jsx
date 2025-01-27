import icon from "../assets/icon-remove-item.svg";

const CartItem = ({ item, onClick }) => {
  return (
    <li className="flex items-center justify-between py-2">
      <div className="flex flex-col">
        <span className="font-semibold text-roseC-900">{item.name}</span>
        <div className="flex gap-4">
          <span className="font-medium text-redC">{item.quantity}x</span>
          <div className="flex gap-2">
            <span className="text-roseC-300">@ ${item.price}</span>
            <span className="font-medium text-roseC-500">$8</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => onClick(item.name)}
        className="flex h-4 w-4 items-center justify-center rounded-full outline outline-1 outline-roseC-400"
      >
        <img className="object-contain" src={icon} />
      </button>
    </li>
  );
};

export default CartItem;
