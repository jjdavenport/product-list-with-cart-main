import emptyCartImg from "./assets/button-components/images/illustration-empty-cart.svg"

const EmptyCart = () => {
  return (
    <>
      <aside className="flex flex-col h-fit bg-roseC-50 rounded-lg p-4">
      <h2 className="text-2xl font-bold text-redC">Your Cart (0)</h2>
      <span className="flex flex-col items-center font-bold text-roseC-500 gap-2">
      <img src={emptyCartImg} />
      Your added items will appear here</span>
      </aside>
    </>
  );
};

export default EmptyCart;
