// ============================================================
// nat.ts — Archivo centralizado de datos para la landing page
// "Agroproductos y servicios del centro"
//
// 📦 Como usar:
//   import { siteData } from "@/src/data/nat";
//   siteData.banners  →  array de slides del carrusel
//   siteData.contact       →  info de contacto, whatsapp, mapa
//   siteData.seoMetadata   →  meta tags para SEO
// ============================================================

import type { StaticImageData } from "next/image";
import { Zap, Star, Handshake, Package, Truck, FlaskConical, Sprout, Shield, Users, Lightbulb, Crosshair, Gem } from "lucide-react";
import hero1 from "@/src/assets/hero/hero-1.png";
import hero2 from "@/src/assets/hero/hero-2.png";
import hero3 from "@/src/assets/hero/hero-3.png";
import experienciaImg from "@/src/assets/experiencia/experiencia.png";
import prodFertilizantes from "@/src/assets/productos/producto-fertilizantes.png";
import prodInsumos from "@/src/assets/productos/producto-insumos.png";
import prodAtencion from "@/src/assets/productos/producto-atencion.png";
import prodLogistica from "@/src/assets/productos/producto-logistica.png";


// ─── Tipos ───────────────────────────────────────────────────
// Define la forma de cada seccion del sitio. Todas las interfaces
// se exportan por si necesitas usarlas en componentes.

export interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string | StaticImageData;
}

