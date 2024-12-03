import { Link } from 'react-router-dom';
import ImageDisplay from '../imageDisplay/ImageDisplay';
import './Card.css'

export default function Card({ product, imageId }) {

  return (
    <Link to="/product-details" className="card_link">
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
                Envio gratis solo dentro de Tucumán
              </span>
            </div>
            <div className="card_price-container">
              <strong className="card_price">
                ${product.price.toLocaleString("de-DE")}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
