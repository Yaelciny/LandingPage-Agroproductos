import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import SobreNosotros from "@/src/components/SobreNosotros";
import Soluciones from "@/src/components/Soluciones";
import Productos from "@/src/components/Productos";
import Contacto from "@/src/components/Contacto";
import Footer from "@/src/components/Footer";

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
    </>
  );
}
