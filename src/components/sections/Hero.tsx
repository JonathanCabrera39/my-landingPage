// src/components/sections/Hero.tsx
interface CTAButton {
  text: string;
  link: string;
  variant?: "primary" | "secondary" | "whatsapp" | "examples";
  target?: string;
  rel?: string;
  icon?: "github" | "whatsapp" | "linkedin";
}

// 1. Mapeo con los elementos SVG de los iconos
const socialIcons: Record<NonNullable<CTAButton["icon"]>, React.JSX.Element> = {
  whatsapp: (
    <path d="M11.977 0C5.362 0 0 5.36 0 11.976c0 2.647.86 5.129 2.33 7.2L.788 24l4.982-1.528A11.928 11.928 0 0011.977 24c6.613 0 11.975-5.36 11.975-11.976S18.59 0 11.977 0zm7.14 17.202c-.302.853-1.745 1.631-2.42 1.764-.675.132-1.554.218-4.364-.943-3.38-1.398-5.556-4.836-5.72-5.056-.164-.22-1.368-1.821-1.368-3.473 0-1.652.861-2.463 1.173-2.793.313-.331.677-.413.902-.413.226 0 .452.003.645.011.208.009.489-.078.765.586.276.664.94 2.302 1.025 2.476.084.175.14.378.028.6-.112.22-.168.358-.337.551-.168.193-.35.419-.497.554-.163.149-.335.312-.142.645.192.332.86 1.42 1.844 2.298 1.272 1.135 2.348 1.488 2.68 1.64.331.15.524.124.721-.102.197-.226.843-1.002 1.07-1.346.225-.344.45-.286.75-.175.3.111 1.897.893 2.221 1.056.323.164.538.246.617.382.08.136.08 1.042-.222 1.895z" />
  ),
  github: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  ),
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
};

interface HeroProps {
  id: string;
  title: string;
  subtitle: string;
  ctaButtons?: CTAButton[];
  ctaText?: string;
  ctaLink?: string;
  ctaVariant?: string;
  backgroundImage?: string; // ✅ URL de imagen (ej: "/img/bg.jpg")
  backgroundClass?: string; // ✅ Clase de Tailwind (ej: "hero-bg")
  backgroundColor?: string; // ✅ Color de fondo (ej: "bg-black/60")
  textColor?: string;
  height?: string;
  fontFamily?: string;
}

export default function Hero({
  id,
  title,
  subtitle,
  ctaText,
  ctaLink,
  ctaVariant,
  ctaButtons = [],
  backgroundImage, // ✅ URL de imagen
  backgroundClass, // ✅ Clase de fondo (nuevo)
  backgroundColor = "bg-black",
  textColor = "text-white",
  height = "h-screen",
  fontFamily = "font-sans",
}: HeroProps) {
  // ✅ Estilos para cada tipo de botón
  const getButtonStyles = (variant: string = "primary") => {
    switch (variant) {
      case "whatsapp":
        return "bg-green-500 flex flex-row gap-2 justify-center  hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition transform hover:scale-105";
      case "examples":
        return "bg-white/20 flex flex-row gap-2 justify-center  hover:bg-white/30 backdrop-blur-sm text-white font-medium py-3 px-8 rounded-lg text-lg transition transform hover:scale-105";
      case "primary":
        return "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition";
      case "secondary":
        return "bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition";
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition";
    }
  };

  return (
    <section
      id={id}
      className={`
        ${
          backgroundClass || backgroundColor
        }  // ✅ Prioriza clase de fondo si existe
        ${textColor} 
        ${height} 
        ${ctaText}
        ${ctaLink}
        ${ctaVariant}
        flex items-center justify-center text-center relative
      `}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* ✅ Overlay oscuro para mejorar contraste (solo si hay backgroundImage) */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}

      {/* ✅ Overlay si solo hay backgroundClass y quieres opacidad */}
      {backgroundClass && !backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      )}

      <div className="max-w-4xl px-4 z-10">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${fontFamily}`}
        >
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8">{subtitle}</p>

        {/* ✅ Botones múltiples */}
        {ctaButtons.length > 0 && (
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            {ctaButtons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className={getButtonStyles(button.variant)}
                target={button.target}
                rel={button.rel}
              >
                {/* 1. Muestra el icono si fue especificado y existe en el mapa */}
                {button.icon && socialIcons[button.icon] && (
                  <svg
                    className="w-5 h-5 my-1 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {socialIcons[button.icon]}
                  </svg>
                )}

                {/* 2. Texto del botón */}
               <span>{button.text}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
