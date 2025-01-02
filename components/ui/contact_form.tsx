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

  return (
    <Card className={cn("w-full max-w-md", className, "dark")}>
      <CardHeader className="relative">
        <CardTitle className="dark:text-white">
          Wie können wir helfen?
        </CardTitle>
        <CardDescription className="dark:text-gray-300">
          Brauchen Sie Hilfe bei Ihrem Projekt?
          <br />
          Wir sind hier, um Ihnen zu helfen.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="flex flex-col gap-6">
          {submitStatus === "success" && (
            <p className="text-muted-foreground flex items-center gap-2 text-sm dark:text-green-400">
              <Check className="size-4" />
              Ihre Nachricht wurde gesendet. Vielen Dank.
            </p>
          )}

          {uploadError && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {uploadError}
            </p>
          )}

          <div className="group/field grid gap-2">
            <Label htmlFor="name" className="dark:text-white">
              Name <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>

          <div className="group/field grid gap-2">
            <Label htmlFor="email" className="dark:text-white">
              Email <span aria-hidden="true">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>

          <div className="group/field grid gap-2">
            <Label htmlFor="message" className="dark:text-white">
              Anfrage <span aria-hidden="true">*</span>
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>

          <div className="group/field grid gap-2">
            <Label className="dark:text-white">
              Datei Upload - Fahrzeugbrief
              <small className="block text-xs text-gray-500 dark:text-gray-400">
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
                const detailedMessage = error?.cause || error.message || "Unbekannter Fehler";
                setUploadError(`Fehler beim Hochladen: ${detailedMessage}`);
              }}
              className="dark:ut-button:bg-gray-700 dark:ut-button:text-white"
            />
            {fileUrl && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Datei erfolgreich hochgeladen
              </p>
            )}
          </div>
        </CardContent>

        <CardFooter>
          <Button
            type="submit"
            disabled={isSubmitting || !fileUrl}
            className="dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700"
          >
            {isSubmitting ? "Senden..." : "Nachricht senden"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}