import './Products.css'
import Card from '../cardProduct/Card'
import { useProducts } from '../../context/ProductsContext'


export default function Products() {

  const { products } = useProducts();

  const getImageIds = (product) => {
    const imageIds = []; // Array para almacenar los imageIds
    const {images} = product
    
    images.forEach((image) => {
      const id = image.imageId
      imageIds.push(id);
    })
    return imageIds; // Retorna el array con todos los imageIds
  }; 

  return (
    <div className="products_container">
      <ul className="products_ul">
        {products.map((product) => {

          return (
            <li className="products_li" key={product.id}>
              <Card product={product} imageId={getImageIds(product)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
