import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Button from '@/components/ui/Button';

describe('<Button />', () => {
  it('renders normal state with icons and merged classes', () => {
    render(
      <Button
        variant="primary"
        appearance="outline"
        size="sm"
        fullWidth
        className="custom-class"
        leftIcon={<span data-testid="left-icon">L</span>}
        rightIcon={<span data-testid="right-icon">R</span>}
      >
        Action
      </Button>,
    );

    const button = screen.getByRole('button', { name: /Action/i });
    expect(button).not.toBeDisabled();
    expect(button.className).toContain('w-full');
    expect(button.className).toContain('custom-class');
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('shows spinner and disables button when loading', () => {
    render(
      <Button loading rightIcon={<span data-testid="right-icon">R</span>}>
        Save
      </Button>,
    );

    const button = screen.getByRole('button', { name: /Save/i });
    expect(button).toBeDisabled();
    expect(button.querySelector('.animate-spin')).toBeTruthy();
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
  });
});
