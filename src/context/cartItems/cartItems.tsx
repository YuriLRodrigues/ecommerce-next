import { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<string[]>([]);

  const addProduct = (product: any) => {
    const items = JSON.parse(localStorage.getItem("shopping-cart")) || [];
    console.log(items)
    const itemExist = items.filter((item: any)=> item.name === product.name)
    console.log(itemExist)
    if (itemExist.length > 0) {
      console.log('entrou')
      const index = items.findIndex((item: any)=> item.name === product.name)
      console.log(index)
      items[index].quantity += 1
      setCart(items)
    }
    const updatedCart = [...cart, product];
    localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
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
