import './GiftPromo.css'
import iphoneHero from '../../assets/iphone-hero.jpg'
import cargadorHero from "../../assets/cargador-hero.webp";

export default function GiftPromo() {
  return (
    <div className="giftPromo_container">
      <div className="giftPromo_container_title">
        <h3>¡Llévate un cargador GRATIS con la compra de cualquier equipo!</h3>
      </div>
      <div className="giftPromo_container_images">
        <img src={iphoneHero} />
        <img src={cargadorHero} />
      </div>
    </div>
  );
}

