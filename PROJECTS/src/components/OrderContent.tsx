import type { OrderItemType } from "../types";

type OrderContentProps = {
  order: OrderItemType[];
  removeItem: (id: number) => void;
  upQuantity: (id: number) => void
  downQuantity: (id: number) => void
};

const formatearDinero = (cantidad: number) => {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

const calcularPrecio = (cantidad: number, precio: number) => {
  if (cantidad <= 0) return 0;
  if (precio <= 0) return 0;
  return cantidad * precio;
};

const OrderContent = ({ order, removeItem, upQuantity, downQuantity }: OrderContentProps) => {
  return (
    <div className="font-black text-2xl text-center">
      <div className="space-y-3">
        {order.length === 0 ? (
          <p>No hay elementos en la orden</p>
        ) : (
          <div className="flex justify-between">
            <p>Plato</p>
            <p>Cantidad</p>
            <p>Precio</p>
          </div>
        )}

        {order.map((orderItem) => (
          <div
            key={orderItem.id}
            className="flex justify-between text-xl font-normal"
          >
            <p>{orderItem.name}</p>
            <p>
              <span>
                <button className="bg-lime-400 p-1 rounded mx-1 hover:bg-lime-300" onClick={() => upQuantity(orderItem.id)}>
                  +
                </button>
              </span>
              {orderItem.quantity}
              <span>
                <button className="bg-amber-400 p-1 rounded mx-1 hover:bg-amber-300" onClick={()=>downQuantity(orderItem.id)}>
                  -
                </button>
              </span>
            </p>
            <p>
              {formatearDinero(
                calcularPrecio(orderItem.quantity, orderItem.price)
              )}
            </p>
            <button
              className="bg-red-300 rounded py-1 px-3"
              onClick={() => removeItem(orderItem.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderContent;
