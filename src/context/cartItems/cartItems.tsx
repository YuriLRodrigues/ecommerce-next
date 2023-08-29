import { ProductCardProps } from "@/app/types/productCardType";
import { createContext, useContext } from "react";

type CartContextProps = {
  addProduct: (product: ProductCardProps) => void
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

  const addProduct = (product: any) => {
    const newProduct = {...product, quantity: 1}
    const itemsInLS = localStorage.getItem("shopping-cart")
    const items = itemsInLS ? JSON.parse(itemsInLS) : [];
    const itemExist = items.findIndex((item: any)=> item.id === product.id)
    
    if (itemExist >= 0) {
      items[itemExist].quantity += 1
      localStorage.setItem("shopping-cart", JSON.stringify(items))
      return
    }
    const allProducts = [...items, newProduct]
    localStorage.setItem("shopping-cart", JSON.stringify(allProducts))
  };

  return (
    <CartContext.Provider value={{ addProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
