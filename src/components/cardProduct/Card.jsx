import './Card.css'

export default function Card({ product }) {

  return (
    <div className="card_container">
      <div className="card_sections-container">
        <div className="card_img-container">
          <img
            className="card_img"
            src=""
          />
        </div>
        <hr />
        <div className="card_info">
          <div>
            <h3>{product.name}</h3>
          </div>
          <div>
            <span className="card_envio">
              Envio gratis Solo dentro de Tucuman
            </span>
          </div>
          <div>
            <strong className="card_price">{product.price}</strong>
          </div>
          <div>
            <button className="card_button">Ver Detalles</button>
          </div>
        </div>
      </div>
    </div>
  );
}
