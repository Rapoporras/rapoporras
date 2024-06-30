import React, { useEffect, useState } from "react";
import Timeline from "../Timeline/Timeline";
import axios from "axios";
import { TExperience } from "@/app/types/types";
import { PacmanLoader } from "react-spinners";

export const Experience = () => {
  const [experiences, setExperiences] = useState<TExperience[]>([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get<TExperience[]>("/api/experience")
      .then((response) => {
        setExperiences(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-3xl text-white my-5">Experience</h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <PacmanLoader
            color={"#008080"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />{" "}
        </div>
      ) : (
        <Timeline experiences={experiences} />
      )}
    </div>
  );
};
