import { render, screen } from '@testing-library/react';
import type { SVGProps } from 'react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Header from '@/components/Header';

vi.mock('@/assets/logo.svg?react', () => ({
  default: (props: SVGProps<SVGSVGElement>) => <svg {...props} data-testid="header-logo" />,
}));

describe('<Header />', () => {
  it('renders desktop entries and toggles mobile menu', async () => {
    const user = userEvent.setup();
    render(<Header />);

    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /open main menu/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /open main menu/i }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /close menu/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
