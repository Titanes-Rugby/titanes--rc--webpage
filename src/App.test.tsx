import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('<App />', () => {
	it('renders landing content on initial route', async () => {
		const { findByText, findByRole } = render(<App />);

		const heroText = await findByText(/Rugby de alto nivel/i);
		const fixtureCta = await findByRole('button', { name: /Ver Fixture/i });

		expect(heroText).toBeTruthy();
		expect(fixtureCta).toBeTruthy();
	});

	it('renders a main navigation link to contacto', async () => {
		const { findByRole } = render(<App />);
		const contactoLink = await findByRole('link', { name: /Contacto/i });

		expect(contactoLink.getAttribute('href')).toBe('/contacto');
	});
});
