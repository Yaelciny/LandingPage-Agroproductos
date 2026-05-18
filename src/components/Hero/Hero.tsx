"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  bannerSlides,
  distintivos,
  experienciaTitle,
  experienciaItems,
} from "@/src/data/nat";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section id="inicio" className="relative">
      {/* ── Carrusel de Banners ─────────────────────────── */}
      <div className="relative h-screen min-h-[700px] overflow-hidden bg-black">
        {/* Overlay grain texture */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center bg-black"
          >
            {/* Decorative grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500"
              >
                {`0${current + 1} / 0${bannerSlides.length}`}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                {bannerSlides[current].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl"
              >
                {bannerSlides[current].subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <a
                  href="#contacto"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02]"
                >
                  Solicitar Cotización
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="#nosotros"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
                >
                  Conocer Más
                </a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="absolute bottom-12 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative h-3 transition-all duration-500"
              aria-label={`Ir al slide ${index + 1}`}
            >
              <div
                className={`h-0.5 rounded-full transition-all duration-500 ${
                  index === current
                    ? "w-12 bg-white"
                    : "w-6 bg-white/30 group-hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 right-8 z-30 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500 [writing-mode:vertical-lr]">
              Scroll
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-neutral-500 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* ── Distintivos ────────────────────────────────── */}
      <div className="relative border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {distintivos.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-2xl border border-neutral-100 bg-neutral-50/50 p-8 transition-all duration-500 hover:border-neutral-200 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-lg text-white transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Experiencia y Respaldo ──────────────────────── */}
      <div className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Trayectoria
              </p>
              <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
                {experienciaTitle}
              </h2>
              <div className="h-1 w-16 rounded-full bg-black" />
            </motion.div>

            <div className="space-y-6">
              {experienciaItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 hover:border-neutral-100 hover:bg-neutral-50"
                >
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black text-xs font-bold text-white">
                    {String(item.id).padStart(2, "0")}
                  </div>
                  <p className="text-base leading-relaxed text-neutral-600">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
