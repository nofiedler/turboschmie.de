import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const logo = "/logo.svg";

export default function Component() {
  return (
    <footer className="w-full bg-transparent text-gray-400">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto space-y-12">
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:gap-8">
          <Link href="/home" className="hover:text-gray-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-200 transition-colors">
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-200 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-200 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/configurator"
            className="hover:text-gray-200 transition-colors"
          >
            Configurator
          </Link>
        </nav>
        <div className="flex justify-center gap-6">
          <Link href="#" className="hover:text-gray-200 transition-colors">
            <Facebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="hover:text-gray-200 transition-colors">
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="hover:text-gray-200 transition-colors">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="hover:text-gray-200 transition-colors">
            <Youtube className="h-6 w-6" />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>
        
        <p className="text-sm flex flex-col items-center">
        <img src={logo} alt="Logo" className="pt-6 pb-4"/>
          © {new Date().getFullYear()} Turboschmie.de, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
