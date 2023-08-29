import Link from "next/link";

export default function Home() {
  return (
    <section className="pt-4 md:pt-20 text-center h-auto flex flex-col gap-4 items-center justify-center">
      <h5 className="md:text-6xl md:w-7/12 text-2xl w-8/12 tracking-wide font-extralight">O melhor jeito de comprar o que voce ama!</h5>
      <p className="w-11/12 pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, pariatur, molestiae dolore necessitatibus optio obcaecati, mollitia architecto saepe veniam reiciendis cumque? Excepturi architecto reprehenderit iusto voluptates tenetur temporibus rerum repellendus?</p>
      <button className="border-2 rounded-md bg-zinc-900 p-4 text-white"><Link href={'/products'}>Conheça nossos produtos</Link></button>
    </section>
  )
}
