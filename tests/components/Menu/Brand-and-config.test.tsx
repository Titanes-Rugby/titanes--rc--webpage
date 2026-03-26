import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import Brand from '@/components/Menu/Brand';
import { MENU_ENTRIES } from '@/components/Menu/menuEntries';
import {
  dropdownVariants,
  mobileGroupVariants,
  mobileItemVariants,
  overlayVariants,
  panelVariants,
} from '@/components/Menu/variants';

describe('menu static modules', () => {
  it('renders brand link and accessible club name', () => {
    render(
      <MemoryRouter>
        <Brand />
      </MemoryRouter>,
    );

    expect(screen.getByText('Titanes Rugby Club')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('exports menu entries and animation variants with expected keys', () => {
    expect(MENU_ENTRIES.length).toBeGreaterThanOrEqual(6);
    expect(MENU_ENTRIES[0]).toEqual(
      expect.objectContaining({
        label: 'Club',
        children: expect.arrayContaining([expect.objectContaining({ label: 'Historia' })]),
      }),
    );

    expect(overlayVariants).toEqual(expect.objectContaining({ hidden: { opacity: 0 }, visible: { opacity: 1 } }));
    expect(panelVariants).toEqual(expect.objectContaining({ hidden: expect.any(Object), visible: expect.any(Object), exit: expect.any(Object) }));
    expect(dropdownVariants).toEqual(expect.objectContaining({ hidden: expect.any(Object), visible: expect.any(Object), exit: expect.any(Object) }));
    expect(mobileGroupVariants.visible).toEqual(expect.objectContaining({ transition: expect.any(Object) }));
    expect(mobileItemVariants).toEqual(expect.objectContaining({ hidden: expect.any(Object), visible: expect.any(Object) }));
  });
});
