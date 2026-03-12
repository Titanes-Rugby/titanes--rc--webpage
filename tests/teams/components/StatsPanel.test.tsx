import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import StatsPanel from '@/pages/teams/components/StatsPanel';

describe('<StatsPanel />', () => {
  it('renders stat cards and optional change values', () => {
    render(
      <StatsPanel
        stats={[
          { id: 's1', label: 'Tries', value: '31', change: '+14%' },
          { id: 's2', label: 'Possession', value: '56%' },
        ]}
      />,
    );

    expect(screen.getByText(/Tries/i)).toBeInTheDocument();
    expect(screen.getByText('31')).toBeInTheDocument();
    expect(screen.getByText('+14%')).toBeInTheDocument();
    expect(screen.getByText(/Possession/i)).toBeInTheDocument();
    expect(screen.getByText('56%')).toBeInTheDocument();
  });
});
