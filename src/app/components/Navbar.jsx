  import React from "react";
  import { FloatingDock } from "./ui/floating-dock";
  import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
  } from "@tabler/icons-react";

  const Navbar = () => {
    const links = [
      {
        title: "Home",
        icon: (
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#home",
      },
      {
        title: "About",
        icon: (
          <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#about",
      },
      {
        title: "Services",
        icon: (
          <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#services",
      },
      {
        title: "Projects",
        icon: (
          <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#projects",
      },
      {
        title: "Twitter",
        icon: (
          <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
      {
        title: "GitHub",
        icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
      },
    ];

    return (
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4 items-center">
        <FloatingDock
          mobileClassName="translate-y-20"
          items={links}
        />
      </div>
    );
  }

  export default Navbar;