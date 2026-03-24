import { FireIcon, HeartIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/20/solid';

import type { LegacyListItem, TimelineEvent } from './types';

export const EVENTS: TimelineEvent[] = [
	{
		year: '2004-2005',
		title: 'Los Primeros Pasos',
		subtitle: "El Misticismo de 'El Infierno' y los 'Diablos Rojos'",
		body: 'Antes de que Titanes Rugby Club fuera una realidad, hubo eventos que marcaron nuestro ADN para siempre. Todo se remonta al nacimiento del rugby en Panamá, una semilla que plantó Jorge D’Orcy junto a tres amigos el 18 de noviembre de 2004. Con la visión de promover valores y buenas costumbres, invitaron a jóvenes de la Universidad de Panamá a descubrir este deporte.Para el 2005, ese grupo de amigos se consolidó como Diablos Rojos Rugby Club con el iconico nombre de los antiguos buses imponentes en el pais, jugando la modalidad de Rugby XV.El nombre no fue casualidad; buscábamos algo bien autóctono que hiciera "match" con nuestro lugar de entrenamiento: "El Infierno".Era una cancha apodada así porque estaba justo al lado de donde pasaba la locomotora, creando un ambiente único para forjar el carácter.En esos días, el rugby era un conglomerado de amigos de distintas universidades y trabajos que compartían una misma pasión.',
		highlight: "Nombre autóctono que hacía 'match' con el lugar de entrenamiento.",
		icon: FireIcon,
		image: '/images/background/diablosRojos.png',
		gradient: 'from-emerald-900/50 via-green-800/50 to-lime-700/50',
	},
	{
		year: '2007',
		title: 'Crecimiento y Expansión',
		subtitle: 'El Nacimiento de Titanes',
		body: 'A medida que el deporte ganaba popularidad y se sumaban exjugadores extranjeros que aportaban su experiencia desinteresadamente, el equipo naturalmente creció tanto que en 2007 que se tomó una decisión estratégica. Decidimos separarnos por afinidades laborales y universitarias para poder expandirnos y buscar más gente. Esta transición dio paso a la modalidad de Sevens (Rugby 7), y el 21 de octubre de 2007 se oficializaron nuevos equipos, entre ellos Cuervos, Dragones y, por supuesto, Titanes. Con la fundación oficial donde iniciamos nuestros primeros reclutamientos, al inicio despues de la fundacion el equipo estuvo cerca de haberse desintegrado, fue alli donde Manuel Valdivia y otros 3 titanes mas se reunieron para reintegrar el equipo, gracias a eso logramos establecernos en la Universidad Tecnológica de Panamá (UTP) donde gracias al aumento de numero de integrantes se hicieron las primeras votaciones para crear una junta directiva. Al momento de pensar en un nombre en el equipo, hubieron muchas divisiones y fue dificil decidirse por uno en especifico, pero al final prevalecio nuestro nombre Titanes. ',
		highlight:
			"Dato curioso: Debido a las divisiones para votar por el nombre del equipo, casi nos llamamos 'Tecno Barbies'",
		icon: ShieldCheckIcon,
		image: '/images/background/Primer_equipo.jpeg',
		gradient: 'from-lime-600/50 via-green-600/50 to-emerald-600/50',
	},
	{
		year: '2012 - Presente',
		title: 'El Despertar de las Titanides',
		subtitle: 'Forjando el Legado del Rugby Femenino',
		body: 'La historia del rugby femenino en Panamá cambió para siempre cuando Sudamérica Rugby emitió la directriz de fomentar y formalizar la rama femenil en toda la región. Este llamado a la acción encontró tierra fértil en el corazón de nuestras jugadoras. Aunque el camino inició formalmente en 2012 con el establecimiento de las Dragones Rugby Girls, su llegada fue la chispa que encendió un fuego que ya existía dentro de la familia de Titanes. En aquel entonces, Titanes ya contaba con mujeres apasionadas por el deporte, guerreras que entrenaban con el alma pero que aún no contaban con una estructura formal. Inspiradas por el ejemplo de las Dragones, esa pasión se transformó en un proyecto sólido y ambicioso: así nacieron "Las Titanides" uno de los pilares de la rama femenina que abrio paso al nacimeinto de nuevos equipos tanto femeninos como masculinos.',
		highlight: 'White Lyons RC, Lycans, Guerreros y Spartans RC nacen gracias al impulso Titanide.',
		icon: HeartIcon,
		image: '/images/background/fecha1-129.JPG',
		gradient: 'from-green-700/50 via-emerald-700/50 to-lime-600/50',
	},
	{
		year: 'Presente',
		title: 'Evolución de Identidad',
		subtitle: 'El Logo que nos Define',
		body: 'Cada versión del escudo recuerda entrenos en la UTP, tackles en las escalinatas y a cada jugador que vistió nuestra armadura.',
		highlight: 'Versiones: 2004, 2007, 2014, 2023; esencia intacta, diseño actualizado.',
		icon: RocketLaunchIcon,
		image: 'https://images.unsplash.com/photo-1652975863595-a5727ac7a5d6?auto=format&fit=crop&w=1400&q=80&sat=-18',
		gradient: 'from-lime-500/50 via-green-500/50 to-emerald-500/50',
	},
];

export const LEGACY: LegacyListItem[] = [
	{ name: 'White Lyons RC', founder: 'Norma Ortiz', logo: '/images/background/WhiteLions.PNG' },
	{ name: 'Lycans', founder: 'Mayzu', logo: '/images/background/Lycans.PNG' },
	{ name: 'Guerreros', founder: 'Manuel Valdivia', logo: '/images/background/Guerreros.png' },
	{
		name: 'White Sharks',
		founder: 'Manuel Valdivia',
		logo: 'https://res.cloudinary.com/dur8qmwlg/image/upload/v1774321955/White-Sharks_z59prd.png',
	},
	{ name: 'Spartans RC', founder: 'Comunidad', logo: '/images/background/Spartans.PNG' },
	{
		name: 'Corsarios',
		founder: 'Angel A. Singh',
		logo: 'https://res.cloudinary.com/dur8qmwlg/image/upload/v1774321953/corsariosrc_ktjath.png',
	},
	{
		name: 'Bucaneras',
		founder: 'Oderay Hudson',
		logo: 'https://res.cloudinary.com/dur8qmwlg/image/upload/v1774321954/bucaneras_mtuau2.png',
	},
	{
		name: 'Baulas',
		founder: 'Maximo',
		logo: 'https://res.cloudinary.com/dur8qmwlg/image/upload/v1774321956/baulas_wv8gyv.png',
	},
	{
		name: 'Toros',
		founder: 'Jorge Medina (Moro)',
		logo: 'https://res.cloudinary.com/dur8qmwlg/image/upload/v1774321956/toros1_iqqlhx.png',
	},
];
