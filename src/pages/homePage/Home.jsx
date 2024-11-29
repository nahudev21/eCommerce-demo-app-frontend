import FiltersCategory from '../../components/filtersCategory/FiltersCategory';
import GiftPromo from '../../components/giftPromo/GiftPromo';
import Products from '../../components/products/Products'
import './Home.css'

export default function Home() {

  return (
    <div className="home">
      <GiftPromo />
      <FiltersCategory />
      <div className='products_container'>
        <Products />
      </div>
    </div>
  );
}
