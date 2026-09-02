//import Contact from "../components/Contact";
import Contact from "../components/sections/Contact";
//import Faq from "../components/sections/FAQ";

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
import logo2 from "../image/subjona.png";
//import { beatmakerTheme } from '../theme/landing-themes';
import { subjonaServices } from '../components/data/subjonaServices';

import { 
  subjonaAuthorName, 
  subjonaAuthorLink, 
  subjonaCopyrightText, 
  subjonaSocialLinks 
} from "../components/data/subjonaFooter"; // Ajusta la ruta
import FAQ, { faqData } from "../landing/components/FAQ";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-r  from-blue-950 to-blue-800 ">
      <Navbar
        logo={logo2}
        logoAlt="Subjona"
        logoWidth="w-18"
        logoHeight="h-16"
        links={[
          { name: "Inicio", url: "#inicio" },
          { name: "Servicios", url: "#servicios" },
          { name: "Contacto", url: "#contacto" },
          { name: "FAQ", url: "#FAQ" },
          { name: "Platillas", url: "#portafolio" },

          { name: "Portafolio", url: "#portafolio" },

          

        ]}
        ctaText="Cotizar"
        ctaLink="#contacto"
        textColor="text-gray-200 p-2"
        backgroundColor="bg-blue-950 "
        mobileMenuColor="text-gray-500"
      />
      {/* <HeroViejo/> */}
      <Hero
       id= "inicio"
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
      id="servicios"
      title="Lo que ofrezco"
      subtitle="Soluciones simples, rápidas y efectivas para emprendedores que quieren vender YA."
      services={subjonaServices}
      // Personalizar contenedor principal
      containerClassName="bg-gradient-to-r from-blue-950 to-blue-800 py-20"
      containerStyle={{ minHeight: '500px' }} // Ejemplo de estilo inline
      // Personalizar área de título/subtítulo
      titleAreaClassName="bg-gray-50 text-center mb-16 rounded-xl p-4"
      titleClassName="text-4xl font-extrabold tracking-tight text-gray-800"
      subtitleClassName="text-lg text-gray-600 max-w-2xl mx-auto"
      // Personalizar grilla
      gridClassName="grid grid-cols-1 md:grid-cols-3 gap-10"
      // Personalizar tarjetas
      cardClassName="bg-white p-8 rounded-xl shadow-sm transition text-gray-800"
      cardHoverClassName="hover:shadow-md hover:scale-105" // Aplicar efectos de hover
      cardStyle={{ border: '1px solid #e5e7eb' }} // Ejemplo de estilo inline en la tarjeta
      // Personalizar icono
      iconClassName="text-3xl mb-3 text-indigo-600"
      // Personalizar título del servicio
      serviceTitleClassName="text-xl font-bold mb-3 text-gray-800"
      // Personalizar descripción del servicio
      serviceDescriptionClassName="text-gray-600"
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
        <FAQ 
        id="FAQ"
        title="Preguntas Frecuentes"
        description="Resolvemos tus dudas antes de empezar."
        items={faqData} // ✅ ¡Esto es obligatorio y debe ser un array!
        initialVisible={2}
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
      authorName={subjonaAuthorName}
      authorLink={subjonaAuthorLink}
      copyrightText={subjonaCopyrightText}
      socialLinks={subjonaSocialLinks}
      // Personaliza estilos si es necesario
      containerClassName="bg-gray-900 py-8"
      authorLinkClassName="font-medium text-white hover:text-indigo-400 transition"
      socialLinkClassName="hover:text-green-400 transition text-gray-300"
      socialAreaClassName="mt-4 flex justify-center space-x-6 text-sm"
    />
    </div>
  );
}
