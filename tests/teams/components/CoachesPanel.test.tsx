import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@components/ui/AnimatedTiltCard', () => ({
  default: ({ children }: { children: (args: { contentX: number; contentY: number; contentScale: number }) => ReactNode }) => (
    <div>{children({ contentX: 0, contentY: 0, contentScale: 1 })}</div>
  ),
}));

vi.mock('@components/ui/PlayerPortrait', () => ({
  default: ({ imageSrc, alt }: { imageSrc: string; alt: string }) => <img src={imageSrc} alt={alt} />,
}));

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  },
}));

import CoachesPanel from '@/pages/teams/components/CoachesPanel';

describe('<CoachesPanel />', () => {
  it('renders coaches and uses fallback portrait when image is missing', () => {
    render(
      <CoachesPanel
        coaches={[
          { id: 'c1', name: 'Diego Alvarado', role: 'Head Coach', bio: 'Planificacion tactica', imageSrc: '/diego.png' },
          { id: 'c2', name: 'Jorge Salinas', role: 'Forwards Coach', bio: 'Scrum y lineout' },
        ]}
      />,
    );

    expect(screen.getByText(/Head Coach/i)).toBeInTheDocument();
    expect(screen.getByText(/Forwards Coach/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Diego Alvarado/i })).toHaveAttribute('src', '/diego.png');
    expect(screen.getByRole('img', { name: /Jorge Salinas/i })).toHaveAttribute('src', '/images/players/player_1.png');
  });
});
