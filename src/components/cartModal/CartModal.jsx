import './CartModal.css'
import ipone from "../../assets/iPhone_14.jpg";

export function CartModal ({ isOpen, closeModal, cartItems }) {
  if (!isOpen) return null; // Si no está abierta, no renderizamos nada


  console.log("name:" + cartItems)

  

   

  function CartItem ({ product }) {
    return (
      <>
        <li>
          <div className="cart_modal-container-img">
            <img className="cart_modal-img" src={ipone} />
          </div>
          <div className="cart_modal-container-info">
            <h3>gjgjhgjgjgjgjgj</h3>
            <p>price: $25000</p>
            <button className="cart_modal-info-button">Eliminar</button>
          </div>
        </li>
        <li>
          <div className="cart_modal-container-img">
            <img className="cart_modal-img" src={ipone} />
          </div>
          <div className="cart_modal-container-info">
            <h3>Iphone 12</h3>
            <p>Precio: $1000000</p>
            <button className="cart_modal-info-button">Eliminar</button>
          </div>
        </li>
      </>
    );
  }

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>
          X
        </button>
        <h2>Carrito de Compras</h2>
        <ul>
          <CartItem />
        </ul>
        <button className="checkout-btn">Ir a pagar</button>
      </div>
    </div>
  );
};
