"use client";

import React from "react";
import { CarTuningConfigurator } from "@/components/ui/car-tuning-configurator";

export default function Configurator() {
  return (
    <div className="md:pt-44 pt-12 mb-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-zinc-300">
        Tuning Konfigurator
      </h1>
      <CarTuningConfigurator />
    </div>
    
  );
}
