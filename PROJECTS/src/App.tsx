import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import OrderContent from "./components/OrderContent";
import OrderTotal from "./components/OrderTotal";

function App() {
  const {
    addItem,
    order,
    removeItem,
    tip,
    setTip,
    resetOrder,
    upQuantity,
    downQuantity,
  } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-3">
        <h1 className="text-3xl font-bold text-center text-white">
          Calculadora de propinas
        </h1>
      </header>
      <main className="max-w-7xl py-20 mx-10 grid md:grid-cols-2">
        <div>
          <h2 className="font-black mb-3 text-4xl">Menu</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div>
          <div className="border border-dashed border-slate-300 p-3 rounded-lg space-y-10 mx-4">
            <OrderContent order={order} removeItem={removeItem} upQuantity={upQuantity} downQuantity={downQuantity}/>
            <OrderTotal
              order={order}
              tip={tip}
              setTip={setTip}
              resetOrder={resetOrder}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
