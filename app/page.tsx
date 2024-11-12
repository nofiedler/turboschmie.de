"use client";

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconChevronRight,
} from "@tabler/icons-react";

const logo = "/logo.svg";

const words = [
  "Motoroptimierung",
  "Steuergeräte-Abstimmung",
  "Steuergeräte-Codierung",
  "Fahrzeugreinigung",
  "Sportwagen-Wartung",
  "Sichere Autoeinlagerung",
  "Transport von Luxusfahrzeugen",
  "Automobil-Logistik",
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
      <div className="min-h-screen w-full flex flex-col items-center justify-center pt-24 md:pt-44">
        <div className="flex justify-center">
          <Image
            src={logo}
            alt="Company Logo"
            width={1200}
            height={300}
            priority
          />
        </div>
        <div className="text-2xl md:text-4xl text-center mx-auto text-neutral-600 font-light pt-10 md:pt-36">
          Wir liefern{" "}
          <a className="text-neutral-100 underline underline-offset-4 decoration-slate-100 decoration-1">
            Expertenlösungen
          </a>{" "}
          für Hochleistungssportwagen... <br />
          <FlipWords
            className="text-3xl md:text-5xl font-bold text-neutral-100 text-center pt-4 md:pt-8"
            words={words}
          />
        </div>
        <div className="flex justify-center pt-6">
          <HoverBorderGradient containerClassName="rounded-full" as="button">
            <div className="flex items-center space-x-2">
              <span>&nbsp;Zu unseren Leistungen</span>
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
    </div>
  );
}
