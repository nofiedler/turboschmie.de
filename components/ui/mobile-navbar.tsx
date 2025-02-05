"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Startseite" },
  { href: "/services", label: "Leistungen" },
  { href: "/about", label: "Über uns" },
  { href: "/projects", label: "Projekte" },
  { href: "/contact", label: "Kontakt" },
  { href: "/configurator", label: "Konfigurator" },
]

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="fixed top-4 right-4 z-50 bg-white text-base text-zinc-900"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.div>
        </AnimatePresence>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-transparent backdrop-blur-md backdrop-brightness-50 backdrop-grayscale-0 backdrop-contrast-100 z-40"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-4 bg-transparent">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.1, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="px-3 py-4 text-xl text-zinc-300 hover:text-primary/80 bg-transparent transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
