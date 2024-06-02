import React, { useContext } from "react";
import Info from "../components/Info";
import Progress from "../components/Progress";
import { Outlet } from "react-router-dom";
import { FormContext } from "../context/formContext";

const Inicio = () => {
  const { form } = useContext(FormContext);
  const { percentage } = form;

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <label className="h5">Progreso de Formulario</label>
          <Progress percentage={percentage} />
          <div className="mt-5">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <h1 className="text-center">
            <Info />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
