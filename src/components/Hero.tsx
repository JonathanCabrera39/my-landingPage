// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="w-full hero-bg text-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center bg-black/60">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Transforma tu idea en realidad
        </h1>
        <p className="mt-6 text-lg font-medium md:text-2xl max-w-3xl mx-auto text-cyan-100">
          Diseño landing pages profesionales en menos de 48 horas. Listas para vender, con WhatsApp integrado y 100% responsive.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/593999999999?text=¡Hola!%20Necesito%20una%20landing%20page."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition transform hover:scale-105"
          >
            📲 Escríbeme por WhatsApp
          </a>
          <a
            href="#contacto"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-3 px-8 rounded-lg text-lg transition"
          >
            Ver ejemplos
          </a>
        </div>
      </div>
    </section>
  );
}