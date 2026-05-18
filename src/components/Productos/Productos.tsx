"use client";

import { motion } from "framer-motion";
import { productosTitle, productosDescription, productosSectores } from "@/src/data/nat";

export default function Productos() {
  return (
    <section
      id="productos"
      className="relative overflow-hidden border-t border-neutral-100 bg-neutral-50 py-24 lg:py-32"
    >
      {/* Decorative */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-neutral-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Catálogo
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            {productosTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-500">
            {productosDescription}
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productosSectores.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/60 bg-white p-8 transition-all duration-500 hover:border-neutral-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              {/* Top accent */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon */}
              <div className="mb-6 text-4xl transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-lg font-bold tracking-tight text-black">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                {item.description}
              </p>

              {/* Number */}
              <span className="absolute bottom-4 right-6 text-6xl font-black text-neutral-100 transition-colors duration-500 group-hover:text-neutral-200">
                {String(item.id).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
