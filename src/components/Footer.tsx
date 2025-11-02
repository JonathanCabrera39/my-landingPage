// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          Hecho con 💜 por{' '}
          <a
            href="#inicio"
            className="font-medium text-white hover:text-indigo-400 transition"
          >
            Subjona
          </a>
        </p>
        <p className="mt-2 text-xs">
          © {new Date().getFullYear()} — Landing pages, beats y juegos 2D.
        </p>
        <div className="mt-4 flex justify-center space-x-6 text-sm">
          <a
            href="https://wa.me/tunumero"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            WhatsApp
          </a>
          {/* Descomenta y agrega tus redes si quieres */}
          {/* <a href="https://twitter.com/subjona" className="hover:text-white transition">Twitter</a>
          <a href="https://instagram.com/subjona" className="hover:text-white transition">Instagram</a> */}
        </div>
      </div>
    </footer>
  );
}