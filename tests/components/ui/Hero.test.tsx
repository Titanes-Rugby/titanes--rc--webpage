import type { HTMLAttributes } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, initial, animate, transition, ...props }: HTMLAttributes<HTMLDivElement> & Record<string, unknown>) => (
      <div {...props}>{children}</div>
    ),
  },
}));

import Hero from '@/components/ui/Hero';

describe('<Hero />', () => {
  it('renders minimal variant without optional blocks', () => {
    const { container } = render(<Hero title="Base Hero" />);

    expect(screen.getByRole('heading', { name: /Base Hero/i })).toBeInTheDocument();
    expect(screen.queryByText(/eyebrow/i)).not.toBeInTheDocument();
    expect(container.querySelector('img')).toBeNull();
  });

  it('renders optional eyebrow, description, aside and watermark', () => {
    const { container } = render(
      <Hero
        eyebrow="Eyebrow"
        title="Full Hero"
        description="Descripcion del hero"
        aside={<p>Aside Content</p>}
        asideClassName="custom-aside"
        watermarkSrc="/images/logo.svg"
      />,
    );

    expect(screen.getByText(/Eyebrow/i)).toBeInTheDocument();
    expect(screen.getByText(/Descripcion del hero/i)).toBeInTheDocument();
    expect(screen.getByText(/Aside Content/i)).toBeInTheDocument();
    expect(container.querySelector('.custom-aside')).toBeInTheDocument();
    expect(container.querySelector('img[src="/images/logo.svg"]')).toHaveAttribute('alt', '');
  });
});
