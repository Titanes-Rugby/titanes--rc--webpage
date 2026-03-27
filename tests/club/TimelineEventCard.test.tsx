import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('framer-motion', async () => {
  const React = await import('react');
  const motion = new Proxy(
    {},
    {
      get: (_, tag: string | symbol) => {
        const elementTag = typeof tag === 'string' ? tag : 'div';
        return ({ children, ...props }: { children?: ReactNode }) => React.createElement(elementTag, props, children);
      },
    },
  );

  return { motion };
});

import TimelineEventCard from '@/pages/club/components/full-history/TimelineEventCard';

describe('<TimelineEventCard />', () => {
  it('renders without highlight block when highlight is missing', () => {
    render(
      <TimelineEventCard
        index={3}
        isActive={false}
        refCallback={vi.fn()}
        event={{
          year: '2026',
          title: 'Evento',
          subtitle: 'Subtitulo',
          body: 'Descripcion',
          icon: () => <svg data-testid="timeline-icon" />,
          image: '/images/event.jpg',
          gradient: 'from-primary-900/40',
        }}
      />,
    );

    expect(screen.getByRole('heading', { name: /Evento/i })).toBeInTheDocument();
    expect(screen.queryByText(/Sparkles/i)).not.toBeInTheDocument();
  });
});
