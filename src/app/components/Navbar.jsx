import React, { useEffect } from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconHome,
  IconBriefcase,
  IconFolders,
  IconUsers,
  IconHelp,
  IconMessage,
} from "@tabler/icons-react";

const Navbar = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "Services",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: "Projects",
      icon: (
        <IconFolders className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Team",
      icon: (
        <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#team",
    },
    {
      title: "Testimonials",
      icon: (
        <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#testimonials",
    },
    {
      title: "FAQs",
      icon: (
        <IconHelp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#faqs",
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