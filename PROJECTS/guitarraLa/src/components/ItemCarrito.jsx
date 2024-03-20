const ItemCarrito = ({ item, setCart, cart }) => {
  const { image, price, name, cantidad, id } = item;

  const deleteItems = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart-6725346235472", JSON.stringify(newCart));
    setCart(newCart);
  };

  const addItem = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    localStorage.setItem("cart-6725346235472", JSON.stringify(newCart));
    setCart(newCart);
  };
  
  const removeItem = (id) => {
    if (cantidad === 1) {
      deleteItems(id);
      return;
    }
    const newCart = cart.map((item) =>
    item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
    );
    localStorage.setItem("cart-6725346235472", JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <tr>
      <td>
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </td>
      <td>{name}</td>
      <td className="fw-bold">${price}</td>
      <td className="flex align-items-start gap-4">
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => removeItem(id)}
        >
          -
        </button>
        {cantidad}
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => addItem(id)}
        >
          +
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => deleteItems(id)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default ItemCarrito;
