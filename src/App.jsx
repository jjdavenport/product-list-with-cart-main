import Footer from "./components/footer";
import Header from "./components/header";
import Products from "./components/products";
import EmptyCart from "./components/empty-cart";
import Cart from "./components/cart";
import { useMediaQuery } from "react-responsive";

function App() {
   const tablet = useMediaQuery({ minWidth: 768 });

   return (
      <>
         {tablet ? (
            <>
               <main className="bg-roseC-100 font-custom flex gap-4">
                <div>
                  <section className="flex gap-2 p-4">
                     <div className="flex flex-col gap-2">
                        <Header />
                        <div className="grid md:grid-cols-2 gap-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-3">
                        <Products />
                        </div>
                     </div>
                     <EmptyCart />
                  </section>
               <Footer />
               </div>
               </main>
            </>
         ) : (
            <main className="bg-roseC-100 font-custom flex flex-col p-4 gap-4">
               <Header />
               <Products />
               <EmptyCart />
               <Footer />
            </main>
         )}
      </>
   );
}

export default App;
