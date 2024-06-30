import React, { useEffect, useState } from "react";
import Timeline from "../Timeline/Timeline";
import axios from "axios";
import { TExperience } from "@/app/types/types";

export const Experience = () => {
  const [experiences, setExperiences] = useState<TExperience[] | null>(null);

  useEffect(() => {
    axios
      .get<TExperience[]>("/api/experience")
      .then((response) => {
        setExperiences(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-white my-5">Experience</h1>
      {experiences != null && <Timeline experiences={experiences} />}
    </div>
  );
};
