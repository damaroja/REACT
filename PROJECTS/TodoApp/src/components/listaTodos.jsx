import { useContext } from "react";
import ItemTodo from "./itemTodo";
import TodoContext from "../context/todoContext";

const ListaTodos = () => {
  const { todos, deleteTodoFn, toggleTodoFn } = useContext(TodoContext);

  return (
    <>
      <h1>Lista de todos</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <ItemTodo
            key={todo.id}
            todo={todo}
            deleteTodoFn={deleteTodoFn}
            toggleTodoFn={toggleTodoFn}
          />
        ))}
      </ul>
    </>
  );
};

export default ListaTodos;
