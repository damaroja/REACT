//Definimos el estado inicial de la aplicación
import { v4 as uuidV4 } from "uuid";

const initialState = [
  {
    id: uuidV4(),
    title: "Tarea 1",
    completed: false,
  },
  {
    id: uuidV4(),
    title: "Tarea 2",
    completed: true,
  },
  {
    id: uuidV4(),
    title: "Tarea 3",
    completed: false,
  },
];

//Exportamos el estado inicial

export default initialState;
