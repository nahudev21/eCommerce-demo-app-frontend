import './LandingPage.css'
import iphones from '../../assets/iphones.jpg'
import { FaCheck } from "react-icons/fa";
import Products from '../../components/products/Products';
import Separetor from '../../components/separetor/Separetor';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="lading_container">
      <div className="hero_container">
        <section className="section_left">
          <h3 className="section_left-title">
            Encuentra el Iphone perfecto para ti!
          </h3>
          <p>
            Descubre la última generación de iPhones con ofertas exclusivas.
          </p>
          <p>
            Potencia, elegancia y tecnología de punta en un solo dispositivo.
            Encuentra el modelo ideal para ti y aprovecha los mejores precios
            del mercado.
          </p>
          <p>¡Compra ahora y lleva tu experiencia móvil al siguiente nivel!</p>
          <Link to='/home'>
            <button className="section_left-button">Empezar</button>
          </Link>
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
      <Separetor />
      <div className="products_section">
        <h3>Elige el dispositivo que mejor se ajuste a tus necesidades!</h3>
        <div className="products">
          <Products />
        </div>
      </div>
    </div>
  );
}
