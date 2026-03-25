import { SiFacebook, SiTiktok, SiInstagram, SiYoutube, type IconType } from '@icons-pack/react-simple-icons';

type FooterLink = {
	label: string;
	href: string;
	icon?: 'instagram' | 'tiktok' | 'facebook' | 'youtube';
};

type FooterSocialLink = {
	Icon: IconType;
} & FooterLink;

type FooterSection = {
	title: string;
	links: FooterLink[];
};

export const footerSections: FooterSection[] = [
	{
		title: 'Sobre nosotros',
		links: [
			{ label: 'Sobre nosotros', href: '/club/quienes-somos' },
			{ label: 'Nuestra historia', href: '/club/historia' },
			{ label: 'Eventos y agenda', href: '/contacto' },
			{ label: 'Patrocinadores', href: '/patrocinadores' },
		],
	},
	{
		title: 'Equipo',
		links: [
			{ label: 'Titanes', href: '/equipos/primera-division' },
			{ label: 'Titanides', href: '/equipos/femenino' },
			{ label: 'Titanes Juveniles', href: '/equipos/juveniles' },
		],
	},
	{
		title: 'Noticias',
		links: [
			{ label: 'Ultimas noticias', href: '/media/noticias' },
			{ label: 'Videos', href: '/media/videos' },
			{ label: 'Redes', href: '/media' },
		],
	},
	{
		title: 'Partidos',
		links: [
			{ label: 'Partidos y resultados', href: '/fixture' },
			{ label: 'Entradas', href: '/contacto' },
		],
	},
];

export const legalLinks: FooterLink[] = [
	{ label: 'Escríbenos', href: '/contacto' },
	{ label: 'Terminos y condiciones', href: '/contacto' },
	{ label: 'Politica de privacidad', href: '/contacto' },
	{ label: 'Declaracion de cobros', href: '/contacto' },
	{ label: 'Suscripciones', href: '/contacto' },
];

export const socialLinks: FooterSocialLink[] = [
	{ label: 'Instagram', href: 'https://www.instagram.com/titanesrc', Icon: SiInstagram },
	{ label: 'TikTok', href: 'https://www.tiktok.com/@titanes_rugbyclub', Icon: SiTiktok },
	{ label: 'Facebook', href: 'https://www.facebook.com/groups/126799640713388', Icon: SiFacebook },
	{ label: 'YouTube', href: 'https://www.youtube.com/@titanesrugby', Icon: SiYoutube },
];
