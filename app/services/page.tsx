"use client";

import React from "react";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";
import { PlusIcon } from "lucide-react";

export default function Services() {
  return (
    <div className="flex flex-col items-center md:pt-28">
      <h1 className="pt-6 text-3xl font-bold mb-6 text-center text-white">
        Unsere Leistungen
      </h1>
    <div className="md:w-[800px] w-5/6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex md:max-w-[270px] max-w-[550px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
          >
            <MorphingDialogImage
              src="Service1.jpg"
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50 text-2xl font-semibold">
                  Chiptuning
                </MorphingDialogTitle>
              </div>
              <button
                type="button"
                className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                aria-label="Open dialog"
              >
                <PlusIcon size={12} />
              </button>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto overflow-y-scroll scrollbar-hide relative flex h-auto w-full flex-col border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[600px]"
            >
              <MorphingDialogImage
                src="Service1.jpg"
                alt=""
                className="h-full w-full"
              />
              <div className="p-6">
                <MorphingDialogTitle className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
                  Kennfeldoptimierung
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  auch bekannt als Chiptuning
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <ul className="mt-2 text-muted-foreground list-disc pl-5">
                    <li>
                      von Stufe 1 bis zur Einzelabstimmung ist hier alles
                      möglich
                    </li>
                    <li>
                      Launch Control - NoLiftShift - Schubabschaltung -
                      MapSwitch
                    </li>
                    <li>DPF - AGR - AdBlue etc.</li>
                    <li>
                      bei Fahrzeugen bis 5 Jahre und &lt;100tkm zusätzlich mit
                      Garantie möglich
                    </li>
                    <li>Wiederherstellung des Werkszustands</li>
                  </ul>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>

        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex md:max-w-[270px] max-w-[550px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
          >
            <MorphingDialogImage
              src="Service2.jpg"
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50 text-2xl font-semibold">
                  Steuergeräte- <br /> Codierung
                </MorphingDialogTitle>
              </div>
              <button
                type="button"
                className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                aria-label="Open dialog"
              >
                <PlusIcon size={12} />
              </button>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative overflow-y-scroll scrollbar-hide flex h-auto w-full flex-col  border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[600px]"
            >
              <MorphingDialogImage
                src="Service2.jpg"
                alt=""
                className="h-full w-full"
              />
              <div className="p-6">
                <MorphingDialogTitle className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
                  Steuergeräte-Codierung
                </MorphingDialogTitle>

                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <p className="mt-2 text-muted-foreground">
                    Um das Feld der Applikationen umfassend abzudecken bieten
                    wir Ihnen zudem eine umfassende Beratung und Anwendung im
                    Bereich Steuergeräte-Codierung an. Egal ob
                    Aktivierung-/Deaktivierung von bereits verbauten oder
                    nachgerüsteten Komponenten, als auch die Nachrüstung selbst
                    sind bei uns kein Problem. Wir arbeiten ausschließlich mit
                    den offiziellen Endgeräten der jeweiligen Hersteller, um
                    unsere Qualität stets gewährleisten zu können.
                  </p>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>

        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex md:max-w-[270px] max-w-[550px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
          >
            <MorphingDialogImage
              src="Service3.jpg"
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50 text-2xl font-semibold">
                  BEDI- <br /> Reinigung
                </MorphingDialogTitle>
              </div>
              <button
                type="button"
                className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                aria-label="Open dialog"
              >
                <PlusIcon size={12} />
              </button>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative overflow-y-scroll scrollbar-hide flex h-auto w-full flex-col  border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[600px]"
            >
              <MorphingDialogImage
                src="Service3.jpg"
                alt=""
                className="h-full w-full"
              />
              <div className="p-6">
                <MorphingDialogTitle className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
                  BEDI-Reinigung
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  Reinigung der Ansaugwege
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <p className="mt-2 text-muted-foreground">
                    Bedi steht eigentlich für die Benzin-Direkteinspritzung
                    eines Ottomotors. Da durch dieses System die Ansaugkanäle
                    nicht mehr wie früher durch Kraftstoff selbst
                    &quot;mitgespült&quot; werden, entstehen durch moderne
                    System wie der Abgasrückführung, mit der Zeit Ruß- &
                    Ölkohleablagerungen, die schlussendlich den Ansaugtrakt
                    verkoken und so eine Verlustleistung zur Folge haben. Hier
                    können wir durch eine Kombination aus chemischer &
                    mechanischer Reinigung die Ansaugwege von diesen Rückstanden
                    restlos befreien und die ursprüngliche Leistung
                    zurückgewinnen.
                    <br />
                    Dieses Verfahren findet genauso Anwendung bei Dieselmotoren
                    wie z.B. den Common-Rail Generationen der VAG Gruppe.
                  </p>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>

        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex md:max-w-[270px] max-w-[550px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
          >
            <MorphingDialogImage
              src="Service4.jpg"
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50 text-2xl font-semibold">
                  KFZ- <br /> Einlagerung
                </MorphingDialogTitle>
              </div>
              <button
                type="button"
                className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                aria-label="Open dialog"
              >
                <PlusIcon size={12} />
              </button>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative overflow-y-scroll scrollbar-hide flex h-auto w-full flex-col border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[600px]"
            >
              <MorphingDialogImage
                src="Service4.jpg"
                alt=""
                className="h-full w-full"
              />
              <div className="p-6">
                <MorphingDialogTitle className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
                  KFZ-Einlagerung
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                  von Enthusiasten für Enthusiasten
                </MorphingDialogSubtitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <p className="mt-2 text-muted-foreground">
                    Wir bieten Ihnen die optimale Lösung zur Lagerung ihres
                    Lieblings. Unsere Räumlichkeiten sind beheizt,
                    videoüberwacht & werden täglich betreut. Zudem bieten wir
                    durch unsere Partner alle nötigen Dienstleistungen an, um
                    Ihr Fahrzeug rechtzeitig zum Saison-Beginn ideal
                    aufzustellen.
                    <br />
                    <br />
                    ​Aufgrund diverser Partnerschaften können wir folgende
                    Services zusätzlich anbieten:
                  </p>
                  <ul className="mt-2 text-muted-foreground list-disc pl-5">
                    <li>Ein- / Auslagerungsvorbereitung</li>
                    <li>Reifenservice</li>
                    <li>Achsvermessungen</li>
                    <li>Fahrzeugaufbereitung</li>
                    <li>Fahrzeugrestauration</li>
                    <li>Fahrzeugvermittlung</li>
                    <li>Fahrzeuginstandhaltung</li>
                    <li>Verkaufsvorbereitung</li>
                    <li>Wertgutachten</li>
                    <li>Gutachtenerstellung im Allgemeinen</li>
                  </ul>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>

        <MorphingDialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex md:max-w-[270px] max-w-[550px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
          >
            <MorphingDialogImage
              src="Service5.jpg"
              alt=""
              className="h-48 w-full object-cover"
            />
            <div className="flex grow flex-row items-end justify-between px-3 py-2">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50 text-2xl font-semibold">
                  Fahrzeug- <br /> transporte
                </MorphingDialogTitle>
              </div>
              <button
                type="button"
                className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                aria-label="Open dialog"
              >
                <PlusIcon size={12} />
              </button>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative overflow-y-scroll scrollbar-hide flex h-auto w-full flex-col border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[600px]"
            >
              <MorphingDialogImage
                src="Service5.jpg"
                alt=""
                className="h-full w-full"
              />
              <div className="p-6">
                <MorphingDialogTitle className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
                  Fahrzeugtransporte
                </MorphingDialogTitle>

                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <p className="mt-2 text-muted-foreground">
                    Sie suchen einen zuverlässigen Partner für Ihre
                    Fahrzeugvermittlung? Wir bieten Ihnen vom offenen
                    KFZ-Transport bis zum geschlossen Rennanhänger jede
                    Möglichkeit und lassen keine Extrawünsche außen vor.
                    <br />
                    <br />
                    Für ein Angebot senden Sie uns bitte eine Anfrage per Mail
                    mit folgenden Daten:
                  </p>
                  <ul className="mt-2 text-muted-foreground list-disc pl-5">
                    <li>Distanz der Strecke</li>
                    <li>Überführungsdatum</li>
                    <li>zu überführendes Fahrzeug</li>
                    <li>offener / geschlossener Transport</li>
                    <li>individuelle Wünsche</li>
                  </ul>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className="text-zinc-50" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
        </div>
      </div>
    </div>
  );
}
