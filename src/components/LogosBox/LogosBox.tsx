// src/components/LogoBox.js
import React from "react";
interface LogoBoxProps {
  icon: React.ReactNode;
  name: string;
  count: string;
}
const LogoBox = ({ icon, name, count }: LogoBoxProps) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-white text-lg font-bold">{name}</div>
      <div className="text-gray-400">{count} logos</div>
    </div>
  );
};

export default LogoBox;
