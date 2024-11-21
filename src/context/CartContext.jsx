import { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context)
      throw new Error("useCart must be used within a CartProvider");
    return context;
}

export function CartProvider ({ children }) {

  const [cart, setCart] = useState([])
  const [itemsAmount, setItemsAmount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
 
  useEffect(() => {
  
    const checkTotalItems = () => {
      const items = cart.length
      setItemsAmount(items)
    };
    checkTotalItems();

  }, [cart])

  useEffect(() => {
    
    const checkTotalPrice = () => {
      
      const prices = cart.map((product) => product.product.data.price);

      const totalSum = prices.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);

      setTotalPrice(totalSum);
      console.log(totalSum)      
    }
    checkTotalPrice()
  }, [cart])

  const addToCart = (product) => {
    // Chequear si el producto esta en el carrito a traves del indice
    const productInCartIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );

    // Si el Array es muy grande, structuredClone tarda demasiado al hacer una copia profunda, mejor solucion seria un
    // map o un slice.
    // Spread operator no seria una solucion porque hace una copia superficial y esto nos podria traer problemas.

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      return setCart(newCart);
    }

    // Si el producto no esta en el carrito

    setCart((prevState) => [
      ...prevState,
      {
        product
      },
    ]);
  };

  const removeToCart = (productId) => {

    setCart((prevState) =>
      prevState.filter((item) => {
        const {id} = item.product.data
        const itemId = id

        return (
          itemId !== productId
        )
      })
    );
  };

  const clearToCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeToCart,
        clearToCart,
        itemsAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );

}