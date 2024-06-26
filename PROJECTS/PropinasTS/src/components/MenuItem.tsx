

import type { MenuItemType } from "../types";

type MenuItemProps = {
  item: MenuItemType,
  addItem: (item: MenuItemType) => void
};

const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <>
      <button
        className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
        onClick={() => addItem(item)}
      >
        <p>{item.name}</p>
        <p className="font-bold">{item.price}</p>
      </button>
    </>
  );
};

export default MenuItem;
