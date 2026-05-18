"use client";

import { motion } from "framer-motion";
import { contacto } from "@/src/data/nat";

export default function Contacto() {
  return (
    <section id="contacto" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Contacto
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              {contacto.sectionTitle}
            </h2>
            <p className="mb-12 max-w-md text-base leading-relaxed text-neutral-500">
              {contacto.sectionDescription}
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {/* Ubicación */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-lg">
                  📍
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {contacto.ubicacion.label}
                  </p>
                  <p className="mt-1 text-base font-medium text-black">
                    {contacto.ubicacion.value}
                  </p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-lg">
                  📞
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {contacto.telefono.label}
                  </p>
                  <a
                    href={contacto.telefono.href}
                    className="mt-1 block text-base font-medium text-black transition-colors hover:text-neutral-600"
                  >
                    {contacto.telefono.value}
                  </a>
                </div>
              </div>

              {/* Correo */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-lg">
                  ✉️
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {contacto.correo.label}
                  </p>
                  <a
                    href={contacto.correo.href}
                    className="mt-1 block text-base font-medium text-black transition-colors hover:text-neutral-600"
                  >
                    {contacto.correo.value}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={contacto.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-800 hover:scale-[1.02]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {contacto.whatsapp.cta}
            </motion.a>
          </motion.div>

          {/* Right - Map placeholder / decorative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
              {/* Map placeholder */}
              <div className="flex aspect-square items-center justify-center bg-neutral-100 sm:aspect-[4/3]">
                <div className="text-center">
                  <div className="mb-4 text-5xl">📍</div>
                  <p className="text-lg font-bold text-black">
                    {contacto.ubicacion.value}
                  </p>
                  <p className="mt-2 text-sm text-neutral-500">
                    Mapa próximamente
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Horario de atención
              </p>
              <p className="mt-2 text-sm font-medium text-black">
                Lunes a Viernes: 8:00 - 18:00
              </p>
              <p className="text-sm text-neutral-500">
                Sábados: 8:00 - 14:00
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
