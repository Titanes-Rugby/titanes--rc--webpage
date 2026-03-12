import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

import UiShowcaseSection from '@/pages/ui-components/components/UiShowcaseSection';

vi.mock('@components/ui', () => ({
  Blockquote: ({ children }: { children: ReactNode }) => <blockquote>{children}</blockquote>,
  Button: ({ children }: { children: ReactNode }) => <button>{children}</button>,
  Loader: ({ label }: { label: string }) => <div>{label}</div>,
  Logo: () => <div>logo</div>,
  Marquee: ({ items, renderItem }: { items: string[]; renderItem: (item: string) => ReactNode }) => (
    <div>
      <div>{items.join(',')}</div>
      {items.map((item) => (
        <div key={item}>{renderItem(item)}</div>
      ))}
    </div>
  ),
  UiPreview: ({ title, children }: { title: string; children: ReactNode }) => (
    <section>
      <h3>{title}</h3>
      {children}
    </section>
  ),
}));

vi.mock('@/pages/ui-components/components/AnimatedTiltCardPreview', () => ({
  default: () => <div>Animated Tilt Card mock</div>,
}));
vi.mock('@/pages/ui-components/components/PlayerCardPreview', () => ({
  default: () => <div>Player Card mock</div>,
}));
vi.mock('@/pages/ui-components/components/PlayerPortraitPreview', () => ({
  default: () => <div>Player Portrait mock</div>,
}));

describe('<UiShowcaseSection />', () => {
  it('renders key showcase groups', () => {
    render(<UiShowcaseSection />);

    expect(screen.getByRole('heading', { name: 'Design System Showcase' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Button variants' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Player Card' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Player Portrait' })).toBeInTheDocument();
    expect(screen.getByText(/UI Kit,Animations,Buttons/i)).toBeInTheDocument();
  });
});
