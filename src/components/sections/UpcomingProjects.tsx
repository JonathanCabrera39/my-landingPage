import { motion } from "framer-motion";

const upcomingItems = [
  {
    id: "dark-fantasy",
    title: "Dark Fantasy (StoreGame)",
    description:
      "Tienda oficial del videojuego. Marketplace para adquirir cartas, monedas y objetos exclusivos. ",
    status: "En desarrollo activo",
    phase: "2 Desarrollo de Core Features",
    progress: 25,
    icon: "🎮-🛒", // 👈 Cambiado a carrito de compras para que coincida con la tienda
    gradient: "from-purple-950/80 to-black/90",
  },
  {
    id: "tienda-productos",
    title: "Tienda de Productos",
    description:
      "E-commerce a medida. Actualmente en fase de arquitectura y armado de instrucciones para arrancar.",
    status: "Desarrollo en planificacion",
    phase: "1 desarrolo inicial",
    progress: 5,
    icon: "🛒",
    gradient: "from-slate-900/80 to-black/90",
  },
];

export default function UpcomingProjects() {
  return (
    <section
      id="proximamente"
      className="w-full py-20 bg-gray-900 from-blue-950 to-blue-800 text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            En el Horno 🔥
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Proyectos que estoy cocinando a fuego lento. Aún no están listos
            para el público, pero el progreso es real.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {upcomingItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${item.gradient} backdrop-blur-sm p-6 group`}
            >
              {/* Efecto de brillo sutil al hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="px-3 py-1 text-xs font-semibold tracking-wider text-gray-300 uppercase bg-black/40 rounded-full border border-white/10">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2 block">
                  Fase: {item.phase}
                </span>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Barra de progreso */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium text-gray-400">
                    <span>Progreso estimado</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-black/60 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                      className={`h-full rounded-full ${item.id === "dark-fantasy" ? "bg-purple-500" : "bg-emerald-500"}`}
                    />
                  </div>
                </div>

                {/* Mensaje de bloqueo elegante */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span>Acceso restringido hasta el lanzamiento</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
