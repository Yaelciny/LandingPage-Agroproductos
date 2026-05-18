"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/src/data/nat";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black transition-transform duration-300 group-hover:scale-105">
              <span className="text-lg font-bold text-white">A</span>
            </div>
            <span
              className={`hidden text-sm font-semibold tracking-tight transition-colors duration-300 sm:block ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Agroproductos
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-black/5 ${
                  scrolled ? "text-neutral-600 hover:text-black" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <a
            href="#contacto"
            className={`hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 md:block ${
              scrolled
                ? "bg-black text-white hover:bg-neutral-800"
                : "bg-white text-black hover:bg-neutral-100"
            }`}
          >
            Cotizar Ahora
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label="Menú"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={
                  isOpen
                    ? { rotate: 45, y: 6, backgroundColor: "#000" }
                    : { rotate: 0, y: 0, backgroundColor: scrolled ? "#000" : "#fff" }
                }
                className="block h-0.5 w-6 rounded-full"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={
                  isOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                className="block h-0.5 w-6 rounded-full"
                style={{ backgroundColor: isOpen ? "#000" : scrolled ? "#000" : "#fff" }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={
                  isOpen
                    ? { rotate: -45, y: -6, backgroundColor: "#000" }
                    : { rotate: 0, y: 0, backgroundColor: scrolled ? "#000" : "#fff" }
                }
                className="block h-0.5 w-6 rounded-full"
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-white md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                className="text-2xl font-semibold text-black transition-colors hover:text-neutral-500"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-4 rounded-full bg-black px-8 py-3 text-lg font-semibold text-white"
            >
              Cotizar Ahora
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
