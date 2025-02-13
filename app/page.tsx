"use client";

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight-new";
import Image from "next/image";
import Link from "next/link";
import { InViewImagesGrid } from "@/components/ui/image_grid";
import { ChevronsUpDownIcon } from "@/components/ui/chevrons-up-down";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconChevronRight,
} from "@tabler/icons-react";

const logo = "/logo.svg";

const words = [
  "Softwareoptimierung",
  "Leistungsmessung",
  "BEDI-Reinigung",
  "Langstreckenerprobung",
  "Hochleistungsumbauten",
  "Sportwagen-Wartung",
  "Transport von Luxusfahrzeugen",
];

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
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
    <div className="relative w-full font-satoshi">
      <div className="md:h-screen w-full flex flex-col items-center justify-center">
        <div className="hidden md:block">
          <Spotlight />
        </div>
        <div className="flex justify-center pt-24 md:pt-60">
          <Image
            src={logo}
            alt="Company Logo"
            width={1500} // Erhöhe die Breite
            height={500} // Erhöhe die Höhe
            priority
            className=""
          />
        </div>
        <div className="text-base md:text-4xl text-center mx-auto text-muted-foreground pt-10 md:pt-20">
          Wir bieten die passenden Lösungen im Bereich...{" "}
          <FlipWords
            className="text-xl md:text-5xl font-satoshi font-black text-white text-center pt-4"
            words={words}
          />
        </div>
        <div className="flex flex-col items-center pt-6 space-y-4">
          <Link href="/configurator">
            <HoverBorderGradient containerClassName="rounded-full" as="button">
              <div className="flex items-center text-sm space-x-2 text-zinc-300 font-satoshi">
                <span>&nbsp;Tuning konfigurieren</span>
                <IconChevronRight className="h-4 w-4 text-zinc-300" />
              </div>
            </HoverBorderGradient>
          </Link>
        </div>
        <div className="relative justify-center items-center mt-auto pb-5 text-zinc-300 text-sm hidden md:flex">
          <ChevronsUpDownIcon />
        </div>
      </div>
      <div className="flex flex-col items-center pt-32 space-y-4 hyphens-auto p-6">
        <div className="w-11/12 text-center mx-auto">
          <p className="md:w-[600px] mx-auto text-2xl md:text-4xl font-light hyphens-none text-zinc-300">
            Unsere Philosophie
          </p>
          <p className="md:w-[750px] mx-auto pt-6 text-xl md:text-3xl font-semibold text-zinc-300">
            &ldquo;Perfektion ist nicht erreichbar, aber wenn wir Perfektion
            anstreben, können wir Exzellenz erreichen.&rdquo; - Vince Lombardi
          </p>
          <p className="md:w-[650px] mx-auto pt-6 text-base md:text-xl font-light text-muted-foreground">
            Bereits seit 2017 sind wir umfassend mit dem Thema der
            Kennfeldapplikation vertraut. Durch die Faszination für aufgeladene
            Verbrennungskraftmaschinen, haben wir es uns zur Hauptaufgabe
            gemacht ein kompetenter, transparenter & zuverlässiger
            Ansprechpartner im Thema Leistungssteigerung & Modifikation zu sein,
            mit dem Schwerpunkt Deutscher Premiumhersteller. Durch unsere
            Erfahrung der letzten 8 Jahre in dieser Branche, bieten wir unsere
            Kompetenzen nun unteranderem auch für Lamborghini, McLaren, Aston
            Marton, Ferrari, Porsche & Bugatti an. Durch inzwischen langjährige
            Partnerschaften in die Industrie, sind wir optimal vernetzt und
            können für jeden Kundenwunsch das passende Ergebnis erzielen.
            Qualität ist bei uns keine Aufgabe, sondern ein Standard.
          </p>
        </div>
      </div>
      <div className="pt-32 md:pt-80">
        <h1 className="md:mb-12 mb-6 text-xl md:text-3xl font-bold text-center text-zinc-300 hyphens-auto">
          Impressionen aus dem <br /> vergangenen Jahr
        </h1>
        <InViewImagesGrid />
      </div>
      <div className="hidden">
        <BentoGrid className="pt-24 md:pt-52 max-w-4xl mx-auto md:auto-rows-[20rem] mb-20">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={`${item.className} font-satoshi`}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
