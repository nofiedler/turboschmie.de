"use client";
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
import { IconChevronRight } from "@tabler/icons-react";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Services_() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center">
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
          className="flex md:max-w-[270px] max-w-[280px] flex-col overflow-hidden border bg-zinc-900 border-zinc-800 text-zinc-300"
        >
          <MorphingDialogImage
            src="Service1.jpg"
            alt=""
            className="md:h-48 h-36 w-full object-cover"
          />
          <div className="flex grow flex-row items-end justify-between px-3 py-2">
            <div>
              <MorphingDialogTitle className="text-zinc-300 text-xl font-semibold">
                <br />
                Chiptuning
              </MorphingDialogTitle>
            </div>
            <button
              type="button"
              className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border  transition-colors focus-visible:ring-2 active:scale-[0.98] border-zinc-50/10 bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-50 focus-visible:ring-zinc-500"
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
            className="pointer-events-auto overflow-y-scroll scrollbar-hide relative flex h-auto w-full flex-col border bg-zinc-900 border-zinc-800 text-zinc-300 sm:w-[600px] max-w-[90%] mx-auto"
          >
            <MorphingDialogImage
              src="Service1.jpg"
              alt=""
              className="h-full w-full"
            />
            <div className="p-6">
              <MorphingDialogTitle className="text-xl font-semibold text-zinc-300">
                Kennfeldoptimierung
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className="text-zinc-300">
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
                <ul className="mt-2 text-muted-foreground text-base list-disc pl-5 hyphens-auto">
                  <li>
                    von Stufe 1 bis zur Einzelabstimmung ist hier alles möglich
                  </li>
                  <li>
                    Launch Control - NoLiftShift - Schubabschaltung - MapSwitch
                  </li>
                  <li>DPF - AGR - AdBlue etc.</li>
                  <li>
                    bei Fahrzeugen bis 5 Jahre und &lt;100tkm zusätzlich mit
                    Garantie möglich
                  </li>
                  <li>Wiederherstellung des Werkszustands</li>
                </ul>
                <div className="pt-6">
                  <Link href="/contact">
                    <Button className="bg-blue-600 text-zinc-300 text-sm hover:bg-blue-700 h-10 w-full">
                      <span>Zum Kontaktformular</span>
                      <IconChevronRight className="h-4 w-4 text-zinc-300" />
                    </Button>
                  </Link>
                </div>
              </MorphingDialogDescription>
            </div>
            <MorphingDialogClose className="text-zinc-300" />
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
          className="flex md:max-w-[270px] max-w-[280px] flex-col overflow-hidden border bg-zinc-900 border-zinc-800 text-zinc-300"
        >
          <MorphingDialogImage
            src="Service2.jpg"
            alt=""
            className="md:h-48 h-36 w-full object-cover"
          />
          <div className="flex grow flex-row items-end justify-between px-3 py-2">
            <div>
              <MorphingDialogTitle className="text-zinc-300 text-xl font-semibold">
                Steuergeräte- <br /> Codierung
              </MorphingDialogTitle>
            </div>
            <button
              type="button"
              className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border  transition-colors focus-visible:ring-2 active:scale-[0.98] border-zinc-50/10 bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-50 focus-visible:ring-zinc-500"
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
            className="pointer-events-auto overflow-y-scroll scrollbar-hide relative flex h-auto w-full flex-col border bg-zinc-900 border-zinc-800 text-zinc-300 sm:w-[600px] max-w-[90%] mx-auto"
          >
            <MorphingDialogImage
              src="Service2.jpg"
              alt=""
              className="h-full w-full"
            />
            <div className="p-6">
              <MorphingDialogTitle className="text-xl font-semibold text-zinc-300">
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
                <p className="mt-2 text-muted-foreground hyphens-auto">
                  Um das Feld der Applikationen umfassend abzudecken bieten wir
                  Ihnen zudem eine umfassende Beratung und Anwendung im Bereich
                  Steuergeräte-Codierung an. Egal ob Aktivierung-/Deaktivierung
                  von bereits verbauten oder nachgerüsteten Komponenten, als
                  auch die Nachrüstung selbst sind bei uns kein Problem. Wir
                  arbeiten ausschließlich mit den offiziellen Endgeräten der
                  jeweiligen Hersteller, um unsere Qualität stets gewährleisten
                  zu können.
                </p>
                <div className="pt-6">
                  <Link href="/contact">
                    <Button className="bg-blue-600 text-zinc-300 text-sm hover:bg-blue-700 h-10 w-full">
                      <span>Zum Kontaktformular</span>
                      <IconChevronRight className="h-4 w-4 text-zinc-300" />
                    </Button>
                  </Link>
                </div>
              </MorphingDialogDescription>
            </div>
            <MorphingDialogClose className="text-zinc-300" />
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
          className="flex md:max-w-[270px] max-w-[280px] flex-col overflow-hidden border bg-zinc-900 border-zinc-800 text-zinc-300"
        >
          <MorphingDialogImage
            src="Service3.jpg"
            alt=""
            className="md:h-48 h-36 w-full object-cover"
          />
          <div className="flex grow flex-row items-end justify-between px-3 py-2">
            <div>
              <MorphingDialogTitle className="text-zinc-300 text-xl font-semibold">
                BEDI- <br /> Reinigung
              </MorphingDialogTitle>
            </div>
            <button
              type="button"
              className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border  transition-colors focus-visible:ring-2 active:scale-[0.98] border-zinc-50/10 bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-50 focus-visible:ring-zinc-500"
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
            className="pointer-events-auto overflow-y-scroll scrollbar-hide relative flex h-auto w-full flex-col border bg-zinc-900 border-zinc-800 text-zinc-300 sm:w-[600px] max-w-[90%] mx-auto"
          >
            <MorphingDialogImage
              src="Service3.jpg"
              alt=""
              className="h-full w-full"
            />
            <div className="p-6">
              <MorphingDialogTitle className="text-xl font-semibold text-zinc-300">
                BEDI-Reinigung
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className="text-zinc-300">
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
                <p className="mt-2 text-muted-foreground hyphens-auto">
                  Bedi steht eigentlich für die Benzin-Direkteinspritzung eines
                  Ottomotors. Da durch dieses System die Ansaugkanäle nicht mehr
                  wie früher durch Kraftstoff selbst &quot;mitgespült&quot;
                  werden, entstehen durch moderne System wie der
                  Abgasrückführung, mit der Zeit Ruß- & Ölkohleablagerungen, die
                  schlussendlich den Ansaugtrakt verkoken und so eine
                  Verlustleistung zur Folge haben. Hier können wir durch eine
                  Kombination aus chemischer & mechanischer Reinigung die
                  Ansaugwege von diesen Rückstanden restlos befreien und die
                  ursprüngliche Leistung zurückgewinnen.
                  <br />
                  Dieses Verfahren findet genauso Anwendung bei Dieselmotoren
                  wie z.B. den Common-Rail Generationen der VAG Gruppe.
                </p>
                <div className="pt-6">
                  <Link href="/contact">
                    <Button className="bg-blue-600 text-zinc-300 text-sm hover:bg-blue-700 h-10 w-full">
                      <span>Zum Kontaktformular</span>
                      <IconChevronRight className="h-4 w-4 text-zinc-300" />
                    </Button>
                  </Link>
                </div>
              </MorphingDialogDescription>
            </div>
            <MorphingDialogClose className="text-zinc-300" />
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>

      {/* Dieser Teil soll nicht angezeigt werden */}
      {/* <MorphingDialog
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
              className="flex md:max-w-[270px] max-w-[280px] flex-col overflow-hidden border bg-zinc-900 border-zinc-800 text-white"
            >
              <MorphingDialogImage
                src="Service4.jpg"
                alt=""
                className="md:h-48 h-36 w-full object-cover"
              />
              <div className="flex grow flex-row items-end justify-between px-3 py-2">
                <div>
                  <MorphingDialogTitle className="text-zinc-50 text-2xl font-semibold">
                    KFZ- <br /> Einlagerung
                  </MorphingDialogTitle>
                </div>
                <button
                  type="button"
                  className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border  transition-colors focus-visible:ring-2 active:scale-[0.98] border-zinc-50/10 bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-50 focus-visible:ring-zinc-500"
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
                className="pointer-events-auto overflow-y-scroll scrollbar-hide relative flex h-auto w-full flex-col border bg-zinc-900 border-zinc-800 text-white sm:w-[600px] max-w-[90%] mx-auto"
              >
                <MorphingDialogImage
                  src="Service4.jpg"
                  alt=""
                  className="h-full w-full"
                />
                <div className="p-6">
                  <MorphingDialogTitle className="text-2xl font-semibold text-zinc-50">
                    KFZ-Einlagerung
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className="text-zinc-400">
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
                    <p className="mt-2 text-muted-foreground hyphens-auto">
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
                    <div className="pt-6">
                  <Link href="/contact">
                    <Button className="bg-blue-600 text-white text-sm hover:bg-blue-700 h-10 w-full">
                      <span>Zum Kontaktformular</span>
                      <IconChevronRight className="h-4 w-4 text-white" />
                    </Button>
                  </Link>
                </div>
                  </MorphingDialogDescription>
                </div>
                <MorphingDialogClose className="text-zinc-50" />
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog> */}

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
          className="flex md:max-w-[270px] max-w-[280px] flex-col overflow-hidden border bg-zinc-900 border-zinc-800 text-zinc-300"
        >
          <MorphingDialogImage
            src="Service5.jpg"
            alt=""
            className="md:h-48 h-36 w-full object-cover"
          />
          <div className="flex grow flex-row items-end justify-between px-3 py-2">
            <div>
              <MorphingDialogTitle className="text-zinc-300 text-xl font-semibold">
                Fahrzeug- <br /> transporte
              </MorphingDialogTitle>
            </div>
            <button
              type="button"
              className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border  transition-colors focus-visible:ring-2 active:scale-[0.98] border-zinc-50/10 bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-50 focus-visible:ring-zinc-500"
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
            className="pointer-events-auto overflow-y-scroll scrollbar-hide relative flex h-auto w-full flex-col border bg-zinc-900 border-zinc-800 text-zinc-300 sm:w-[600px] max-w-[90%] mx-auto"
          >
            <MorphingDialogImage
              src="Service5.jpg"
              alt=""
              className="h-full w-full"
            />
            <div className="p-6">
              <MorphingDialogTitle className="text-xl font-semibold text-zinc-300">
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
                <p className="mt-2 text-muted-foreground hyphens-auto">
                  Sie suchen einen zuverlässigen Partner für Ihre
                  Fahrzeugvermittlung? Wir bieten Ihnen vom offenen
                  KFZ-Transport bis zum geschlossen Rennanhänger jede
                  Möglichkeit und lassen keine Extrawünsche außen vor.
                  <br />
                  <br />
                  Für ein Angebot senden Sie uns bitte eine Anfrage per Mail mit
                  folgenden Daten:
                </p>
                <ul className="mt-2 text-muted-foreground list-disc pl-5">
                  <li>Distanz der Strecke</li>
                  <li>Überführungsdatum</li>
                  <li>zu überführendes Fahrzeug</li>
                  <li>offener / geschlossener Transport</li>
                  <li>individuelle Wünsche</li>
                </ul>
                <div className="pt-6">
                  <Link href="/contact">
                    <Button className="bg-blue-600 text-zinc-300 text-sm hover:bg-blue-700 h-10 w-full">
                      <span>Zum Kontaktformular</span>
                      <IconChevronRight className="h-4 w-4 text-zinc-300" />
                    </Button>
                  </Link>
                </div>
              </MorphingDialogDescription>
            </div>
            <MorphingDialogClose className="text-zinc-300" />
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
    </div>
  );
}
