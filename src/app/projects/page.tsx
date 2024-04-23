import { Dot } from "lucide-react";
import ProjectsList from "@/components/Projects";
const Projects = () => {
  return (
    <section className="my-12 px-4">
      <div className="container flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <Dot size={45} className="text-primary" />
          <h2 className="text-3xl font-bold">Projects</h2>
          <Dot size={45} className="text-primary" />
        </div>
        <p>Some of the things I have built</p>
        <ProjectsList />
      </div>
    </section>
  );
};

export default Projects;
