import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PlayerMetricItem } from '@/components/ui/PlayerCard/PlayerMetricItem';

const FakeIcon = () => <svg data-testid="metric-icon" />;

describe('<PlayerMetricItem />', () => {
  it('splits numeric metric values into major/minor parts', () => {
    render(
      <PlayerMetricItem
        item={{ id: 'speed', label: 'Speed', value: '26 mps', icon: FakeIcon as any }}
      />,
    );

    expect(screen.getByText('26')).toBeInTheDocument();
    expect(screen.getByText('mps')).toBeInTheDocument();
    expect(screen.getByText('Speed')).toBeInTheDocument();
  });

  it('renders full value when it cannot be split', () => {
    render(
      <PlayerMetricItem
        item={{ id: 'role', label: 'Role', value: 'Captain', icon: FakeIcon as any }}
      />,
    );

    expect(screen.getByText('Captain')).toBeInTheDocument();
  });
});
