//app/contact/page.tsx

"use client";

import React from "react";
import { ContactForm } from "@/components/ui/contact_form";
import { MapView } from "@/components/ui/map_view";

export default function Contact() {
  return (
    <div className="flex flex-col items-center md:pt-28">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:space-x-12">
        <div id="contact-form" className="flex-1 max-w-lg md:max-w-md">
          <div className="h-full flex flex-col">
            <h1 className="pt-6 text-3xl font-bold mb-6 text-center text-white">
              Kontaktformular
            </h1>
            <div className="flex-1">
              <ContactForm />
            </div>
          </div>
        </div>

        <div id="map" className="flex-1 md:max-w-md md:pt-0 pt-12">
          <div className="h-full flex flex-col">
            <h1 className="pt-6 text-3xl font-bold mb-6 text-center text-white">
              Anfahrt
            </h1>
            <div className="flex-1">
              <MapView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
