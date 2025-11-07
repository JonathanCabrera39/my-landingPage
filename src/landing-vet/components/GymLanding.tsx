// src/pages/GymLanding.tsx
import { useState } from "react";

export default function GymLanding() {
  const [goal, setGoal] = useState("perder-peso");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-amber-800">
                Transforma tu cuerpo
              </span>
            </div>
            <a
              href={`https://wa.me/tunumero?text=Hola,%20quiero%20empezar%20mi%20transformación.%20Mi%20objetivo%20es%20${goal}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              📲 Empezar hoy
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-amber-700 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Tu cuerpo puede más de lo que crees
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-amber-100">
            Entrenamiento personalizado, planes nutricionales y acompañamiento
            24/7. ¡Transformá tu vida en 12 semanas!
          </p>
          <div className="mt-10">
            <a
              href="https://wa.me/tunumero?text=Hola,%20quiero%20empezar%20mi%20transformación."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-amber-900 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition transform hover:scale-105"
            >
              💪 Empezar mi transformación
            </a>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">
              Planes de entrenamiento
            </h2>
            <p className="mt-4 text-gray-600">
              Elegí el que mejor se adapte a tus metas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Básico",
                price: "$49/mes",
                features: [
                  "3 sesiones semanales",
                  "Plan nutricional básico",
                  "Soporte por WhatsApp",
                ],
              },
              {
                title: "Premium",
                price: "$79/mes",
                features: [
                  "5 sesiones semanales",
                  "Plan nutricional personalizado",
                  "Check-in semanal",
                  "Acceso a comunidad",
                ],
              },
              {
                title: "Personalizado",
                price: "Consultar",
                features: [
                  "Sesiones ilimitadas",
                  "Nutrición 1:1",
                  "Análisis corporal",
                  "Acompañamiento 24/7",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className="bg-amber-50 p-6 rounded-xl border border-amber-100"
              >
                <div className="font-bold text-xl text-amber-800">
                  {plan.title}
                </div>
                <div className="text-2xl font-bold my-2">{plan.price}</div>
                <ul className="space-y-2 mt-4">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-gray-600">
                      ✓ {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="w-full py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            ¿Cómo trabajamos?
          </h2>
          <div className="bg-white rounded-xl shadow-md aspect-video flex items-center justify-center">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/zcx61btiw1k"
            ></iframe>
          </div>
          <p className="mt-4 text-gray-600">
            Mirá cómo guiamos a nuestros clientes paso a paso.
          </p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Resultados reales
            </h2>
            <p className="mt-4 text-gray-600">
              Historias de quienes transformaron su cuerpo y su vida.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                name: "Lucía M.",
                result: "Perdí 14 kg en 4 meses",
                text: "Nunca creí que podría, pero con el plan nutricional y el apoyo diario, lo logré.",
              },
              {
                name: "Martín R.",
                result: "Gané 8 kg de masa muscular",
                text: "El seguimiento personalizado hizo la diferencia. ¡Altamente recomendado!",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500"
              >
                <p className="text-gray-700 italic">"{t.text}"</p>
                <p className="mt-3 font-medium text-gray-800">
                  {t.name} • {t.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full py-20 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">¿Listo para transformarte?</h2>
          <p className="mt-4 text-amber-200">Empezá hoy mismo.</p>

          <form
            action="https://formspree.io/f/TU_FORM_ID"
            method="POST"
            className="mt-8 space-y-4 text-left"
          >
            <div>
              <label className="block mb-2">Tu nombre</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block mb-2">Objetivo principal</label>
              <select
                name="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              >
                <option value="perder-peso">Perder peso</option>
                <option value="ganar-masa">Ganar masa muscular</option>
                <option value="tonificar">Tonificar</option>
                <option value="rendimiento">Rendimiento deportivo</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Mensaje</label>
              <textarea
                name="message"
                rows={3}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                placeholder="¿En qué puedo ayudarte a transformarte?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 py-3 rounded font-bold transition"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </section>

      {/* WhatsApp flotante */}
      <a
        href={`https://wa.me/tunumero?text=Hola,%20quiero%20empezar%20mi%20transformación.%20Mi%20objetivo%20es%20${goal}.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
        aria-label="Consultar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Transforma tu cuerpo. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
