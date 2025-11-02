// src/components/Portfolio.tsx
import { useState } from 'react';
import { motion, AnimatePresence ,Variants } from 'framer-motion';

export default function Portfolio() {
  const [showAllProfessionals, setShowAllProfessionals] = useState(false);
  const [showAllCreators, setShowAllCreators] = useState(false);

  const professionals = [
    { id: 'vet', title: "Veterinario", desc: "Landing para clínica veterinaria con horarios, servicios y WhatsApp.", gradient: "from-emerald-900 to-teal-800" },
    { id: 'gym', title: "Coach de Ejercicio", desc: "Promoción de planes de entrenamiento + formulario de contacto.", gradient: "from-amber-900 to-orange-800" },
    { id: 'doctor', title: "Doctor", desc: "Consultorio médico con turnos online y datos de contacto claros.", gradient: "from-blue-950 to-blue-800" },
    { id: 'lawyer', title: "Abogado", desc: "Servicios legales con enfoque en confianza y profesionalismo.", gradient: "from-gray-900 to-zinc-800" },
  ];

  const creators = [
    { id: 'gamedev', title: "Creador de Juegos", desc: "Portafolio de juegos 2D + tienda de demos y contacto.", gradient: "from-purple-900 to-fuchsia-800" },
    { id: 'beatmaker', title: "Beatmaker", desc: "Catálogo de beats, player embebido y enlace a compra.", gradient: "from-rose-900 to-red-800" },
    { id: 'singer', title: "Cantante", desc: "Próximos shows, música, redes y formulario para contrataciones.", gradient: "from-indigo-900 to-purple-800" },
    { id: 'guitarist', title: "Guitarrista", desc: "Clases online + demos + contacto para sesiones.", gradient: "from-cyan-900 to-blue-800" },
  ];

  // Animación para cada tarjeta
const itemVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut"
    }
  }),
  exit: { 
    opacity: 0, 
    x: -20, 
    transition: { duration: 0.2 } 
  }
};

  return (
    <section id="portafolio" className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">¿Cuál es tu negocio?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            No vendo plantillas. Diseño landings hechas para <strong>tu</strong> audiencia.
          </p>
        </div>

        {/* Sección 1: Profesionales */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Para profesionales y servicios</h3>
            <button
              onClick={() => setShowAllProfessionals(!showAllProfessionals)}
              className="text-sm text-indigo-600 font-medium hover:text-indigo-800"
            >
              {showAllProfessionals ? 'Ver menos' : 'Ver todos los ejemplos'}
            </button>
          </div>
          <p className="text-gray-600 mb-6">
            ¿Ofreces un servicio? Tu landing debe transmitir confianza, claridad y profesionalismo.
          </p>

          <div className={`grid gap-6 ${showAllProfessionals ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-stretch'}`}>
            <AnimatePresence>
              {(showAllProfessionals ? professionals : professionals.slice(0, 2)).map((item, i) => (
                <motion.div
                  key={item.id}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden w-full max-w-md"
                >
                  <div className={`h-32 bg-gradient-to-r ${item.gradient} flex items-center justify-center`}>
                    <span className="text-white font-bold text-center px-3">{item.title}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Sección 2: Creadores */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Para creadores y artistas</h3>
            <button
              onClick={() => setShowAllCreators(!showAllCreators)}
              className="text-sm text-indigo-600 font-medium hover:text-indigo-800"
            >
              {showAllCreators ? 'Ver menos' : 'Ver todos los ejemplos'}
            </button>
          </div>
          <p className="text-gray-600 mb-6">
            ¿Eres artista o creador? Tu landing debe reflejar tu estilo, sonido o visión.
          </p>

          <div className={`grid gap-6 ${showAllCreators ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-stretch'}`}>
            <AnimatePresence>
              {(showAllCreators ? creators : creators.slice(0, 2)).map((item, i) => (
                <motion.div
                  key={item.id}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden w-full max-w-md"
                >
                  <div className={`h-32 bg-gradient-to-r ${item.gradient} flex items-center justify-center`}>
                    <span className="text-white font-bold text-center px-3">{item.title}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 text-center bg-blue-50 py-6 rounded-xl">
          <p className="text-gray-800 font-medium">
            ¿No ves tu rubro? <strong>Lo hacemos a tu medida.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}