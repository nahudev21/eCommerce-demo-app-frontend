import './CartModal.css'
import { MdDeleteSweep } from "react-icons/md";
import { useCart } from '../../context/CartContext';

export function CartModal ({ cartItems, isOpen, closeModal }) {

  const { removeToCart, clearToCart } = useCart();

  if (!isOpen) return null; // Si no está abierta, no renderizamos nada

  function CartItem ({ product }) {

    const {pathImage} = product.product
    const { id } = product.product.data;
    const {name} = product.product.data
    const {price} = product.product.data

    return (
      <>                         
          <li>
            <div className="cart_modal-container-img">
              <img className="cart_modal-img" src={pathImage} />
            </div>
            <div className="cart_modal-container-info">
              <h3>{name}</h3>
              <p>{`Precio: ${"$" + price}`}</p>
              <button onClick={() => {
                removeToCart(id)
              }} className="cart_modal-info-button">Eliminar</button>
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
        <button onClick={clearToCart} className="cart_modal-clear-button">
          <MdDeleteSweep />
        </button>
        <ul>
          {cartItems.length === 0 ? (
            <p>El carrito está vacio...</p>
          ) : (
            cartItems.map((item, index) => (
              <CartItem key={index} product={item} />
            ))
          )}
        </ul>
        <button className="checkout-btn">Ir a pagar</button>
      </div>
    </div>
  );
};
