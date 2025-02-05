"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import carData from "../../app/configurator/carData.json";
import { Separator } from "@/components/ui/separator";
import {
  Select_with_icon,
  SelectContent_with_icon,
  SelectItem_with_icon,
  SelectTrigger_with_icon,
  SelectValue_with_icon,
} from "./select_with_icon";

// linke Seite ändert die angezeigten Namen der Optionen
// rechte Seite bitte nicht ändern!
const tuningOptionsMapping: { [key: string]: string } = {
  Chiptuning: "Chiptuning",
  Turbolader: "Turbolader",
  Rennfilter: "Rennfilter",
  "Catless Kit": "Downpipes",
  Ladeluftkühler: "Ladeluftkuehler",
  Auspuffanlage: "Auspuffanlage",
  Fächerkrümmer: "Faecherkruemmer",
  "Pops & Bangs": "AK47",
};

type PerformanceMetrics = {
  power: number;
  torque: number;
  vmax: number;
  acceleration: number;
  displacement: number;
};

type TuningEffect = {
  power: number;
  torque: number;
  vmax: number;
  acceleration: number;
};

interface PerformanceDataEntry {
  original: PerformanceMetrics;
  [key: string]: PerformanceMetrics | TuningEffect;
}

type PerformanceData = {
  [key: string]: {
    [key: string]: PerformanceDataEntry;
  };
};

type Manufacturer = keyof typeof carData.models;
type ModelKeys = keyof typeof carData.engines;

