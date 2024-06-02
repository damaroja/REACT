import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import { FormProvider } from "./context/formContext";

import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Resumen from "./components/Resumen";

function App() {
  return (
    <>
      <BrowserRouter>
        <FormProvider>
          <Routes>
            <Route path="/" element={<Inicio />}>
              <Route path="/step1" element={<Form1 />} />
              <Route path="/step2" element={<Form2 />} />
              <Route path="/step3" element={<Form3 />} />
            </Route>
            <Route>
              <Route path="/resumen" element={<Resumen />} />
            </Route>
          </Routes>
        </FormProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
