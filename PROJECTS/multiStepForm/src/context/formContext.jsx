//Creamos un contexto

import { createContext, useState } from "react";

createContext;

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    age: "",
    percentage: 0,
  });

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
