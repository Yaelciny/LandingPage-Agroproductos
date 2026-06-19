"use client";
// ─── Seccion de Contacto ─────────────────────────────────────
// Muestra la informacion de contacto (direccion, telefono, correo,
// WhatsApp) en el lado izquierdo y un mapa embebido en el derecho.
// Los datos se leen desde siteData.contact.

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { siteData } from "@/src/data/nat";

export default function Contact() {
  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-4"
          >
            {siteData.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-description"
          >
            {siteData.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informacion de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted/50 p-8 md:p-12 rounded-3xl border border-border shadow-sm"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              {siteData.contact.infoTitle}
            </h3>

            <div className="space-y-6 mb-12">
              {/* Direccion */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-brand/10 rounded-xl shrink-0 icon-container-base">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    Ubicacion
                  </h4>
                  <p className="text-muted-foreground">
                    {siteData.contact.address}
                  </p>
                </div>
              </div>

              {/* Telefono */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-brand/10 rounded-xl shrink-0 icon-container-base">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    Telefono
                  </h4>
                  <a
                    href={`tel:${siteData.contact.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteData.contact.phone}
                  </a>
                </div>
              </div>

              {/* Correo */}
              <div className="flex items-start gap-4">
                <div className="mt-1 p-3 bg-brand/10 rounded-xl shrink-0 icon-container-base">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    Correo
                  </h4>
                  <a
                    href={`mailto:${siteData.contact.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {siteData.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Boton WhatsApp */}
            <a
              href={siteData.contact.whatsapp}
              className="inline-flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-md"
            >
              <MessageCircle size={24} />
              Cotizar por WhatsApp
            </a>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-auto rounded-3xl overflow-hidden border border-border"
          >
            <iframe
              src={siteData.contact.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px", width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Agroproductos y servicios del centro"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
