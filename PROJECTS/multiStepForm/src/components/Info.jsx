import { useContext } from "react";
import { FormContext } from "../context/formContext";

const Info = () => {
  const { form } = useContext(FormContext);
  const { name, surname, age } = form;

  return (
    <>
      <div className="h6">
        <p>Nombre: {name}</p>
        <p>Apellido: {surname}</p>
        <p>Edad: {age}</p>
      </div>
    </>
  );
};

export default Info;
