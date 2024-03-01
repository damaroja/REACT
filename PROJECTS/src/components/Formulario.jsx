import { useEffect, useState } from "react";
import Alerta from "../lib/Alerta";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    if (Object.keys(paciente).length !== 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
      return;
    }
    if (paciente.id) {
      const pacientesEditados = pacientes.map((pac) => {
        if (pac.id === paciente.id) {
          return {
            nombre,
            propietario,
            email,
            alta,
            sintomas,
            id: paciente.id,
          };
        }
        return pac;
      });
      setPacientes(pacientesEditados);
      setPaciente({});
      setNombre("");
      setPropietario("");
      setEmail("");
      setAlta("");
      setSintomas("");
      localStorage.setItem(
        "token-APV-02342342",
        JSON.stringify(pacientesEditados)
      );
      setAlerta({
        msg: "Cita editada correctamente",
        error: false,
      });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
    } else {
      const id =
        Date.now().toString(32) + Math.random().toString(32).substring(2);
      setPacientes([
        ...pacientes,
        { nombre, propietario, email, alta, sintomas, id },
      ]);
      localStorage.setItem(
        "token-APV-02342342",
        JSON.stringify([
          ...pacientes,
          { nombre, propietario, email, alta, sintomas, id },
        ])
      );
      setNombre("");
      setPropietario("");
      setEmail("");
      setAlta("");
      setSintomas("");
      setAlerta({
        msg: "Cita agregada correctamente",
        error: false,
      });
      setTimeout(() => {
        setAlerta({});
      }, 2000);
    }
  };

  return (
    <div className="text-2xl text-center font-bold mt-9 bg-red-300 md:w-1/2 lg:w-2/5 rounded-xl p-3">
      Formulario
      <p className="text-xl font-normal">Administra tus pacientes</p>
      <form onSubmit={handleSubmit}>
        {alerta.msg ? <Alerta alerta={alerta} /> : null}
        <div className="mt-4">
          <label htmlFor="nombre" className="text-lg mx-1">
            Mascota
          </label>
          <input
            type="text"
            name="nombre"
            className="w-full rounded-xl p-3 placeholder:text-lg font-normal text-sm"
            placeholder="Nombre Mascota"
            id="nombre"
            value={nombre || ""}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className=" mt-4">
          <label htmlFor="propietario" className="text-lg mx-1">
            Propietario
          </label>
          <input
            type="text"
            name="propietario"
            className="w-full rounded-xl p-3 placeholder:text-lg font-normal text-sm"
            placeholder="Nombre Propietario"
            id="propietario"
            value={propietario || ""}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className=" mt-4">
          <label htmlFor="email" className="text-lg mx-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full rounded-xl p-3 placeholder:text-lg font-normal text-sm"
            placeholder="Email"
            id="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" mt-4">
          <label htmlFor="alta" className="text-lg mx-1">
            Fecha Alta
          </label>
          <input
            type="date"
            name="alta"
            className="w-full rounded-xl p-3 placeholder:text-sm font-normal text-sm"
            placeholder="Fecha de Alta"
            id="alta"
            value={alta || ""}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className=" mt-4">
          <label htmlFor="sintomas" className="text-lg mx-1">
            Sintomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            cols="30"
            rows="3"
            className="rounded-lg w-4/5 font-normal text-sm"
            placeholder="Sintomas"
            value={sintomas || ""}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white rounded-xl p-2 mt-4 hover:bg-red-700 w-full font-bold text-lg"
        >
          {paciente.id ? "Editar Cita" : "Agregar Cita"}
        </button>
      </form>
    </div>
  );
};

export default Formulario;
