import './ProductDetails.css'
import iphoneHero from '../../assets/iphone-hero.jpg'
const estado = "usado"
const price = 1000000
const formattedPrice = price.toLocaleString("de-DE");
const stock = 10

export default function ProductDetails() {
  return (
    <div className="productDetails_container">
      <section className="section_carousel">
        <div className="section_carousel-image-container">
          <img className="section_carousel-image" src={iphoneHero} />
        </div>
        <div>
          <button>Anterior</button>
          <button>Siguiente</button>
        </div>
      </section>
      <section className="section_information">
        <span className="section_information-state">Estado {estado}</span>
        <h3 className="section_information-title">
          Cargador Inalámbrico 20w compatible con magsafe para iPhone X A 14
        </h3>
        {stock > 0 ? (
          <span className="section_information-stock">Stock disponible</span>
        ) : (
          <span className="section_information-stock">Sin Stock</span>
        )}
        <span className="section_information-price">${formattedPrice}</span>
        <div className="section_information-aomunt-container">
          <span className="section_information-amount">Cantidad:</span>
          <select
            id="opciones"
            name="opciones"
            className="section_information-amount-options"
          >
            <option value="opcion1">1 unidad</option>
            <option value="opcion2">2 unidades</option>
            <option value="opcion3">3 unidades</option>
            <option value="opcion3">4 unidades</option>
            <option value="opcion3">5 unidades</option>
          </select>
        </div>
        <div className="section_information-container-button">
          <button className="section_information-buyNow-button">
            Comprar ahora
          </button>
          <button className="section_information-addToCart-button">
            Agregar al carrito
          </button>
        </div>
      </section>
    </div>
  );
}
