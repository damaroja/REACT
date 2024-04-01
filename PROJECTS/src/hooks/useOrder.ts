import { useState } from "react";
import type { OrderItemType, MenuItemType } from "../types";

const useOrder = () => {
  const [order, setOrder] = useState<OrderItemType[]>([]);
  const [tip, setTip] = useState(0);  

  const addItem = (item: MenuItemType) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);
    if (itemExists) {
      setOrder(
        order.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (id: number) => {
    setOrder(order.filter((orderItem) => orderItem.id !== id));
  }

  const resetOrder = () => {
    setOrder([]);
  }

  const upQuantity = (id: number) => {
    setOrder(
      order.map((orderItem) =>
        orderItem.id === id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      )
    );
  }

  const downQuantity = (id: number) => {
    const item = order.find((orderItem) => orderItem.id === id);
    if (!item) return;
    if (item.quantity === 1) {
      removeItem(id);
      return;
    }
    setOrder(
      order.map((orderItem) =>
        orderItem.id === id
          ? { ...orderItem, quantity: orderItem.quantity - 1 }
          : orderItem
      )
    );
  }

  return {
    order,
    tip,
    setTip,
    removeItem,
    addItem,
    resetOrder,
    upQuantity,
    downQuantity,
  };
};

export default useOrder;
