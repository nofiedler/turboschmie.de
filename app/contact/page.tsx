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
          <h1 className="text-3xl font-bold mb-6 text-center text-white">
            Kontaktiere uns!!
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl font-semibold"></CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
            <ContactForm />
          </div>
          <MapView />
        </div>
      </div>
    </div>
  );
}
