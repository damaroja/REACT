import { useContext, useState } from "react";
import { FormContext } from "../context/formContext";
import { useNavigate } from "react-router-dom";

const Form3 = () => {
  const progressPercentage = 100;
  const { form, setForm } = useContext(FormContext);

  const [age, setAge] = useState(form.age);
  const [alerta, setAlerta] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (age.trim() === "") {
      setAlerta(true);
      setTimeout(() => {
        setAlerta(false);
      }, 2000);
      return;
    }
    setForm((form) => ({ ...form, age, percentage: progressPercentage }));
    setAlerta(false);
    setTimeout(() => {
      navigate("/resumen");
    }, 3000);
  };

  const handleClickAtras = (e) => {
    navigate("/step2");
  };

  return (
    <form role="form">
      <div className="form-group">
        <label htmlFor="age">Edad</label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      {alerta && (
        <div className="alert alert-danger mt-3" role="alert">
          Debes ingresar una edad
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
        Finalizar
      </button>
    </form>
  );
};

export default Form3;
