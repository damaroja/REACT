import { useContext, useState } from "react";
import { FormContext } from "../context/formContext";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
  const progressPercentage = 75;
  const { form, setForm } = useContext(FormContext);
  const [alerta, setAlerta] = useState(false);

  const [surname, setSurname] = useState(form.surname);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (surname.trim() === "") {
      setAlerta(true);
      setTimeout(() => {
        setAlerta(false);
      }, 2000);
      return;
    }
    setForm((form) => ({ ...form, surname, percentage: progressPercentage }));
    setAlerta(false);
    navigate("/step3");
  };

  const handleClickAtras = (e) => {
    navigate("/step1");
  };

  return (
    <form role="form">
      <div className="form-group">
        <label htmlFor="surname">Apellido</label>
        <input
          type="text"
          className="form-control"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      {alerta && (
        <div className="alert alert-danger mt-3" role="alert">
          Debes ingresar un apellido
        </div>
      )}

      <button className="btn btn-success mt-4 " onClick={handleClickAtras}>
        Atras
      </button>

      <button
        type="submit"
        className="btn btn-primary mt-4 mx-3"
        onClick={handleClick}
      >
        Siguiente
      </button>
    </form>
  );
};

export default Form2;
