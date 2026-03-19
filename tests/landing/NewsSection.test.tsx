import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@components/Parallax', () => ({
  WithBackground: ({ children }: { children: ReactNode }) => <section>{children}</section>,
}));

vi.mock('@/pages/media/media.data', () => ({
  newsItems: [
    { id: 'n1', date: '10 Mar 2026', title: 'Con imagen', excerpt: 'Resumen 1', imageSrc: '/img-a.jpg' },
    { id: 'n2', date: '11 Mar 2026', title: 'Sin imagen', excerpt: 'Resumen 2' },
    { id: 'n3', date: '12 Mar 2026', title: 'Extra', excerpt: 'Resumen 3', imageSrc: '/img-c.jpg' },
  ],
}));

import NewsSection from '@/pages/landing/components/NewsSection';

describe('<NewsSection />', () => {
  it('renders cards with and without image blocks', () => {
    render(<NewsSection />);

    expect(screen.getByRole('heading', { name: /Actualidad del club/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Con imagen/i })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: /Sin imagen/i })).not.toBeInTheDocument();
    const readLinks = screen.getAllByRole('link', { name: /Leer nota/i });
    expect(readLinks[0]).toHaveAttribute('href', '/media/noticias#n1');
  });
});
