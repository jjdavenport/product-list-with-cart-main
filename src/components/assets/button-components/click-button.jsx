import { useState } from "react";

const ClickButton = () => {
    const [count, setCount] = useState(0)
    const plus = () =>{
        setCount((prevCount) => prevCount +1 )
    }
    const minus = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount -1 : 0))
    }
    return (
      <div className="flex absolute gap-10 -bottom-4 px-4 py-2 w-fit h-fit justify-between items-center rounded-full bg-redC text-white">
        <button
        onClick={minus}
        className="hover:stroke-redC hover:bg-white rounded-full h-5 w-5 border-white border-2 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
            <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
          </svg>
        </button>
        <span>{count}</span>
        <button 
        onClick={plus}
        className="hover:stroke-redC hover:bg-white rounded-full flex h-5 w-5 justify-center  border-white border-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
            <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
          </svg>
        </button>
      </div>
    );
  };
  
  export default ClickButton;
  