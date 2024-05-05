import { Dot } from "lucide-react";
import ProjectsList from "@/components/Projects";
import FeaturedProject from "@/components/FeaturedProject";
import { Separator } from "@/components/ui/separator";
const Projects = () => {
  return (
    <section className="my-12 px-4">
      <div className="container flex flex-col items-center">
        <FeaturedProject />

        <div className="flex items-center space-x-2">
          <Dot size={45} className="text-primary" />

          <p className="my-8">Some of the things I have built</p>
          <Dot size={45} className="text-primary" />
        </div>
        <Separator />
        <ProjectsList />
      </div>
    </section>
  );
};

export default Projects;
