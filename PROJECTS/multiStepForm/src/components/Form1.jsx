import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/formContext";

const Form1 = () => {
  const progressPercentage = 50;
  const { setForm, form } = useContext(FormContext);

  const [name, setName] = useState(form.name);
  const [alerta, setAlerta] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setAlerta(true);
      setTimeout(() => {
        setAlerta(false);
      }, 2000);
      return;
    }
    setForm((form) => ({ ...form, name, percentage: progressPercentage }));
    setAlerta(false);
    navigate("/step2");
  };
  return (
    <form role="form">
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {alerta && (
        <div className="alert alert-danger mt-3" role="alert">
          Debes ingresar un nombre
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary mt-4"
        onClick={handleClick}
      >
        Siguiente
      </button>
    </form>
  );
};

export default Form1;