export const CarTuningConfigurator = () => {
  const [manufacturer, setManufacturer] = useState<Manufacturer | "">("");
  const [model, setModel] = useState<ModelKeys | "">("");
  const [engine, setEngine] = useState("");
  const [tuningOptions, setTuningOptions] = useState<string[]>([]);
  const [originalPerformance, setOriginalPerformance] =
    useState<PerformanceMetrics | null>(null);
  const [tunedPerformance, setTunedPerformance] =
    useState<PerformanceMetrics | null>(null);
  const [performanceData, setPerformanceData] =
    useState<PerformanceDataEntry | null>(null);

  const calculateTunedPerformance = useCallback(
    (performanceData: PerformanceDataEntry) => {
      const tunedValues = { ...performanceData.original };
      tuningOptions.forEach((option) => {
        const mappedOption = tuningOptionsMapping[option];
        const tuningEffect = performanceData[mappedOption] as TuningEffect;
        if (tuningEffect) {
          tunedValues.power = +(tunedValues.power + tuningEffect.power).toFixed(
            2
          );
          tunedValues.torque = +(
            tunedValues.torque + tuningEffect.torque
          ).toFixed(2);
          tunedValues.vmax = +(tunedValues.vmax + tuningEffect.vmax).toFixed(2);
          tunedValues.acceleration = +(
            tunedValues.acceleration + tuningEffect.acceleration
          ).toFixed(2);
        }
      });
      setTunedPerformance(tunedValues);
    },
    [tuningOptions]
  );

  const isTuningOptionApplicable = (
    option: string,
    performanceData: PerformanceDataEntry
  ) => {
    const mappedOption = tuningOptionsMapping[option];
    const tuningEffect = performanceData[mappedOption] as TuningEffect;
    if (tuningEffect) {
      return (
        tuningEffect.power !== 0 ||
        tuningEffect.torque !== 0 ||
        tuningEffect.vmax !== 0 ||
        tuningEffect.acceleration !== 0
      );
    }
    return false;
  };

  useEffect(() => {
    setModel("");
    setEngine("");
    setTuningOptions([]);
    setOriginalPerformance(null);
    setTunedPerformance(null);
  }, [manufacturer]);

  useEffect(() => {
    setEngine("");
    setTuningOptions([]);
    setOriginalPerformance(null);
    setTunedPerformance(null);
  }, [model]);

  useEffect(() => {
    if (manufacturer && model && engine) {
      const data = (carData.performanceData as PerformanceData)[
        `${manufacturer} ${model}`
      ]?.[engine];
      if (data) {
        setOriginalPerformance(data.original);
        setPerformanceData(data);
        calculateTunedPerformance(data);
      }
    }
  }, [manufacturer, model, engine, tuningOptions, calculateTunedPerformance]);

  const handleTuningOptionChange = (option: string) => {
    setTuningOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6 bg-zinc-900 border-zinc-800 text-zinc-300">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Modell Auswahl
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select_with_icon
              onValueChange={(value: Manufacturer | "") =>
                setManufacturer(value)
              }
            >
              <SelectTrigger_with_icon>
                <SelectValue_with_icon placeholder="Hersteller auswählen" />
              </SelectTrigger_with_icon>
              <SelectContent_with_icon>
                {carData.manufacturers.map((m) => (
                  <SelectItem_with_icon
                    key={m}
                    value={m}
                    logo={`/${m}_Logo.png`}
                  >
                    {m}
                  </SelectItem_with_icon>
                ))}
              </SelectContent_with_icon>
            </Select_with_icon>

            <Select
              onValueChange={(value) => setModel(value as ModelKeys | "")}
              disabled={!manufacturer}
            >
              <SelectTrigger>
                <SelectValue
                  placeholder={
                    manufacturer
                      ? "Modell auswählen"
                      : "Bitte zuerst Hersteller wählen"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {manufacturer &&
                  carData.models[manufacturer]?.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={setEngine}
              disabled={!model || !manufacturer}
            >
              <SelectTrigger>
                <SelectValue
                  placeholder={
                    model ? "Motor auswählen" : "Bitte zuerst Modell wählen"
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {model &&
                  manufacturer &&
                  carData.engines[`${manufacturer} ${model}` as ModelKeys]?.map(
                    (e) => (
                      <SelectItem key={e} value={e}>
                        {e}
                      </SelectItem>
                    )
                  )}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {engine && (
        <Card className="sticky top-6 z-10 bg-zinc-900 border-zinc-800 text-zinc-300 md:static">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Tuning Optionen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.keys(tuningOptionsMapping).map((option) => (
                <div key={option} className="flex items-center space-x-2 ">
                  <Switch
                    id={option}
                    checked={tuningOptions.includes(option)}
                    onCheckedChange={() => handleTuningOptionChange(option)}
                    disabled={
                      !originalPerformance ||
                      !performanceData ||
                      !isTuningOptionApplicable(option, performanceData)
                    }
                  />
                  <Label htmlFor={option}>{option}</Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {originalPerformance && tunedPerformance && (
        <div className="relative z-1">
          {model && engine && (
            <h2 className="text-3xl font-bold mb-6 text-zinc-300 text-center pt-12">
              {manufacturer} {model} - {engine}
            </h2>
          )}
          <div className="grid grid-cols-2 gap-4 text-center">
            {[originalPerformance, tunedPerformance].map(
              (performance, index) => (
                <Card
                  key={index}
                  className=" bg-transparent text-zinc-300 border-transparent md:bg-zinc-900 md:border-zinc-800 "
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {index === 0
                        ? "Original Performance"
                        : "Tuned Performance"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      {[
                        "power",
                        "torque",
                        "vmax",
                        "acceleration",
                        "displacement",
                      ].map((key, idx) => (
                        <div key={idx} className="pt-2">
                          <p className="text-xl font-semibold">
                            {performance[key as keyof PerformanceMetrics]}
                            {key === "power"
                              ? "PS"
                              : key === "torque"
                                ? "Nm"
                                : key === "vmax"
                                  ? "km/h"
                                  : key === "acceleration"
                                    ? "s"
                                    : "cm³"}
                          </p>
                          <p className="text-sm text-muted-foreground pb-2">
                            {key.toUpperCase()}
                          </p>
                          {idx < 4 && <Separator className="w-32" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};
