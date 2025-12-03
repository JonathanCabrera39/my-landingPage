// src/components/sections/Contact.tsx
import React, { useState } from 'react';

interface ContactFormPreset {
  title: string;
  subtitle: string;
  description: string;
  formAction?: string; // Añadir acción del formulario para presets específicos
  formFields?: { name: string; type: string; placeholder: string }[]; // Añadir campos del formulario
}

interface ContactProps {
  id?: string;
  preset?: 'default' | 'subjona';
  title?: string;
  subtitle?: string;
  description?: string;
  // Nuevas props para fondo y overlay
  backgroundClass?: string; // Clase de Tailwind para el fondo (ej: "contact-bg")
  backgroundColor?: string; // Color de fondo si no hay backgroundClass
  overlayOpacity?: string;  // Opacidad del overlay (ej: "bg-black/60")
  textColor?: string;
  formBackgroundColor?: string;
  formTextColor?: string;
  formAction?: string; // Prop específica para la acción del formulario
  formFields?: { name: string; type: string; placeholder: string }[]; // Prop específica para campos
  // Añadir más props si se necesitan sobrescribir estilos del formulario
  inputClassName?: string; // Clase específica para inputs/textarea
  buttonClassName?: string; // Clase específica para el botón
}

// Definir los presets
const contactPresets: Record<string, ContactFormPreset> = {
  default: {
    title: "Trabajemos Juntos",
    subtitle: "¿Listo para tu próximo hit?",
    description: "Envíame un mensaje y trabajemos juntos en tu próximo proyecto musical.",
    formAction: undefined, // Dejar que el genérico maneje el submit
    formFields: [
      { name: 'name', type: 'text', placeholder: 'Tu nombre' },
      { name: 'email', type: 'email', placeholder: 'tu@email.com' },
      { name: 'message', type: 'textarea', placeholder: 'Tu mensaje' },
    ],
  },
  subjona: {
    title: "¿Listo para empezar?",
    subtitle: "Escríbeme por WhatsApp o llena este formulario. Te respondo en menos de 2 horas.",
    description: "", // No se usa en este preset, el texto está en el subtitle
    formAction: "https://formspree.io/f/xkgpbwpy", // Acción específica de Formspree
    formFields: [
      { name: 'name', type: 'text', placeholder: 'Tu nombre' },
      { name: 'email', type: 'email', placeholder: 'tu@email.com' },
      { name: 'message', type: 'textarea', placeholder: 'Cuéntame tu proyecto...' },
    ],
  },
};

export default function Contact({
  id,
  preset = 'default',
  title: customTitle,
  subtitle: customSubtitle,
  description: customDescription,
  backgroundClass = preset === 'subjona' ? 'contact-bg' : undefined, // Aplicar clase específica
  backgroundColor = preset === 'subjona' ? undefined : 'bg-gray-900', // Usar bgClass si está definido
  overlayOpacity = preset === 'subjona' ? 'bg-black/60' : undefined, // Aplicar overlay específico
  textColor = preset === 'subjona' ? 'text-white' : 'text-white',
  formBackgroundColor = preset === 'subjona' ? 'bg-white/90' : 'bg-gray-800',
  formTextColor = preset === 'subjona' ? 'text-gray-800' : 'text-white',
  formAction: customFormAction,
  formFields: customFormFields,
  inputClassName = preset === 'subjona' ? "border border-gray-300 bg-white/90 focus:ring-2 focus:ring-indigo-500 focus:border-transparent" : "border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500",
  buttonClassName = preset === 'subjona' ? "bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition" : "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition",
}: ContactProps) {

  // Obtener los valores del preset o usar los personalizados
  const presetConfig = contactPresets[preset] || contactPresets.default;
  const title = customTitle ?? presetConfig.title;
  const subtitle = customSubtitle ?? presetConfig.subtitle;
  const description = customDescription ?? presetConfig.description;
  const formAction = customFormAction ?? presetConfig.formAction;
  const formFields = customFormFields ?? presetConfig.formFields;

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formAction) {
      // Si no hay acción de formulario, usar la lógica interna
      setIsSubmitting(true);
      try {
        // Simular envío
        setTimeout(() => {
          setSubmitSuccess(true);
          setFormData({});
          setIsSubmitting(false);
        }, 1000);
      } catch (error) {
        setIsSubmitting(false);
        console.error('Error submitting form:', error);
      }
    }
    // Si hay formAction, el submit se manejará con Formspree
  };

  // Si se usa Formspree (formAction definida), usar la acción en el form
  const isFormspree = !!formAction;

  return (
    <section id={id} className={`w-full relative ${backgroundClass || backgroundColor} ${preset === 'subjona' ? 'py-20 md:py-32' : 'py-16'}`}>
      {/* Overlay oscuro si hay backgroundClass o overlayOpacity */}
      {(backgroundClass || overlayOpacity) && (
        <div className={`absolute inset-0 ${overlayOpacity || 'bg-black/60'}`}></div>
      )}

      <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 ${preset === 'subjona' ? 'text-center' : ''}`}>
        <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>{title}</h2>
        <p className={`mt-4 text-lg ${preset === 'subjona' ? 'text-gray-200' : textColor}`}>
          {subtitle}
        </p>
        {description && <p className="mt-2">{description}</p>} {/* Mostrar description si existe */}

        {submitSuccess ? (
          <div className="bg-green-600 text-white p-6 rounded-lg text-center mt-6">
            <h3 className="text-xl font-semibold mb-2">¡Mensaje enviado!</h3>
            <p>Gracias por contactarme. Te responderé pronto.</p>
          </div>
        ) : (
          <form
            action={isFormspree ? formAction : undefined} // Aplicar acción si es Formspree
            method={isFormspree ? "POST" : undefined} // Aplicar método si es Formspree
            onSubmit={isFormspree ? undefined : handleSubmit} // Usar handleSubmit si no es Formspree
            className={`mt-10 space-y-6 text-left ${preset === 'subjona' ? 'text-left' : ''}`}
          >
            {formFields?.map((field, index) => (
              field.type === 'textarea' ? (
                <div key={field.name}>
                  <label htmlFor={field.name} className={`block ${preset === 'subjona' ? 'text-gray-200' : textColor} font-medium mb-2`}>
                    {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                  </label>
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg ${formBackgroundColor} ${formTextColor} ${inputClassName}`}
                    placeholder={field.placeholder}
                  ></textarea>
                </div>
              ) : (
                <div key={field.name}>
                  <label htmlFor={field.name} className={`block ${preset === 'subjona' ? 'text-gray-200' : textColor} font-medium mb-2`}>
                    {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${formBackgroundColor} ${formTextColor} ${inputClassName}`}
                    placeholder={field.placeholder}
                  />
                </div>
              )
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className={buttonClassName}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}