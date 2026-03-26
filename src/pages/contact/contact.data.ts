import type { ContactChannel } from './types';

export const contactChannels: ContactChannel[] = [
	{
		id: 'c1',
		label: 'Correo',
		value: 'contacto@titanesrugbyclub.com',
		href: 'mailto:contacto@titanesrugbyclub.com',
		note: 'Consultas generales, prensa y alianzas.',
	},
	{
		id: 'c2',
		label: 'WhatsApp - Guerlain Martínez',
		value: '+507 6876-4902',
		href: 'https://wa.me/50768764902',
		note: 'Atención directa para inscripciones y tryouts.',
	},
	{
		id: 'c3',
		label: 'WhatsApp - Kyara',
		value: '+507 6282-6933',
		href: 'https://wa.me/50762826933',
		note: 'Atención directa para inscripciones y tryouts.',
	},
	{
		id: 'c4',
		label: 'Ubicación',
		value: 'Cancha Titanes, Ciudad de Panama',
		href: 'https://maps.google.com/?q=Ciudad+de+Panama',
		note: 'Entrenamientos de lunes a sábado.',
	},
];
