import { useForm } from 'react-hook-form';
import { buildContactWhatsappMessage, buildWhatsappUrl } from '../utils/whatsapp';

export type ContactFormValues = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const defaultValues: ContactFormValues = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
};

export const useContactForm = () => {
  const form = useForm<ContactFormValues>({ defaultValues, mode: 'onTouched' });
  const { handleSubmit, reset } = form;

  const onSubmit = handleSubmit((values) => {
    const phones = [import.meta.env.VITE_CONTACT_WHATSAPP_1, import.meta.env.VITE_CONTACT_WHATSAPP_2].filter(Boolean) as string[];
    const targetPhone = phones[Math.floor(Math.random() * phones.length)];

    if (!targetPhone) {
      reset(defaultValues);
      return;
    }

    const url = buildWhatsappUrl(targetPhone, buildContactWhatsappMessage(values));
    window.location.href = url;
    reset(defaultValues);
  });

  return { ...form, onSubmit };
};
