import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers/providers";
import Header from "./components/Header";


const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "A basic ecommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
