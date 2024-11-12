"use client";

import { useState, useEffect } from "react";
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

const tuningOptionsMapping: { [key: string]: string } = {
  "ECU Remapping": "Chiptuning",
  "Catless Kit": "Downpipes",
  "Exhaust Manifold": "Faecherkruemmer",
  "Turbocharger": "Turbolader",
  "Intercooler": "Ladeluftkuehler",
  "AK-47-Sound": "AK47",
  "Performance Air Filter": "Rennfilter",
  "Exhaust System": "Auspuffanlage"
};
// Mock data structure with more engine options
const carData = {
  manufacturers: ["Alpina"],
  models: {
    Alpina: ["B3/B3S", "B4"],
  },
  engines: {
    "Alpina B3/B3S": [
      "N54 Biturbo 360PS",
      "N54 Biturbo 400PS",
      "N55 Biturbo 410PS",
      "S58 Biturbo 462PS",
      "S58 Biturbo 495PS",
    ],
    "Alpina B4": [
      "N55 Biturbo 410PS",
      "N55 Biturbo S 440PS",
      "N55 Biturbo S Edition99 452PS",
      "S58 Biturbo 495PS",
    ],
  },
  tuningOptions: [
    "ECU Remapping",
    "Catless Kit",
    "Exhaust Manifold",
    "Turbocharger",
    "Intercooler",
    "AK-47-Sound",
    "Performance Air Filter",
    "Exhaust System",
  ],
  performanceData: {
    "Alpina B3/B3S": {
      "N54 Biturbo 360PS": {
        original: {
          power: 359,
          torque: 498,
          vmax: 284,
          acceleration: 4.78,
          displacement: 2979,
        },
        Chiptuning: {
          power: 61,
          torque: 82,
          vmax: 11,
          acceleration: -0.18,
          displacement: 0,
        },
        Turbolader: {
          power: 60,
          torque: 70,
          vmax: 8,
          acceleration: -0.2,
          displacement: 0,
        },
        Rennfilter: {
          power: 5,
          torque: 5,
          vmax: 2,
          acceleration: -0.05,
          displacement: 0,
        },
        Downpipes: {
          power: 20,
          torque: 15,
          vmax: 2,
          acceleration: -0.1,
          displacement: 0,
        },
        Ladeluftkuehler: {
          power: 10,
          torque: 10,
          vmax: 3,
          acceleration: -0.02,
          displacement: 0,
        },
        Auspuffanlage: {
          power: 20,
          torque: 20,
          vmax: 4,
          acceleration: -0.1,
          displacement: 0,
        },
        Faecherkruemmer: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        AK47: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
      },
      "N54 Biturbo 400PS": {
        original: {
          power: 398,
          torque: 538,
          vmax: 299,
          acceleration: 4.18,
          displacement: 2979,
        },
        Chiptuning: {
          power: 32,
          torque: 62,
          vmax: 11,
          acceleration: -0.18,
          displacement: 0,
        },
        Turbolader: {
          power: 60,
          torque: 70,
          vmax: 8,
          acceleration: -0.2,
          displacement: 0,
        },
        Rennfilter: {
          power: 5,
          torque: 5,
          vmax: 2,
          acceleration: -0.05,
          displacement: 0,
        },
        Downpipes: {
          power: 20,
          torque: 15,
          vmax: 2,
          acceleration: -0.1,
          displacement: 0,
        },
        Ladeluftkuehler: {
          power: 10,
          torque: 10,
          vmax: 3,
          acceleration: -0.02,
          displacement: 0,
        },
        Auspuffanlage: {
          power: 20,
          torque: 20,
          vmax: 4,
          acceleration: -0.1,
          displacement: 0,
        },
        Faecherkruemmer: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        AK47: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
      },
      "N55 Biturbo 410PS": {
        original: {
          power: 408,
          torque: 597,
          vmax: 304,
          acceleration: 4.18,
          displacement: 2979,
        },
        Chiptuning: {
          power: 42,
          torque: 73,
          vmax: 11,
          acceleration: -0.18,
          displacement: 0,
        },
        Turbolader: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Rennfilter: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Downpipes: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Ladeluftkuehler: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Auspuffanlage: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Faecherkruemmer: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        AK47: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0.0,
          displacement: 0,
        },
      },
      "S58 Biturbo 462PS": {
        original: {
          power: 460,
          torque: 697,
          vmax: 302,
          acceleration: 3.78,
          displacement: 2993,
        },
        Chiptuning: {
          power: 190,
          torque: 103,
          vmax: 13,
          acceleration: -0.48,
          displacement: 0,
        },
        Turbolader: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Rennfilter: {
          power: 2,
          torque: 2,
          vmax: 0,
          acceleration: -0.01,
          displacement: 0,
        },
        Downpipes: {
          power: 30,
          torque: 25,
          vmax: 4,
          acceleration: -0.05,
          displacement: 0,
        },
        Ladeluftkuehler: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Auspuffanlage: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Faecherkruemmer: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        AK47: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0.0,
          displacement: 0,
        },
      },
      "S58 Biturbo 495PS": {
        original: {
          power: 493,
          torque: 727,
          vmax: 304,
          acceleration: 3.59,
          displacement: 2993,
        },
        Chiptuning: {
          power: 157,
          torque: 73,
          vmax: 11,
          acceleration: -0.29,
          displacement: 0,
        },
        Turbolader: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Rennfilter: {
          power: 2,
          torque: 2,
          vmax: 0,
          acceleration: -0.01,
          displacement: 0,
        },
        Downpipes: {
          power: 30,
          torque: 25,
          vmax: 4,
          acceleration: -0.05,
          displacement: 0,
        },
        Ladeluftkuehler: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Auspuffanlage: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Faecherkruemmer: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        AK47: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0.0,
          displacement: 0,
        },
      },
    },
    "Alpina B4": {
      "N55 Biturbo 410PS": {
        original: {
          power: 408,
          torque: 597,
          vmax: 303,
          acceleration: 4.18,
          displacement: 2979,
        },
        Chiptuning: {
          power: 42,
          torque: 73,
          vmax: 12,
          acceleration: -0.18,
          displacement: 0,
        },
        Turbolader: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Rennfilter: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Downpipes: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Ladeluftkuehler: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Auspuffanlage: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Faecherkruemmer: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        AK47: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0.0,
          displacement: 0,
        },
      },
      "N55 Biturbo S 440PS": {
        original: {
          power: 438,
          torque: 657,
          vmax: 305,
          acceleration: 3.88,
          displacement: 2979,
        },
        Chiptuning: {
          power: 52,
          torque: 53,
          vmax: 8,
          acceleration: -0.18,
          displacement: 0,
        },
        Turbolader: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Rennfilter: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Downpipes: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Ladeluftkuehler: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Auspuffanlage: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        Faecherkruemmer: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
        AK47: {
          power: 0,
          torque: 0,
          vmax: 0,
          acceleration: 0,
          displacement: 0,
        },
      },
    },
  },
};

