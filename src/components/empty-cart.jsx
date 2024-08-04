import emptyCartImg from "./assets/images/illustration-empty-cart.svg"

const EmptyCart = () => {
  return (
    <>
      <section className="flex flex-col bg-roseC-50 rounded-lg p-4">
      <h2 className="text-2xl font-bold text-redC">Your Cart</h2>
      <span className="flex flex-col items-center font-bold text-roseC-500 gap-2">
      <img src={emptyCartImg} className="l" alt="" />
      Your added items will appear here</span>
      </section>
    </>
  );
};

export default EmptyCart;
