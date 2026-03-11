import { useForm } from 'react-hook-form';

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

  const onSubmit = handleSubmit(() => {
    reset(defaultValues);
  });

  return { ...form, onSubmit };
};
