import { useState } from "react";

const QuantityButton = ({ onClick }) => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const minus = () => {
    if (count === 0) {
      onClick();
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div className="flex h-fit w-fit items-center justify-between gap-10 rounded-full bg-redC px-4 py-2 text-white">
      <button
        onClick={minus}
        className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white hover:bg-white hover:stroke-redC"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="none"
          viewBox="0 0 10 2"
        >
          <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </button>
      <span>{count}</span>
      <button
        onClick={plus}
        className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white hover:bg-white hover:stroke-redC"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#fff"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default QuantityButton;
