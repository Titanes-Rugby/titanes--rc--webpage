import { cn } from '@/utils/cn';

import { useContactForm } from '../hooks/useContactForm';

const inputClassName =
  'rounded-xl border border-primary-200 px-3 py-2 text-sm text-primary-900 outline-none focus:border-primary-500';

const ContactFormCard = () => {
  const { register, formState, onSubmit } = useContactForm();
  const { errors, isSubmitting } = formState;

  return (
    <article className="rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold tracking-[0.12em] text-primary-500 uppercase">Formulario</p>
      <h2 className="mt-2 text-2xl font-bold text-primary-900">Envía tu mensaje</h2>

      <form onSubmit={onSubmit} className="mt-4 grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Nombre completo"
          className={cn(inputClassName, errors.fullName && 'border-red-500')}
          {...register('fullName', { required: true, minLength: 3 })}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className={cn(inputClassName, errors.email && 'border-red-500')}
          {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
        />
        <input
          type="text"
          placeholder="Asunto"
          className={cn(inputClassName, 'sm:col-span-2', errors.subject && 'border-red-500')}
          {...register('subject', { required: true, minLength: 4 })}
        />
        <textarea
          rows={5}
          placeholder="Cuéntanos cómo podemos ayudarte..."
          className={cn(inputClassName, 'sm:col-span-2', errors.message && 'border-red-500')}
          {...register('message', { required: true, minLength: 12 })}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-primary-700 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-white uppercase transition hover:bg-primary-800 disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
        >
          Enviar mensaje
        </button>
      </form>
    </article>
  );
};

export default ContactFormCard;
