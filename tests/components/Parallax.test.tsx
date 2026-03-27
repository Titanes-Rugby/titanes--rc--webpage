import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it } from 'vitest';

import Parallax, { ParallaxSlideshow, WithBackground, useParallaxSlideshow } from '@/components/Parallax';

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

describe('<ParallaxSlideshow />', () => {
  it('rotates slides automatically', async () => {
    const { container } = render(
      <ParallaxSlideshow
        intervalMs={60}
        transitionMs={0}
        slides={[
          { id: 'slide-1', image: 'images/background/galeria1.jpeg' },
          { id: 'slide-2', image: 'images/background/galeria2.jpeg' },
        ]}
      >
        <p>Hero rotativo</p>
      </ParallaxSlideshow>,
    );

    const getBackgroundLayer = () => container.querySelector('.bg-cover') as HTMLElement;

    expect(getBackgroundLayer().style.backgroundImage).toContain('/images/background/galeria1.jpeg');

    await waitFor(() => {
      expect(getBackgroundLayer().style.backgroundImage).toContain('/images/background/galeria2.jpeg');
    }, { timeout: 2000 });
  });

  it('renders fallback content when slides are empty', () => {
    const { container } = render(
      <ParallaxSlideshow slides={[]}>
        <p>Sin slides</p>
      </ParallaxSlideshow>,
    );

    expect(screen.getByText('Sin slides')).toBeInTheDocument();
    expect(container.querySelector('.bg-cover')).toBeNull();
  });

  it('applies slide-level overlay class and does not rotate while document is hidden', async () => {
    const hiddenDescriptor = Object.getOwnPropertyDescriptor(document, 'hidden');
    Object.defineProperty(document, 'hidden', { configurable: true, value: true });

    const { container } = render(
      <ParallaxSlideshow
        intervalMs={40}
        transitionMs={0}
        slides={[
          { id: 'slide-1', image: 'images/background/galeria1.jpeg', overlayClassName: 'bg-red-500/50' },
          { id: 'slide-2', image: 'images/background/galeria2.jpeg' },
        ]}
      >
        <p>Overlay</p>
      </ParallaxSlideshow>,
    );

    const getBackgroundLayer = () => container.querySelector('.bg-cover') as HTMLElement;
    expect(container.querySelector('.bg-red-500\\/50')).toBeTruthy();

    await new Promise((resolve) => setTimeout(resolve, 120));
    expect(getBackgroundLayer().style.backgroundImage).toContain('/images/background/galeria1.jpeg');

    if (hiddenDescriptor) {
      Object.defineProperty(document, 'hidden', hiddenDescriptor);
    } else {
      Object.defineProperty(document, 'hidden', { configurable: true, value: false });
    }
  });

  it('keeps autoplay active when pauseOnHover is false', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <ParallaxSlideshow
        intervalMs={50}
        transitionMs={0}
        pauseOnHover={false}
        slides={[
          { id: 'slide-1', image: 'images/background/galeria1.jpeg' },
          { id: 'slide-2', image: 'images/background/galeria2.jpeg' },
        ]}
      >
        <p>No pausa</p>
      </ParallaxSlideshow>,
    );

    const wrapper = container.querySelector('.min-h-screen') as HTMLElement;
    await user.hover(wrapper);

    await waitFor(() => {
      const bgLayer = container.querySelector('.bg-cover') as HTMLElement;
      expect(bgLayer.style.backgroundImage).toContain('/images/background/galeria2.jpeg');
    });
  });

  it('renders properly when reduced-motion is enabled', () => {
    const original = window.matchMedia;
    window.matchMedia = (() => ({
      matches: true,
      media: '(prefers-reduced-motion: reduce)',
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    })) as unknown as typeof window.matchMedia;

    const { container } = render(
      <ParallaxSlideshow
        slides={[
          { id: 'slide-1', image: 'images/background/galeria1.jpeg' },
          { id: 'slide-2', image: 'images/background/galeria2.jpeg' },
        ]}
      >
        <p>Reduce motion</p>
      </ParallaxSlideshow>,
    );

    const bgLayer = container.querySelector('.bg-cover') as HTMLElement;
    expect(bgLayer.style.backgroundImage).toContain('/images/background/galeria1.jpeg');
    window.matchMedia = original;
  });
});

describe('useParallaxSlideshow hook', () => {
  it('handles next(), pause() and resume() controls', async () => {
    const user = userEvent.setup();

    const Probe = () => {
      const { activeIndex, next, pause, resume, isPaused } = useParallaxSlideshow({ intervalMs: 1000, totalSlides: 0 });
      return (
        <div>
          <p>idx:{activeIndex}</p>
          <p>paused:{String(isPaused)}</p>
          <button type="button" onClick={next}>next</button>
          <button type="button" onClick={pause}>pause</button>
          <button type="button" onClick={resume}>resume</button>
        </div>
      );
    };

    render(<Probe />);

    expect(screen.getByText('idx:0')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'next' }));
    expect(screen.getByText('idx:0')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'pause' }));
    expect(screen.getByText('paused:true')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'resume' }));
    expect(screen.getByText('paused:false')).toBeInTheDocument();
  });

  it('works when matchMedia is not available', () => {
    const original = window.matchMedia;
    // @ts-expect-error test branch
    window.matchMedia = undefined;

    const Probe = () => {
      const { prefersReducedMotion } = useParallaxSlideshow({ intervalMs: 100, totalSlides: 2 });
      return <p>reduced:{String(prefersReducedMotion)}</p>;
    };

    render(<Probe />);
    expect(screen.getByText('reduced:false')).toBeInTheDocument();

    window.matchMedia = original;
  });

  it('subscribes to matchMedia change events and updates reduced-motion state', async () => {
    const listeners = new Set<() => void>();
    const original = window.matchMedia;
    window.matchMedia = (() => ({
      matches: true,
      media: '(prefers-reduced-motion: reduce)',
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: (_: string, handler: () => void) => listeners.add(handler),
      removeEventListener: (_: string, handler: () => void) => listeners.delete(handler),
      dispatchEvent: () => true,
    })) as unknown as typeof window.matchMedia;

    const Probe = () => {
      const { prefersReducedMotion } = useParallaxSlideshow({ intervalMs: 100, totalSlides: 2 });
      return <p>reduced:{String(prefersReducedMotion)}</p>;
    };

    const { unmount } = render(<Probe />);
    expect(screen.getByText('reduced:true')).toBeInTheDocument();
    expect(listeners.size).toBeGreaterThan(0);

    unmount();
    expect(listeners.size).toBe(0);
    window.matchMedia = original;
  });

  it('resets index when slide count shrinks below current active index', async () => {
    const user = userEvent.setup();

    const Probe = () => {
      const [totalSlides, setTotalSlides] = useState(3);
      const { activeIndex, setActiveIndex } = useParallaxSlideshow({ intervalMs: 1000, totalSlides });
      return (
        <div>
          <p>idx:{activeIndex}</p>
          <button type="button" onClick={() => setActiveIndex(2)}>set-index</button>
          <button type="button" onClick={() => setTotalSlides(1)}>shrink</button>
        </div>
      );
    };

    render(<Probe />);
    await user.click(screen.getByRole('button', { name: 'set-index' }));
    expect(screen.getByText('idx:2')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'shrink' }));
    await waitFor(() => {
      expect(screen.getByText('idx:0')).toBeInTheDocument();
    });
  });
});
