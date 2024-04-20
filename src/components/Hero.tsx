import { Github, Send } from "lucide-react";
import Link from "next/link";

import Avatar from "./Avatar";

import Skills from "./Skills";
import { buttonVariants } from "./ui/button";

const Hero = () => {
  return (
    <section className="flex my-12">
      <div className="container flex flex-col-reverse md:flex-row items-center sm:items-start justify-evenly">
        <div className="flex flex-col space-y-4 w-full md:w-1/2 px-12 my-12">
          <h2 className="font-poppins text-3xl font-medium">Front-End React Developer 👋</h2>
          <p className="font-poppins text-2xl">
            Hi, I'm Luke. A passionate Front-End Developer based in South Africa 📍
          </p>
          <div className="flex space-x-2 items-center">
            <Link
              href="https://github.com/LukeStorti"
              target="_blank"
              className={buttonVariants({ variant: "outline" })}
            >
              <Github />
            </Link>
            <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
              <Send />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Avatar />
        </div>
      </div>
    </section>
  );
};

export default Hero;