import "./App.css";
import ListadoPacientes from "./components/ListadoPacientes";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import { useState } from "react";


function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})


  const editarCita = (pacientedicion) => {
    setPaciente(pacientedicion)
  }

  const eliminarCita = (id) => {
    const nuevosPacientes = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(nuevosPacientes)
  }

  return (
    <div className="container mx-auto">
      <Header />
      <div className="md:flex justify-between">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}/>
        <ListadoPacientes pacientes={pacientes} editarCita={editarCita} eliminarCita={eliminarCita} setPacientes={setPacientes} />
      </div>
    </div>
  );
}

export default App;
