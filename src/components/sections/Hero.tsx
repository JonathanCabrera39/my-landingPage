// src/components/sections/Hero.tsx
interface CTAButton {
  text: string;
  link: string;
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'examples';
  target?: string;
  rel?: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  ctaButtons?: CTAButton[];
  backgroundImage?: string;      // ✅ URL de imagen (ej: "/img/bg.jpg")
  backgroundClass?: string;      // ✅ Clase de Tailwind (ej: "hero-bg")
  backgroundColor?: string;      // ✅ Color de fondo (ej: "bg-black/60")
  textColor?: string;
  height?: string;
  fontFamily?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaButtons = [],
  backgroundImage,               // ✅ URL de imagen
  backgroundClass,               // ✅ Clase de fondo (nuevo)
  backgroundColor = 'bg-black',
  textColor = 'text-white',
  height = 'h-screen',
  fontFamily = 'font-sans'
}: HeroProps) {
  // ✅ Estilos para cada tipo de botón
  const getButtonStyles = (variant: string = 'primary') => {
    switch (variant) {
      case 'whatsapp':
        return 'bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition transform hover:scale-105';
      case 'examples':
        return 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-3 px-8 rounded-lg text-lg transition';
      case 'primary':
        return 'bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition';
      case 'secondary':
        return 'bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition';
      default:
        return 'bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition';
    }
  };

  return (
    <section 
      className={`
        ${backgroundClass || backgroundColor}  // ✅ Prioriza clase de fondo si existe
        ${textColor} 
        ${height} 
        flex items-center justify-center text-center relative
      `}
      style={
        backgroundImage 
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } 
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
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${fontFamily}`}>
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          {subtitle}
        </p>
        
        {/* ✅ Botones múltiples */}
        {ctaButtons.length > 0 && (
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            {ctaButtons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className={getButtonStyles(button.variant)}
                target={button.target}
                rel={button.rel}
              >
                {button.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}