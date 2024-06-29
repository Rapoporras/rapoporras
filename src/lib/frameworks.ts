// utils/languageIcons.tsx
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGooglecloud,
  SiJira,
  SiMulesoft,
  SiNextdotjs,
  SiVercel,
  SiTailwindcss,
  SiAndroid,
  SiIos,
  SiWordpress,
  SiFlutter,
} from "react-icons/si";
import { IconType } from "react-icons";
import { FaShopify, FaUnity } from "react-icons/fa6";

const getLanguageIcon = (language: string): IconType | null => {
  switch (language.toLowerCase()) {
    case "javascript":
      return FaJs;
    case "react js":
      return FaReact;
    case "html":
      return FaHtml5;
    case "css":
      return FaCss3Alt;
    case "git":
      return FaGitAlt;
    case "python":
      return FaPython;
    case "figma":
      return FaFigma;
    case "node.js":
      return FaNodeJs;
    case "postgresql":
      return SiPostgresql;
    case "mongodb":
      return SiMongodb;
    case "firebase":
      return SiFirebase;
    case "google cloud platform":
      return SiGooglecloud;
    case "jira":
      return SiJira;
    case "mulesoft":
      return SiMulesoft;
    case "next js":
      return SiNextdotjs;
    case "vercel":
      return SiVercel;
    case "tailwind css":
      return SiTailwindcss;
    case "android":
      return SiAndroid;
    case "ios":
      return SiIos;
    case "wordpress":
      return SiWordpress;
    case "flutter":
      return SiFlutter;
    case "unity":
      return FaUnity;
    case "shopify":
      return FaShopify;
    default:
      return null;
  }
};

export default getLanguageIcon;
