import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Parallax, { WithBackground } from '@/components/Parallax';

describe('<Parallax />', () => {
  it('renders with normalized background url', () => {
    const { container } = render(
      <Parallax backgroundImage="images/bg.png">
        <p>Contenido</p>
      </Parallax>,
    );

    expect(screen.getByText('Contenido')).toBeInTheDocument();
    const bgLayer = container.querySelector('.bg-cover') as HTMLElement;
    expect(bgLayer.style.backgroundImage).toContain('/images/bg.png');
  });

  it('supports explicit url(...) values and fallback background mode', () => {
    const withUrl = render(
      <WithBackground backgroundImage="url(/hero.png)">
        <p>Con imagen</p>
      </WithBackground>,
    );
    const bgLayer = withUrl.container.querySelector('.bg-cover') as HTMLElement;
    expect(bgLayer.style.backgroundImage).toContain('/hero.png');

    const withoutImage = render(
      <WithBackground backgroundClassName="bg-slate-100">
        <p>Sin imagen</p>
      </WithBackground>,
    );
    expect(withoutImage.container.querySelector('.bg-slate-100')).toBeTruthy();
  });

  it('keeps absolute-root paths when building background url', () => {
    const { container } = render(
      <Parallax backgroundImage="/absolute-bg.png">
        <p>Absoluto</p>
      </Parallax>,
    );

    const bgLayer = container.querySelector('.bg-cover') as HTMLElement;
    expect(bgLayer.style.backgroundImage).toContain('/absolute-bg.png');
    expect(bgLayer.style.backgroundImage).not.toContain('//absolute-bg.png');
  });
});
