"use client";

import React from "react";
import { Services_ } from "@/components/ui/services";

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center md:h-full md:pt-0 pt-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Unsere Leistungen
      </h1>
      <div className="md:w-[1000px] w-5/6">
        <Services_ />
      </div>
    </div>
  );
}
