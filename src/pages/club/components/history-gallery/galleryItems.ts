export type GalleryItem = {
	image: string;
	title: string;
	caption: string;
	layoutId?: string;
};

export const BASE_ITEMS: GalleryItem[] = [
	{
		image: '/images/background/galeria1.jpeg',
		title: 'Primer torneo - 21 Oct 2007',
		caption: 'El dia que marco el inicio de nuestro equipo.',
	},
	{
		image: '/images/background/galeria2.jpeg',
		title: 'Segundo uniforme',
		caption: 'Estreno del segundo uniforme en nuestro segundo torneo.',
	},
	{
		image: '/images/background/galeria15.jpeg',
		title: 'Las escalinatas',
		caption: 'Nuestro lugar de acondicionamiento fisico un lugar digno para un titan.',
	},
	{
		image: '/images/background/galeria18.jpeg',
		title: 'Nuestra casa UTP',
		caption: 'Entrenamientos en la Universidad tecnologica de Panamá de trineos con pesas.',
	},
];

export const EXTRA_ITEMS: GalleryItem[] = [
	{
		image: '/images/background/galeria3.jpeg',
		title: 'Nueva piel',
		caption: 'Nuevo uniforme mostrando nuestra identidad con logo mejorado.',
	},
	{
		image: '/images/background/galeria4.jpeg',
		title: 'Rugby playa 2012',
		caption: 'El rugby no solo esta en el cesped, tambien en la arena junto a las olas.',
	},
	{
		image: '/images/background/galeria5.jpeg',
		title: 'Titanides en accion',
		caption: 'El pilar femenino en el cesped y en la playa.',
	},
	{
		image: '/images/background/galeria6.jpeg',
		title: 'Reclutamientos',
		caption: 'Primeros reclutamientos en la Universidad Tecnologica de Panama',
	},
	{
		image: '/images/background/galeria7.jpeg',
		title: 'Celebracion de ensayo',
		caption: 'Los valores de nuestro equipo no solo es disciplina, tambien una hermandad.',
	},
	{
		image: '/images/background/galeria8.jpeg',
		title: 'Tiempo de equipo',
		caption: 'El rugby dandose a conocer en la comunidad universitaria.',
	},
	{
		image: '/images/background/galeria10.jpeg',
		title: 'Velocidad al ala',
		caption: 'Corriendo lineas de fondo en cada entrenamiento.',
	},
	{
		image: '/images/background/galeria23.jpeg',
		title: 'Orgullo Titanes',
		caption: 'Una familia dentro y fuera de la canca, lo que nos define como hermanos.',
	},
];
