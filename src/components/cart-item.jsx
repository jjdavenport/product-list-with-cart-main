const CartItem = ({ item, onClick }) => {
  const total = (item.quantity * item.price).toFixed(2);
  return (
    <li className="flex items-center justify-between py-2">
      <div className="flex flex-col">
        <span className="font-semibold text-roseC-900">{item.name}</span>
        <div className="flex gap-4">
          <span className="font-medium text-redC">{item.quantity}x</span>
          <div className="flex gap-2">
            <span className="text-roseC-300">@ ${item.price.toFixed(2)}</span>
            <span className="font-medium text-roseC-500">${total}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => onClick(item.name)}
        className="group flex h-4 w-4 items-center justify-center rounded-full outline outline-1 outline-roseC-300 transition-all duration-300 ease-in-out hover:scale-105 hover:outline-roseC-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            className="fill-roseC-300 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:fill-roseC-400"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </li>
  );
};

export default CartItem;
