import Footer from "./components/footer";
import Header from "./components/header";
import "./App.css";
import Products from "./components/products"

function App() {
  return (
    <>
      <main className="bg-roseC-100 font-custom flex flex-col p-4 gap-4">
        <Header />
        <Products />
        <Footer />
      </main>
    </>
  );
}

export default App;
