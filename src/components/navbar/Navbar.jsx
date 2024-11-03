import './Navbar.css'
import { IoMdSearch } from "react-icons/io";
import { SiShortcut } from "react-icons/si";


export default function Navbar() {
  return (
    <nav className="nav_container">
      <section className="nav_section-buscador">
        <div className="nav_logo-container">
          <a href="/">
            <SiShortcut className="nav_logo" />
            <span className="nav_logo-span-1">Tuchin</span>
            <span className="nav_logo-span-2">Deals</span>
          </a>
        </div>
      </section>
      <section className="nav_section-button">
        <div className="nav_container-buscador">
          <form className="buscador">
            <input
              className="buscador_input"
              name="buscador"
              placeholder="Buscar..."
            />
            <span>
              <IoMdSearch className="nav_icon" />
            </span>
          </form>
        </div>
        <div className="nav_container-botones">
          <button className="nav_button">Regístrate</button>
        </div>
        <div>
          <button className="nav_button">Inicia Sesión</button>
        </div>
      </section>
    </nav>
  );
}
