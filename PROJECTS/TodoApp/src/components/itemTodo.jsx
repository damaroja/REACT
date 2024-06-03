import React, { useContext } from "react";
import TodoContext from "../context/todoContext";

const ItemTodo = ({ todo }) => {
  const { deleteTodoFn, toggleTodoFn } = useContext(TodoContext);
  const hancleClickDelete = () => {
    deleteTodoFn(todo.id);
  };

  const hancleClickUpdate = () => {
    toggleTodoFn(todo.id);
  };
  const completed = todo.completed;

  return (
    <>
      <li className="list-group-item">
        {todo.title}
        <button
          className="btn btn-danger float-end"
          onClick={hancleClickDelete}
        >
          Borrar
        </button>
        <button
          className={
            completed
              ? "btn btn-success float-end mx-3"
              : "btn btn-warning float-end mx-3"
          }
          onClick={hancleClickUpdate}
        >
          {completed ? "Completado" : "No completado"}
        </button>
      </li>
    </>
  );
};

export default ItemTodo;
