import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import ContactFormCard from '@/pages/contact/components/ContactFormCard';

describe('<ContactFormCard /> validation', () => {
  it('marks invalid required fields after empty submit', async () => {
    const user = userEvent.setup();
    render(<ContactFormCard />);

    await user.click(screen.getByRole('button', { name: /Enviar mensaje/i }));

    const fullName = screen.getByPlaceholderText(/Nombre completo/i);
    const email = screen.getByPlaceholderText(/Correo electrónico/i);
    const subject = screen.getByPlaceholderText(/Asunto/i);
    const message = screen.getByPlaceholderText(/Cuéntanos cómo podemos ayudarte/i);

    await waitFor(() => {
      expect(fullName.className).toContain('border-red-500');
      expect(email.className).toContain('border-red-500');
      expect(subject.className).toContain('border-red-500');
      expect(message.className).toContain('border-red-500');
    });
  });
});
