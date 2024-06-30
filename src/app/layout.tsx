import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { FaLinkedin } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Ignacio Porras Ibañez",
  description:
    "Apasionado por los videojuegos desde la infancia,combino mi experiencia en programación web full stack con estudios en diseño de videojuegos. Nunca me rindo ante un desafío y en mis ratos libres exploro la impresión 3D y la electrónica para aportar innovación en cada proyecto que emprendo.",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={"en"}>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          {children}
          <div className=" w-full min-h-20 bg-teal-500/10 text-white flex flex-col md:flex-row justify-center items-center gap-5 p-10">
            <p className="text-center">
              &copy; 2024 Ignacio Porras Ibáñez. All rights reserved.
            </p>{" "}
            <Link
              href="https://www.linkedin.com/in/ignacio-porras-iba%C3%B1ez/"
              target="_blank"
              className="flex justify-center items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </Link>{" "}
            <Link
              href={"mailto:ignacioporras93@gmail.com"}
              className="flex justify-center items-center gap-2"
            >
              <FaMailBulk />
              Email
            </Link>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
