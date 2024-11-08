import './Products.css'
import Card from '../cardProduct/Card'
import { useProducts } from '../../context/ProductsContext'


export default function Products() {

  const { products } = useProducts();

  return (
    <div className="products_container">
      <ul className="products_ul">
        {products.map((product) => {
          return (
            <li className="products_li" key={product.id}>
              <Card product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
