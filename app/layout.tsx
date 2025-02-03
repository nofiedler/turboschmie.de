import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
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

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  fallback: ['system-ui', 'arial'], // Fallback-Schriftarten
  preload: true,
  display: 'swap',
});

const navItems = [
  {
    name: "Startseite",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-white" />,
  },
  {
    name: "Leistungen",
    link: "/services",
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

export const metadata: Metadata = {
  title: "Turboschmiede",
  description: "Created by N",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={satoshi.variable}>
      <body className="antialiased min-h-screen bg-black bg-dot-white/[0.15] relative font-satoshi">
        <div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <FloatingNav navItems={navItems} />
        {/* Wrapper mit scrollbar-hide */}
        <main className="relative z-10 overflow-y-scroll scrollbar-hide h-screen">
          {children}
          <Footer />
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
