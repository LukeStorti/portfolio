"use client";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { ModeToggle } from "./mode-toggle";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween" }}
      className="flex justify-between px-4 py-8 items-center h-14 "
    >
      <Logo title="luke storti dev" titleStyles=" text-lg font-medium" />
      <div className="flex gap-x-2 items-center">
        <Nav />
        <MobileNav />
        <ModeToggle />
      </div>
    </motion.header>
  );
};

export default Header;
