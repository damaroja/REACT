//Vamos a crear un contexto para el manejo de los todos
import { createContext, useReducer } from "react";
import initialState from "../data/initialState";
import { todoReducer } from "../reducer/reducer";

//Creamos el contexto
const TodoContext = createContext();

//Creamos el provider

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const addTodoFn = (todo) => {
    dispatch({
      type: "addTodo",
      payload: todo,
    });
  };

  const deleteTodoFn = (id) => {
    dispatch({
      type: "deleteTodo",
      payload: id,
    });
  };

  const toggleTodoFn = (id) => {
    dispatch({
      type: "toggleTodo",
      payload: id,
    });
  };

  const todosPendientes = () => {
    dispatch({
      type: "todosPendientes",
    });
  };

  const todosCompletados = () => {
    dispatch({
      type: "todosCompletados",
    });
  };

  const todosList = () => {
    dispatch({
      type: "todos",
    });
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodoFn,
        deleteTodoFn,
        toggleTodoFn,
        todosPendientes,
        todosCompletados,
        todosList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

//Exportamos el contexto

export default TodoContext;
export { TodoProvider };
