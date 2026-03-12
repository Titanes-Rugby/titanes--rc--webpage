import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import UiComponentsPage from '@/pages/ui-components';

vi.mock('@/pages/ui-components/components/UiShowcaseSection', () => ({
  default: () => <section data-testid="ui-showcase" />,
}));

describe('ui-components page', () => {
  it('renders page header and showcase section', () => {
    render(<UiComponentsPage />);

    expect(screen.getByText('Design System')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'UI Components' })).toBeInTheDocument();
    expect(screen.getByTestId('ui-showcase')).toBeInTheDocument();
  });
});
