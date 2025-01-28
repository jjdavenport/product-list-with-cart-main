import { useMediaQuery } from "react-responsive";
import useProducts from "./hooks/useProducts";
import Footer from "./components/footer";
import Header from "./components/header";
import data from "./assets/data.json";
import Product from "./components/product";
import Cart from "./components/cart";
import EmptyCart from "./components/empty-cart";
import Modal from "./components/modal";

function App() {
  const desktop = useMediaQuery({ minWidth: 1024 });
  const tablet = useMediaQuery({ minWidth: 768 });
  const {
    order,
    modal,
    setModal,
    reset,
    incrementOrder,
    decrementOrder,
    deleteOrder,
    buttons,
    setButtons,
  } = useProducts({
    tablet,
  });
  return (
    <>
      <div className="flex h-full min-h-screen flex-col bg-roseC-50 ~sm/md:~gap-4/0">
        <div className="flex flex-1 flex-col gap-8 text-base ~sm/xl:~px-4/28 ~sm/xl:~py-4/20 md:flex-row">
          <div className="flex flex-col gap-8">
            <Header />
            <main>
              <ul className="flex flex-col gap-6 md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {data.map((i, index) => {
                  const orderItem = order.find((item) => item.name === i.name);
                  const quantity = orderItem ? orderItem.quantity : 0;
                  return (
                    <Product
                      key={index}
                      img={
                        desktop
                          ? i.image.desktop
                          : tablet
                            ? i.image.tablet
                            : i.image.mobile
                      }
                      thumbnail={i.image.thumbnail}
                      category={i.category}
                      name={i.name}
                      quantity={quantity}
                      price={i.price}
                      increment={incrementOrder}
                      decrement={decrementOrder}
                      onDelete={deleteOrder}
                      button={buttons[i.name] || false}
                      setButton={(state) =>
                        setButtons((prev) => ({
                          ...prev,
                          [i.name]: state,
                        }))
                      }
                    />
                  );
                })}
              </ul>
            </main>
          </div>
          {order.length > 0 ? (
            <Cart
              onDelete={deleteOrder}
              onClick={() => setModal(true)}
              active={modal}
              order={order}
            />
          ) : (
            <EmptyCart />
          )}
          {modal && <Modal tablet={tablet} order={order} onClose={reset} />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
