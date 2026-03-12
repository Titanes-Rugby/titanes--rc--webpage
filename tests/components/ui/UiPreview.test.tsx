import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import UiPreview from '@/components/ui/Showcase/UiPreview';

describe('<UiPreview />', () => {
  it('renders title and content', () => {
    render(
      <UiPreview title="Buttons">
        <button type="button">Primary</button>
      </UiPreview>,
    );

    expect(screen.getByRole('heading', { name: 'Buttons' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Primary' })).toBeInTheDocument();
  });

  it('merges custom className with base styles', () => {
    render(
      <UiPreview title="Spacing" className="mt-10">
        <span>content</span>
      </UiPreview>,
    );

    const title = screen.getByRole('heading', { name: 'Spacing' });
    const root = title.parentElement as HTMLElement;
    expect(root.className).toContain('rounded-2xl');
    expect(root.className).toContain('mt-10');
  });
});
