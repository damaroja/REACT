import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Guitarras from "./components/Guitarras";
import {db} from "./assets/db";
import { useEffect, useState } from "react";


function App() {

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart-6725346235472"))
    if (cart) {
      setCart(cart)
    }
  }, [])

  return (
    <>
      <Header cart={cart} setCart={setCart}/>
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          <Guitarras data={data} setCart={setCart} cart={cart}/>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
