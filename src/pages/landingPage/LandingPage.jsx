import './LandingPage.css'
import iphones from '../../assets/iphones.jpg'
import { FaCheck } from "react-icons/fa";


export default function LandingPage() {
  return (
    <div className="landing_container">
      <section className="section_left">
        <h3 className="section_left-title">
          Encuentra el Iphone perfecto para ti!
        </h3>
        <p>Descubre la última generación de iPhones con ofertas exclusivas.</p>
        <p>
          Potencia, elegancia y tecnología de punta en un solo dispositivo.
          Encuentra el modelo ideal para ti y aprovecha los mejores precios del
          mercado.
        </p>
        <p>¡Compra ahora y lleva tu experiencia móvil al siguiente nivel!</p>
        <button className="section_left-button">Empezar</button>
      </section>
      <section className="section_right">
        <div className="section_right-container-img">
          <img className="section_right-img" src={iphones} />
        </div>
        <div className="advertisement">
          <h3>Regístrate y mantente actualizado</h3>
          <ul>
            <li>
              <FaCheck className="check_icon" /> Dispositivos nuevos
            </li>
            <li>
              <FaCheck className="check_icon" /> Dispositivos usados
            </li>
            <li>
              <FaCheck className="check_icon" /> Garantía
            </li>
            <li>
              <FaCheck className="check_icon" /> Promos y descuentos
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
