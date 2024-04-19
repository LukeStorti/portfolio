"use client";
import { NAVLINKS } from "@/constants";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Nav = () => {
  const path = usePathname();
  return (
    <div className="hidden sm:flex items-center gap-x-8 ">
      {NAVLINKS.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className="capitalize font-poppins relative hover:text-primary transition-all"
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className="absolute left-0 top-full h-[2px] bg-primary w-full"
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
