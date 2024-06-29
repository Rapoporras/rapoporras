"use client";
import { Experience } from "@/components/Experience/Experience";
import { ModeButton } from "@/components/ModeButton/ModeButton";
import ProyectsTabs from "@/components/ProyectsTabs/ProyectsTabs";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="w-full flex  min-h-screen flex-col items-center justify-between p-5 md:p-24">
      <div className={"header"}>
        <div className={"profile"}>
          <img
            src="/path/to/profile.jpg"
            alt="Profile"
            className={"profileImage"}
          />
          <span className={"status"}>Disponible para trabajar</span>
        </div>
        <h1 className={"name"}>Hey, soy midudev</h1>
        <p className={"experience"}>
          +15 años de experiencia.{" "}
          <span className={"highlight"}>
            Ingeniero de Software y Creador de Contenido sobre Programación
          </span>{" "}
          de Barcelona, España. Especializado en el desarrollo de aplicaciones
          web únicas.
        </p>
        <div className={"buttons"}>
          <button className={"button"}>Contáctame</button>
          <button className={"button"}>LinkedIn</button>
        </div>
      </div>
      <div>
        <Experience />
      </div>
      <div className="w-full">
        <ProyectsTabs />
      </div>
    </main>
  );
}
