import React from "react";

const Paciente = ({ paciente, editarCita, eliminarCita }) => {
  const { nombre, propietario, email, alta, sintomas } = paciente;

  return (
    <>
      <div className="bg-white rounded-lg m-2 p-3 w-full flex flex-col">
        <p className="text-lg font-normal mx-2">Mascota: {nombre}</p>
        <p className="text-lg font-normal mx-2">Propietario: {propietario}</p>
        <p className="text-lg font-normal mx-2">Email: {email}</p>
        <p className="text-lg font-normal mx-2">Fecha Alta: {alta}</p>
        <p className="text-lg font-normal mx-2">Sintomas: {sintomas}</p>
        <div className="flex justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={() => editarCita(paciente)}
          >
            Editar
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={() => eliminarCita(paciente.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default Paciente;
