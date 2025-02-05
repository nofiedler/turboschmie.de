import Link from "next/link";
import { Instagram } from "lucide-react";
import Image from "next/image";

const logo = "/logo.svg";

export default function Component() {
  return (
    <footer className="w-full bg-transparent text-muted-foreground md:mb-0 mb-12 pt-6">
      <div className="container flex flex-col items-center px-4 mx-auto space-y-6 pb-12">
        <nav className="flex flex-wrap justify-center gap-6 text-base md:gap-8">
          <Link href="/" className="hover:text-white transition-colors">
            Startseite
          </Link>
          <Link href="/services" className="hover:text-white transition-colors">
            Leistungen
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            Über uns
          </Link>
          <Link href="/projects" className="hover:text-white transition-colors">
            Projekte
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Kontakt
          </Link>
          <Link
            href="/configurator"
            className="hover:text-white transition-colors"
          >
            Konfigurator
          </Link>
        </nav>

        <nav className="flex flex-wrap justify-center gap-6 text-sm md:gap-8">
          <Link
            href="/impressum"
            className="hover:text-white transition-colors"
          >
            Impressum
          </Link>
        </nav>

        <div className="flex justify-center gap-6">
          <Link
            href="https://www.instagram.com/turboschmie.de/?hl=de"
            className="hover:text-white transition-colors"
          >
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>

        <p className="text-sm flex flex-col items-center">
          <Image
            src={logo}
            alt="..."
            width={250} // Passe die Größe an deine Bedürfnisse an
            height={300} // Passe die Größe an deine Bedürfnisse an
            priority
            className="pb-5" // Optional, wenn das Bild above the fold ist
          />
          © {new Date().getFullYear()} This is a website for testing purposes
          only.
        </p>
      </div>
    </footer>
  );
}
