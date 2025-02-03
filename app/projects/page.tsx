"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CarouselSpacing } from "@/components/ui/carousel_";

export default function Projects() {
  return (
    <div className="md:pt-28 max-w-4xl mx-auto p-6">
      <h1 className="pt-6 text-3xl font-bold mb-6 text-center text-white">
        Unsere Projekte
      </h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
            B5 - Eine Liebe die niemals endet.
          </CardTitle>
        </CardHeader>
        <CardContent className="hyphens-auto">
          <div className="h-80 flex justify-center">
            <CarouselSpacing />
          </div>
          <p className="text-zinc-700 dark:text-zinc-400 font-semibold">
            2023/01/24
          </p>
          <p className="text-zinc-700 dark:text-zinc-400 pt-2">
            &quot;Der Ursprung allen Übels könnte man meinen oder vielleicht das
            beste was einem je passiert ist?&quot;
          </p>
          <p className="mt-2 text-muted-foreground hyphens-auto pt-4">
            Mit der Plattform B5 Typ 8D konnte die Audi AG ab 1994 bis 2002
            durch mehrere Evolutionsstufen eines der absatzstärksten Modelle mit
            knapp 1,7 Millionen hergestellten Fahrzeuge verzeichnen. Aufgrund
            der üppigen Motorenvielfalt und insgesamt drei Abstufungen
            zusätzlich zu der Modellpflege ab dem Jahr 1999 ist dieser Erfolg
            rückblickend wenig verwunderlich. Die Speerspitze der Baugruppe
            stellten am Ende die heutzutage äußerst beliebten S4 & RS4 Modelle
            da, welche bis heute Besitzern auf der ganzen Welt mit der
            Klangsymphonie des 2.7L V6-Biturbo Freude bereiten. Angefangen mit
            dem 1.8L Sauger, über den 1.8T & 2.4 V6 Sauger bishin zum ersten S4
            konnten wir über die Jahre den Weg bis zum RS4 durchlaufen und somit
            einen echten Kindheitstraum verwirklichen während wir stetig an &
            mit der Plattform B5 gewachsen sind. Unzählige Stunden der
            Restauration, Instandhaltung & Modifikation lehrten uns Sachen die
            man mit Geld nicht bezahlen kann. Auch hier entstand die tiefe
            Bindung zu Motoren der Audi AG bzw. Cosworth, welche die
            Manifestation von V-Motoren mit Biturboaufladung wirklich auf ein
            neues Level gebracht haben. Fortsetzung folgt...
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
            Vorsicht Allzweckwaffe!
          </CardTitle>
        </CardHeader>
        <CardContent className="hyphens-auto">
          <div className="h-80 flex justify-center">
            <CarouselSpacing />
          </div>
          <p className="text-zinc-700 dark:text-zinc-400 font-semibold">
            2023/01/24
          </p>
          <p className="mt-2 text-muted-foreground hyphens-auto pt-2">
            Kein Titel beschreibt die dritte Generation des RS6, auch bezeichnet
            als Typ C7, so passend wie dieser. V8-Biturboaufladung - 4.0L
            Hubraum - kein OPF & brutale Optik. Frisch aus Neckarsulm - Audi
            Sport sei Dank! Wenn man für den Rest seiner Tage ein Auto fahren
            müsste dann ist der RS6 C7 wohl definitiv eine der besten Optionen
            die die Deutsche Automobilgeschichte die letzten Jahrzehnte auf den
            Markt gebracht hat. Leistung im Überfluss? Check! Sound? Definitiv
            Check! Komfort auf Knopfdruck? Check. Unter 11L/100KM Spritverbrauch
            im Alltag? Check! Einkaufen? Absolut kein Problem. Auf Wunsch auch
            gerne mit Isofix für die teuren Plätze (; Die Liste könnte man wohl
            ewig weiterführen... Gerade heutzutage dreht sich alles immer mehr
            um das Thema Digitalisierung im Fahrzeug...auf Kosten der Emotionen.
            Aber nicht hier: Echter V8-Sound, kein OPF & gerade genug Elektronik
            im Innenraum ,um nicht verrückt zu werden. Auf Befehl mit absoluter
            Sendepause aller Displays & Assistenzsysteme, damit Mann tun kann
            was Mann tun muss. Er hat noch dieses unerwartete fast schon
            &quot;elegant böse Verhalten&quot; in einem absoluten Alltagskombi ,womit die
            Prägung &quot;RS&quot; mehr als gerechtfertigt ist.
            <br />
            <br />
            Unser RS6 hat den klassischen Turboschmiede &quot;Overhaul&quot; bekommen
            bestehend aus folgenden Komponenten:
          </p>
          <ul className="mt-2 text-muted-foreground list-disc pl-5">
            <li>
              Leistungssteigerung auf 700PS & 900NM - VMAX 320 (abgeregelt)
            </li>
            <li>
              ElectronicWorks AirSuspension Modul zur Anpassung des originalen
              Luftfahrwerks per APP
            </li>
            <li>
              10.5x21 ET19 RS6 C8 Audi Sport Felgen (2022) / 10x21 ET20 SQ8
              Rotor (2023)
            </li>
            <li>
              HMS-Abgasanlage in Verbindung mit original Klappensteuerung von
              Werk
            </li>
            <li>K&N Luftfilter</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
