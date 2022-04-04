import "./VistaCliente.css";
import InfoUsuario from "../../contenedores/InfoUsuario/InfoUsuario.js";
import InfoMascotas from "../../contenedores/InfoMascotas/InfoMascotas.js";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

//Mostrar la información de las mascotas de cada cliente y la información del usuario, y poder modificar cualquier item.
const VistaCliente = () => {
  return (
    <div className="areaCliente">
      <header>
        <div className="enlace">
          <Link to="/">Home</Link>
        </div>
      </header>
      <h2>Area de Cliente</h2>
      <h3>Información personal</h3>
      <div>
        <InfoUsuario />
      </div>
      <h3>Tus Mascotas</h3>
      <InfoMascotas />
      <Footer />
    </div>
  );
};
export default VistaCliente;