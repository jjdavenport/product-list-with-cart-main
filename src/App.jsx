import Footer from "./components/footer";
import Header from "./components/header";
import data from "./components/assets/data.json";
import Product from "./components/product";
import { useMediaQuery } from "react-responsive";

function App() {
  const tablet = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <div>
        <Header />
        {data.map((i, index) => (
          <Product
            key={index}
            img={tablet ? i.image.desktop : i.image.tablet}
            category={i.category}
            name={i.name}
            price={i.price}
          />
        ))}
        <Footer />
      </div>
    </>
  );
}

export default App;
