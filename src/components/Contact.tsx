// src/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">¿Listo para empezar?</h2>
        <p className="mt-4 text-lg text-gray-600">
          Escríbeme por WhatsApp o llena este formulario. Te respondo en menos de 2 horas.
        </p>

        <form
          action="https://formspree.io/f/xkgpbwpy"
          method="POST"
          className="mt-10 space-y-6 text-left"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Cuéntame tu proyecto..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}