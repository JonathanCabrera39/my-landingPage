// src/components/sections/PortfolioGeneric.tsx
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface PortfolioItem {
  id: string;
  title: string;
  desc: string;
  gradient: string;
  path: string;
}

interface PortfolioSection {
  title: string;
  description: string;
  items: PortfolioItem[];
  defaultVisibleCount?: number;
}

interface PortfolioGenericProps {
  id?: string;
  preset?: 'default' | 'subjona'; // Añadir preset
  // Mantener otras props si se quieren poder sobrescribir
  sections?: PortfolioSection[]; // Opcional si se usa preset
  backgroundColor?: string;
  textColor?: string;
  title?: string;
  subtitle?: string;
}

// Definir los conjuntos de datos aquí
const portfolioPresets = {
  default: [
    // Puedes dejar uno por defecto vacío o con ejemplos genéricos
    {
      title: "Sección por Defecto",
      description: "Descripción por defecto",
      items: [],
      defaultVisibleCount: 2,
    },
  ],
  subjona: [
    {
      title: "Para profesionales y servicios",
      description: "¿Ofreces un servicio? Tu landing debe transmitir confianza, claridad y profesionalismo.",
      items: [
        {
          id: "vet",
          title: "Veterinario",
          desc: "Landing para clínica veterinaria con horarios, servicios y WhatsApp.",
          gradient: "from-emerald-900 to-teal-800",
          path: "/vet",
        },
        {
          id: "gym",
          title: "Coach de Ejercicio",
          desc: "Promoción de planes de entrenamiento + formulario de contacto.",
          gradient: "from-amber-900 to-orange-800",
          path: "/gym",
        },
        {
          id: "doctor",
          title: "Doctor",
          desc: "Consultorio médico con turnos online y datos de contacto claros.",
          gradient: "from-blue-950 to-blue-800",
          path: "/doc",
        },
        {
          id: "lawyer",
          title: "Abogado",
          desc: "Servicios legales con enfoque en confianza y profesionalismo.",
          gradient: "from-gray-900 to-zinc-800",
          path: "/law",
        },
      ],
      defaultVisibleCount: 2,
    },
    {
      title: "Para creadores y artistas",
      description: "¿Eres artista o creador? Tu landing debe reflejar tu estilo, sonido o visión.",
      items: [
        {
          id: "gamedev",
          title: "Creador de Juegos",
          desc: "Portafolio de juegos 2D + tienda de demos y contacto.",
          gradient: "from-purple-900 to-fuchsia-800",
          path: "/gamedev",
        },
        {
          id: "beatmaker",
          title: "Beatmaker",
          desc: "Catálogo de beats, player embebido y enlace a compra.",
          gradient: "from-rose-900 to-red-800",
          path: "/baet", // Asumiendo que este es el path correcto
        },
        {
          id: "singer",
          title: "Cantante",
          desc: "Próximos shows, música, redes y formulario para contrataciones.",
          gradient: "from-indigo-900 to-purple-800",
          path: "/singer",
        },
        {
          id: "guitarist",
          title: "Guitarrista",
          desc: "Clases online + demos + contacto para sesiones.",
          gradient: "from-cyan-900 to-blue-800",
          path: "/guitar",
        },
      ],
      defaultVisibleCount: 2,
    },
  ],
};

export default function PortfolioGeneric({
  id,
  preset = 'default', // Valor por defecto
  sections: customSections, // Opcional: si se pasan secciones personalizadas
  backgroundColor = preset === 'subjona' ? 'bg-gray-50' : 'bg-gray-50', // Ejemplo de ajuste de estilo
  textColor = preset === 'subjona' ? 'text-gray-800' : 'text-gray-800', // Ejemplo de ajuste de estilo
  title = preset === 'subjona' ? "¿Cuál es tu negocio?" : "Portafolio",
  subtitle = preset === 'subjona' ? "No vendo plantillas. Diseño landings hechas para <strong>tu</strong> audiencia." : "Nuestro Portafolio",
}: PortfolioGenericProps) {
  const navigate = useNavigate();

  // Usar secciones del preset o las personalizadas
  const sectionsToRender = customSections || portfolioPresets[preset] || [];

  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionIndex: number) => {
    const sectionId = `section-${sectionIndex}`;
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <section id={id} className={`w-full py-20 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            <span dangerouslySetInnerHTML={{ __html: subtitle }} />
          </p>
        </div>

        {sectionsToRender.map((section, sectionIndex) => {
          const sectionId = `section-${sectionIndex}`;
          const isExpanded = expandedSections[sectionId] || false;
          const itemsToShow = isExpanded ? section.items : section.items.slice(0, section.defaultVisibleCount || 2);

          return (
            <div key={sectionIndex} className="mb-16">
              <div className="flex justify-between items-center mb-6">
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  {section.title}
                </h3>
                {section.items.length > (section.defaultVisibleCount || 2) && (
                  <button
                    onClick={() => toggleSection(sectionIndex)}
                    className="text-sm text-indigo-600 font-medium hover:text-indigo-800"
                  >
                    {isExpanded ? "Ver menos" : "Ver todos los ejemplos"}
                  </button>
                )}
              </div>
              <p className="text-gray-600 mb-6">
                {section.description}
              </p>

              <div
                className={`grid gap-6 ${
                  isExpanded
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-stretch"
                }`}
              >
                <AnimatePresence>
                  {itemsToShow.map((item, i) => (
                    <motion.div
                      key={item.id}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden w-full max-w-md cursor-pointer"
                      onClick={() => {
                        if (item.path) navigate(item.path);
                      }}
                    >
                      <div
                        className={`h-32 bg-gradient-to-r ${item.gradient} flex items-center justify-center`}
                      >
                        <span className="text-white font-bold text-center px-3">
                          {item.title}
                        </span>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          );
        })}

        <div className="mt-12 text-center bg-blue-50 py-6 rounded-xl">
          <p className="text-gray-800 font-medium">
            ¿No ves tu rubro? <strong>Lo hacemos a tu medida.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}