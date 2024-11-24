"use client";

import React from "react";
import { ContactForm } from "@/components/ui/contact_form";
import { MapView } from "@/components/ui/map_view";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="flex flex-col items-center md:pt-28">
      <div className="container mx-auto">
        <div className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="mb-6 bg-transparent border-transparent">
              <CardHeader>
                <CardTitle className="text-xl font-semibold"></CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-white flex items-center justify-center p-4">
                  <div className="max-w-2xl w-full space-y-6 text-center">
                    <h1 className="text-3xl font-bold">
                      Kontaktiere uns!
                    </h1>

                    <div className="space-y-2">
                      <p className="text-xl">Turboschmiede</p>
                      <p className="text-xl">Gustav-Heinemann-Straße 25</p>
                      <p className="text-xl">96215 Lichtenfels</p>
                      <p className="text-xl">Bayern</p>
                      <p className="text-xl">Germany</p>
                    </div>

                    <div>
                      <p className="text-xl">
                        Montag - Sonntag: Nur per Terminabsprache
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p>Allgemeine Anfragen bitte an:</p>
                        <p>turboschmiede.kontakt@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <ContactForm />
          </div>
          <h1 className="pt-6 text-3xl font-bold mb-6 text-center text-white">
            Anfahrt
          </h1>
          <MapView />
        </div>
      </div>
    </div>
  );
}
