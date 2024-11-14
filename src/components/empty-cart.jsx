import emptyCartImg from "./assets/illustration-empty-cart.svg";

const EmptyCart = () => {
  return (
    <>
      <aside className="flex flex-col rounded-lg bg-white px-6 pb-10 pt-6 ~sm/md:~gap-10/2 md:h-fit md:w-[600px]">
        <h2 className="flex text-2xl font-bold text-redC">Your Cart (0)</h2>
        <div className="flex flex-1 flex-col items-center justify-center font-bold ~sm/md:~gap-4/2">
          <img src={emptyCartImg} className="w-1/2 object-contain" />
          <span className="whitespace-nowrap text-sm font-semibold text-roseC-500">
            Your added items will appear here
          </span>
        </div>
      </aside>
    </>
  );
};

export default EmptyCart;
