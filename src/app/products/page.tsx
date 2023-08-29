import products from '@/database.json'
import ProductCard from '../components/ProductCard';

export default function Products() {
  return (
    <>
      <h2 className='font-bold text-2xl pt-6 pl-2'>Nossos Produtos</h2>
      <section className="w-11/12 grid grid-cols-auto-fit-300 gap-2 mx-auto items-center justify-center">
        {products.map((product)=> (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </>
  );
}
