// src/components/layout/Footer.tsx
import React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon?: string; // Opcional: URL del icono o nombre del icono
}

interface FooterProps {
  // Contenido
  authorName: string;
  authorLink: string;
  copyrightText: string;
  socialLinks?: SocialLink[]; // Opcional

  // Estilos generales del contenedor
  containerClassName?: string; // Clases para el <footer> principal
  containerStyle?: React.CSSProperties; // Estilos inline para el contenedor principal

  // Estilos del área de texto principal (nombre, copyright)
  textAreaClassName?: string; // Clases para el div que contiene texto
  textAreaStyle?: React.CSSProperties; // Estilos inline para el div del texto

  // Estilos del texto del autor
  authorTextClassName?: string; // Clases para el texto "Hecho con 💜 por..."
  authorTextStyle?: React.CSSProperties; // Estilos inline para el texto del autor

  // Estilos del enlace del autor
  authorLinkClassName?: string; // Clases para el <a> del autor
  authorLinkStyle?: React.CSSProperties; // Estilos inline para el <a> del autor

  // Estilos del texto de copyright
  copyrightTextClassName?: string; // Clases para el <p> del copyright
  copyrightTextStyle?: React.CSSProperties; // Estilos inline para el <p> del copyright

  // Estilos del área de redes sociales
  socialAreaClassName?: string; // Clases para el div que contiene los enlaces sociales
  socialAreaStyle?: React.CSSProperties; // Estilos inline para el div de redes

  // Estilos de cada enlace social
  socialLinkClassName?: string; // Clases para cada <a> de red social
  socialLinkStyle?: React.CSSProperties; // Estilos inline para cada <a> de red social
}

// Valores por defecto
const DEFAULT_AUTHOR_NAME = "Autor";
const DEFAULT_AUTHOR_LINK = "#";
const DEFAULT_COPYRIGHT_TEXT = `© ${new Date().getFullYear()} — Todos los derechos reservados.`;
const DEFAULT_CONTAINER_CLASSNAME = "py-8";
const DEFAULT_TEXT_AREA_CLASSNAME = "text-center";
const DEFAULT_AUTHOR_TEXT_CLASSNAME = "text-sm";
const DEFAULT_AUTHOR_LINK_CLASSNAME = "font-medium text-white hover:text-indigo-400 transition";
const DEFAULT_COPYRIGHT_TEXT_CLASSNAME = "mt-2 text-xs";
const DEFAULT_SOCIAL_AREA_CLASSNAME = "mt-4 flex justify-center space-x-6 text-sm";
const DEFAULT_SOCIAL_LINK_CLASSNAME = "hover:text-white transition";

export default function Footer({
  authorName = DEFAULT_AUTHOR_NAME,
  authorLink = DEFAULT_AUTHOR_LINK,
  copyrightText = DEFAULT_COPYRIGHT_TEXT,
  socialLinks = [], // Valor por defecto vacío

  containerClassName = DEFAULT_CONTAINER_CLASSNAME,
  containerStyle,
  textAreaClassName = DEFAULT_TEXT_AREA_CLASSNAME,
  textAreaStyle,
  authorTextClassName = DEFAULT_AUTHOR_TEXT_CLASSNAME,
  authorTextStyle,
  authorLinkClassName = DEFAULT_AUTHOR_LINK_CLASSNAME,
  authorLinkStyle,
  copyrightTextClassName = DEFAULT_COPYRIGHT_TEXT_CLASSNAME,
  copyrightTextStyle,
  socialAreaClassName = DEFAULT_SOCIAL_AREA_CLASSNAME,
  socialAreaStyle,
  socialLinkClassName = DEFAULT_SOCIAL_LINK_CLASSNAME,
  socialLinkStyle,
}: FooterProps) {

  return (
    <footer className={`bg-gray-900 text-gray-400 ${containerClassName}`} style={containerStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Área de texto principal */}
        <div className={textAreaClassName} style={textAreaStyle}>
          <p className={authorTextClassName} style={authorTextStyle}>
            Hecho con 💜 por{' '}
            <a
              href={authorLink}
              className={authorLinkClassName}
              style={authorLinkStyle}
            >
              {authorName}
            </a>
          </p>
          <p className={copyrightTextClassName} style={copyrightTextStyle}>
            {copyrightText}
          </p>
        </div>

        {/* Área de redes sociales */}
        {socialLinks.length > 0 && (
          <div className={socialAreaClassName} style={socialAreaStyle}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={socialLinkClassName}
                style={socialLinkStyle}
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