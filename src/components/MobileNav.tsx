import React from "react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import { NAVLINKS } from "@/constants";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div className="flex sm:hidden cursor-pointer">
      <Sheet>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <Logo />
          </SheetHeader>
          <div className="flex flex-col gap-y-8 mt-4 justify-center items-center">
            {NAVLINKS.map((link, index) => {
              return (
                <SheetClose asChild key={index}>
                  <Link
                    href={link.path}
                    className="capitalize  relative hover:text-primary transition-all"
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
