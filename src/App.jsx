import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import data from "./assets/data.json";
import Product from "./components/product";
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

  return (
    <>
      <div className="flex h-full min-h-screen flex-col bg-roseC-50 ~sm/md:~gap-4/0">
        <div className="flex flex-1 flex-col gap-8 text-base ~sm/xl:~px-4/28 ~sm/xl:~py-4/20 md:flex-row">
          {tablet ? (
            <>
              <div className="flex flex-col gap-8">
                <Header />
                <main className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
                  {data.map((i, index) => (
                    <Product
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
            </>
          ) : (
            <>
              <Header />
              <main className="flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
                {data.map((i, index) => (
                  <Product
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
            </>
          )}
          {order.length > 0 ? (
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
