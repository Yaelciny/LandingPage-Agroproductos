"use client";
// ─── Footer ──────────────────────────────────────────────────
// Muestra el nombre de la empresa, enlaces de navegacion,
// servicios y datos de contacto. Los textos vienen de siteData.
// Soporta navegacion por scroll (home) y por ruta (otras paginas).

import { type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sprout, MapPin, Phone, Mail } from "lucide-react";
import { siteData } from "@/src/data/nat";

const { footerData, navLinks, contact } = siteData;

interface FooterLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}

interface FooterColumn {
  title: string;
  items: FooterLink[];
}

const footerLinks: FooterColumn[] = [
  {
    title: "Navegación",
    items: navLinks.map((l) => ({ label: l.label, href: l.href })),
  },
  {
    title: "Servicios",
    items: [
      { label: "Fertilizantes", href: "#productos" },
      { label: "Insumos Agrícolas", href: "#productos" },
      { label: "Logística", href: "#soluciones" },
      { label: "Asesoría Técnica", href: "#soluciones" },
    ],
  },
  {
    title: "Contacto",
    items: [
      { label: contact.address, href: "#contacto", icon: MapPin },
      { label: contact.phone, href: `tel:${contact.phone}`, icon: Phone },
      { label: contact.email, href: `mailto:${contact.email}`, icon: Mail },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleNav = (href: string) => {
    // tel: y mailto: se dejan pasar directo
    if (href.startsWith("tel:") || href.startsWith("mailto:")) return;

    if (isHome) {
      // Scroll suave dentro del home
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navegar al home + hash
      window.location.href = `/${href}`;
    }
  };

  // Determina si un href es un enlace externo (tel, mailto) que no necesita handleNav
  const isExternalHref = (href: string) =>
    href.startsWith("tel:") || href.startsWith("mailto:");

  return (
    <footer className="border-t border-border bg-[#111315]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background">
                <Sprout className="h-5 w-5 text-foreground" />
              </div>
              <span className="text-sm font-semibold text-primary-foreground">
                {footerData.companyName}
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {footerData.description}
            </p>
          </motion.div>

          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.1, duration: 0.6 }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {section.title}
              </p>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={isExternalHref(item.href) ? item.href : (isHome ? item.href : `/${item.href}`)}
                      onClick={(e) => {
                        if (isExternalHref(item.href)) return;
                        e.preventDefault();
                        handleNav(item.href);
                      }}
                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary-foreground"
                    >
                      {item.icon && <item.icon className="h-3.5 w-3.5 shrink-0" />}
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
