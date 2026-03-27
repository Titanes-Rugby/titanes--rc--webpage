import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import NewsPanel from '@/pages/media/components/NewsPanel';

describe('<NewsPanel />', () => {
  it('uses link, imageLink and imageSrc fallbacks for article anchors', () => {
    render(
      <NewsPanel
        items={[
          { id: 'n1', title: 'Con link', date: '01', excerpt: 'A', imageSrc: '/img-1.jpg', link: '/external-news' },
          { id: 'n2', title: 'Con imageLink', date: '02', excerpt: 'B', imageSrc: '/img-2.jpg', imageLink: '/img-link' },
          { id: 'n3', title: 'Solo imagen', date: '03', excerpt: 'C', imageSrc: '/img-3.jpg' },
        ]}
      />,
    );

    const imageLink = screen.getByRole('img', { name: 'Con link' }).closest('a');
    const imageLinkFallback = screen.getByRole('img', { name: 'Con imageLink' }).closest('a');
    const srcFallback = screen.getByRole('img', { name: 'Solo imagen' }).closest('a');

    expect(imageLink).toHaveAttribute('href', '/external-news');
    expect(imageLinkFallback).toHaveAttribute('href', '/img-link');
    expect(srcFallback).toHaveAttribute('href', '/img-3.jpg');
  });

  it('applies image fallback only once after onError', () => {
    render(
      <NewsPanel
        items={[{ id: 'n1', title: 'Con fallback', date: '01', excerpt: 'A', imageSrc: '/broken-image.jpg' }]}
      />,
    );

    const image = screen.getByRole('img', { name: 'Con fallback' }) as HTMLImageElement;

    fireEvent.error(image);
    expect(image.dataset.fallbackApplied).toBe('true');
    expect(image.getAttribute('src')).toBe('/images/background/1ra_fecha.png');

    fireEvent.error(image);
    expect(image.getAttribute('src')).toBe('/images/background/1ra_fecha.png');
  });
});
