"use client";

import * as React from "react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CarConfigurator = () => {
  const [values, setValues] = React.useState({
    chiptuning: false,
    turbolader: false,
    rennfilter: false,
    catlessKit: false,
    ladeluftKuhler: false,
    auspuffanlage: false,
    facherkrummer: false,
    akSound: false,
  });

  return (
    <div className="min-h-screen bg-transparent text-white pt-36">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Car Selection */}
        <div className="grid gap-12 md:grid-cols-3">
          <div className="relative w-full">
            <Select defaultValue="audi">
              <SelectTrigger className="border-0 bg-transparent p-0 text-xl font-medium hover:bg-transparent">
                <SelectValue placeholder="Select make">Audi</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="audi">Audi</SelectItem>
              </SelectContent>
            </Select>
            {/* Gradients */}
            <div className="absolute left-0 right-0 top-full w-full">
              <div className="relative h-[5px] w-full">
                <div className="absolute inset-x-0 bg-gradient-to-r from-transparent via-indigo-500 via-50% to-transparent h-[2px] w-full blur-sm" />
                <div className="absolute inset-x-0 bg-gradient-to-r from-transparent via-indigo-500 via-50% to-transparent h-px w-full" />
                <div className="absolute inset-x-0 bg-gradient-to-r from-transparent via-sky-500 via-50% to-transparent h-[3px] w-1/4 mx-auto blur-sm" />
                <div className="absolute inset-x-0 bg-gradient-to-r from-transparent via-sky-500 via-50% to-transparent h-px w-2/4 mx-auto" />
              </div>
            </div>
          </div>

          <div className="relative">
            <Select defaultValue="rs6">
              <SelectTrigger className="border-0 bg-transparent p-0 text-xl font-medium hover:bg-transparent">
                <SelectValue placeholder="Select model">RS6</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rs6">RS6</SelectItem>
              </SelectContent>
            </Select>
            {/* Gradients */}
            <div className="absolute left-0 right-0 top-full w-full">
              <div className="relative h-[5px] w-full">
                <div className="absolute inset-x-0 bg-gradient-to-r from-transparent via-indigo-500 via-50% to-transparent h-[2px] w-full blur-sm" />
                <div className="absolute inset-x-0 bg-gradient-to-r from-transparent via-indigo-500 via-50% to-transparent h-px w-full" />
                <div className="absolute inset-x-0 bg-gradient-to-r from-transparent via-sky-500 via-50% to-transparent h-[3px] w-1/4 mx-auto blur-sm" />
                <div className="absolute inset-x-0 bg-gradient-to-r from-transparent via-sky-500 via-50% to-transparent h-px w-2/4 mx-auto" />
              </div>
            </div>
          </div>

          <div className="relative">
            <Select defaultValue="600ps">
              <SelectTrigger className="border-0 bg-transparent p-0 text-xl font-medium hover:bg-transparent">
                <SelectValue placeholder="Select engine">
                  4.0l TFSI 600PS
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="600ps">4.0l TFSI 600PS</SelectItem>
              </SelectContent>
            </Select>
            {/* Gradients */}
            <div className="absolute left-0 right-0 top-full w-full">
              <div className="relative h-[5px] w-full">
                <div className="absolute inset-x-0 bg-gradient-to-r from-transparent via-indigo-500 via-50% to-transparent h-[2px] w-full blur-sm" />
                <div className="absolute inset-x-0 bg-gradient-to-r from-transparent via-indigo-500 via-50% to-transparent h-px w-full" />
                <div className="absolute inset-x-0 bg-gradient-to-r from-transparent via-sky-500 via-50% to-transparent h-[3px] w-1/4 mx-auto blur-sm" />
                <div className="absolute inset-x-0 bg-gradient-to-r from-transparent via-sky-500 via-50% to-transparent h-px w-2/4 mx-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Toggles Grid */}
        <div className="mt-16 grid gap-x-12 gap-y-8 md:grid-cols-3">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <label className="text-lg">ECU remapping</label>
              <Switch
                checked={values.chiptuning}
                onCheckedChange={(checked) =>
                  setValues({ ...values, chiptuning: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-lg">Catless Kit</label>
              <Switch
                checked={values.catlessKit}
                onCheckedChange={(checked) =>
                  setValues({ ...values, catlessKit: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-lg text-gray-500">Exhaust manifold</label>
              <Switch
                checked={values.facherkrummer}
                onCheckedChange={(checked) =>
                  setValues({ ...values, facherkrummer: checked })
                }
                disabled
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <label className="text-lg">Turbocharger</label>
              <Switch
                checked={values.turbolader}
                onCheckedChange={(checked) =>
                  setValues({ ...values, turbolader: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-lg">Intercooler</label>
              <Switch
                checked={values.ladeluftKuhler}
                onCheckedChange={(checked) =>
                  setValues({ ...values, ladeluftKuhler: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-lg">AK-47-Sound</label>
              <Switch
                checked={values.akSound}
                onCheckedChange={(checked) =>
                  setValues({ ...values, akSound: checked })
                }
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <label className="text-lg">Performance air filter</label>
              <Switch
                checked={values.rennfilter}
                onCheckedChange={(checked) =>
                  setValues({ ...values, rennfilter: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-lg">Exhaust system</label>
              <Switch
                checked={values.auspuffanlage}
                onCheckedChange={(checked) =>
                  setValues({ ...values, auspuffanlage: checked })
                }
              />
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mt-16">
          <h2 className="text-center text-5xl font-bold text-neutral-100 pt-10">
            AUDI RS6 4.0L TFSI 600PS
          </h2>
          <p className="mt-4 text-center text-white/70">
            Compare your stock performance with the optimized output achieved
            through professional ECU remapping and performance enhancement for
            your Audi RS6 4.0l TFSI 600HP, delivered by an experienced German
            premium vehicle tuning specialist focusing on quality and
            reliability.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2 pt-20">
            <div className="text-center">
              <div className="text-6xl font-light text-white">
                600<span className="text-white">PS</span>
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider">
                Horsepower
              </div>
              <div className="mt-8 text-6xl font-light text-white">
                800<span className="text-white">Nm</span>
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider">
                Torque
              </div>
            </div>
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-sky-700 to-indigo-500 blur-[35px] opacity-50"></div>
                <div className="relative text-6xl font-light text-white">
                  600<span className="text-white">PS</span>
                </div>
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider">
                Horsepower (Turboschmie.de)
              </div>
              <div className="mt-8 relative inline-block">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 via-sky-700 to-indigo-500 blur-[35px] opacity-50"></div>
                <div className="relative text-6xl font-light text-white">
                  800<span className="text-white">Nm</span>
                </div>
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider">
                Torque (Turboschmie.de)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
