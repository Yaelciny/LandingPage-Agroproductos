"use client";
// ─── Seccion Sobre Nosotros ──────────────────────────────────
// Muestra tres tarjetas: Concepto, Mision y Valor Agregado.
// Los textos provienen de siteData.sobreNosotros.

import { motion } from "framer-motion";
import { siteData } from "@/src/data/nat";

const { sobreNosotros } = siteData;

const cards = [
  sobreNosotros.concepto,
  sobreNosotros.mision,
  sobreNosotros.valorAgregado,
];

export default function SobreNosotros() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-primary py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-background/[0.02] blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-background/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Quienes somos
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
            {sobreNosotros.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-primary bg-background/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-border hover:bg-background/[0.06] hover:shadow-[0_8px_30px_rgba(255,255,255,0.04)]"
            >
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-background/[0.08] to-transparent" />
              </div>

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary transition-transform duration-300 group-hover:scale-110">
                  <card.icon className="h-6 w-6 text-primary-foreground" />
                </div>

                <h3 className="mb-4 text-xl font-bold tracking-tight text-primary-foreground">
                  {card.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-background/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
