// src/components/layout/Footer.tsx
import React from 'react';

interface SocialLink {
  name: string;
  url: string;
  icon?: string; // Opcional: URL del icono o nombre del icono
}

interface FooterPreset {
  backgroundColor: string;
  textColor: string;
  copyrightText: string;
  authorName: string;
  authorLink: string;
  socialLinks: SocialLink[];
}

interface FooterProps {
  preset?: 'default' | 'subjona';
  backgroundColor?: string;
  textColor?: string;
  copyrightText?: string;
  authorName?: string;
  authorLink?: string;
  socialLinks?: SocialLink[];
  // Añadir más props si se necesitan sobrescribir estilos
  className?: string; // Clase adicional opcional
}

// Definir los presets
const footerPresets: Record<string, FooterPreset> = {
  default: {
    backgroundColor: 'bg-gray-900',
    textColor: 'text-gray-400',
    copyrightText: `© ${new Date().getFullYear()} — Todos los derechos reservados.`,
    authorName: 'Autor',
    authorLink: '#',
    socialLinks: [
      // Puedes dejar este vacío o con ejemplos genéricos
    ],
  },
  subjona: {
    backgroundColor: 'bg-gray-900',
    textColor: 'text-gray-400',
    copyrightText: `© ${new Date().getFullYear()} — Landing pages, beats y juegos 2D.`,
    authorName: 'Subjona',
    authorLink: '#inicio', // Asumiendo que este es el enlace correcto
    socialLinks: [
      {
        name: 'WhatsApp',
        url: 'https://wa.me/593999999999?text=¡Hola!%20Estoy%20interesado%20en%20tus%20servicios.',
      },
      // Puedes añadir más enlaces aquí si los descomentas en el original
      // {
      //   name: 'Twitter',
      //   url: 'https://twitter.com/subjona',
      // },
      // {
      //   name: 'Instagram',
      //   url: 'https://instagram.com/subjona',
      // },
    ],
  },
};

export default function Footer({
  preset = 'default',
  backgroundColor: customBackgroundColor,
  textColor: customTextColor,
  copyrightText: customCopyrightText,
  authorName: customAuthorName,
  authorLink: customAuthorLink,
  socialLinks: customSocialLinks,
  className = '',
}: FooterProps) {

  // Obtener los valores del preset o usar los personalizados
  const presetConfig = footerPresets[preset] || footerPresets.default;
  const backgroundColor = customBackgroundColor ?? presetConfig.backgroundColor;
  const textColor = customTextColor ?? presetConfig.textColor;
  const copyrightText = customCopyrightText ?? presetConfig.copyrightText;
  const authorName = customAuthorName ?? presetConfig.authorName;
  const authorLink = customAuthorLink ?? presetConfig.authorLink;
  const socialLinks = customSocialLinks ?? presetConfig.socialLinks;

  return (
    <footer className={`${backgroundColor} ${textColor} py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          Hecho con 💜 por{' '}
          <a
            href={authorLink}
            className="font-medium text-white hover:text-indigo-400 transition"
          >
            {authorName}
          </a>
        </p>
        <p className="mt-2 text-xs">
          {copyrightText}
        </p>
        {socialLinks && socialLinks.length > 0 && (
          <div className="mt-4 flex justify-center space-x-6 text-sm">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}