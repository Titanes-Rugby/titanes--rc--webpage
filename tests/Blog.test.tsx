import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@components/Menu', () => ({
  default: () => <nav>Menu</nav>,
}));

import Blog from '@/Blog';

describe('<Blog />', () => {
  it('renders blog cards, logos and increments counter', async () => {
    const user = userEvent.setup();
    render(<Blog />);

    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getAllByText('Title')).toHaveLength(4);
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
    expect(screen.getByAltText('React logo')).toBeInTheDocument();

    const counter = screen.getByRole('button', { name: /count is 0/i });
    await user.click(counter);
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
  });
});
