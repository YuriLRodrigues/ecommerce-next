"use client";

import { CartProvider } from "@/context/cartItems/cartItems";
import { MenuProvider } from "@/context/menuIsOpen/menuIsOpen";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MenuProvider>
      <CartProvider>{children}</CartProvider>
    </MenuProvider>
  );
};
