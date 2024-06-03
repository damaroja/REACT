import React, { useState, useContext } from "react";

import { v4 as uuidV4 } from "uuid";
import TodoContext from "../context/todoContext";

const AddForm = () => {
  const [tarea, setTarea] = useState("");
  const [alerta, setAlerta] = useState(false);

  const { addTodoFn } = useContext(TodoContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (tarea.trim() === "") {
      setAlerta(true);
      setTimeout(() => {
        setAlerta(false);
      }, 2000);
      return;
    }
    addTodoFn({
      id: uuidV4(),
      title: tarea,
      completed: false,
    });
    setAlerta(false);
    setTarea("");
  };

  return (
    <>
      <h1>Agregar Tarea</h1>
      <hr />
      <form>
        <input
          type="text"
          name="title"
          placeholder="Aprender..."
          autoComplete="off"
          className="form-control"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        {alerta && (
          <div className="alert alert-danger mt-4" role="alert">
            Debes agregar una tarea
          </div>
        )}
        <button
          className="btn btn-outline-primary mt-2 btn-block"
          onClick={handleClick}
        >
          Agregar
        </button>
      </form>
    </>
  );
};

export default AddForm;
