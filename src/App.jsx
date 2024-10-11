import Footer from "./components/footer";
import Header from "./components/header";
import data from "./components/assets/data.json";
import Product from "./components/product";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Cart from "./components/cart";
import EmptyCart from "./components/empty-cart";

function App() {
  const desktop = useMediaQuery({ minWidth: 1024 });
  const tablet = useMediaQuery({ minWidth: 768 });
  const [order, setOrder] = useState([]);
  const [modal, setModal] = useState(false);

  const reset = () => {
    setOrder([]);
    setModal(false);
  };

  const orderItems = () => {
    setOrder([]);
  };
  return (
    <>
      <div className="flex h-full min-h-screen flex-col gap-4">
        <div className="flex flex-col gap-4 p-4 md:flex-row">
          <div className="flex flex-col gap-4">
            <Header />
            <main className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
              {data.map((i, index) => (
                <Product
                  order={orderItems}
                  key={index}
                  img={
                    desktop
                      ? i.image.desktop
                      : tablet
                        ? i.image.tablet
                        : i.image.mobile
                  }
                  category={i.category}
                  name={i.name}
                  price={i.price}
                />
              ))}
            </main>
          </div>
          {order.length >= 0 ? (
            <Cart
              setModal={setModal}
              modal={modal}
              onClose={reset}
              order={order}
            />
          ) : (
            <EmptyCart />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
