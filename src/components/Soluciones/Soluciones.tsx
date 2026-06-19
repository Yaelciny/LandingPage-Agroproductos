"use client";
// ─── Seccion Soluciones Agricolas ────────────────────────────
// Presenta las soluciones que ofrece la empresa en tarjetas
// con icono, titulo y descripcion. Los datos vienen de
// siteData.soluciones.

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteData } from "@/src/data/nat";

const { soluciones } = siteData;

export default function Soluciones() {
  return (
    <section id="soluciones" className="relative bg-[#111315] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Soluciones Agrícolas
          </p>
          <h2 className="mb-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {soluciones.sectionTitle}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/60">
            {soluciones.sectionDescription}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {soluciones.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>

                <h3 className="mb-3 text-lg font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
