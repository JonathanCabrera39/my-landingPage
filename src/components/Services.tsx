// src/components/Services.tsx
export default function Services() {
  const services = [
    {
      title: "Landing Pages Rápidas",
      description: "Entrega en 24-48 horas. Diseño moderno, 100% responsive y optimizado para móviles.",
      icon: "⚡",
    },
    {
      title: "Integración con WhatsApp",
      description: "Botón flotante + enlaces directos para que tus clientes te contacten al instante.",
      icon: "💬",
    },
    {
      title: "Formularios Funcionales",
      description: "Captura leads sin backend. Usamos Formspree o Netlify Forms (gratis y fácil).",
      icon: "📩",
    },
  ];

  return (
    <section id="servicios" className="w-full py-20 bg-gradient-to-r from-blue-950 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" bg-gray-50 text-center mb-16 rounded-xl">
          <h2 className="  text-3xl md:text-4xl  font-bold text-gray-800 ">Lo que ofrezco</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones simples, rápidas y efectivas para emprendedores que quieren vender YA.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}