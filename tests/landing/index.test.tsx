import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import LandingPage from '@/pages/landing';

describe('<LandingPage />', () => {
	it('renders key landing sections and primary content', () => {
		render(
			<MemoryRouter>
				<LandingPage />
			</MemoryRouter>,
		);

		expect(screen.getByRole('heading', { name: /Rugby de alto nivel/i })).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /Un club construido desde la identidad y la entrega/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole('heading', { name: /Tarjetas de jugadores con presencia de nivel profesional/i }),
		).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: /Jugadores en movimiento/i })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: /Categorías competitivas del club/i })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: /Próximos partidos/i })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: /Actualidad del club/i })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: /Hazte miembro de Titanes/i })).toBeInTheDocument();
	});

	it('renders expected CTAs and route links', () => {
		render(
			<MemoryRouter>
				<LandingPage />
			</MemoryRouter>,
		);

		expect(screen.getByRole('button', { name: /Ver partidos/i })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /Unirme al Club/i })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Ver fixture completo/i })).toHaveAttribute('href', '/fixture');
		expect(screen.getByRole('link', { name: /Ver patrocinadores/i })).toHaveAttribute('href', '/patrocinadores');
		expect(screen.getByRole('link', { name: /Inscribirme/i })).toHaveAttribute('href', '/contacto');
		expect(screen.getAllByRole('link', { name: /Ver calendario/i })).toHaveLength(3);
	});
});
