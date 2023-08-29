"use client";
import React from "react";
import { ProductType } from "../types/productCardType";
import { useCartContext } from "@/context/cartItems/cartItems";
import { useRouter } from 'next/navigation';

const ProductCard = ({ product }: ProductType) => {
  const { addProduct } = useCartContext();
  const { id, imageUrl, name, price } = product;
  const router = useRouter()

  return (
    <article
      className="cursor-pointer mx-auto my-4 text-center border-2 rounded-lg border-gray-200"
    >
      <img src={imageUrl} height={300} width={300} alt={name} onClick={() => router.push(`/products/${id}`)} />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="font-xl font-medium mb-4 text-gray-600">
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button
        onClick={() => addProduct(product)}
        className="p-2 text-white bg-zinc-900 mb-4 rounded-md w-10/12"
      >
        Adicionar ao Carrinho
      </button>
    </article>
  );
};

export default ProductCard;
