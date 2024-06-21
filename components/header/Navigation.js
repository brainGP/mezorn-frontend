import React from "react";
import Link from "next/link";
import Button from "../Button";
import { navigation, navigations } from "@/constants";
import { XIcon } from "@/assets/icons";

const Navigation = ({ navRef, isNavOpen, toggleNavigation }) => {
  return (
    <nav
      ref={navRef}
      className={`lg:flex lg:items-center lg:justify-center lg:bg-transparent lg:static fixed inset-0 top-0 bg-black z-40 transform ${
        isNavOpen ? "translate-x-0" : "translate-x-full"
      } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between h-full w-full lg:p-0 relative">
        <Button
          onClick={toggleNavigation}
          className="bg-red-600 text-white rounded-lg lg:hidden absolute top-8 right-6"
        >
          <XIcon />
        </Button>

        <div className="flex flex-col lg:flex-row items-center justify-center text-white gap-6">
          {navigations.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              target="_blank"
              className="p-3 font-medium text-white transition-colors text-md lg:text-sm hover:text-white/80"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
