import { PROJECTDATA } from "@/constants";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div className="my-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {PROJECTDATA.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          subtitle={project.subtitle}
          image={project.image}
          link={project.link}
          github={project.github}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
