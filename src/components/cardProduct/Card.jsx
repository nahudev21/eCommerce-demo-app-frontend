import ImageDisplay from '../imageDisplay/ImageDisplay';
import './Card.css'

export default function Card({ product, imageId }) {

  return (
    <div className="card_container">
      <div className="card_sections-container">
        <div className="card_img-container">
          <ImageDisplay imageId={imageId} />
        </div>
        <hr />
        <div className="card_info">
          <div>
            <h3>{product.name}</h3>
          </div>
          <div className="card_envio-container">
            <span className="card_envio">
              Envio gratis Solo dentro de Tucumán
            </span>
          </div>
          <div className="card_price-container">
            <strong className="card_price">${product.price}</strong>
          </div>
          <div className="card_button-container">
            <button className="card_button">Ver Detalles</button>
          </div>
        </div>
      </div>
    </div>
  );
}
