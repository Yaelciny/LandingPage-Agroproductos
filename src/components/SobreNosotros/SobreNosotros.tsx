"use client";

import { motion } from "framer-motion";
import { sobreNosotros } from "@/src/data/nat";

const cards = [
  sobreNosotros.concepto,
  sobreNosotros.mision,
  sobreNosotros.valorAgregado,
];

export default function SobreNosotros() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-black py-24 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Quiénes somos
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {sobreNosotros.sectionTitle}
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.06]"
            >
              {/* Hover glow effect */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent" />
              </div>

              <div className="relative">
                {/* Number indicator */}
                <span className="mb-6 inline-block text-6xl font-black text-white/[0.04]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mb-4 text-xl font-bold tracking-tight text-white">
                  {card.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-400">
                  {card.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
