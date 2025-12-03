// src/components/sections/Testimonials.tsx

// Definir la interfaz para un testimonio
interface Testimonial {
  name: string;
  role?: string;
  quote: string; // Usaremos 'quote' internamente, pero el preset puede usar 'content'
  avatar?: string;
  stars?: number; // Añadir la propiedad stars
}

interface TestimonialsProps {
  id?: string; // Añadir id para anclaje
  preset?: 'default' | 'subjona';
  testimonials?: Testimonial[]; // Opcional si se usa preset
  title?: string;
  subtitle?: string;
  backgroundColor?: string; 
  textColor?: string;
  cardBackgroundColor?: string;
  cardTextColor?: string;
}

// Definir los conjuntos de datos aquí
const testimonialPresets = {
  default: [
    {
      name: "Cliente por Defecto",
      role: "Rol por Defecto",
      quote: "Testimonio por defecto.",
      stars: 5, // Añadir estrellas también aquí si se desea
    },
    // ... otros testimonios por defecto si se desea
  ],
  subjona: [
    {
      name: "Carlos M.",
      role: "Emprendedor",
      quote: "¡Entregó mi landing en menos de 24 horas! Ya tengo mis primeros clientes gracias a ella.",
      stars: 5,
    },
    {
      name: "Ana R.",
      role: "Coach",
      quote: "Profesional, rápido y se tomó el tiempo de entender mi negocio. Totalmente recomendado.",
      stars: 5,
    },
    {
      name: "Diego L.",
      role: "Músico",
      quote: "Perfecto para promocionar mi próximo show. El botón de WhatsApp me ha traído muchas reservas.",
      stars: 5,
    },
  ],
};

// Función para renderizar estrellas
const renderStars = (count: number) => {
  // Asegurarse de que count sea un número entre 0 y 5
  const validCount = Math.min(5, Math.max(0, count));
  return '★'.repeat(validCount).padEnd(5, '☆'); // Siempre 5 símbolos, completar con ☆ si es necesario
};

export default function Testimonials({
  id,
  preset = 'default',
  testimonials: customTestimonials,
  title = preset === 'subjona' ? "Lo que dicen mis clientes" : "Lo que dicen de mí",
  subtitle = preset === 'subjona' ? "No soy el más barato, pero sí el más rápido y confiable." : "Testimonios de artistas y productores",
  backgroundColor = preset === 'subjona' ? 'bg-gray-50' : 'bg-black',
  textColor = preset === 'subjona' ? 'text-gray-800' : 'text-white',
  cardBackgroundColor = preset === 'subjona' ? 'bg-white' : 'bg-gray-800',
  cardTextColor = preset === 'subjona' ? 'text-gray-800' : 'text-white',
}: TestimonialsProps) {

  // Determinar qué testimonios usar
  const testimonialsToRender = customTestimonials || testimonialPresets[preset] || [];


  return (
    <section id={id} className={`${backgroundColor} ${textColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y subtítulo */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className={`text-lg ${preset === 'subjona' ? 'text-gray-600' : 'text-gray-300'} max-w-2xl mx-auto`}>{subtitle}</p>
        </div>

        {/* Carrusel de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Ajustado para 3 columnas como en tu original */}
          {testimonialsToRender.map((testimonial, index) => (
            <div
              key={index}
              className={`${cardBackgroundColor} ${cardTextColor} p-6 rounded-xl shadow-sm border ${preset === 'subjona' ? 'border-gray-100' : 'shadow-lg'}`}
            >
              {testimonial.stars !== undefined && ( // Verificar si stars está definido
                <div className={`mb-3 ${preset === 'subjona' ? 'text-yellow-400' : ''}`}>
                  {renderStars(testimonial.stars)} {/* Llamar a la función*/}
                </div>
              )}
              <p className={`italic mb-4 ${preset === 'subjona' ? 'text-gray-700' : ''} `}>"{testimonial.quote}"</p>
              <div>
                <p className={`font-bold ${preset === 'subjona' ? 'text-gray-800' : ''}`}>{testimonial.name}</p>
                {testimonial.role && (
                  <p className={`text-sm ${preset === 'subjona' ? 'text-gray-500' : 'text-gray-400'}`}>{testimonial.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}