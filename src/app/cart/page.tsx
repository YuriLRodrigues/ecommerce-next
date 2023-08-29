"use client";
import { useState } from "react";
import { ProductCardProps } from "../types/productCardType";

export default function Cart() {
  const [itemsInCart, setItemsInCart] = useState<ProductCardProps[]>(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  const removeItem = (item: ProductCardProps) => {
    if (item.quantity === 1) {
      const oldItems = itemsInCart.filter(
        (itemCart) => itemCart.id !== item.id
      );
      setItemsInCart(oldItems);
      localStorage.setItem("shopping-cart", JSON.stringify(oldItems));
      return;
    }
    const itemUpdate = itemsInCart.findIndex(
      (itemCart) => itemCart.id === item.id
    );
    itemsInCart[itemUpdate].quantity -= 1;
    localStorage.setItem("shopping-cart", JSON.stringify(itemsInCart));
    setItemsInCart(JSON.parse(localStorage.getItem("shopping-cart")!));
  };

  const appendItem = (id: number) => {
    const items = JSON.parse(localStorage.getItem("shopping-cart")!);
    const indexItem = items.findIndex(
      (itemCart: ProductCardProps) => itemCart.id === id
    );
    if (indexItem !== -1) {
      items[indexItem].quantity += 1;
      setItemsInCart(items)
      localStorage.setItem("shopping-cart", JSON.stringify(items));
    }
  };

  return (
    <section className="w-11/12 flex flex-col justify-center items-center mx-auto">
      <table className="w-full">
        <thead className="border-b-2">
          <tr>
            <th>Product Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="border-b-2">
          {itemsInCart.map((item) => (
            <tr key={item.id} className="mx-auto text-center">
              <td className="flex items-center justify-center">
                <img src={item.imageUrl} alt="" width={70} height={70} />
              </td>
              <td>{item.name}</td>
              <td>
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>
                <button
                  onClick={() => removeItem(item)}
                  className="bg-gray-500 text-white rounded px-0.5"
                >
                  -
                </button>{" "}
                {item.quantity}{" "}
                <button
                  onClick={() => appendItem(item.id)}
                  className="bg-gray-500 text-white rounded px-0.5"
                >
                  +
                </button>
              </td>
              <td>
                {(item.quantity! * item.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex justify-end mt-2 pr-2">
        <strong>
          Total -{" "}
          {itemsInCart
            .reduce((total, item) => total + item.quantity! * item.price, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </strong>
      </div>
    </section>
  );
}
