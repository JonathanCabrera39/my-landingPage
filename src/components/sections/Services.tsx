// src/components/sections/Services.tsx
interface Service {
  title: string;
  description: string;
  icon?: string; // URL del icono opcional
}

interface ServicesProps {
  // ... otras props
  id?: string;
  preset?: "default" | "subjona"; // Nueva prop para elegir el conjunto de servicios
  customServices?: Service[]; // Opcional: para pasar servicios personalizados si no se usa un preset
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  titleBackgroundColor?: string;
  cardBackgroundColor?: string;
  cardTextColor?: string;
  cardClass?: string;
}

// Definir los conjuntos de servicios aquí
const servicePresets = {
  default: [
    {
      title: "Nuestros Servicios",
      description: "Producción musical profesional al más alto nivel",
      icon: "🎵",
    },
    // ... otros servicios por defecto
  ],
  subjona: [
    {
      title: "Landing Pages Rápidas",
      description:
        "Entrega en 24-48 horas. Diseño moderno, 100% responsive y optimizado para móviles.",
      icon: "⚡",
    },
    {
      title: "Integración con WhatsApp",
      description:
        "Botón flotante + enlaces directos para que tus clientes te contacten al instante.",
      icon: "💬",
    },
    {
      title: "Formularios Funcionales",
      description:
        "Captura leads sin backend. Usamos Formspree o Netlify Forms (gratis y fácil).",
      icon: "📩",
    },
  ],
  // Puedes añadir más presets aquí si lo necesitas en el futuro
};

export default function Services({
  id,
  preset = "default", // Valor por defecto
  customServices, // Si se pasa, ignora el preset
  title = preset === "subjona" ? "Lo que ofrezco" : "Nuestros Servicios",
  subtitle = preset === "subjona"
    ? "Soluciones simples, rápidas y efectivas para emprendedores que quieren vender YA."
    : "Producción musical profesional al más alto nivel",
  backgroundColor = preset === "subjona"
    ? "bg-gradient-to-r from-blue-950 to-blue-800"
    : "bg-gray-900",
  textColor = preset === "subjona" ? "text-white" : "text-white",
  titleBackgroundColor = preset === "subjona" ? "bg-gray-50" : "bg-gray-800", 
  cardBackgroundColor = preset === "subjona" ? "bg-gray-50" : "bg-gray-800",
  cardTextColor = preset === "subjona" ? "text-gray-800" : "text-white",
  cardClass = preset === "subjona"
    ? "p-8 rounded-xl shadow-sm hover:shadow-md transition"
    : "rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow",
}: ServicesProps) {
  // Determinar qué servicios usar
  const servicesToRender = customServices || servicePresets[preset] || [];

  return (
    <section id={id} className={`${backgroundColor} ${textColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Título y subtítulo */}
        <div className={`${titleBackgroundColor} ${textColor} text-center mb-12 `}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl">{subtitle}</p>
        </div>

        {/* Tarjetas de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {servicesToRender.map((service, index) => (
            <div
              key={index}
              className={`
                ${cardClass}
                ${cardBackgroundColor ? cardBackgroundColor : ""}
                ${cardTextColor ? cardTextColor : ""}
              `}
            >
              {service.icon && (
                <div className="text-4xl mb-4">{service.icon}</div> // Mostrar icono como texto si es un emoji
                // Si el icono es una URL, usar <img src={service.icon} ... />
              )}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
