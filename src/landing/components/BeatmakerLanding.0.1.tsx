import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
import Hero from "../../components/sections/Hero";
import Footer from "../../components/layout/Footer";
import Services from "../../components/sections/servicios2";
import Testimonials from "../../components/sections/Testimonials";
import Contact from "../../components/sections/Contact";
import FAQ from "../../components/sections/FAQ";

export default function BeatmakerLanding() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar
        logo="/beatmaker-logo.png"
        logoAlt="Beatmaker Pro"
        links={[
          { name: "Inicio", url: "/" },
          { name: "Portafolio", url: "/portfolio" },
          { name: "Contacto", url: "/contact" },
        ]}
        backgroundColor="bg-black"
        textColor="text-white"
        borderColor="border-gray-800"
      />
      <Sidebar
        title="Menú de Producción"
        links={[
          { name: "Mis Beats", url: "/beats", icon: "/icons/beat.svg" },
          { name: "Samples", url: "/samples", icon: "/icons/sample.svg" },
          { name: "Plugins", url: "/plugins", icon: "/icons/plugin.svg" },
          { name: "Contacto", url: "/contact", icon: "/icons/contact.svg" },
        ]}
        footerText="© 2025 Beatmaker Pro"
        backgroundColor="bg-gray-900"
        textColor="text-white"
        borderColor="border-gray-700"
        width="w-64"
        position="left"
        variant="temporary" // Puedes abrir/cerrar en móvil
        openOnMobile={false}
      />
      
      {/* ✅ Hero */}
      <Hero
        title="Tu sonido merece esto"
        subtitle="Producción profesional, beats únicos, sin límites"
        ctaText="Escucha mi último track"
        ctaLink="/samples"
        backgroundImage="/images/beatmaker-hero.jpg"
        backgroundColor="bg-gradient-to-r from-gray-900 to-black"
        textColor="text-white"
        height="h-screen"
        fontFamily="font-mono"
        ctaVariant="primary"
      />

      <Services
        title="Servicios de Producción"
        subtitle="Todo lo que necesitas para tu música"
        services={[
          {
            title: "Producción de Beats",
            description:
              "Creación de beats únicos con tu estilo y sonido personal",
            icon: "/icons/production.svg",
          },
          {
            title: "Mastering",
            description:
              "Optimización de sonido para streaming y distribución profesional",
            icon: "/icons/mastering.svg",
          },
          {
            title: "Mixing",
            description: "Balance perfecto entre instrumentos y voces",
            icon: "/icons/mixing.svg",
          },
          {
            title: "Sampling",
            description: "Creación de samples exclusivos para tu música",
            icon: "/icons/sampling.svg",
          },
          {
            title: "Composición",
            description: "Creación de melodías y estructuras musicales",
            icon: "/icons/composition.svg",
          },
          {
            title: "Remix",
            description: "Remix profesional de tus canciones favoritas",
            icon: "/icons/remix.svg",
          },
        ]}
        backgroundColor="bg-gray-900"
        textColor="text-white"
        cardBackgroundColor="bg-gray-800"
        cardTextColor="text-white"
      />
      {/* ✅ Testimonials */}
      <Testimonials
        title="Lo que dicen de mí"
        subtitle="Testimonios de artistas y productores"
        testimonials={[
          {
            name: "DJ Rock",
            role: "Productor musical",
            quote: "¡Este beat me cambió la vida! La calidad es increíble.",
            avatar: "/avatars/dj-rock.jpg",
          },
          {
            name: "Producer X",
            role: "Artista independiente",
            quote: "La mejor producción que he tenido. Muy profesional.",
            avatar: "/avatars/producer-x.jpg",
          },
          {
            name: "MC Flow",
            role: "Rapero",
            quote: "Los beats son únicos, me ayudaron a definir mi sonido.",
            avatar: "/avatars/mc-flow.jpg",
          },
        ]}
        backgroundColor="bg-black"
        textColor="text-white"
        cardBackgroundColor="bg-gray-800"
        cardTextColor="text-white"
      />
      {/* ✅ FAQ */}
      <FAQ
        title="Preguntas Frecuentes"
        subtitle="Todo lo que necesitas saber"
        faqs={[
          {
            question: "¿Cuánto tiempo tardas en producir un beat?",
            answer:
              "Depende de la complejidad, pero generalmente entre 24-48 horas para beats estándar. Puedo acelerar si es urgente.",
          },
          {
            question: "¿Qué formato entregan los beats?",
            answer:
              "Te entrego en WAV de alta calidad (24-bit/44.1kHz) y MP3 para escuchar en cualquier dispositivo.",
          },
          {
            question: "¿Puedo usar el beat para lanzar comercialmente?",
            answer:
              "Sí, todos los beats vienen con derechos de uso comercial. Puedes lanzar en Spotify, YouTube, etc.",
          },
          {
            question: "¿Haces remixes?",
            answer:
              "Sí, ofrezco servicios de remix profesional. Puedo adaptar cualquier canción a tu estilo musical.",
          },
        ]}
        backgroundColor="bg-black"
        textColor="text-white"
        itemBackgroundColor="bg-gray-800"
        itemTextColor="text-white"
      />
      {/* ✅ Contact */}
      <Contact
        title="Trabajemos Juntos"
        subtitle="¿Listo para tu próximo hit?"
        subtextColor="bg-gray-700"
        description="Envíame un mensaje y trabajemos juntos en tu próximo proyecto musical."
        backgroundColor="bg-gray-900"
        textColor="text-white"
        formBackgroundColor="bg-gray-700"
        formTextColor="text-white"
        id="contacto" // Pasa el id específico
      />
      {/* ✅ Aquí puedes integrar con Formspree, EmailJS, etc*/}.
      {/* ✅ Footer */}
      <Footer
        socialLinks={[
          {
            name: "Instagram",
            url: "https://instagram.com/beatmaker",
            icon: "/icons/instagram.svg",
          },
          {
            name: "SoundCloud",
            url: "https://soundcloud.com/beatmaker",
            icon: "/icons/soundcloud.svg",
          },
          {
            name: "YouTube",
            url: "https://youtube.com/beatmaker",
            icon: "/icons/youtube.svg",
          },
        ]}
        copyrightText="© 2025 Beatmaker Pro. Todos los derechos reservados."
        backgroundColor="bg-gray-900"
        textColor="text-gray-300"
      />
    </div>
  );
}
