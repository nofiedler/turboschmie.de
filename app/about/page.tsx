"use client";

import React from "react";

export default function About() {
  return (
    <div className="md:pt-36 flex flex-col items-center justify-center space-y-4 hyphens-auto">
      <div className="pt-6 text-white mx-auto">
        <h1 className="md:w-[900px] w-10/12 text-4xl text-center font-light mb-20 mx-auto">
          &bdquo;Man kann ein Auto nicht wie ein menschliches Wesen behandeln. Ein
          Auto braucht Liebe!&ldquo; - Walter Röhrl
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center items-start space-x-12">
          <div className="md:w-5/12 md:max-w-[600px]">
            <h1 className="pt-6 text-3xl font-bold mb-6 text-white">
              Die Entstehung der Turboschmiede
            </h1>
            <p className="text-xl font-light">
              Bereits in jungen Jahren & diversen kleineren &bdquo;Hobby-Garagen&ldquo; entstand
              das Verlangen einen Ort zu schaffen, wo das Thema Automobil komplett
              im Vordergrund steht. Nach 7 langen Jahren auf der Suche nach dem
              passenden Objekt konnten wir 2020 inmitten der CoVid 19&acute; Pandemie den
              Schritt wagen dieses Projekt zu realisieren. Seitdem sind unzählige
              Stunden der Renovierung in Eigenleistung und Einrichtung der
              Räumlichkeiten verfallen. Wie jedes Projekt eines Enthusiasten &
              Perfektionisten ist auch hier kein Ende in Sicht und es bleibt ein
              stetiger <a className="font-black">Work in Progress</a>.
            </p>
          </div>
          
          <div className="md:w-5/12 md:max-w-[600px]">
            <h1 className="pt-6 text-3xl font-bold mb-6 text-white">
              Die Vision
            </h1>
            <p className="text-xl font-light">
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
