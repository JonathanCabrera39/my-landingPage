// src/components/Testimonials.tsx
export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos M.",
      role: "Emprendedor",
      content: "¡Entregó mi landing en menos de 24 horas! Ya tengo mis primeros clientes gracias a ella.",
    },
    {
      name: "Ana R.",
      role: "Coach",
      content: "Profesional, rápido y se tomó el tiempo de entender mi negocio. Totalmente recomendado.",
    },
    {
      name: "Diego L.",
      role: "Músico",
      content: "Perfecto para promocionar mi próximo show. El botón de WhatsApp me ha traído muchas reservas.",
    },
  ];

  return (
    <section id="testimonios" className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Lo que dicen mis clientes</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            No soy el más barato, pero sí el más rápido y confiable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="text-yellow-400 mb-3">★★★★★</div>
              <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}