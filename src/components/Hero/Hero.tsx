"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteData } from "@/src/data/nat";
import Image from "next/image";
import experience from "@/src/assets/experiencia/Trayectoria.webp";

const { banners, distintivos, experienciaTitle, experienciaItems } = siteData;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % banners.length),
    [banners.length]
  );
  const prev = useCallback(
    () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length),
    [banners.length]
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section id="inicio" className="relative">
      {/* ── Carrusel ────────────────────────────────── */}
      <div
        className="relative h-dvh overflow-hidden bg-black"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0"
          >
            <Image
              src={banners[current].image}
              alt={banners[current].title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/80" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center justify-center pt-16 md:pt-20">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-4 drop-shadow-lg">
                {banners[current].title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 md:mb-10 drop-shadow-md">
                {banners[current].subtitle}
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-primary hover:bg-primary text-primary-foreground font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg transition-all hover:scale-105 hover:shadow-primary active:scale-95"
              >
                Cotizar ahora
              </button>
            </motion.div>
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/25 backdrop-blur-sm transition-all"
          aria-label="Banner anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/25 backdrop-blur-sm transition-all"
          aria-label="Siguiente banner"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
        </button>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${i === current
                ? "bg-brand-light w-8 sm:w-10 h-2.5 sm:h-3"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60 w-2.5 sm:w-3 h-2.5 sm:h-3"
                }`}
              aria-label={`Ir al banner ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Distintivos ──────────────────────────────── */}
      <div className="relative border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {distintivos.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gray-300 hover:bg-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-lg font-bold tracking-tight text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Experiencia ───────────────────────────────── */}
      <div className="border-b border-white/10 bg-[#111315]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Trayectoria
                </p>
                <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  {experienciaTitle}
                </h2>
                <div className="h-1 w-16 rounded-full bg-brand-light mb-8" />
              </motion.div>

              {/* Image with standalone clean animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative mt-8 aspect-video w-full overflow-hidden rounded-2xl shadow-lg border border-white/10 flex items-center justify-center bg-[#1a1d20]"
              >
                <Image
                  src={experience}
                  alt="Foto de experiencia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              {experienciaItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/10 hover:bg-white/[0.03]"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand text-xs font-bold text-primary-foreground">
                    {String(item.id).padStart(2, "0")}
                  </div>
                  <p className="text-base leading-relaxed text-white/60">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
