const Item = ({ guitarra, setCart, cart }) => {
  const { description, price, name, image } = guitarra;

  const addItem = (guitarra) => {
    //si el carrito esta vacio
    if (cart.length === 0) {
      guitarra.cantidad = 1;
      localStorage.setItem("cart-6725346235472", JSON.stringify([guitarra]));
      setCart([guitarra]);
      return;
    }
    const existe = cart.some((guitarraItem) => guitarraItem.id === guitarra.id);
    //si el carrito tiene elementos
    if (existe) {
      const nuevoCart = cart.map((guitarraItem) => {
        if (guitarraItem.id === guitarra.id) {
          guitarraItem.cantidad++;
          return guitarraItem;
        }
        return guitarraItem;
      });
      localStorage.setItem("cart-6725346235472", JSON.stringify(nuevoCart));
      setCart(nuevoCart);
      return;
    }
    guitarra.cantidad = 1;
    localStorage.setItem("cart-6725346235472", JSON.stringify([...cart, guitarra]));
    setCart([...cart, guitarra]);
  };

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img className="img-fluid" src={`/img/${image}.jpg`} alt={name} />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => addItem(guitarra)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default Item;
