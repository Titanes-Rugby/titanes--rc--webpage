import type { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
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

  return {
    motion,
    useScroll: () => ({ scrollYProgress: 0 }),
    useTransform: () => '50%',
  };
});

import FullHistorySection from '@/pages/club/components/FullHistorySection';

const renderSection = () =>
  render(
    <MemoryRouter>
      <FullHistorySection />
    </MemoryRouter>,
  );

describe('<FullHistorySection />', () => {
  it('renders full narrative blocks, legacy cards and contact CTA', () => {
    renderSection();

    expect(screen.getByRole('heading', { name: /Titanes: Nuestra Herencia, nuestro legado/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Linea de tiempo/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Legado que se multiplica/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Universidad Tecnol.gica de Panam./i, level: 3 })).toBeInTheDocument();
    expect(screen.getByText(/Fundador:\s*Norma Ortiz/i)).toBeInTheDocument();
    expect(screen.getByText(/Fundador:\s*Comunidad/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /¿Quieres ser parte de nuestra historia\?/i })).toHaveAttribute('href', '/contacto');
  });

  it('updates active timeline by scroll and supports click navigation', async () => {
    const user = userEvent.setup();
    const { container } = renderSection();
    const cards = container.querySelectorAll('[data-timeline-card]');
    const scrollIntoView = vi.fn();
    Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', {
      value: scrollIntoView,
      configurable: true,
      writable: true,
    });

    Object.defineProperty(cards[0], 'getBoundingClientRect', { value: () => ({ top: 900, height: 100 }) });
    Object.defineProperty(cards[1], 'getBoundingClientRect', { value: () => ({ top: 100, height: 100 }) });
    Object.defineProperty(cards[2], 'getBoundingClientRect', { value: () => ({ top: -100, height: 100 }) });
    Object.defineProperty(cards[3], 'getBoundingClientRect', { value: () => ({ top: -100, height: 100 }) });

    fireEvent.scroll(window);
    const secondTimelineButton = screen.getByRole('button', { name: /2007/i });
    expect(secondTimelineButton.className).toContain('border-lime-500');

    await user.click(screen.getByRole('button', { name: /2004-2005/i }));
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
  });

  it('registers and cleans up the scroll listener', () => {
    const addSpy = vi.spyOn(window, 'addEventListener');
    const removeSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = renderSection();
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

    unmount();
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
