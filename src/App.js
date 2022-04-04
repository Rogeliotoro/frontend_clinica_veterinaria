import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListadoUsuario from "./contenedores/EjemploListado/ejemploListado.js";

import CrearUsuario from "./contenedores/CrearUsuario/CrearUsuario.js";
import LoginUsuario from "./contenedores/LoginUsuario/LoginUsuario.js";
import Home from "./componentes/Home/Home.js";
import VistaCliente from "./componentes/VistaCliente/VistaCliente";
import InfoMascotas from "./contenedores/InfoMascotas/InfoMascotas";
import CrearCita from "./contenedores/CrearCita/CrearCita.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginUsuario />}></Route>
          <Route path="/registro" element={<CrearUsuario />}></Route>
          <Route path="/listado" element={<ListadoUsuario />}></Route>
          <Route path="/areaCliente" element={<VistaCliente />}></Route>
          <Route path="/mascotas" element={<InfoMascotas />}></Route>
          <Route path="/crearCita" element={<CrearCita />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
