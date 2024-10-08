import emptyCartImg from "./button-components/images/illustration-empty-cart.svg";

const EmptyCart = () => {
  return (
    <>
      <aside className="flex h-fit flex-col rounded-lg bg-roseC-50 p-4">
        <h2 className="text-2xl font-bold text-redC">Your Cart (0)</h2>
        <span className="flex flex-col items-center gap-2 font-bold text-roseC-500">
          <img src={emptyCartImg} />
          Your added items will appear here
        </span>
      </aside>
    </>
  );
};

export default EmptyCart;
