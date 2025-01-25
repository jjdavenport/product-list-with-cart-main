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
  const { order, modal, setModal, reset, product, setProduct } = useProducts({
    tablet,
  });
  return (
    <>
      <div className="flex h-full min-h-screen flex-col bg-roseC-50 ~sm/md:~gap-4/0">
        <div className="flex flex-1 flex-col gap-8 text-base ~sm/xl:~px-4/28 ~sm/xl:~py-4/20 md:flex-row">
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
          {order.length > -1 ? (
            <Cart onClick={() => setModal(true)} active={modal} order={order} />
          ) : (
            <EmptyCart />
          )}
          {modal && <Modal tablet={tablet} item={order} onClose={reset} />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
