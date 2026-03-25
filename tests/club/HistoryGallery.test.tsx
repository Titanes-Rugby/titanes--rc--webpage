import type { ComponentProps, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

vi.mock('framer-motion', () => ({
	AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>,
	motion: {
		div: (props: ComponentProps<'div'>) => <div {...props} />,
		button: (props: ComponentProps<'button'>) => <button {...props} />,
		figure: (props: ComponentProps<'figure'>) => <figure {...props} />,
		figcaption: (props: ComponentProps<'figcaption'>) => <figcaption {...props} />,
		img: (props: ComponentProps<'img'>) => <img {...props} />,
	},
}));

import HistoryGallery from '@/pages/club/components/HistoryGallery';

const getOpenImageButtons = () => screen.getAllByRole('button', { name: /Abrir imagen:/i });

describe('<HistoryGallery />', () => {
	it('opens selected image in a larger animated lightbox with footer content', async () => {
		const user = userEvent.setup();
		render(<HistoryGallery />);

		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

		await user.click(getOpenImageButtons()[0]);
		expect(screen.getByRole('dialog', { name: /Primer torneo - 21 Oct 2007/i })).toBeInTheDocument();
		expect(screen.getAllByText(/El dia que marco el inicio de nuestro equipo/i).length).toBeGreaterThan(0);

		await user.click(screen.getByRole('button', { name: /^Cerrar$/i }));
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('closes the lightbox when clicking the backdrop', async () => {
		const user = userEvent.setup();
		render(<HistoryGallery />);

		await user.click(getOpenImageButtons()[0]);
		expect(screen.getByRole('dialog', { name: /Primer torneo - 21 Oct 2007/i })).toBeInTheDocument();

		await user.click(screen.getByRole('button', { name: /Cerrar visor de imagen/i }));
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('expands and collapses the gallery items', async () => {
		const user = userEvent.setup();
		render(<HistoryGallery />);

		expect(getOpenImageButtons()).toHaveLength(4);

		await user.click(screen.getByRole('button', { name: /Ver mas/i }));
		expect(getOpenImageButtons()).toHaveLength(12);

		await user.click(screen.getByRole('button', { name: /Ver menos/i }));
		expect(getOpenImageButtons()).toHaveLength(4);
	});
});
