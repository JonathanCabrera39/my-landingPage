// src/components/sections/Services.tsx
import React from 'react';

interface Service {
  title: string;
  description: string;
  icon?: string; // URL del icono opcional
}

interface ServicesProps {
  id?: string;
  // Contenido
  title?: string;
  subtitle?: string;
  services: Service[]; // Obligatorio

  // Estilos generales del contenedor
  containerClassName?: string; // Clases para el <section> principal
  containerStyle?: React.CSSProperties; // Estilos inline para el contenedor principal

  // Estilos del área de título/subtítulo
  titleAreaClassName?: string; // Clases para el div que contiene título y subtítulo
  titleAreaStyle?: React.CSSProperties; // Estilos inline para el div del título/subtítulo
  titleClassName?: string;      // Clases para el <h2> del título
  titleStyle?: React.CSSProperties; // Estilos inline para el <h2> del título
  subtitleClassName?: string;   // Clases para el <p> del subtítulo
  subtitleStyle?: React.CSSProperties; // Estilos inline para el <p> del subtítulo

  // Estilos de la grilla de servicios
  gridClassName?: string; // Clases para el contenedor de la grilla
  gridStyle?: React.CSSProperties; // Estilos inline para la grilla

  // Estilos de cada tarjeta de servicio
  cardClassName?: string; // Clases base para cada tarjeta
  cardStyle?: React.CSSProperties; // Estilos inline para cada tarjeta
  cardHoverClassName?: string; // Clases adicionales para el estado hover de la tarjeta (ej: 'hover:shadow-xl hover:scale-105')
  cardHoverStyle?: React.CSSProperties; // Estilos inline para el estado hover (menos común, Tailwind es preferible para hover)

  // Estilos del icono
  iconClassName?: string; // Clases para el contenedor del icono o el icono mismo
  iconStyle?: React.CSSProperties; // Estilos inline para el icono

  // Estilos del título de la tarjeta
  serviceTitleClassName?: string; // Clases para el <h3> del título del servicio
  serviceTitleStyle?: React.CSSProperties; // Estilos inline para el <h3> del título del servicio

  // Estilos de la descripción de la tarjeta
  serviceDescriptionClassName?: string; // Clases para el <p> de la descripción del servicio
  serviceDescriptionStyle?: React.CSSProperties; // Estilos inline para el <p> de la descripción del servicio
}

export default function Services({
  id,
  title = "Nuestros Servicios",
  subtitle = "Servicios profesionales al más alto nivel",
  services = [],
  // Valores por defecto para estilos genéricos
  containerClassName = "py-16",
  containerStyle,
  titleAreaClassName = "text-center mb-12",
  titleAreaStyle,
  titleClassName = "text-3xl md:text-4xl font-bold",
  titleStyle,
  subtitleClassName = "text-xl",
  subtitleStyle,
  gridClassName = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  gridStyle,
  cardClassName = "rounded-lg p-6 shadow-lg transition-shadow", // Clases base, hover se añade después
  cardStyle,
  cardHoverClassName = "hover:shadow-xl", // Clase específica para hover
  cardHoverStyle,
  iconClassName = "text-4xl mb-4",
  iconStyle,
  serviceTitleClassName = "text-xl font-semibold mb-2",
  serviceTitleStyle,
  serviceDescriptionClassName = "",
  serviceDescriptionStyle,
}: ServicesProps) {

  // Combinar clases base con clases de hover (si existen) y aplicar estilos
  const getCardClassName = (isHovering: boolean) => {
    // En este ejemplo, no manejamos hover con estado aquí, sino con Tailwind
    // Simplemente combinamos las clases base con las de hover
    return `${cardClassName} ${cardHoverClassName || ''}`.trim();
  };

  return (
    <section id={id} className={containerClassName} style={containerStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Área de título y subtítulo */}
        <div className={titleAreaClassName} style={titleAreaStyle}>
          <h2 className={titleClassName} style={titleStyle}>{title}</h2>
          <p className={subtitleClassName} style={subtitleStyle}>{subtitle}</p>
        </div>

        {/* Grilla de servicios */}
        <div className={gridClassName} style={gridStyle}>
          {services.map((service, index) => (
            <div
              key={index}
              // Combinar clases base y hover
              className={getCardClassName(false)} // isHovering no se usa aquí, Tailwind maneja hover
              style={cardStyle}
            >
              {service.icon && (
                <div className={iconClassName} style={iconStyle}>
                  {/* Mostrar icono como imagen si es una URL, como texto si no */}
                  {service.icon.startsWith('http') || service.icon.startsWith('/') ? (
                    <img src={service.icon} alt={service.title} className="w-12 h-12 inline-block" />
                  ) : (
                    service.icon
                  )}
                </div>
              )}
              <h3 className={serviceTitleClassName} style={serviceTitleStyle}>{service.title}</h3>
              <p className={serviceDescriptionClassName} style={serviceDescriptionStyle}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}