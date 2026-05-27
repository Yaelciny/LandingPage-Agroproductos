"use client";
// ─── Página de Catálogo de Productos ─────────────────────────
// Muestra el catálogo completo organizado por categorías.
// Reutiliza Navbar, Footer y WhatsAppFloat del sitio principal.

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Package } from "lucide-react";
import Link from "next/link";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import WhatsAppFloat from "@/src/components/WhatsAppFloat/WhatsAppFloat";
import { catalogData, siteData } from "@/src/data/nat";

const { categories, heroTitle, heroDescription } = catalogData;
const { contact } = siteData;

// ─── Componente de conteo animado ────────────────────────────
function CountUp({ target, suffix = "", duration = 5 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = progress;
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function ProductosPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* ── Hero ────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-primary pt-28 pb-20 md:pt-36 md:pb-28">
          {/* Decorative blurs */}
          <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-foreground/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary-foreground/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/"
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/60 hover:text-primary-foreground transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Volver al inicio
              </Link>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/50">
                Catálogo completo
              </p>
              <h1 className="mb-6 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl xl:text-6xl max-w-3xl">
                {heroTitle}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-primary-foreground/70 lg:text-lg">
                {heroDescription}
              </p>
            </motion.div>
            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-6 mt-10"
            >
              {[
                { target: 35, suffix: "+", label: "Productos" },
                { target: 6, suffix: "", label: "Categorías" },
                { target: 100, suffix: "%", label: "Calidad" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10"
                >
                  <span className="text-2xl font-bold text-white tabular-nums">
                    <CountUp target={stat.target} suffix={stat.suffix} duration={1.8} />
                  </span>
                  <span className="text-white/50 text-sm">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </section>



        {/* ── Categorías con productos ────────────────── */}
        <section className="bg-background py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 text-center"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Nuestros productos
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Catálogo por Categoría
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
                Explora nuestra amplia gama de productos químicos, fertilizantes
                e insumos organizados por categoría.
              </p>
            </motion.div>

            {/* Categories grid */}
            <div className="space-y-8">
              {categories.map((category, catIdx) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: catIdx * 0.1,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-4 border-b border-border bg-muted/30 px-6 py-5 md:px-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                      <category.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                    <span className="ml-auto hidden md:flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-foreground">
                      {category.products.length} productos
                    </span>
                  </div>

                  {/* Products grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                    {category.products.map((product, prodIdx) => (
                      <motion.div
                        key={product.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: prodIdx * 0.03 }}
                        className="flex items-center gap-3 bg-card px-6 py-4 transition-colors duration-300 hover:bg-muted/50"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-foreground">
                          <Package className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium text-foreground leading-tight">
                          {product.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA section ────────────────────────────── */}
        <section className="border-t border-border bg-muted">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                ¿Interesado en nuestros productos?
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Solicita tu cotización
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted-foreground">
                Contáctanos para obtener precios, disponibilidad y asesoría
                técnica personalizada para tus necesidades agrícolas.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/#contacto"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-primary active:scale-95"
                >
                  Cotizar Ahora
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
