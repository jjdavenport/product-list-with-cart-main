import emptyCartImg from "./assets/illustration-empty-cart.svg";

const EmptyCart = () => {
  return (
    <>
      <aside className="flex h-fit flex-col gap-2 rounded-lg bg-roseC-50 p-4">
        <h2 className="flex text-2xl font-bold text-redC">Your Cart (0)</h2>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 font-bold text-roseC-500">
          <img src={emptyCartImg} className="w-1/2 object-contain" />
          <span>Your added items will appear here</span>
        </div>
      </aside>
    </>
  );
};

export default EmptyCart;
