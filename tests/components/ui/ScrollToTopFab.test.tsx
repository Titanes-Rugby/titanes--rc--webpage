import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import ScrollToTopFab from '@/components/ui/ScrollToTopFab';

describe('<ScrollToTopFab />', () => {
  it('shows only after crossing scroll threshold and scrolls to top on click', () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });

    render(<ScrollToTopFab />);
    expect(screen.queryByRole('button', { name: /scroll to top/i })).not.toBeInTheDocument();

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 500 });
    fireEvent.scroll(window);
    const button = screen.getByRole('button', { name: /scroll to top/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 100 });
    fireEvent.scroll(window);
    expect(screen.getByRole('button', { name: /scroll to top/i }).getAttribute('style')).toContain('opacity');
    scrollToSpy.mockRestore();
  });
});
