import { useEffect } from "react";
import Paciente from "./Paciente";




const ListadoPacientes = ({pacientes, editarCita, eliminarCita, setPacientes}) => {

  useEffect(() => {
    const items = localStorage.getItem("token-APV-02342342")
    const pacientes = JSON.parse(items) || []
    setPacientes(pacientes)
  }, []);

  return (
    <div className="text-2xl text-center font-bold mt-9 bg-red-300 md:w-1/2 lg:w-3/5 rounded-xl p-3 mx-2 h-screen overflow-y-scroll">
      Listado Pacientes
      <div className="font-normal text-sm">
        {pacientes.length === 0 ? <p>No hay pacientes. Crea uno para listar</p> : (
          <>
          {pacientes.map(paciente => (
          <Paciente key={paciente.id} paciente={paciente} editarCita={editarCita} eliminarCita={eliminarCita} />
        ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ListadoPacientes;
