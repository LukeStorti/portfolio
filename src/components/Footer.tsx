import { Github, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 px-8 w-full">
      <div className="flex justify-between">
        <Logo
          title="Copyright 2024 ©"
          titleStyles="font-poppins text-xs font-medium"
          iconSize={15}
        />
        <div className="hidden sm:flex items-center gap-x-4">
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
      <a
        href="https://storyset.com/profile"
        target="_blank"
        className="font-poppins text-xs px-8 text-secondary"
      >
        Profile illustrations by Storyset
      </a>
    </footer>
  );
};

export default Footer;
