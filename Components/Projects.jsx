import React from "react";

import propertyImg from "../public/Assets/Projects/property.jpg";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id="project" className=" w-full">
      <div className=" max-w-[1240px] mx-auto px-2 py-16">
        <p className=" text-xl tracking-widest uppercase">Projects</p>
        <h2>What i build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            ProjectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
