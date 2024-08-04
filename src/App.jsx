import Footer from "./components/footer";
import Header from "./components/header";
import Desert from "./components/deserts";
import EmptyCart from "./components/empty-cart"
import Cart from "./components/cart"
import "./App.css";
import ClickButton from "./components/click-button";
import Button from "./components/button"

function App() {
  return (
    <>
      <main className="bg-roseC-100 h-screen w-screen font-custom flex flex-col p-4 gap-2">
        <Header />
        <Desert />
        <EmptyCart />
        <Cart />
        <ClickButton />
        <Button />
        <Footer />
      </main>
    </>
  );
}

export default App;
