import { IconType } from "react-icons";

export interface Language {
  id: string;
  name: string;
  color: string;
}

export interface TExperience {
  id: string;
  title: string;
  company: string;
  time_unit: string;
  languajes: Language[];
  working: boolean;
  time: number;
  desc: string;
}

export interface TimelineProps {
  experiences: TExperience[];
}

export interface Framework {
  id: string;
  name: string;
  color: string;
  icon: IconType;
}

export interface Award {
  id: string;
  name: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  frameworks: Framework[];
  order: number;
  desc: string;
  desc_en: string;
  awards: Award[];
  github: string | null;
  url: string | null;
  isHackathon: boolean;
  image: string | null;
  category: string;
}
