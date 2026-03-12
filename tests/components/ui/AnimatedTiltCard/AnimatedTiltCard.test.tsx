import { fireEvent, render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

import AnimatedTiltCard from '@/components/ui/AnimatedTiltCard';

const mocks = vi.hoisted(() => ({
  onMouseMove: vi.fn(),
  onMouseLeave: vi.fn(),
  useTiltCardMotion: vi.fn(),
}));

mocks.useTiltCardMotion.mockImplementation(() => ({
  rotateX: 0,
  rotateY: 0,
  contentX: 0,
  contentY: 0,
  contentScale: 1,
  shine: 'linear-gradient(#fff,#000)',
  onMouseMove: mocks.onMouseMove,
  onMouseLeave: mocks.onMouseLeave,
}));

vi.mock('@/components/ui/AnimatedTiltCard/useTiltCardMotion', () => ({
  useTiltCardMotion: mocks.useTiltCardMotion,
}));

describe('<AnimatedTiltCard />', () => {
  it('renders plain children and wires mouse handlers', () => {
    const { container } = render(<AnimatedTiltCard>Card content</AnimatedTiltCard>);
    const article = container.querySelector('article') as HTMLElement;

    expect(screen.getByText('Card content')).toBeInTheDocument();
    fireEvent.mouseMove(article);
    fireEvent.mouseLeave(article);
    expect(mocks.onMouseMove).toHaveBeenCalled();
    expect(mocks.onMouseLeave).toHaveBeenCalled();
  });

  it('renders function children and passes motion props', () => {
    render(
      <AnimatedTiltCard scrollTilt>
        {({ contentX, contentY, contentScale }: { contentX: ReactNode; contentY: ReactNode; contentScale: ReactNode }) => (
          <div>
            {String(contentX)}-{String(contentY)}-{String(contentScale)}
          </div>
        )}
      </AnimatedTiltCard>,
    );

    expect(mocks.useTiltCardMotion).toHaveBeenCalledWith(true);
    expect(screen.getByText('0-0-1')).toBeInTheDocument();
  });
});
