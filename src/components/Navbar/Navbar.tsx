"use client";
// ─── Barra de navegacion ─────────────────────────────────────
// Menu fijo con enlaces a las secciones de la pagina. En
// dispositivos moviles se convierte en un menu hamburguesa.
// Los enlaces se leen desde siteData.navLinks.
// Soporta navegacion por scroll (home) y por ruta (/productos).

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/src/data/nat";
import Link from "next/link";
import Image from "next/image";

const { navLinks } = siteData;
import { Button } from "@/src/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const router = useRouter();

  const isHash = (href: string) => href.startsWith("#");

  const handleNav = (href: string) => {
    setOpen(false);
    if (!isHash(href)) {
      // Es una ruta (ej. /productos), navegar con router
      router.push(href);
      return;
    }
    if (isHome) {
      // Scroll suave dentro del home
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navegar al home + hash
      window.location.href = `/${href}`;
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.div className="flex items-center group">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => {
                  setOpen(false);
                  if (isHome) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <Image
                  src={siteData.logoCompleto}
                  alt={siteData.brand.name}
                  width={180}
                  height={40}
                  priority
                  className="h-10 md:h-12 w-auto"
                />
              </Link>
            </motion.div>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item, index) =>
                isHash(item.href) ? (
                  <motion.a
                    key={item.href}
                    href={isHome ? item.href : `/${item.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(item.href);
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-light transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-light transition-all duration-300 group-hover:w-full" />
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-4">
              <Button
                variant="default"
                size="default"
                className="hidden lg:inline-flex"
                onClick={() => handleNav("#contacto")}
              >
                Cotizar ahora
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setOpen(!open)}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-2">
                {navLinks.map((link) =>
                  isHash(link.href) ? (
                    <a
                      key={link.href}
                      href={isHome ? link.href : `/${link.href}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className="py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors text-left"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors text-left font-medium"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-30 lg:hidden"
            style={{ top: "64px" }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
