
import Item from "./Item";

const Guitarras = ({ data, setCart, cart }) => {
  return (
    <>
      {data.map((guitarra) => (
        <Item guitarra={guitarra} key={guitarra.id} setCart={setCart} cart={cart}/>
      ))}
    </>
  );
};

export default Guitarras;
