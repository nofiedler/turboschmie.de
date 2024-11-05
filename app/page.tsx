"use client";

import React from "react";
import Footer from "../components/ui/footer";
import { FlipWords } from "../components/ui/flip-words";
import { FloatingNav } from "../components/ui/floating-navbar";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconLayoutGrid,
  IconChevronRight,
} from "@tabler/icons-react";

const logo = "/logo.svg";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: (
      <IconLayoutGrid className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const words = [
  "Engine optimization",
  "ECU tuning",
  "Control unit coding",
  "Vehicle cleaning",
  "Sports car maintenance",
  "Secure car storage",
  "Luxury vehicle transport",
  "Automotive logistics",
];

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];

export default function Home() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <Content />
      <Footer />
    </div>
  );
}

const Content = () => {
  return (
    <div className="min-h-screen w-full flex-col items-center justify-center pt-44">
      <div className="flex justify-center">
        <img src={logo} alt="Logo" className="w-full h-auto" />
      </div>
      <div className="text-4xl text-center mx-auto text-neutral-600 font-light pt-36">
        We deliver{" "}
        <a className="text-neutral-100 underline underline-offset-4 decoration-slate-100 decoration-1">
          expert solutions
        </a>{" "}
        for high-performance sports cars... <br />
        <FlipWords
          className="text-5xl font-bold text-neutral-100 text-center pt-8"
          words={words}
        />
      </div>
      <div className="flex justify-center">
        <HoverBorderGradient containerClassName="rounded-full" as="button">
          <div className="flex items-center space-x-2">
            <span>&nbsp;Book Your Consultation</span>
            <IconChevronRight className="h-4 w-4 text-white" />
          </div>
        </HoverBorderGradient>
      </div>
      <div className="h-96"></div>
      <BentoGrid className="pt-96 max-w-4xl mx-auto md:auto-rows-[20rem] mb-20">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
};