type PerformanceMetrics = {
  power: number;
  torque: number;
  vmax: number;
  acceleration: number;
  displacement: number;
};

type PerformanceData = {
  [key: string]: {
    [key: string]: {
      original: PerformanceMetrics;
      [key: string]: PerformanceMetrics;
    };
  };
};

type Manufacturer = keyof typeof carData.models;
type ModelKeys = keyof typeof carData.engines;

export const CarTuningConfigurator = () => {
  const [manufacturer, setManufacturer] = useState<Manufacturer | "">("");
  const [model, setModel] = useState<ModelKeys | "">("");
  const [engine, setEngine] = useState("");
  const [tuningOptions, setTuningOptions] = useState<string[]>([]);
  const [originalPerformance, setOriginalPerformance] = useState<PerformanceMetrics | null>(null);
  const [tunedPerformance, setTunedPerformance] = useState<PerformanceMetrics | null>(null);

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
      const performanceData = (carData.performanceData as unknown as PerformanceData)[
        `${manufacturer} ${model}`
      ]?.[engine];
      if (performanceData) {
        setOriginalPerformance(performanceData.original);
        calculateTunedPerformance(performanceData);
      }
    }
  }, [manufacturer, model, engine, tuningOptions]);

  const handleTuningOptionChange = (option: string) => {
    setTuningOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const calculateTunedPerformance = (performanceData: any) => {
    const tunedValues = { ...performanceData.original };
    
    tuningOptions.forEach((option) => {
      const mappedOption = tuningOptionsMapping[option];
      const tuningEffect = performanceData[mappedOption];
      if (tuningEffect) {
        tunedValues.power = +(tunedValues.power + tuningEffect.power).toFixed(2);
        tunedValues.torque = +(tunedValues.torque + tuningEffect.torque).toFixed(2);
        tunedValues.vmax = +(tunedValues.vmax + tuningEffect.vmax).toFixed(2);
        tunedValues.acceleration = +(tunedValues.acceleration + tuningEffect.acceleration).toFixed(2);
      }
    });
    
    setTunedPerformance(tunedValues);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Car Tuning Configurator
      </h1>
      
      <div className="bg-white rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-6">Model selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select onValueChange={(value: Manufacturer | "") => setManufacturer(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Manufacturer" />
            </SelectTrigger>
            <SelectContent>
              {carData.manufacturers.map((m) => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            onValueChange={(value) => setModel(value as ModelKeys | "")}
            disabled={!manufacturer}
          >
            <SelectTrigger>
              <SelectValue
                placeholder={manufacturer ? "Select Model" : "Select Manufacturer first"}
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

          <Select onValueChange={setEngine} disabled={!model || !manufacturer}>
            <SelectTrigger>
              <SelectValue placeholder={model ? "Select Engine" : "Select Model first"} />
            </SelectTrigger>
            <SelectContent>
              {model &&
                manufacturer &&
                carData.engines[`${manufacturer} ${model}` as ModelKeys]?.map((e) => (
                  <SelectItem key={e} value={e}>
                    {e}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {engine && (
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Tuning Options</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {carData.tuningOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Switch
                  id={option}
                  checked={tuningOptions.includes(option)}
                  onCheckedChange={() => handleTuningOptionChange(option)}
                />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </div>
        </div>
      )}

      {originalPerformance && tunedPerformance && (
        <>
          {model && engine && (
            <h2 className="text-3xl font-bold mb-6 text-white text-center pt-20">
              {manufacturer} {model} - {engine}
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Original Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold">{originalPerformance.power}HP</p>
                    <p className="text-sm text-muted-foreground">POWER</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{originalPerformance.torque}Nm</p>
                    <p className="text-sm text-muted-foreground">TORQUE</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{originalPerformance.vmax}km/h</p>
                    <p className="text-sm text-muted-foreground">VMAX</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{originalPerformance.acceleration}s</p>
                    <p className="text-sm text-muted-foreground">0-100</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-2xl font-bold">{originalPerformance.displacement}cm³</p>
                    <p className="text-sm text-muted-foreground">DISPLACEMENT</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Tuned Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold">{tunedPerformance.power}HP</p>
                    <p className="text-sm text-muted-foreground">POWER (PP)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{tunedPerformance.torque}Nm</p>
                    <p className="text-sm text-muted-foreground">TORQUE (PP)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{tunedPerformance.vmax}km/h</p>
                    <p className="text-sm text-muted-foreground">VMAX (PP)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{tunedPerformance.acceleration}s</p>
                    <p className="text-sm text-muted-foreground">0-100 (PP)</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-2xl font-bold">{tunedPerformance.displacement}cm³</p>
                    <p className="text-sm text-muted-foreground">DISPLACEMENT</p>
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