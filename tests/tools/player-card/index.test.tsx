import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/pages/tools/player-card/hooks/usePlayerCardBuilderForm', () => ({
  usePlayerCardBuilderForm: () => ({
    player: { id: 'p1' },
    presets: [{ id: 'default', label: 'Titular', values: {} }],
    uploadError: '',
    shareStatus: 'idle',
    onImageFileChange: vi.fn(),
    onSelectPreset: vi.fn(),
    copyShareLink: vi.fn(),
  }),
}));

vi.mock('@/pages/tools/player-card/components/PlayerCardBuilderHero', () => ({
  default: () => <h1>Mock Hero</h1>,
}));
vi.mock('@/pages/tools/player-card/components/PlayerCardBuilderToolbar', () => ({
  default: () => <div>Mock Toolbar</div>,
}));
vi.mock('@/pages/tools/player-card/components/PlayerCardBuilderForm', () => ({
  default: () => <div>Mock Form</div>,
}));
vi.mock('@/pages/tools/player-card/components/PlayerCardPreviewCanvas', () => ({
  default: () => <div>Mock Preview</div>,
}));

import PlayerCardToolPage from '@/pages/tools/player-card';

describe('<PlayerCardToolPage />', () => {
  it('renders page layout with tool blocks', () => {
    render(<PlayerCardToolPage />);
    expect(screen.getByText('Mock Hero')).toBeInTheDocument();
    expect(screen.getByText('Mock Toolbar')).toBeInTheDocument();
    expect(screen.getByText('Mock Form')).toBeInTheDocument();
    expect(screen.getByText('Mock Preview')).toBeInTheDocument();
    expect(screen.getByText(/Player Data/i)).toBeInTheDocument();
  });
});
