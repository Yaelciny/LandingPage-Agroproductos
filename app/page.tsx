// ─── Pagina principal ────────────────────────────────────────
// Ensambla todos los componentes de la landing page en orden.
// Cada seccion se importa desde src/components/.

import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/components/Hero/Hero";
import SobreNosotros from "@/src/components/SobreNosotros/SobreNosotros";
import Soluciones from "@/src/components/Soluciones/Soluciones";
import Productos from "@/src/components/Productos/Productos";
import Contacto from "@/src/components/Contacto/Contacto";
import Footer from "@/src/components/Footer/Footer";
import WhatsAppFloat from "@/src/components/WhatsAppFloat/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SobreNosotros />
        <Soluciones />
        <Productos />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
