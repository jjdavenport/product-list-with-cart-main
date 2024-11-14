import cartIcon from "./assets/icon-add-to-cart.svg";

const Button = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="z-10 flex h-fit w-fit items-center justify-center gap-2 rounded-full bg-white px-7 py-[10px] font-semibold outline outline-1 outline-roseC-400 transition-colors duration-300 ease-in-out hover:text-redC hover:outline hover:outline-redC"
      >
        <img src={cartIcon} />
        Add to cart
      </button>
    </>
  );
};

export default Button;
