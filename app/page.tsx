"use client";

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight-new";
import Image from "next/image";
import Link from "next/link";
import { InViewImagesGrid } from "@/components/ui/image_grid";
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
      <div className="min-h-screen w-full flex flex-col items-center justify-center pt-24 md:pt-60">
        <div className="md:h-screen">
          <div className="hidden md:block">
            <Spotlight />
          </div>
          <div className="flex justify-center">
            <Image
              src={logo}
              alt="Company Logo"
              width={1200}
              height={300}
              priority
              className="w-full max-w-xs md:max-w-full"
            />
          </div>
          <div className="text-xl md:text-4xl text-center mx-auto text-neutral-600 font-satoshi font-light pt-10 md:pt-20">
            Wir liefern{" "}
            <a className="text-neutral-100 underline underline-offset-4 decoration-slate-100 decoration-1">
              Expertenlösungen
            </a>{" "}
            für Hochleistungssportwagen... <br />
            <FlipWords
              className="text-2xl md:text-5xl font-satoshi font-black text-neutral-100 text-center pt-4"
              words={words}
            />
          </div>
          <div className="flex flex-col items-center pt-6 space-y-4">
            <Link href="/services">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
              >
                <div className="flex items-center text-sm space-x-2 font-satoshi">
                  <span>&nbsp;Zu unseren Leistungen</span>
                  <IconChevronRight className="h-4 w-4 text-white" />
                </div>
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:pt-6 pt-32 space-y-4 hyphens-auto">
          <div className="md:w-[600px] w-11/12 text-center text-white mx-auto">
            <p className="text-3xl md:text-4xl font-light hyphens-none">Unsere Philosophie</p>
            <br />
            <br />
            <p className="text-2xl md:text-3xl font-black">
              &ldquo;Perfektion ist nicht erreichbar, aber wenn wir Perfektion
              anstreben, können wir Exzellenz erreichen.&rdquo; - Vince Lombardi
            </p>
            <br />
            <p className="text-lg md:text-xl font-light">
              Bereits seit 2017 sind wir umfassend mit dem Thema der
              Kennfeldapplikation vertraut. Durch die Faszination für
              aufgeladene Verbrennungskraftmaschinen, haben wir es uns zur
              Hauptaufgabe gemacht ein kompetenter, transparenter &
              zuverlässiger Ansprechpartner im Thema Leistungssteigerung &
              Modifikation zu sein, mit dem Schwerpunkt Deutscher
              Premiumhersteller. Durch unsere Erfahrung der letzten 8 Jahre in
              dieser Branche, bieten wir unsere Kompetenzen nun unteranderem
              auch für Lamborghini, McLaren, Aston Marton, Ferrari, Porsche &
              Bugatti an. Durch inzwischen langjährige Partnerschaften in die
              Industrie, sind wir optimal vernetzt und können für jeden
              Kundenwunsch das passende Ergebnis erzielen. Qualität ist bei uns
              keine Aufgabe, sondern ein Standard.
            </p>
          </div>
        </div>
        <div className="pt-24 md:pt-48">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-white hyphens-auto">
            Impressionen <br /> aus dem vergangenen Jahr
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
    </div>
  );
}
