import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

import PlayerCard from '@/components/ui/PlayerCard';
import type { PlayerCardData } from '@/components/ui/PlayerCard/types';

vi.mock('@ui/AnimatedTiltCard', () => ({
  default: ({ children }: { children: ReactNode | ((p: any) => ReactNode) }) => (
    <div>{typeof children === 'function' ? children({ contentX: 0, contentY: 0, contentScale: 1 }) : children}</div>
  ),
}));

vi.mock('@ui/Logo', () => ({
  default: ({ label }: { label?: string }) => <div>{label ?? 'logo'}</div>,
}));

const basePlayer: PlayerCardData = {
  id: 'p1',
  position: 'Wing',
  name: 'Juan',
  nickname: 'Perez',
  imageSrc: '/player.png',
  height: "6'1\"",
  weight: '102 KG',
  speed: '26 mps',
  birthYear: '1989',
  reach: '17 m',
  power: '80 KG',
  yearsInTeam: '14',
  teamName: 'Titanes Rugby Club',
  metrics: [
    { id: 'weight', label: 'Weight', value: '102 KG', icon: (() => <svg />) as any },
    { id: 'height', label: 'Height', value: "6'1\"", icon: (() => <svg />) as any },
    { id: 'speed', label: 'Speed', value: '26 mps', icon: (() => <svg />) as any },
  ],
};

describe('<PlayerCard />', () => {
  it('renders player content including image when available', () => {
    render(<PlayerCard player={basePlayer} />);
    expect(screen.getByText(/Position · Wing/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Juan Perez/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Juan' })).toBeInTheDocument();
    expect(screen.getByText('14')).toBeInTheDocument();
  });

  it('handles player cards without image source', () => {
    render(<PlayerCard player={{ ...basePlayer, imageSrc: '' }} />);
    expect(screen.queryByRole('img', { name: 'Juan' })).not.toBeInTheDocument();
    expect(screen.getByText('Titanes Rugby Club')).toBeInTheDocument();
  });
});
