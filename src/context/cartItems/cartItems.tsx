import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<string[]>([]);

  const addProduct = (product: any) => {
    const newProduct = {...product, quantity: 1}
    const items = JSON.parse(localStorage.getItem("shopping-cart")) || [];
    const itemExist = items.findIndex((item: any)=> item.id === product.id)
    
    if (itemExist >= 0) {
      items[itemExist].quantity += 1
      localStorage.setItem("shopping-cart", JSON.stringify(items))
      return
    }
    const allProducts = [...items, newProduct]
    localStorage.setItem("shopping-cart", JSON.stringify(allProducts))
  };

  const removeProduct = (productId: number) => {
    const productIndex = cart.findIndex(
      (product: any) => product.id === productId
    );

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(productIndex, 1);
      localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
