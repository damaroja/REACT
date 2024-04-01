import { useMemo } from "react";
import type { OrderItemType } from "../types";
import TipPorcentageForm from "./TipPorcentageForm";

type OrderTotalProps = {
  order: OrderItemType[];
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  resetOrder: () => void;
};

const OrderTotal = ({ order, tip, setTip, resetOrder }: OrderTotalProps) => {
  const subtotal = useMemo(() => {
    return order.reduce((acc, orderItem) => {
      return acc + orderItem.price * orderItem.quantity;
    }, 0);
  }, [order]);

  const total = useMemo(() => {
    return subtotal + subtotal * tip;
  }, [subtotal, tip]);

  const formatearDinero = (cantidad: number) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  };

  const resetForm = () => {
    resetOrder();
    setTip(0);
  }


  return (
    <>
      {total > 0 && (
        <div className="space-y-3">
          <h2 className="font-black text-2xl">Totales y propinas</h2>
          <p>
            Subtotal a pagar:{" "}
            <span className="font-bold">{formatearDinero(subtotal)}</span>
          </p>
          <p>Propina: {formatearDinero(subtotal * tip)}</p>
          <div className="flex space-x-3">
            <TipPorcentageForm setTip={setTip} />
          </div>
          <p>
            Total a pagar:{" "}
            <span className="font-bold">{formatearDinero(total)}</span>
          </p>
          <button
            className="w-full bg-black text-white rounded-md p-3"
            disabled={total === 0}
            onClick={() => resetForm()}
          >
            Guardar Orden
          </button>
        </div>
      )}
    </>
  );
};

export default OrderTotal;
