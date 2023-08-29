"use client";
import { useMenuContext } from "@/context/menuIsOpen/menuIsOpen";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const { setMenuIsOpen, menuIsOpen } = useMenuContext();

  return (
    <header className="md:flex md:flex-row md:justify-between bg-zinc-900 text-white shadow-lg w-full p-4 relative z-[3]">
      <Link href="/">
        <h2 className="font-rubik">V-Ecommerce</h2>
      </Link>
      <nav>
        <div
          className="md:hidden absolute top-4 right-4 text-2xl"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          {!menuIsOpen && <AiOutlineMenu />}
          {menuIsOpen && <AiOutlineClose />}
        </div>

        <ul
          className={`pt-2 md:pt-0 md:flex md:items-center md:mr-4 md:static md:z-auto text-center absolute duration-500 z-[2] bg-zinc-900 ${
            menuIsOpen
              ? "translate-y-4 bg-zinc-100 w-full left-0 py-2 flex flex-col gap-2 items-center justify-center"
              : "-translate-y-[200%] md:translate-y-0 w-full left-0 "
          }`}
        >
          <li className="md:ml-8">
            <Link href={"/products"}>Produtos</Link>
          </li>
          <li className="md:ml-8">
            <Link href={"/cart"}>Carrinho</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
