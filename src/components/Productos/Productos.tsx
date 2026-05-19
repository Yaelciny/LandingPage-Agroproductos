"use client";
// ─── Seccion Productos y Sectores ────────────────────────────
// Muestra el catalogo de productos/servicios en tarjetas
// con icono. Los datos se leen desde siteData (productosTitle,
// productosDescription, productosSectores).

import { motion } from "framer-motion";
import { siteData } from "@/src/data/nat";

const { productosTitle, productosDescription, productosSectores } = siteData;

export default function Productos() {
  return (
    <section
      id="productos"
      className="relative overflow-hidden border-t border-border bg-muted py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-muted-foreground/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Cat&aacute;logo
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {productosTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            {productosDescription}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productosSectores.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-background transition-all duration-500 hover:-translate-y-1 hover:border-border hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-0 z-10 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative h-48 w-full overflow-hidden flex items-center justify-center bg-muted">
                <span className="text-2xl font-bold tracking-widest text-muted-foreground/40 select-none">
                  Imagen
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              <div className="relative flex-1 p-8 pt-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:-translate-y-1">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="relative z-10 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <span className="absolute bottom-4 right-6 z-0 select-none text-6xl font-black text-muted/30 transition-colors duration-500 group-hover:text-muted-foreground/10 pointer-events-none">
                  {String(item.id).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
