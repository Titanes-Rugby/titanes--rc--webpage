import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import { describe, expect, it, vi } from 'vitest';

import PlayerCardBuilderForm from '@/pages/tools/player-card/components/PlayerCardBuilderForm';
import { playerCardBuilderDefaults } from '@/pages/tools/player-card/playerCardBuilder.config';

const Harness = ({
  uploadError = '',
  onImageFileChange,
}: {
  uploadError?: string;
  onImageFileChange: (file?: File) => void;
}) => {
  const form = useForm({ defaultValues: playerCardBuilderDefaults });
  return (
    <PlayerCardBuilderForm form={form as any} uploadError={uploadError} onImageFileChange={onImageFileChange} />
  );
};

describe('<PlayerCardBuilderForm />', () => {
  it('renders fields and emits selected image file', async () => {
    const user = userEvent.setup();
    const onImageFileChange = vi.fn();
    render(<Harness onImageFileChange={onImageFileChange} />);

    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    const input = screen.getByLabelText(/Subir imagen/i);
    const file = new File(['a'], 'avatar.png', { type: 'image/png' });
    await user.upload(input, file);

    expect(onImageFileChange).toHaveBeenCalledWith(file);
  });

  it('shows upload error message', () => {
    render(<Harness onImageFileChange={vi.fn()} uploadError="Error de carga" />);
    expect(screen.getByText(/Error de carga/i)).toBeInTheDocument();
  });

  it('applies error styles and handles empty file selection', () => {
    const onImageFileChange = vi.fn();
    const register = vi.fn((name: string) => ({ name }));
    const form = {
      register,
      formState: {
        errors: {
          id: true,
          position: true,
          name: true,
          nickname: true,
          height: true,
          weight: true,
          speed: true,
          birthYear: true,
          reach: true,
          power: true,
          yearsInTeam: true,
          teamName: true,
          imageSrc: true,
        },
      },
    };

    render(<PlayerCardBuilderForm form={form as any} onImageFileChange={onImageFileChange} />);

    expect(screen.getByPlaceholderText('ID')).toHaveClass('border-red-500');
    expect(screen.getByPlaceholderText('Nombre del club')).toHaveClass('border-red-500');
    expect(screen.getByPlaceholderText('URL de imagen')).toHaveClass('border-red-500');

    const fileInput = screen.getByLabelText(/Subir imagen/i);
    fireEvent.change(fileInput, { target: { files: null } });
    expect(onImageFileChange).toHaveBeenCalledWith(undefined);
  });
});
