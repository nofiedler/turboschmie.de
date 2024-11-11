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

// Mock data structure with more engine options
const carData = {
  manufacturers: ["BMW", "Mercedes", "Audi"],
  models: {
    BMW: ["M3", "M4", "M5"],
    Mercedes: ["AMG C63", "AMG E63", "AMG GT"],
    Audi: ["RS3", "RS6", "RS7"],
  },
  engines: {
    "BMW M3": [
      "3.0L Twin-Turbo I6",
      "3.0L Twin-Turbo I6 Competition",
      "3.0L Twin-Turbo I6 CS",
    ],
    "BMW M4": [
      "3.0L Twin-Turbo I6",
      "3.0L Twin-Turbo I6 Competition",
      "3.0L Twin-Turbo I6 CS",
    ],
    "BMW M5": [
      "4.4L Twin-Turbo V8",
      "4.4L Twin-Turbo V8 Competition",
      "4.4L Twin-Turbo V8 CS",
    ],
    "Mercedes AMG C63": ["4.0L Twin-Turbo V8", "2.0L Turbo I4 PHEV"],
    "Mercedes AMG E63": ["4.0L Twin-Turbo V8", "4.0L Twin-Turbo V8 S"],
    "Mercedes AMG GT": [
      "4.0L Twin-Turbo V8",
      "4.0L Twin-Turbo V8 S",
      "4.0L Twin-Turbo V8 R",
    ],
    "Audi RS3": ["2.5L Turbo I5", "2.5L Turbo I5 Performance"],
    "Audi RS6": ["4.0L Twin-Turbo V8", "4.0L Twin-Turbo V8 Performance"],
    "Audi RS7": ["4.0L Twin-Turbo V8", "4.0L Twin-Turbo V8 Performance"],
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
    "BMW M3": {
      "3.0L Twin-Turbo I6": {
        original: {
          power: 473,
          torque: 550,
          vmax: 250,
          acceleration: 3.9,
          displacement: 2993,
        },
        tuned: {
          power: 530,
          torque: 650,
          vmax: 280,
          acceleration: 3.5,
          displacement: 2993,
        },
      },
      "3.0L Twin-Turbo I6 Competition": {
        original: {
          power: 503,
          torque: 650,
          vmax: 290,
          acceleration: 3.7,
          displacement: 2993,
        },
        tuned: {
          power: 560,
          torque: 750,
          vmax: 305,
          acceleration: 3.3,
          displacement: 2993,
        },
      },
      "3.0L Twin-Turbo I6 CS": {
        original: {
          power: 543,
          torque: 650,
          vmax: 307,
          acceleration: 3.2,
          displacement: 2993,
        },
        tuned: {
          power: 600,
          torque: 750,
          vmax: 320,
          acceleration: 2.9,
          displacement: 2993,
        },
      },
    },
    "BMW M4": {
      "3.0L Twin-Turbo I6": {
        original: {
          power: 473,
          torque: 550,
          vmax: 250,
          acceleration: 3.9,
          displacement: 2993,
        },
        tuned: {
          power: 530,
          torque: 650,
          vmax: 280,
          acceleration: 3.5,
          displacement: 2993,
        },
      },
      "3.0L Twin-Turbo I6 Competition": {
        original: {
          power: 503,
          torque: 650,
          vmax: 290,
          acceleration: 3.7,
          displacement: 2993,
        },
        tuned: {
          power: 560,
          torque: 750,
          vmax: 305,
          acceleration: 3.3,
          displacement: 2993,
        },
      },
      "3.0L Twin-Turbo I6 CS": {
        original: {
          power: 543,
          torque: 650,
          vmax: 307,
          acceleration: 3.2,
          displacement: 2993,
        },
        tuned: {
          power: 600,
          torque: 750,
          vmax: 320,
          acceleration: 2.9,
          displacement: 2993,
        },
      },
    },
    "BMW M5": {
      "4.4L Twin-Turbo V8": {
        original: {
          power: 600,
          torque: 750,
          vmax: 305,
          acceleration: 3.4,
          displacement: 4395,
        },
        tuned: {
          power: 700,
          torque: 850,
          vmax: 330,
          acceleration: 3.0,
          displacement: 4395,
        },
      },
      "4.4L Twin-Turbo V8 Competition": {
        original: {
          power: 617,
          torque: 750,
          vmax: 305,
          acceleration: 3.3,
          displacement: 4395,
        },
        tuned: {
          power: 720,
          torque: 870,
          vmax: 330,
          acceleration: 2.9,
          displacement: 4395,
        },
      },
      "4.4L Twin-Turbo V8 CS": {
        original: {
          power: 627,
          torque: 750,
          vmax: 305,
          acceleration: 3.2,
          displacement: 4395,
        },
        tuned: {
          power: 730,
          torque: 880,
          vmax: 330,
          acceleration: 2.8,
          displacement: 4395,
        },
      },
    },
    "Mercedes AMG C63": {
      "4.0L Twin-Turbo V8": {
        original: {
          power: 503,
          torque: 700,
          vmax: 290,
          acceleration: 3.9,
          displacement: 3982,
        },
        tuned: {
          power: 550,
          torque: 800,
          vmax: 310,
          acceleration: 3.6,
          displacement: 3982,
        },
      },
      "2.0L Turbo I4 PHEV": {
        original: {
          power: 671,
          torque: 1020,
          vmax: 280,
          acceleration: 3.4,
          displacement: 1991,
        },
        tuned: {
          power: 720,
          torque: 1100,
          vmax: 300,
          acceleration: 3.1,
          displacement: 1991,
        },
      },
    },
    "Mercedes AMG E63": {
      "4.0L Twin-Turbo V8": {
        original: {
          power: 603,
          torque: 850,
          vmax: 300,
          acceleration: 3.4,
          displacement: 3982,
        },
        tuned: {
          power: 700,
          torque: 950,
          vmax: 320,
          acceleration: 3.1,
          displacement: 3982,
        },
      },
      "4.0L Twin-Turbo V8 S": {
        original: {
          power: 627,
          torque: 850,
          vmax: 300,
          acceleration: 3.3,
          displacement: 3982,
        },
        tuned: {
          power: 720,
          torque: 970,
          vmax: 320,
          acceleration: 3.0,
          displacement: 3982,
        },
      },
    },
    "Mercedes AMG GT": {
      "4.0L Twin-Turbo V8": {
        original: {
          power: 523,
          torque: 700,
          vmax: 318,
          acceleration: 3.7,
          displacement: 3982,
        },
        tuned: {
          power: 600,
          torque: 800,
          vmax: 330,
          acceleration: 3.4,
          displacement: 3982,
        },
      },
      "4.0L Twin-Turbo V8 S": {
        original: {
          power: 577,
          torque: 800,
          vmax: 330,
          acceleration: 3.5,
          displacement: 3982,
        },
        tuned: {
          power: 650,
          torque: 900,
          vmax: 340,
          acceleration: 3.2,
          displacement: 3982,
        },
      },
      "4.0L Twin-Turbo V8 R": {
        original: {
          power: 577,
          torque: 800,
          vmax: 330,
          acceleration: 3.5,
          displacement: 3982,
        },
        tuned: {
          power: 650,
          torque: 900,
          vmax: 340,
          acceleration: 3.2,
          displacement: 3982,
        },
      },
    },
    "Audi RS3": {
      "2.5L Turbo I5": {
        original: {
          power: 401,
          torque: 500,
          vmax: 280,
          acceleration: 3.8,
          displacement: 2480,
        },
        tuned: {
          power: 450,
          torque: 550,
          vmax: 300,
          acceleration: 3.5,
          displacement: 2480,
        },
      },
      "2.5L Turbo I5 Performance": {
        original: {
          power: 420,
          torque: 520,
          vmax: 290,
          acceleration: 3.7,
          displacement: 2480,
        },
        tuned: {
          power: 470,
          torque: 570,
          vmax: 310,
          acceleration: 3.4,
          displacement: 2480,
        },
      },
    },
    "Audi RS6": {
      "4.0L Twin-Turbo V8": {
        original: {
          power: 591,
          torque: 800,
          vmax: 305,
          acceleration: 3.6,
          displacement: 3996,
        },
        tuned: {
          power: 700,
          torque: 900,
          vmax: 320,
          acceleration: 3.3,
          displacement: 3996,
        },
      },
      "4.0L Twin-Turbo V8 Performance": {
        original: {
          power: 621,
          torque: 850,
          vmax: 305,
          acceleration: 3.4,
          displacement: 3996,
        },
        tuned: {
          power: 730,
          torque: 950,
          vmax: 320,
          acceleration: 3.1,
          displacement: 3996,
        },
      },
    },
    "Audi RS7": {
      "4.0L Twin-Turbo V8": {
        original: {
          power: 591,
          torque: 800,
          vmax: 305,
          acceleration: 3.6,
          displacement: 3996,
        },
        tuned: {
          power: 700,
          torque: 900,
          vmax: 320,
          acceleration: 3.3,
          displacement: 3996,
        },
      },
      "4.0L Twin-Turbo V8 Performance": {
        original: {
          power: 621,
          torque: 850,
          vmax: 305,
          acceleration: 3.4,
          displacement: 3996,
        },
        tuned: {
          power: 730,
          torque: 950,
          vmax: 320,
          acceleration: 3.1,
          displacement: 3996,
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
      tuned: PerformanceMetrics;
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

  useEffect(() => {
    setModel("");
    setEngine("");
  }, [manufacturer]);

  useEffect(() => {
    setEngine("");
  }, [model]);

  const handleTuningOptionChange = (option: string) => {
    setTuningOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const performanceData =
    model && engine
      ? (carData.performanceData as PerformanceData)[
          `${manufacturer} ${model}`
        ]?.[engine]
      : null;

  const engineOptions =
    model && manufacturer
      ? carData.engines[
          `${manufacturer} ${model}` as keyof typeof carData.engines
        ]?.map((e) => (
          <SelectItem key={e} value={e}>
            {e}
          </SelectItem>
        ))
      : null;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Car Tuning Configurator
      </h1>
      <div className="bg-white rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3 text-center">
          Model selection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select
            onValueChange={(value: Manufacturer | "") => setManufacturer(value)}
          >
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
                placeholder={
                  manufacturer ? "Select Model" : "Select Manufacturer first"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {manufacturer &&
                carData.models[manufacturer as Manufacturer]?.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>

          <Select onValueChange={setEngine} disabled={!model || !manufacturer}>
            <SelectTrigger>
              <SelectValue
                placeholder={model ? "Select Engine" : "Select Model first"}
              />
            </SelectTrigger>
            <SelectContent>{engineOptions}</SelectContent>
          </Select>
        </div>
        </div>

        <div className="bg-white rounded-xl p-6">
        {engine && (
          <div>
            <h2 className="text-xl font-semibold mb-3 text-center">
              Tuning Options
            </h2>
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
      </div>

      {performanceData && (
        <>
          {model && engine && (
            <h2 className="text-3xl font-bold mb-6 text-white text-center pt-20">
              {manufacturer} {model} - {engine}
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Original Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold">
                      {performanceData.original.power}HP
                    </p>
                    <p className="text-sm text-muted-foreground">POWER</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {performanceData.original.torque}Nm
                    </p>
                    <p className="text-sm text-muted-foreground">TORQUE</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {performanceData.original.vmax}km/h
                    </p>
                    <p className="text-sm text-muted-foreground">VMAX</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {performanceData.original.acceleration}s
                    </p>
                    <p className="text-sm text-muted-foreground">0-100</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-2xl font-bold">
                      {performanceData.original.displacement}cm³
                    </p>
                    <p className="text-sm text-muted-foreground">
                      DISPLACEMENT
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Tuned Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold">
                      {performanceData.tuned.power}HP
                    </p>
                    <p className="text-sm text-muted-foreground">POWER (PP)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {performanceData.tuned.torque}Nm
                    </p>
                    <p className="text-sm text-muted-foreground">TORQUE (PP)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {performanceData.tuned.vmax}km/h
                    </p>
                    <p className="text-sm text-muted-foreground">VMAX (PP)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">
                      {performanceData.tuned.acceleration}s
                    </p>
                    <p className="text-sm text-muted-foreground">0-100 (PP)</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-2xl font-bold">
                      {performanceData.tuned.displacement}cm³
                    </p>
                    <p className="text-sm text-muted-foreground">
                      DISPLACEMENT
                    </p>
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
