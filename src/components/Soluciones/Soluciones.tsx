"use client";

import { motion } from "framer-motion";
import { soluciones } from "@/src/data/nat";

export default function Soluciones() {
  return (
    <section id="soluciones" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Soluciones Agrícolas
          </p>
          <h2 className="mb-6 max-w-2xl text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            {soluciones.sectionTitle}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-neutral-500">
            {soluciones.sectionDescription}
          </p>
        </motion.div>

        {/* Solutions grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {soluciones.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50/50 p-8 transition-all duration-500 hover:border-neutral-200 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-xl transition-transform duration-300 group-hover:scale-110">
                  <span>{item.icon}</span>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-lg font-bold tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>Saber más</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
