type FooterLink = {
	label: string;
	href: string;
};

type FooterSection = {
	title: string;
	links: FooterLink[];
};

export const footerSections: FooterSection[] = [
	{
		title: 'About',
		links: [
			{ label: 'About Us', href: '/club/quienes-somos' },
			{ label: 'Our History', href: '/club/historia' },
			{ label: 'Fan Hub & Events', href: '/contacto' },
			{ label: 'Partners', href: '/patrocinadores' },
		],
	},
	{
		title: 'Squad',
		links: [
			{ label: 'First Team', href: '/equipos/primera-division' },
			{ label: 'Juniors', href: '/equipos/juveniles' },
			{ label: 'Women', href: '/equipos/femenino' },
		],
	},
	{
		title: 'News',
		links: [
			{ label: 'Latest News', href: '/media/noticias' },
			{ label: 'Videos', href: '/media/videos' },
			{ label: 'Social', href: '/media' },
		],
	},
	{
		title: 'Fixtures',
		links: [
			{ label: 'Fixtures & Results', href: '/fixture' },
			{ label: 'Tickets', href: '/contacto' },
		],
	},
];

export const legalLinks: FooterLink[] = [
	{ label: 'Contact Us', href: '/contacto' },
	{ label: 'Terms and Conditions', href: '/contacto' },
	{ label: 'Privacy Policy', href: '/contacto' },
	{ label: 'Collection Statement', href: '/contacto' },
	{ label: 'Email Subscriptions', href: '/contacto' },
];

export const socialLinks: FooterLink[] = [
	{ label: 'Fb', href: '#' },
	{ label: 'X', href: '#' },
	{ label: 'Ig', href: '#' },
	{ label: 'Yt', href: '#' },
];
