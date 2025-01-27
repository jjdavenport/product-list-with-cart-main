const QuantityButton = ({ onIncrement, onDecrement, quantity }) => {
  return (
    <div className="z-10 flex h-fit w-[170px] items-center justify-between rounded-full bg-redC px-4 py-[10px]">
      <button
        onClick={onDecrement}
        className="group flex h-5 w-5 items-center justify-center rounded-full border-2 border-roseC-50 transition-colors duration-300 ease-in-out hover:bg-roseC-50 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          viewBox="0 0 10 2"
          className="fill-roseC-50 transition-colors duration-300 ease-in-out group-hover:fill-redC"
        >
          <path d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </button>
      <span className="text-roseC-50">{quantity}</span>
      <button
        onClick={onIncrement}
        className="group flex h-5 w-5 items-center justify-center rounded-full border-2 border-roseC-50 transition-colors duration-300 ease-in-out hover:bg-roseC-50 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="fill-roseC-50 transition-colors duration-300 ease-in-out group-hover:fill-redC"
        >
          <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
        </svg>
      </button>
    </div>
  );
};

export default QuantityButton;
