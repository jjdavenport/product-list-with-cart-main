import cartIcon from "./assets/icon-add-to-cart.svg";

const Button = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="-mt-6 flex h-fit w-fit items-center justify-center gap-2 rounded-full bg-rose-50 px-4 py-2 hover:outline hover:outline-1 hover:outline-redC"
      >
        <img src={cartIcon} alt="" />
        Add to cart
      </button>
    </>
  );
};

export default Button;
