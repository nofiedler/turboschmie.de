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
import CountUp from "react-countup";
import {
  Select_with_icon,
  SelectContent_with_icon,
  SelectItem_with_icon,
  SelectTrigger_with_icon,
  SelectValue_with_icon,
} from "./select_with_icon";

// TODO: Den nachfolgenden Code muss ich noch anpassen
const tuningOptionsMapping: { [key: string]: string } = {
  "ECU Remapping": "Chiptuning",
  "Catless Kit": "Downpipes",
  "Exhaust Manifold": "Faecherkruemmer",
  Turbocharger: "Turbolader",
  Intercooler: "Ladeluftkuehler",
  "AK-47-Sound": "AK47",
  "Performance Air Filter": "Rennfilter",
  "Exhaust System": "Auspuffanlage",
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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Tuning Konfigurator
      </h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
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
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              Tuning Optionen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {carData.tuningOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2">
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
                  <Label htmlFor={option}>{tuningOptionsMapping[option]}</Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {originalPerformance && tunedPerformance && (
        <>
          {model && engine && (
            <h2 className="text-3xl font-bold mb-6 text-white text-center pt-10">
              {manufacturer} {model} - {engine}
            </h2>
          )}
          <div className="grid grid-cols-2 gap-6 text-center">
            <Card className="bg-transparent border-transparent text-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Original Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="">
                  <div>
                    <p className="text-2xl font-bold">
                      {originalPerformance.power}PS
                    </p>
                    <p className="text-sm text-muted-foreground">LEISTUNG</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {originalPerformance.torque}Nm
                    </p>
                    <p className="text-sm text-muted-foreground">DREHMOMENT</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {originalPerformance.vmax}km/h
                    </p>
                    <p className="text-sm text-muted-foreground">VMAX</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {originalPerformance.acceleration}s
                    </p>
                    <p className="text-sm text-muted-foreground">0-100</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-2xl font-bold">
                      {originalPerformance.displacement}cm³
                    </p>
                    <p className="text-sm text-muted-foreground">HUBRAUM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-transparent text-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Tuned Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="">
                  <div>
                    <p
                      className={`text-2xl font-bold ${
                        tunedPerformance.power !== originalPerformance.power
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      <CountUp
                        start={originalPerformance.power}
                        end={tunedPerformance.power}
                        duration={2}
                        decimals={0}
                        separator="."
                        suffix="PS"
                        easingFn={(t, b, c, d) => {
                          return c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
                        }}
                      />
                    </p>
                    <p className="text-sm text-muted-foreground">LEISTUNG</p>
                  </div>
                  <div>
                    <p
                      className={`text-2xl font-bold ${
                        tunedPerformance.torque !== originalPerformance.torque
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      <CountUp
                        start={originalPerformance.torque}
                        end={tunedPerformance.torque}
                        duration={2}
                        decimals={0}
                        separator="."
                        suffix="Nm"
                        easingFn={(t, b, c, d) => {
                          return c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
                        }}
                      />
                    </p>
                    <p className="text-sm text-muted-foreground">DREHMOMENT</p>
                  </div>
                  <div>
                    <p
                      className={`text-2xl font-bold ${
                        tunedPerformance.vmax !== originalPerformance.vmax
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      <CountUp
                        start={originalPerformance.vmax}
                        end={tunedPerformance.vmax}
                        duration={2}
                        decimals={0}
                        separator="."
                        suffix="km/h"
                        easingFn={(t, b, c, d) => {
                          return c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
                        }}
                      />
                    </p>
                    <p className="text-sm text-muted-foreground">VMAX</p>
                  </div>
                  <div>
                    <p
                      className={`text-2xl font-bold ${
                        tunedPerformance.acceleration !==
                        originalPerformance.acceleration
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      <CountUp
                        start={originalPerformance.acceleration}
                        end={tunedPerformance.acceleration}
                        duration={2}
                        decimals={2}
                        separator="."
                        suffix="s"
                        easingFn={(t, b, c, d) => {
                          return c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
                        }}
                      />
                    </p>
                    <p className="text-sm text-muted-foreground">0-100</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-2xl font-bold">
                      <CountUp
                        start={originalPerformance.displacement}
                        end={tunedPerformance.displacement}
                        duration={2}
                        separator="."
                        suffix="cm³"
                      />
                    </p>
                    <p className="text-sm text-muted-foreground">HUBRAUM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};