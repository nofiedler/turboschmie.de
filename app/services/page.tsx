"use client";

import React from "react";
import { Services_ } from "@/components/ui/services";

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center md:pt-40 pt-12 mb-12 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-zinc-300">
        Unsere Leistungen
      </h1>
      <div className="md:w-[1000px] w-5/6">
        <Services_ />
      </div>
    </div>
  );
}
