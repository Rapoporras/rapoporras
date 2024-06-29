// components/Timeline.tsx
import React from "react";
import "./Timeline.css";
import getLanguageIcon from "@/lib/frameworks";
interface Language {
  id: string;
  name: string;
  color: string;
}

interface Experience {
  id: string;
  title: string;
  company: string;
  time_unit: string;
  languajes: Language[];
  working: boolean;
  time: number;
  desc: string;
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className={"timeline"}>
      {experiences.map((exp) => (
        <div key={exp.id} className={"timelineItem"}>
          <div
            className={
              "timelineContent w-full flex flex-col md:flex-row justify-start items-start gap-5"
            }
          >
            <div className="w-full md:w-1/3">
              {" "}
              <h3 className={"title"}>{exp.title}</h3>
              <h4 className={"company"}>{exp.company}</h4>
              <p className={"time"}>
                {exp.time} {exp.time_unit}{" "}
                {exp.working && (
                  <span className="ml-2 rounded-md px-2 py-1 bg-[#008080] text-white uppercase font-light">
                    Actualmente
                  </span>
                )}
              </p>
            </div>
            <div className="w-full md:w-2/3 bg-cyan-900 p-4 rounded-xl">
              <p className={"desc"}>{exp.desc}</p>
              <div
                className={
                  "languages flex flex-wrap gap-2 justify-start items-center"
                }
              >
                {exp.languajes.map((lang) => {
                  const Icon = getLanguageIcon(lang.name);
                  return <>{Icon && <Icon size={24} />}</>;
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
