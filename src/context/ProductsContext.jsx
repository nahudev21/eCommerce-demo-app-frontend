import { useState, createContext, useContext, useEffect } from 'react'
import { 
  createProductRequest, 
  updateProductRequest,
  deleteProductRequest,
  getAllProductsRequest,
  getProductByIdRequest,
  getProductsByCategoryRequest,
  getProductsByBrandRequest,
  getProductsByNameRequest,
  getProductsByBrandAndNameRequest,
  getProductsByCategoryAndBrandRequest,
  countProductsByBrandAndNameRequest
} from '../api/product'

const ProductContext = createContext()

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export function ProductProvider ({ children }) {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])
  
  const createProduct = async (product) => {
    try {
      const res = await createProductRequest(product);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (product, id) => {
    try {
      const res = await updateProductRequest(product, id);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await deleteProductRequest(id);
      if (res.status === 204) setProducts(products.filter((task) => task._id !== id));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const res = await getAllProductsRequest();
      setProducts(res.data)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (id) => {
    try {
      const res = await getProductByIdRequest(id);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByCategory = async (category) => {
    try {
      const res = await getProductsByCategoryRequest(category);
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByBrand = async (brand) => {
    try {
      const res = await getProductsByBrandRequest(brand)
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByName = async (name) => {
    try {
      const res = await getProductsByNameRequest(name);
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByBrandAndName = async (brand, name) => {
    try {
      const res = await getProductsByBrandAndNameRequest(brand, name);
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByCategoryAndBrand = async (category, brand) => {
    try {
      const res = await getProductsByCategoryAndBrandRequest(category, brand);
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const countProductsByBrandAndName = async (brand, name) => {
    try {
      const res = await countProductsByBrandAndNameRequest(brand, name);
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct,
        updateProduct,
        deleteProduct,
        getProducts,
        getProduct,
        getProductsByCategory,
        getProductsByBrand,
        getProductsByName,
        getProductsByBrandAndName,
        getProductsByCategoryAndBrand,
        countProductsByBrandAndName,
      }}
    >
      {children}
    </ProductContext.Provider>
  )

}
