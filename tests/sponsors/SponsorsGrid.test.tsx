import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SponsorsGrid from '@/pages/sponsors/components/SponsorsGrid';

describe('<SponsorsGrid />', () => {
  it('renders tier labels and sponsor metadata', () => {
    render(
      <SponsorsGrid
        sponsors={[
          { id: 's1', name: 'Main Co', tier: 'main', category: 'Main Partner', summary: 'Main summary' },
          { id: 's2', name: 'Gold Co', tier: 'gold', category: 'Performance', summary: 'Gold summary' },
          { id: 's3', name: 'Support Co', tier: 'support', category: 'Community', summary: 'Support summary' },
        ]}
      />,
    );

    expect(screen.getAllByText(/Main Partner/i)).toHaveLength(2);
    expect(screen.getByText(/Gold Partner/i)).toBeInTheDocument();
    expect(screen.getByText(/Support Partner/i)).toBeInTheDocument();
    expect(screen.getByText(/Main summary/i)).toBeInTheDocument();
    expect(screen.getByText(/Gold summary/i)).toBeInTheDocument();
    expect(screen.getByText(/Support summary/i)).toBeInTheDocument();
  });
});
