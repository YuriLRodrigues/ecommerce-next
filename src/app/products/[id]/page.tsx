'use client'
import { useCartContext } from "@/context/cartItems/cartItems";
import products from "@/database.json";

export default function ProductDetails({ params }: { params: { id: number } }) {
  const product = products.filter((prod) => prod.id == params.id);
  const { addProduct } = useCartContext();
  
  return (
    <section>
      {product.map((prod) => (
        <article
          key={prod.id}
          className="mx-auto flex flex-col items-center justify-center"
        >
          <img src={prod.imageUrl} width={600} height={500} alt={prod.name} />
          <h2 className="font-bold text-lg">{prod.name}</h2>
          <p className="py-4 w-11/12">{prod.description}</p>
          <h5>Qnt. em estoque: {prod.inStock}</h5>
          <button onClick={()=> addProduct(prod)} className="mt-4 p-2 text-white bg-zinc-900 mb-4 rounded-md w-10/12">
            Comprar agora
          </button>
        </article>
      ))}
    </section>
  );
}
