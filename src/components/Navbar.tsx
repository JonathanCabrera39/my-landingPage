// src/components/Navbar.tsx
import { useState } from 'react';
//import { Servicios } from './Servicios';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-400">MiMarca</span>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center space-x-8 ">
            <a href="#inicio" className="text-gray-600 hover:text-indigo-600 font-medium hover:scale-125">Inicio</a>
            <span className="text-gray-600 hover:text-indigo-600 font-medium hover:scale-125">Servicios</span>
            <a href="#contacto" className="text-gray-600 hover:text-indigo-600 font-medium hover:scale-125">Contacto</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-900 transition">
              Cotizar
            </button>
          </div>

          {/* Botón móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#inicio" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600">Inicio</a>
            <a href="#servicios" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600">Servicios</a>
            <a href="#contacto" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600">Contacto</a>
            <button className="mt-2 w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition">
              Cotizar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}