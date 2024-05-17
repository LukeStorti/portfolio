import { Dot } from "lucide-react";
import ProjectCard from "./ProjectCard";

const FeaturedProject = () => {
  return (
    <div className="my-8 w-full flex flex-col items-center">
      <div className="flex items-center space-x-2">
        <Dot size={45} className="text-primary" />
        <h2 className="text-2xl font-bold">Featured Project</h2>
        <Dot size={45} className="text-primary" />
      </div>
      <div className="flex flex-col md:flex-row justify-around mt-8 w-full">
        <ProjectCard
          image="/images/Paws.png"
          title="Paws Animal Adoption"
          subtitle="A web app that connects animal adoption NPOs and people who are looking to adopt."
          github="https://github.com/LukeStorti/paws-animal-adoption"
          link="https://paws-animal-adoption.vercel.app"
        />
        <div className="flex flex-col space-y-2 items-start w-full md:w-1/2 my-4">
          <h3 className="text-2xl mt-2 font-semibold">Paws</h3>
          <p>
            Paws is a web app that connects animal adoption NPOs and people looking to adopt. The
            goal of this project is to help animals in shelters find forever homes by connecting
            NPOs to people who are looking to adopt.
          </p>
          <p>
            There are many features I would still love to add and hope to add in the future, such
            as:
          </p>

          <li>NPO Verification</li>
          <li>Real time chat</li>
          <p>Made with Next js, tailwind, shadcn, supabase & Kinde.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
