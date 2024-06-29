import { Project } from "@/app/types/types";
import getLanguageIcon from "@/lib/frameworks";
import React from "react";
import { IconType } from "react-icons";

export const ProjectCard: React.FC<Project> = ({
  title,
  frameworks,
  desc,
  github,
  url,
  image,
  awards,
  isHackathon,
}) => {
  const truncate = (text: string, maxChars: number) => {
    return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
  };

  return (
    <div className="p-3 w-full md:w-1/2  self-stretch">
      <div className="bg-[#121212] rounded-lg shadow-md p-3 w-full  flex flex-col  items-center">
        {image ? (
          <div className="flex-shrink-0 bg-white w-full  rounded-md">
            <img
              src={image}
              alt={title}
              className="w-full  h-64 object-cover rounded-md"
            />
          </div>
        ) : (
          <div className="flex-shrink-0 w-full md:w-64 h-64 object-cover rounded-md"></div>
        )}
        <div className=" mt-4 flex-grow">
          <div className="flex justify-start items-center h-9">
            <h2 className="text-white text-xl font-bold">{title}</h2>
          </div>
          {isHackathon && (
            <div className="flex flex-wrap mt-4 gap-2">
              <span className="text-xs text-blue-100 bg-blue-500 rounded-full px-2 py-1 inline-block ">
                Hackathon Project
              </span>
              {awards.map((award) => (
                <span
                  key={award.id}
                  className="text-xs text-white px-2 py-1 bg-gray-800 rounded-full"
                  style={{ backgroundColor: award.color }}
                >
                  {award.name}
                </span>
              ))}{" "}
            </div>
          )}

          <p className="text-gray-400 mt-4 text-justify">
            {truncate(desc, 150)}
          </p>
          <div className="flex flex-wrap mt-4 gap-2">
            {frameworks.map((framework) => {
              const Icon = getLanguageIcon(framework.name);
              return <>{Icon && <Icon size={24} />}</>;
            })}
          </div>

          <div className="flex mt-4 gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white border border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Code
              </a>
            )}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white border border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Preview
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
