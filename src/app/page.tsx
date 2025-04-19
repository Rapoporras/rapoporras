"use client";
import { Experience } from "@/components/Experience/Experience";
import { ModeButton } from "@/components/ModeButton/ModeButton";
import ProyectsTabs from "@/components/ProyectsTabs/ProyectsTabs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex  min-h-screen flex-col items-center justify-between p-5 py-12 md:px-24 xl:px-36">
      <div className={"header"}>
        <div className={"profile"}>
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocLLkhc55Io7EJFHb1hGnLDNC_Z6vuizmCih_k2tWwvivDBWDzpz=s288-c-no"
            alt="Profile"
            className={"profileImage"}
          />
          <span className={"status uppercase"}>Open to Work</span>
        </div>
        <h1 className={"name"}> Ignacio Porras Ibáñez</h1>
        <ul>
          <li>
            +8 years of experience.{" "}
            <span className={"highlight uppercase"}>
              Full Stack Developer and Web Designer
            </span>{" "}
          </li>
          <li>
            2023-2024.{" "} 
            <span className={"highlight uppercase"}>
              MASTER IN VIDEO GAME CREATION: SPECIALIZATION IN DESIGN AND
              PROGRAMMING UMA
            </span>{" "}
          </li>
        </ul>
        <p className={"experience"}>
          Málaga, Spain. Passionate about video games since childhood, I combine
          my experience in full stack web development with studies in game
          design. I never shy away from a challenge, and in my spare time, I
          explore 3D printing and electronics to bring innovation to every
          project I undertake.
        </p>
        <div className={"buttons"}>
          <Link
            href={"mailto:ignacioporras93@gmail.com"}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-white border border-teal-600 rounded-lg px-4 py-2 hover:bg-teal-700"
          >
            Contact me
          </Link>
          <Link
            href="https://www.linkedin.com/in/ignacio-porras-iba%C3%B1ez/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-white border border-teal-600 rounded-lg px-4 py-2 hover:bg-teal-700"
          >
            LinkedIn
          </Link>
        </div>
      </div>

      <Experience />

      <div className="w-full">
        <h1 className="text-3xl text-white my-5">Projects</h1>
        <ProyectsTabs />
      </div>
    </main>
  );
}
