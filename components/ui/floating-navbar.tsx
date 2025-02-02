"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const logo = "/logo.svg";

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 py-2 items-center justify-center space-x-4",
        "sm:top-10 sm:bottom-auto md:top-10 md:bottom-auto",
        "bottom-4 top-auto",
        className
      )}
    >
      <div className="flex justify-center">
          <Image
            src={logo}
            alt="Company Logo"
            width={150}
            height={300}
            priority
          />
        </div>
      <Separator className="h-6 w-[1px] bg-white/[0.2]" />
      {navItems.map((navItem: NavItem, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative items-center flex space-x-1 hover:text-white",  
            pathname === navItem.link ? "text-white" : "text-neutral-400"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </Link>
      ))}
      <Link href="/configurator">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-black text-white text-sm flex items-center space-x-2"
        >
          <span>Konfigurator</span>
        </HoverBorderGradient>
      </Link>
    </motion.div>
  );
};
