"use client";
import { ModeButton } from "@/components/ModeButton/ModeButton";
import ProyectsTabs from "@/components/ProyectsTabs/ProyectsTabs";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between p-24 bg-gray-800">
      <div>
        {" "}
        //Presentacion
        <div>
          <Image src="" height={10} width={10} alt="img profile" />{" "}
          <div> Disponible para trabajar</div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">{t("title")}</h1>
          <p className="text-white">{t("description")}</p>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Contactame
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Linkedin
            </button>
          </div>
        </div>
      </div>
      <div>
        //Experiencia
        <div>
          <h2 className="text-2xl font-bold text-white">{t("experience")}</h2>
        </div>
      </div>
      <div className="w-full">
        <ProyectsTabs />
      </div>
    </main>
  );
}
