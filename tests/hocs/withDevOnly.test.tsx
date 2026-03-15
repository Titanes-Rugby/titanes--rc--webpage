import type { ComponentType } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import withDevOnly from '@/hocs/withDevOnly';

describe('withDevOnly', () => {
  it('renders wrapped component in dev mode', () => {
    const Sample = ({ label }: { label: string }) => <p>{label}</p>;
    const Wrapped = withDevOnly(Sample);

    render(<Wrapped label="Visible in dev" />);
    expect(screen.getByText('Visible in dev')).toBeInTheDocument();
  });

  it('builds displayName using explicit component displayName', () => {
    const Sample = () => <p>Sample</p>;
    Sample.displayName = 'ExplicitDisplayName';

    const Wrapped = withDevOnly(Sample);
    expect(Wrapped.displayName).toBe('withDevOnly(ExplicitDisplayName)');
  });

  it('falls back displayName to function name and then generic label', () => {
    function NamedComponent() {
      return <p>Named</p>;
    }

    const WrappedNamed = withDevOnly(NamedComponent);
    expect(WrappedNamed.displayName).toBe('withDevOnly(NamedComponent)');

    const Bare = { displayName: undefined, name: undefined } as unknown as ComponentType<Record<string, never>>;
    const WrappedBare = withDevOnly(Bare);
    expect(WrappedBare.displayName).toBe('withDevOnly(Component)');
  });
});
