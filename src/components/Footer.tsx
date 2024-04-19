import { Github, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 px-8">
      <div className="container mx-auto flex  justify-between">
        <Logo
          title="Copyright 2024 ©"
          titleStyles="font-poppins text-xs font-medium"
          iconSize={15}
        />
        <div className="flex items-center gap-x-4">
          <Link href="https://github.com/LukeStorti" target="_blank">
            <Github />
          </Link>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <Youtube />
          </Link>
          <Link href="https://twitter.com/nextjs" target="_blank">
            <Twitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
