import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/pages/club/club.data', () => ({
  facilityItems: [{ id: 'f-1', title: 'Campo alterno', detail: 'Detalle sin metadata opcional.' }],
  staffMembers: [{ id: 's-1', name: 'Alex Mora', role: 'Coordinador', birthDate: '1991-06-10', focus: 'Gestión diaria.' }],
}));

vi.mock('@utils/date', () => ({
  getAgeFromBirthDate: () => '34',
}));

import FacilitiesSection from '@/pages/club/components/FacilitiesSection';
import StaffSection from '@/pages/club/components/StaffSection';

describe('club sections optional branches', () => {
  it('renders facilities item without optional map, label and location', () => {
    render(
      <MemoryRouter>
        <FacilitiesSection />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Campo alterno/i)).toBeInTheDocument();
    expect(screen.queryByText(/Obtener Ubicacion/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Ubicación:/i)).not.toBeInTheDocument();
  });

  it('uses fallback portrait in staff cards when image is missing', () => {
    render(<StaffSection />);

    expect(screen.getByRole('img', { name: /Alex Mora/i })).toHaveAttribute('src', '/images/players/player_1.png');
    expect(screen.getByText(/Edad: 34/i)).toBeInTheDocument();
  });
});
