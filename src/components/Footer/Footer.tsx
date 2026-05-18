"use client";

import { motion } from "framer-motion";
import { footerData, navLinks } from "@/src/data/nat";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                <span className="text-lg font-bold text-black">A</span>
              </div>
              <span className="text-sm font-semibold text-white">
                {footerData.companyName}
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-500">
              {footerData.description}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Navegación
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Legal
            </p>
            <ul className="space-y-3">
              <li>
                <span className="text-sm text-neutral-400">
                  Aviso de Privacidad
                </span>
              </li>
              <li>
                <span className="text-sm text-neutral-400">
                  Términos y Condiciones
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/[0.06] pt-8">
          <p className="text-center text-xs text-neutral-600">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