export interface Distintivo {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ExperienciaItem {
  id: number;
  text: string;
}

export interface SobreNosotrosCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SobreNosotrosData {
  sectionTitle: string;
  concepto: SobreNosotrosCard;
  mision: SobreNosotrosCard;
  valorAgregado: SobreNosotrosCard;
}

export interface SolucionItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SolucionesData {
  sectionTitle: string;
  sectionDescription: string;
  items: SolucionItem[];
}

export interface ProductoSector {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string | StaticImageData;
}

// Estructura plana de contacto — sin objetos anidados
export interface ContactData {
  title: string;
  subtitle: string;
  infoTitle: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  mapPlaceholder: string;
  mapUrl: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterData {
  companyName: string;
  description: string;
  copyright: string;
}

export interface SiteData {
  navLinks: NavLink[];
  banners: BannerSlide[];
  distintivos: Distintivo[];
  experienciaTitle: string;
  experienciaImage: string | StaticImageData;
  experienciaItems: ExperienciaItem[];
  sobreNosotros: SobreNosotrosData;
  soluciones: SolucionesData;
  productosTitle: string;
  productosDescription: string;
  productosSectores: ProductoSector[];
  contact: ContactData;
  footerData: FooterData;
  seoMetadata: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    url: string;
  };
}

// ═══════════════════════════════════════════════════════════════
//  SITE DATA — Edita aqui todos los textos e imagenes del sitio
// ═══════════════════════════════════════════════════════════════

export const siteData: SiteData = {

  // ─── Navegacion ──────────────────────────────────────────
  navLinks: [
    { id: "inicio", label: "Inicio", href: "#inicio" },
    { id: "nosotros", label: "Nosotros", href: "#nosotros" },
    { id: "soluciones", label: "Soluciones", href: "#soluciones" },
    { id: "productos", label: "Productos", href: "#productos" },
    { id: "contacto", label: "Contacto", href: "#contacto" },
  ],

  // ─── Hero / Inicio ───────────────────────────────────────
  banners: [
    {
      id: 1,
      title: "Agroproductos y servicios del centro.",
      subtitle: "Tu aliado estratégico en el campo y la producción agrícola.",
      image: hero1,
    },
    {
      id: 2,
      title: "Rapidez y Calidad en cada Entrega.",
      subtitle: "Soluciones inmediatas en fertilizantes e insumos para que tu cultivo nunca se detenga.",
      image: hero2,
    },
    {
      id: 3,
      title: "Compromiso Total con el Productor.",
      subtitle: "Respaldo y confianza técnica para optimizar el rendimiento de tus tierras.",
      image: hero3,
    },
  ],

  distintivos: [
    {
      id: 1,
      title: "Rapidez de Respuesta",
      description: "Gestión ágil de pedidos para cumplir con los tiempos críticos de la siembra y cosecha.",
      icon: Zap,
    },
    {
      id: 2,
      title: "Calidad Garantizada",
      description: "Selección rigurosa de insumos agrícolas y fertilizantes de alto desempeño.",
      icon: Star,
    },
    {
      id: 3,
      title: "Confianza y Cercanía",
      description: "Acompañamiento directo y compromiso real con el éxito de nuestros clientes.",
      icon: Handshake,
    },
  ],

  experienciaTitle: "Experiencia y Respaldo en el Sector",
  experienciaImage: experienciaImg,

  experienciaItems: [
    { id: 1, text: "Atención especializada para agricultores y grandes productores de cultivo." },
    { id: 2, text: "Suministro eficiente de fertilizantes e insumos agrícolas esenciales." },
    { id: 3, text: "Soluciones diseñadas para resolver las necesidades inmediatas del sector agropecuario." },
  ],

  // ─── Sobre Nosotros ──────────────────────────────────────
  sobreNosotros: {
    sectionTitle: "Sobre Nosotros",
    concepto: {
      title: "Concepto",
      description: "Somos una empresa dedicada a fortalecer el sector agrícola, posicionándonos como el aliado principal de quienes trabajan la tierra.",
      icon: Lightbulb,
    },
    mision: {
      title: "Nuestra Misión",
      description: "Resolver de manera eficiente el suministro de insumos, asegurando que cada productor cuente con productos de alta calidad y la asesoría necesaria para hacer crecer su negocio.",
      icon: Crosshair,
    },
    valorAgregado: {
      title: "Valor Agregado",
      description: "En Agroproductos y servicios del centro, no solo vendemos insumos; ofrecemos un compromiso inquebrantable con la productividad y la rapidez que el campo exige hoy en día.",
      icon: Gem,
    },
  },

  // ─── Soluciones Agricolas ────────────────────────────────
  soluciones: {
    sectionTitle: "Gestión Integral de Insumos para el Campo",
    sectionDescription: "Entendemos que el tiempo en la agricultura es vital. Por ello, nuestra propuesta de valor se centra en blindar tu ciclo de producción:",
    items: [
      { id: 1, title: "Disponibilidad Inmediata", description: "Contamos con el stock necesario para evitar retrasos en tus etapas de fertilización.", icon: Package },
      { id: 2, title: "Logística de Respuesta Rápida", description: "Procesos de entrega ágiles diseñados para llegar hasta donde tu cultivo lo necesite.", icon: Truck },
      { id: 3, title: "Asesoría en Fertilizantes", description: "Orientación técnica para la selección de los mejores productos según tu tipo de suelo y siembra.", icon: FlaskConical },
    ],
  },

  // ─── Productos y Sectores ────────────────────────────────
  productosTitle: "Productos y Sectores",
  productosDescription: "Ofrecemos una gama completa de productos y servicios diseñados para impulsar el rendimiento de tu producción agrícola.",

  productosSectores: [
    { id: 1, title: "Fertilizantes Especializados", description: "Nutrición vegetal avanzada para diversos tipos de suelo.", icon: Sprout, image: prodFertilizantes },
    { id: 2, title: "Insumos Agrícolas", description: "Todo lo necesario para la protección y cuidado de tus cultivos.", icon: Shield, image: prodInsumos },
    { id: 3, title: "Atención a Productores", description: "Soluciones a medida para agricultores independientes y empresas agrícolas.", icon: Users, image: prodAtencion },
    { id: 4, title: "Logística y Distribución", description: "Servicio de entrega eficiente mediante nuestras unidades de transporte.", icon: Truck, image: prodLogistica },
  ],

  // ─── Contacto ────────────────────────────────────────────
  // Campos planos: title, subtitle, address, phone, email, whatsapp, mapUrl
  contact: {
    title: "Contacto",
    subtitle: "¿Listo para optimizar tu producción agrícola? Contáctanos y recibe asesoría personalizada.",
    infoTitle: "Información de Contacto",
    address: "León, Guanajuato",
    phone: "+52 (477) 000-0000",
    email: "contacto@agroproductos.com",
    whatsapp: "https://wa.me/524770000000?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20de%20fertilizantes.",
    mapPlaceholder: "Mapa de Google Maps",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119131.1277054162!2d-101.71447722628937!3d21.124551766812634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbfd1ab6ae1f5%3A0xc57f9d28b73b27a7!2sLe%C3%B3n%2C%20Gto.!5e0!3m2!1ses!2smx!4v1!4m3!3m2!1ses!2smx",
  },

  // ─── Footer ──────────────────────────────────────────────
  footerData: {
    companyName: "Agroproductos y servicios del centro",
    description: "Tu aliado estratégico en el campo y la producción agrícola. León, Guanajuato.",
    copyright: `© ${new Date().getFullYear()} Agroproductos y servicios del centro. Todos los derechos reservados.`,
  },

  // ─── Metadata SEO ────────────────────────────────────────
  seoMetadata: {
    title: "Agroproductos y servicios del centro | Fertilizantes e Insumos Agrícolas",
    description: "Tu aliado estratégico en el campo. Suministro eficiente de fertilizantes, insumos agrícolas y asesoría técnica en León, Guanajuato.",
    keywords: ["agroproductos", "fertilizantes", "insumos agrícolas", "León Guanajuato", "producción agrícola", "nutrición vegetal"],
    ogImage: "/og-image.jpg",
    url: "https://agroproductos.com",
  },
};
