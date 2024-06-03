//Creamos un todoReducer que recibe el estado y la acción
export const todoReducer = (state, action) => {
  //Manejamos las acciones
  switch (action.type) {
    case "addTodo":
      //Retornamos un nuevo estado con la tarea agregada
      return [...state, action.payload];
    case "deleteTodo":
      //Retornamos un nuevo estado con la tarea eliminada
      return state.filter((todo) => todo.id !== action.payload);
    case "toggleTodo":
      //Retornamos un nuevo estado con la tarea actualizada
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "todosPendientes":
      //Retornamos un nuevo estado con las tareas pendientes
      return state.filter((todo) => !todo.completed);
    case "todosCompletados":
      //Retornamos un nuevo estado con las tareas completadas
      return state.filter((todo) => todo.completed);
    case "todos":
      //Retornamos un nuevo estado con todas las tareas
      return state;
    default:
      return state;
  }
};
