import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ProjectCard from "../CardProyect/CardProyect";

const categories = [
  {
    name: "Games",
    posts: [
      {
        image: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen
        title: "SVGL - A beautiful library with SVG logos",
        description:
          "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
        technologies: ["Next.js", "Tailwind CSS"],
        codeLink: "#",
        previewLink: "#",
      },
      {
        image: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen
        title: "AdventJS - Retos de programación con JavaScript y TypeScript",
        description:
          "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
        technologies: ["Next.js", "Tailwind CSS"],
        previewLink: "#",
      },
    ],
  },
  {
    name: "Websites",
    posts: [
      {
        image: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen
        title: "SVGL - A beautiful library with SVG logos",
        description:
          "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
        technologies: ["Next.js", "Tailwind CSS"],
        codeLink: "#",
        previewLink: "#",
      },
      {
        image: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen
        title: "AdventJS - Retos de programación con JavaScript y TypeScript",
        description:
          "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
        technologies: ["Next.js", "Tailwind CSS"],
        previewLink: "#",
      },
    ],
  },
  {
    name: "Mobile Apps",
    posts: [
      {
        image: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen
        title: "SVGL - A beautiful library with SVG logos",
        description:
          "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
        technologies: ["Next.js", "Tailwind CSS"],
        codeLink: "#",
        previewLink: "#",
      },
      {
        image: "https://via.placeholder.com/150", // Reemplaza con la URL de la imagen
        title: "AdventJS - Retos de programación con JavaScript y TypeScript",
        description:
          "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
        technologies: ["Next.js", "Tailwind CSS"],
        previewLink: "#",
      },
    ],
  },
];

export default function ProyectsTabs() {
  return (
    <div className="flex h-screen w-full justify-center pt-24 px-4">
      <div className="w-full ">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <div className="flex flex-row flex-wrap  justify-around items-center ">
                  {posts.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
