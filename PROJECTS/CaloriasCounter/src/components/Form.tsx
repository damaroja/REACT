import categories from "../data/categories";
import { useEffect, useState } from "react";
import { ActividadType } from "../types";
import { ActivityActions, ActivityState } from "../reducers/activity_reducer";
import { v4 as uuidV4 } from "uuid";



type FormProps = {
  dispatch: React.Dispatch<ActivityActions>,
  state: ActivityState
};

const Form = ({ dispatch, state }: FormProps) => {


  useEffect(() => {
    if (state.activeId) {
      const selectedActivity = state.activities.filter(activity => activity.id === state.activeId)[0];
      setActivity(selectedActivity);
    }
  }, [state.activeId]);

  const initialState: ActividadType = {
    id: uuidV4(),
    category: 1,
    actividad: "",
    calorias: 0,
  };

  const [activity, setActivity] = useState<ActividadType>(initialState);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const isnumericField = () => {
      return ["category", "calorias"].includes(e.target.id);
    };
    setActivity({
      ...activity,
      [e.target.id]: isnumericField() ? +e.target.value : e.target.value,
    });
  };

  const isValidActivity = () => {
    return activity.actividad.trim() !== "" && activity.calorias > 0;
  };

  const isFood = () => {
    return activity.category === 2;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_ACTIVITY", payload: { newActivity: activity } });
    setActivity({
      ...initialState,
      id: uuidV4(),
    });
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Categoria: </label>
        <select
          name=""
          id="category"
          className="border border-slate-200 p-2 rounded-lg bg-white"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="actividad">Actividad: </label>
        <input
          type="text"
          id="actividad"
          className="border border-slate-200 p-2 rounded-lg bg-white"
          placeholder="Ejemplo: Correr 30 minutos"
          value={activity.actividad}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calorias">Calorias: </label>
        <input
          type="text"
          id="calorias"
          className="border border-slate-200 p-2 rounded-lg bg-white"
          placeholder="Ejemplo: 300 calorias"
          value={activity.calorias}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className="bg-lime-600 text-white font-bold py-2 px-4 rounded-lg w-full cursor-pointer hover:bg-lime-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        value={isFood() ? "Agregar Ejercicio" : "Agregar Comida"}
        disabled={!isValidActivity()}
      />
    </form>
  );
};

export default Form;
