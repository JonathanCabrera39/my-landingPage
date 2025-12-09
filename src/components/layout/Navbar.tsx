// src/components/layout/Navbar.tsx
import { useState } from 'react';

interface NavbarProps {
  // ✅ Logo
  logo?: string;                    // URL de la imagen
  logoAlt?: string;                 // texto alternativo
  logoWidth?: string;               // ej: "w-10", "w-16"
  logoHeight?: string;              // ej: "h-10", "h-16"

  // ✅ Enlaces de navegación
  links: { name: string; url: string }[];

  // ✅ Botón de CTA
  ctaText?: string;                 // texto del botón
  ctaLink?: string;                 // enlace del botón
  ctaVariant?: 'primary' | 'secondary'; // estilos del botón

  // ✅ Estilos visuales
  backgroundColor?: string;         // ej: "bg-white", "bg-black", "bg-gray-900"
  textColor?: string;               // ej: "text-gray-900", "text-white"
  borderColor?: string;             // ej: "border-gray-200", "border-gray-700"
  shadow?: boolean;                 // true = con sombra, false = sin sombra

  // ✅ Responsive
  mobileMenuColor?: string;         // color del menú móvil (botón hamburguesa)
}

export default function Navbar({
  logo = "/logo.png",              // valor por defecto
  logoAlt = "Logo",
  logoWidth = "w-10",
  logoHeight = "h-10",
  links = [],
  ctaText,
  ctaLink,
  ctaVariant = 'primary',
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  borderColor = 'border-gray-200',
  shadow = true,
  mobileMenuColor = 'text-gray-600'
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Estilos del botón según variant
  const ctaStyles = ctaVariant === 'primary' 
    ? 'bg-blue-600 text-white hover:bg-blue-700' 
    : 'bg-gray-100 text-gray-900 hover:bg-gray-200';

  return (
    <nav 
      className={`
        ${backgroundColor} 
        ${textColor} 
        ${borderColor} 
        ${shadow ? 'shadow-md' : ''} 
        fixed w-full z-50
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* ✅ Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              className={`${logoWidth} ${logoHeight}`} 
              src={logo} 
              alt={logoAlt} 
            />
          </div>

          {/* ✅ Links de escritorio */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-sm font-medium hover:opacity-80 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ✅ CTA en escritorio */}
          {ctaText && ctaLink && (
            <div className="hidden md:flex items-center">
              <a
                href={ctaLink}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${ctaStyles}`}
              >
                {ctaText}
              </a>
            </div>
          )}

          {/* ✅ Botón de menú móvil */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${mobileMenuColor} hover:opacity-80 focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium hover:opacity-80 transition"
              >
                {link.name}
              </a>
            ))}
            {ctaText && ctaLink && (
              <a
                href={ctaLink}
                className={`mt-4 block w-full text-center px-4 py-2 rounded-md text-base font-medium transition ${ctaStyles}`}
              >
                {ctaText}
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}