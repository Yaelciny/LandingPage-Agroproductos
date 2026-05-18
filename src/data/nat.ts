// ============================================================
// nat.ts — Archivo centralizado de datos para la landing page
// "Agroproductos y servicios del centro"
// ============================================================

// ─── Tipos ───────────────────────────────────────────────────

export interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
}

export interface Distintivo {
  id: number;
  title: string;
  description: string;
  icon: string; // emoji o identificador de ícono
}

export interface ExperienciaItem {
  id: number;
  text: string;
}

export interface SobreNosotrosData {
  sectionTitle: string;
  concepto: {
    title: string;
    description: string;
  };
  mision: {
    title: string;
    description: string;
  };
  valorAgregado: {
    title: string;
    description: string;
  };
}

export interface SolucionItem {
  id: number;
  title: string;
  description: string;
  icon: string;
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
  icon: string;
}

export interface ContactoData {
  sectionTitle: string;
  sectionDescription: string;
  ubicacion: {
    label: string;
    value: string;
  };
  telefono: {
    label: string;
    value: string;
    href: string;
  };
  correo: {
    label: string;
    value: string;
    href: string;
  };
  whatsapp: {
    label: string;
    value: string;
    href: string;
    cta: string;
  };
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

// ─── Navegación ──────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { id: "inicio", label: "Inicio", href: "#inicio" },
  { id: "nosotros", label: "Nosotros", href: "#nosotros" },
  { id: "soluciones", label: "Soluciones", href: "#soluciones" },
  { id: "productos", label: "Productos", href: "#productos" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
];

// ─── Hero / Inicio ──────────────────────────────────────────

export const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    title: "Agroproductos y servicios del centro.",
    subtitle:
      "Tu aliado estratégico en el campo y la producción agrícola.",
  },
  {
    id: 2,
    title: "Rapidez y Calidad en cada Entrega.",
    subtitle:
      "Soluciones inmediatas en fertilizantes e insumos para que tu cultivo nunca se detenga.",
  },
  {
    id: 3,
    title: "Compromiso Total con el Productor.",
    subtitle:
      "Respaldo y confianza técnica para optimizar el rendimiento de tus tierras.",
  },
];

export const distintivos: Distintivo[] = [
  {
    id: 1,
    title: "Rapidez de Respuesta",
    description:
      "Gestión ágil de pedidos para cumplir con los tiempos críticos de la siembra y cosecha.",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Calidad Garantizada",
    description:
      "Selección rigurosa de insumos agrícolas y fertilizantes de alto desempeño.",
    icon: "✦",
  },
  {
    id: 3,
    title: "Confianza y Cercanía",
    description:
      "Acompañamiento directo y compromiso real con el éxito de nuestros clientes.",
    icon: "🤝",
  },
];

export const experienciaTitle = "Experiencia y Respaldo en el Sector";

export const experienciaItems: ExperienciaItem[] = [
  {
    id: 1,
    text: "Atención especializada para agricultores y grandes productores de cultivo.",
  },
  {
    id: 2,
    text: "Suministro eficiente de fertilizantes e insumos agrícolas esenciales.",
  },
  {
    id: 3,
    text: "Soluciones diseñadas para resolver las necesidades inmediatas del sector agropecuario.",
  },
];

// ─── Sobre Nosotros ──────────────────────────────────────────

export const sobreNosotros: SobreNosotrosData = {
  sectionTitle: "Sobre Nosotros",
  concepto: {
    title: "Concepto",
    description:
      "Somos una empresa dedicada a fortalecer el sector agrícola, posicionándonos como el aliado principal de quienes trabajan la tierra.",
  },
  mision: {
    title: "Nuestra Misión",
    description:
      "Resolver de manera eficiente el suministro de insumos, asegurando que cada productor cuente con productos de alta calidad y la asesoría necesaria para hacer crecer su negocio.",
  },
  valorAgregado: {
    title: "Valor Agregado",
    description:
      "En Agroproductos y servicios del centro, no solo vendemos insumos; ofrecemos un compromiso inquebrantable con la productividad y la rapidez que el campo exige hoy en día.",
  },
};

