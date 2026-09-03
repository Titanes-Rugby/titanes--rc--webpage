import type { ContactFormValues } from '../hooks/useContactForm';

const DEFAULT_MESSAGE =
  'Hola. Estoy interesad@ en tener más información de las prácticas de rugby. Me gustaría saber qué días y horarios entrenan, en qué cancha se juntan y si qué tipo de ropa debería llevar en especial para la primera práctica. 🏉';

const normalizePhone = (value: string) => value.replace(/\D/g, '');

export const buildContactWhatsappMessage = (values: ContactFormValues) => {
  return [
    DEFAULT_MESSAGE,
    '',
    `Nombre: ${values.fullName}`,
    `Correo: ${values.email}`,
    `Asunto: ${values.subject}`,
    '',
    values.message.trim(),
  ]
    .filter(Boolean)
    .join('\n');
};

export const buildWhatsappUrl = (phone: string, message: string) => {
  return `https://api.whatsapp.com/send?phone=${normalizePhone(phone)}&text=${encodeURIComponent(message)}&app_absent=0`;
};
