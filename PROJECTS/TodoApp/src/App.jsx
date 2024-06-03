import { useContext, useReducer } from "react";
import { v4 as uuidV4 } from "uuid";
import { todoReducer } from "./reducer/reducer";
import ListaTodos from "./components/listaTodos";
import AddForm from "./components/addForm";
import TodoContext from "./context/todoContext";

function App() {
  const { todosList, todosPendientes } = useContext(TodoContext);

  return (
    <>
      <div className="container mt-5">
        <h1>
          TodoApp: <span>{todosList.length}</span>{" "}
          <small>Pendientes: {todosPendientes.length}</small>
        </h1>
        <hr />
        <div className="row">
          <div className="col-md-7">
            <ListaTodos />
          </div>
          <div className="col-md-5">
            <AddForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
