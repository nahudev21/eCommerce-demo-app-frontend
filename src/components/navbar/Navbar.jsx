import './Navbar.css'
import { IoMdSearch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { CartModal } from '../cartModal/CartModal';
import { useEffect, useState } from 'react';
import { getProductByIdRequest } from '../../api/product';


export default function Navbar() {

  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  

  useEffect(() => {
    const getProduct = async () => {
      const item = await getProductByIdRequest(4);
      setCart(item);
    }

    getProduct()
  }, [])

  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <nav className="nav_container">
      <section className="nav_section-buscador">
        <div className="nav_logo-container">
          <a href="/">
            <span className="nav_logo-span-1">Tuch</span>
            <span className="nav_logo-span-2">Innovations</span>
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
          <button className="nav_button">Inicia Sesión</button>
        </div>
        <div>
          <button className="nav_button">Regístrate</button>
        </div>
        <div className="cart_container">
          <div className="cart_icon-container">
            <button className='cart_icon-button' onClick={openModal}>
              <TiShoppingCart className="cart_icon" />
            </button>
            <CartModal
              isOpen={isModalOpen}
              closeModal={closeModal}
              cartItems={cart}
            />
          </div>
          <div className="cart_input-container">
            <input className="cart_input-items" value={0} disabled />
            <input className="cart_input-price" value={"$0.00"} disabled />
          </div>
        </div>
      </section>
    </nav>
  );
}
