import React from "react";
import TechGlobe from "../components/ui/globe";

const Skill: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">
            Skills
          </h2>
          <div className="w-full h-[calc(100vh-200px)] min-h-[400px] max-h-[800px]">
            <TechGlobe />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Skill;
