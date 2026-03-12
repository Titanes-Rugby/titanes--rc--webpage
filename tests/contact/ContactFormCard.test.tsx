import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import ContactFormCard from '@/pages/contact/components/ContactFormCard';

describe('<ContactFormCard />', () => {
  it('submits valid values and resets the form', async () => {
    const user = userEvent.setup();
    render(<ContactFormCard />);

    const fullName = screen.getByPlaceholderText(/Nombre completo/i) as HTMLInputElement;
    const email = screen.getByPlaceholderText(/Correo electrónico/i) as HTMLInputElement;
    const subject = screen.getByPlaceholderText(/Asunto/i) as HTMLInputElement;
    const message = screen.getByPlaceholderText(
      /Cuéntanos cómo podemos ayudarte/i,
    ) as HTMLTextAreaElement;

    await user.type(fullName, 'Juan Perez');
    await user.type(email, 'juan@test.com');
    await user.type(subject, 'Prueba de ingreso');
    await user.type(message, 'Quiero información sobre entrenamientos y pruebas.');
    await user.click(screen.getByRole('button', { name: /Enviar mensaje/i }));

    await waitFor(() => {
      expect(fullName.value).toBe('');
      expect(email.value).toBe('');
      expect(subject.value).toBe('');
      expect(message.value).toBe('');
    });
  });
});
