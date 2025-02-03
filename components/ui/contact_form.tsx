"use client";

import * as React from "react";
import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function ContactForm({ className }: React.ComponentProps<typeof Card>) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [fileUrl, setFileUrl] = React.useState<string>("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "success" | "error"
  >("idle");
  const [uploadError, setUploadError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, fileUrl }),
      });

      if (!response.ok) throw new Error("Fehler beim Senden");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setFileUrl("");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // add "dark" to the class names to enable dark mode ("" -> "dark")
  return (
    <Card className={cn("w-full bg-zinc-900 max-w-md border-zinc-700", className, "")}>
      <CardHeader className="relative">
        <CardTitle className="text-2xl text-white">
          Sende uns eine Anfrage
        </CardTitle>
        <CardDescription className="text-gray-300">
          Öffnungszeiten: Montag - Freitag 
          <br />
          Nur nach Terminabsprache
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="flex flex-col gap-6">
          <div className="group/field grid gap-2">
            <Label htmlFor="name" className="text-white">
              Name <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className=" text-white border-zinc-700"
              required
            />
          </div>

          <div className="group/field grid gap-2">
            <Label htmlFor="email" className="text-white">
              Email <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className=" text-white border-zinc-700"
              required
            />
          </div>

          <div className="group/field grid gap-2">
            <Label htmlFor="message" className="text-white">
              Anfrage <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className=" text-white border-zinc-700"
              required
            />
          </div>

          <div className="group/field grid gap-2">
            <Label className="text-white">
              Datei Upload - Fahrzeugbrief
              <small className="block text-xs text-gray-400">
                Maximale Dateigröße: 4MB
              </small>
            </Label>
            <UploadButton<OurFileRouter, "contactUploader">
              endpoint="contactUploader"
              onClientUploadComplete={(res) => {
                if (res?.[0]) {
                  setFileUrl(res[0].url);
                  setUploadError(null); // Clear error on successful upload
                }
              }}
              onUploadError={(error: Error) => {
                console.error("Upload Error:", error); // Log the entire error object
                const detailedMessage =
                  error?.cause || error.message || "Unbekannter Fehler";
                setUploadError(`Fehler beim Hochladen: ${detailedMessage}`);
              }}
              className="text-sm ut-button:bg-blue-600 ut-button:text-white ut-button:hover:bg-blue-700 ut-button:h-10 ut-button:w-full"
            />
            {fileUrl && (
              <p className="text-sm text-green-600 dark:text-green-400 text-center">
                Datei erfolgreich hochgeladen
              </p>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Separator />
          <Button
            type="submit"
            disabled={isSubmitting || !fileUrl}
            className="bg-blue-600 text-white text-sm hover:bg-blue-700 h-10 w-full"
          >
            {isSubmitting ? "Senden..." : "Nachricht senden"}
          </Button>

          <div>
            {submitStatus === "success" && (
              <p className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                <Check className="size-4" />
                Ihre Nachricht wurde erfolgreich gesendet. Vielen Dank.
              </p>
            )}

            {uploadError && (
              <p className="text-sm text-red-600 dark:text-red-400">
                {uploadError}
              </p>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