// ─── Soluciones Agrícolas ────────────────────────────────────

export const soluciones: SolucionesData = {
  sectionTitle: "Gestión Integral de Insumos para el Campo",
  sectionDescription:
    "Entendemos que el tiempo en la agricultura es vital. Por ello, nuestra propuesta de valor se centra en blindar tu ciclo de producción:",
  items: [
    {
      id: 1,
      title: "Disponibilidad Inmediata",
      description:
        "Contamos con el stock necesario para evitar retrasos en tus etapas de fertilización.",
      icon: "📦",
    },
    {
      id: 2,
      title: "Logística de Respuesta Rápida",
      description:
        "Procesos de entrega ágiles diseñados para llegar hasta donde tu cultivo lo necesite.",
      icon: "🚚",
    },
    {
      id: 3,
      title: "Asesoría en Fertilizantes",
      description:
        "Orientación técnica para la selección de los mejores productos según tu tipo de suelo y siembra.",
      icon: "🧪",
    },
  ],
};

// ─── Productos y Sectores ────────────────────────────────────

export const productosTitle = "Productos y Sectores";
export const productosDescription =
  "Ofrecemos una gama completa de productos y servicios diseñados para impulsar el rendimiento de tu producción agrícola.";

export const productosSectores: ProductoSector[] = [
  {
    id: 1,
    title: "Fertilizantes Especializados",
    description:
      "Nutrición vegetal avanzada para diversos tipos de suelo.",
    icon: "🌱",
  },
  {
    id: 2,
    title: "Insumos Agrícolas",
    description:
      "Todo lo necesario para la protección y cuidado de tus cultivos.",
    icon: "🛡️",
  },
  {
    id: 3,
    title: "Atención a Productores",
    description:
      "Soluciones a medida para agricultores independientes y empresas agrícolas.",
    icon: "👨‍🌾",
  },
  {
    id: 4,
    title: "Logística y Distribución",
    description:
      "Servicio de entrega eficiente mediante nuestras unidades de transporte.",
    icon: "🚛",
  },
];

// ─── Contacto ────────────────────────────────────────────────

export const contacto: ContactoData = {
  sectionTitle: "Contacto",
  sectionDescription:
    "¿Listo para optimizar tu producción agrícola? Contáctanos y recibe asesoría personalizada.",
  ubicacion: {
    label: "Ubicación",
    value: "León, Guanajuato",
  },
  telefono: {
    label: "Teléfono",
    value: "+52 (477) 000-0000",
    href: "tel:+524770000000",
  },
  correo: {
    label: "Correo electrónico",
    value: "contacto@agroproductos.com",
    href: "mailto:contacto@agroproductos.com",
  },
  whatsapp: {
    label: "WhatsApp",
    value: "+52 (477) 000-0000",
    href: "https://wa.me/524770000000?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20de%20fertilizantes.",
    cta: "Cotiza por WhatsApp",
  },
};

// ─── Footer ──────────────────────────────────────────────────

export const footerData: FooterData = {
  companyName: "Agroproductos y servicios del centro",
  description:
    "Tu aliado estratégico en el campo y la producción agrícola. León, Guanajuato.",
  copyright: `© ${new Date().getFullYear()} Agroproductos y servicios del centro. Todos los derechos reservados.`,
};

// ─── Metadata SEO ────────────────────────────────────────────

export const seoMetadata = {
  title: "Agroproductos y servicios del centro | Fertilizantes e Insumos Agrícolas",
  description:
    "Tu aliado estratégico en el campo. Suministro eficiente de fertilizantes, insumos agrícolas y asesoría técnica en León, Guanajuato.",
  keywords: [
    "agroproductos",
    "fertilizantes",
    "insumos agrícolas",
    "León Guanajuato",
    "producción agrícola",
    "nutrición vegetal",
  ],
  ogImage: "/og-image.jpg",
  url: "https://agroproductos.com",
};
