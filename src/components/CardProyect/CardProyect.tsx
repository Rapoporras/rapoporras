// src/components/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  codeLink?: string;
  previewLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  technologies,
  codeLink,
  previewLink,
}) => {
  return (
    <div className="bg-gray-800  m-2 p-4 rounded-lg shadow-lg flex w-full md:w-1/3">
      <img src={image} alt={title} className="w-1/3 rounded-lg" />
      <div className="ml-4">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <div className="flex space-x-2 mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white px-2 py-1 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex space-x-2">
          {codeLink && (
            <a
              href={codeLink}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Code
            </a>
          )}
          <a
            href={previewLink}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
