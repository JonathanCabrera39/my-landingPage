//import Contact from "../components/Contact";
import Contact from "../components/sections/Contact";
//import Footer from "../components/Footer";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
//import HeroViejo from "../components/Hero";
import Navbar from "../components/layout/Navbar";
//import Portfolio from "../components/Portfolio";
import Portfolio from "../components/sections/Portfolio";
//import Services from "../components/Services";
import Testimonials from "../components/sections/Testimonials";
//import WhatsAppButton from "../components/WhatsAppButton";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import logo2 from "../image/logo.png";
//import { beatmakerTheme } from '../theme/landing-themes';

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-950 to-blue-800 ">
      <Navbar
        logo={logo2}
        logoAlt="Subjona"
        logoWidth="w-18"
        logoHeight="h-16"
        links={[
          { name: "Inicio", url: "#inicio" },
          { name: "Servicios", url: "#servicios" },
          { name: "Contacto", url: "#contacto" },
        ]}
        ctaText="Cotizar"
        ctaLink="#contacto"
        backgroundColor="bg-blue-950"
        textColor="text-gray-600 hover-blue-200"
        mobileMenuColor="text-gray-500"
      />
      {/* <HeroViejo/> */}
      <Hero
        // {...applyTheme(beatmakerTheme, 'hero')}  // ✅ Aplica tema base
        title="Transforma tu idea en realidad"
        subtitle="Diseño landing pages profesionales..."
        backgroundClass="hero-bg" // ✅ Tu clase CSS
        backgroundColor="bg-black/60" // ✅ Overlay con opacidad
        height="py-48 md:py-48"
        ctaButtons={[
          {
            text: "📲 Escríbeme por WhatsApp",
            link: "https://wa.me/593999999999?text=¡Hola!%20Necesito%20una%20landing%20page.",
            variant: "whatsapp",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          {
            text: "Ver ejemplos",
            link: "#contacto",
            variant: "examples",
          },
        ]}
      />
      <Services
        id="services" // Puedes pasar el id si lo requiere tu layout general
        title="Lo que ofrezco "
        subtitle="Soluciones simples, rápidas y efectivas para emprendedores que quieren vender YA."
        preset="subjona"
        backgroundColor="bg-gradient-to-r from-blue-950 to-blue-800"
        titleBackgroundColor="bg-gray-50 rounded-xl"
        textColor="text-black" // Ajusta según el contraste deseado
        cardClass="bg-gray-50 p-8 rounded-xl hover:to-blue-300 shadow-sm hover:shadow-md transition text-gray-800" // Clases específicas para las tarjetas
      />
      <Portfolio
        id="portafolio"
        preset="subjona"
        backgroundColor="bg-gray-50"
        textColor="text-gray-800"
        title="¿Cuál es tu negocio?"
        subtitle="No vendo plantillas. Diseño landings hechas para <strong>tu</strong> audiencia."
      />
      <Testimonials
        id="testimonios" // Pasa el id específico
        preset="subjona" // Usa el preset específico de subjona
        // Puedes sobreescribir estilos si es necesario, pero ya están definidos en el preset
        // backgroundColor="bg-blue-100" // Esto sobreescribiría el valor del preset 'subjona'
      />
      <Contact
        id="contacto" // Pasa el id específico
        preset="subjona" // Usa el preset específico de subjona
        // Puedes sobreescribir estilos si es necesario, pero ya están definidos en el preset
        // backgroundColor="bg-blue-100" // Esto sobreescribiría el valor del preset 'subjona'
      />
      <WhatsAppButton
        phoneNumber="542665276622" // Tu número de WhatsApp
        defaultMessage="¡Hola! Vi tu landing y quiero una cotización para mi proyecto.\n\nPor favor, para darme un presupuesto exacto:\n1. ¿Qué necesitas? (ej: landing para veterinario, beatmaker, gimnasio...)\n2. ¿Tienes deadline o fecha límite?\n3. ¿Tienes logos, textos o imágenes listas?"
        position="bottom-right" // Opcional: 'bottom-right', 'bottom-left', etc.
        size="md" // Opcional: 'sm', 'md', 'lg'
        // Puedes añadir className si necesitas estilos extra
      />
      <Footer
        preset="subjona" // Usa el preset específico de subjona
        // Puedes sobreescribir estilos si es necesario, pero ya están definidos en el preset
        // backgroundColor="bg-blue-100" // Esto sobreescribiría el valor del preset 'subjona'
      />
    </div>
  );
}
