"use client";
import React from "react";

export function About_() {
  return (
    <div className=" space-y-4 hyphens-auto px-4">
      <div className=" text-zinc-300 mx-auto">
        <h1 className="w-full md:w-[900px] text-2xl md:text-4xl text-center font-light mb-10 md:mb-20 mx-auto">
          &bdquo;Man kann ein Auto nicht wie ein menschliches Wesen behandeln. Ein
          Auto braucht Liebe!&ldquo; - Walter Röhrl
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-12 space-y-8 md:space-y-0">
          <div className="w-full md:w-5/12 md:max-w-[600px]">
            <h1 className="pt-6 text-xl md:text-3xl font-semibold mb-4 md:mb-6 text-zinc-300 hyphens-none">
              Die Entstehung der Turboschmiede
            </h1>
            <p className="text-base md:text-xl font-light text-muted-foreground">
              Bereits in jungen Jahren & diversen kleineren &bdquo;Hobby-Garagen&ldquo; entstand
              das Verlangen einen Ort zu schaffen, wo das Thema Automobil komplett
              im Vordergrund steht. Nach 7 langen Jahren auf der Suche nach dem
              passenden Objekt konnten wir 2020 inmitten der CoVid 19&acute; Pandemie den
              Schritt wagen dieses Projekt zu realisieren. Seitdem sind unzählige
              Stunden der Renovierung in Eigenleistung und Einrichtung der
              Räumlichkeiten verfallen. Wie jedes Projekt eines Enthusiasten &
              Perfektionisten ist auch hier kein Ende in Sicht und es bleibt ein
              stetiger <a className="font-semibold text-zinc-300">Work in Progress</a>.
            </p>
          </div>
          
          <div className="w-full md:w-5/12 md:max-w-[600px]">
            <h1 className="pt-6 text-xl md:text-3xl font-semibold mb-4 md:mb-6 text-zinc-300 hyphens-none">
              Die Vision
            </h1>
            <p className="text-base md:text-xl font-light text-muted-foreground">
              Durch das Studium im Bereich Nachhaltige Fahrzeug- und Antriebstechnik
              und der Passion für Young- & Oldtimer, mit Schwerpunkt Deutscher
              Ingenierskunst, haben wir es uns zur Aufgabe gemacht angesichts des
              starken Wandels in der Mobilität die kommenden Jahre das Thema
              Verbrennungsmotoren im Enthusiasten-Bereich zu fördern & zu bewahren,
              um künftigen Generationen stets die wundervollen Gesichtspunkte dieser
              Leidenschaft vermitteln zu können.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
