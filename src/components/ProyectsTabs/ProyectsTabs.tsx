import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { IconType } from "react-icons";
import { ProjectCard } from "../CardProyect/CardProyect";
import { Project } from "@/app/types/types";
import { ClipLoader, PacmanLoader } from "react-spinners";

export default function ProjectsTabs() {
  const [category, setCategory] = useState<string>("games");
  const [groupedProjects, setGroupedProjects] = useState<{
    [key: string]: Project[];
  }>({});
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get<Project[]>("/api/projects")
      .then((response) => {
        groupProjectsByCategory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const groupProjectsByCategory = (projects: Project[]) => {
    const grouped = projects.reduce((acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    }, {} as { [key: string]: Project[] });
    setGroupedProjects(grouped);
    setLoading(false);
  };

  return (
    <div className="flex w-full justify-center ">
      {loading ? (
        <PacmanLoader
          color={"#008080"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div className="w-full">
          <TabGroup>
            <TabList className="flex flex-col md:flex-row gap-4 border-t-2 md:border-t-0 border-b-2 border-teal-500 py-2">
              {Object.keys(groupedProjects).map((categoryName) => (
                <Tab
                  key={categoryName}
                  className="rounded-full py-1 px-3 text-sm font-semibold text-white focus:outline-none data-[selected]:bg-teal-500/10 data-[hover]:bg-teal-500/5 data-[selected]:data-[hover]:bg-teal-500/10 data-[focus]:outline-1 data-[focus]:outline-white"
                  onClick={() => {
                    setCategory(categoryName);
                  }}
                >
                  {categoryName}
                </Tab>
              ))}
            </TabList>

            <TabPanels className="mt-3">
              {Object.keys(groupedProjects).map((categoryName) => (
                <TabPanel key={categoryName} className="w-full rounded-xl  p-3">
                  <div className="flex flex-row flex-wrap ">
                    {groupedProjects[categoryName].map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      )}
    </div>
  );
}
