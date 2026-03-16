import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import MenuHeader from '@/components/Menu';

const renderMenu = () =>
  render(
    <MemoryRouter>
      <MenuHeader />
    </MemoryRouter>,
  );

describe('<MenuHeader />', () => {
  it('renders desktop links and opens desktop dropdown on hover', async () => {
    const user = userEvent.setup();
    renderMenu();

    expect(screen.getByRole('link', { name: 'Fixture' })).toHaveAttribute('href', '/fixture');

    await user.hover(screen.getByRole('button', { name: /club/i }));
    expect(screen.getByRole('link', { name: /Historia/i })).toHaveAttribute('href', '/club/historia');
    expect(screen.getByText('Origen, valores y crecimiento del club.')).toBeInTheDocument();
  });

  it('schedules close on mouse leave and handles blur-outside callback', async () => {
    const user = userEvent.setup();
    const setTimeoutSpy = vi.spyOn(window, 'setTimeout');
    const clearTimeoutSpy = vi.spyOn(window, 'clearTimeout');
    const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0);
      return 1;
    });

    renderMenu();
    const clubButton = screen.getByRole('button', { name: /club/i });
    await user.hover(clubButton);
    expect(screen.getByRole('link', { name: /Historia/i })).toBeInTheDocument();

    const wrapper = clubButton.closest('div.relative') as HTMLElement;
    fireEvent.mouseLeave(wrapper);
    expect(setTimeoutSpy).toHaveBeenCalled();
    fireEvent.mouseEnter(wrapper);
    expect(clearTimeoutSpy).toHaveBeenCalled();

    (screen.getByRole('button', { name: /open main menu/i }) as HTMLButtonElement).focus();
    fireEvent.blur(wrapper);
    expect(rafSpy).toHaveBeenCalled();

    fireEvent.mouseLeave(wrapper);
    await waitFor(() => {
      expect(screen.queryByRole('link', { name: /Historia/i })).not.toBeInTheDocument();
    });

    rafSpy.mockRestore();
    clearTimeoutSpy.mockRestore();
    setTimeoutSpy.mockRestore();
  });

  it('opens mobile menu, expands section, and closes after selecting child route', async () => {
    const user = userEvent.setup();
    renderMenu();

    await user.click(screen.getByRole('button', { name: /open main menu/i }));
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();

    const clubToggle = within(dialog).getByRole('button', { name: /club/i });
    expect(clubToggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(clubToggle);
    expect(clubToggle).toHaveAttribute('aria-expanded', 'true');
    await user.click(clubToggle);
    expect(clubToggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(clubToggle);
    expect(clubToggle).toHaveAttribute('aria-expanded', 'true');

    await user.click(within(dialog).getByRole('link', { name: 'Historia' }));
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('closes mobile menu from top-level mobile link click', async () => {
    const user = userEvent.setup();
    renderMenu();

    await user.click(screen.getByRole('button', { name: /open main menu/i }));
    const dialog = screen.getByRole('dialog');
    await user.click(within(dialog).getByRole('link', { name: 'Fixture' }));

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('closes mobile menu from close button and updates header visibility on scroll', async () => {
    const user = userEvent.setup();
    renderMenu();

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
    fireEvent.scroll(window);
    await user.click(screen.getByRole('button', { name: /open main menu/i }));
    await user.click(screen.getByRole('button', { name: /close menu/i }));

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
    expect(screen.getByRole('navigation', { name: 'Global' })).toBeInTheDocument();

    const header = screen.getByRole('banner');
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 120 });
    fireEvent.scroll(window);
    await waitFor(() => {
      expect(header.getAttribute('style')).toContain('transform');
    });

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 20 });
    fireEvent.scroll(window);
    await waitFor(() => {
      expect(header.getAttribute('style')).toContain('opacity');
    });
  });

  it('keeps desktop dropdown open when blur stays inside the same wrapper', async () => {
    const user = userEvent.setup();
    let frameCb: ((time: number) => void) | null = null;
    const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      frameCb = cb;
      return 1;
    });

    renderMenu();
    const clubButton = screen.getByRole('button', { name: /club/i });
    await user.hover(clubButton);
    expect(screen.getByRole('link', { name: /Historia/i })).toBeInTheDocument();

    const wrapper = clubButton.closest('div.relative') as HTMLElement;
    fireEvent.blur(wrapper);
    act(() => {
      clubButton.focus();
      frameCb?.(0);
    });

    expect(screen.getByRole('link', { name: /Historia/i })).toBeInTheDocument();
    rafSpy.mockRestore();
  });
});
