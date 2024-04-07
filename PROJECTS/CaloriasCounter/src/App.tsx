import Form from "./components/Form";
import { useEffect, useReducer } from "react";
import { initialState, activityReducer } from "./reducers/activity_reducer";
import ActivityList from "./components/ActivityList";
import CaloriasTracker from "./components/CaloriasTracker";


function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      "activities-8765762354",
      JSON.stringify(state.activities)
    );
  }, [state.activities]);

  const canRestarASpp = () => {
    return state.activities.length > 0;
  };

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de Calorias
          </h1>
          {canRestarASpp() && (
            <button
              className="bg-red-700 rounded p-2 text-white hover:bg-red-600 cursor-pointer transition-all duration-200"
              onClick={() => dispatch({type: "RESTART"})}
            >
              Reiniciar
            </button>
          )}
        </div>
      </header>
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>
      <section className="bg-gray-800 py-10 ">
        <div className="max-w-4xl mx-auto flex justify-between">
          <CaloriasTracker activities={state.activities} />
        </div>
      </section>
      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList activities={state.activities} dispatch={dispatch} />
      </section>
    </>
  );
}

export default App;
