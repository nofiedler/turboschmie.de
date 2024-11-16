import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/ui/footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconLayoutGrid,
} from "@tabler/icons-react";

const navItems = [
  {
    name: "Startseite",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-white" />,
  },
  {
    name: "Über uns",
    link: "/about",
    icon: <IconUser className="h-4 w-4 text-white" />,
  },
  {
    name: "Projekte",
    link: "/projects",
    icon: <IconLayoutGrid className="h-4 w-4 text-white" />,
  },
  {
    name: "Kontakt",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-white" />,
  },
];

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black bg-grid-small-white/[0.2] relative`}
      >
        <div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <FloatingNav navItems={navItems} />
        <main className="relative z-10">
          {children}
          <Footer/>
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
