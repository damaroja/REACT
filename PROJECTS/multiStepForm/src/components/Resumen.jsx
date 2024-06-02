import { useContext } from "react";
import { FormContext } from "../context/formContext";
import { useNavigate } from "react-router-dom";

const Resumen = () => {
  const { form } = useContext(FormContext);
  const { name, surname, age } = form;

  const navigate = useNavigate();

  const hancleClick = () => {
    navigate("/step3");
  };

  return (
    <>
      <div className="h6 container mt-5">
        <h1>Resumen</h1>
        <p>Nombre: {name}</p>
        <p>Apellido: {surname}</p>
        <p>Edad: {age}</p>
        <button className="btn btn-success" onClick={hancleClick}>
          Atras
        </button>
      </div>
    </>
  );
};

export default Resumen;
