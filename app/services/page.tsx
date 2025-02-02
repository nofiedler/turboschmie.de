"use client";

import React from "react";
import { Services_ } from "@/components/ui/services";

export default function Services() {
  return (
    <div className="flex flex-col items-center md:pt-28">
      <h1 className="pt-6 text-3xl font-bold mb-6 text-center text-white">
        Unsere Leistungen
      </h1>
      <div className="md:w-[800px] w-5/6">
        <Services_ />
      </div>
    </div>
  );
}
