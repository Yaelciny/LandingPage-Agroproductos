"use client";
// ─── Boton flotante de WhatsApp ──────────────────────────────
// Aparece al hacer scroll hacia abajo. Al hacer clic abre el
// enlace de WhatsApp definido en siteData.contact.whatsapp.

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteData } from "@/src/data/nat";

const { contact } = siteData;

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = contact.whatsapp;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="relative rounded-2xl bg-primary px-4 py-3 text-sm text-primary-foreground shadow-lg"
              >
                <p className="whitespace-nowrap font-medium">
                  Escr&iacute;benos por WhatsApp
                </p>
                <div className="absolute -bottom-1 right-6 h-3 w-3 rotate-45 bg-primary" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowTooltip(false)}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow hover:shadow-[0_0_24px_rgba(37,211,102,0.4)]"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <MessageCircle className="h-6 w-6" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
