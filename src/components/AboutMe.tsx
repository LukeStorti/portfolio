import { Dot } from "lucide-react";
import AboutMeImage from "./AboutMeImage";
import AboutMeTabs from "./AboutMeTabs";

const AboutMe = () => {
  return (
    <section className="my-20">
      <div className="container flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <Dot size={45} className="text-primary" />
          <h2 className="font-poppins text-3xl font-bold">About me</h2>

          <Dot size={45} className="text-primary" />
        </div>
        <div className="my-12 flex flex-col-reverse sm:flex-row justify-center sm:justify-evenly items-center sm:items-start w-full gap-8">
          <AboutMeImage />
          <AboutMeTabs />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
