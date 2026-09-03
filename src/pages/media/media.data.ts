import type { MediaSection, MediaSectionId, NewsItem, VideoItem } from './types';
import { galleryItems } from './galleryItems.data';

export const mediaSections: MediaSection[] = [
	{
		id: 'noticias',
		label: 'Noticias',
		title: 'Noticias Del Club',
		description: 'Comunicados, resultados y novedades del entorno Titanes.',
	},
	{
		id: 'galeria',
		label: 'Galeria',
		title: 'Galeria Oficial',
		description: 'Momentos destacados de entrenamientos, partidos y comunidad.',
	},
	{
		id: 'videos',
		label: 'Videos',
		title: 'Videos Del Club',
		description: 'Highlights, entrevistas y contenido audiovisual semanal.',
	},
];

// Mas reciente primero (5 noticias)
export const newsItems: NewsItem[] = [
	{
		id: 'n6',
		title: 'Sol + Rugby',
		date: '28 Mar 2026',
		excerpt:
			'Te esperamos para la 3ra fecha de la Liga Nacional de Rugby con la Union Panameña de Rugby desde las 8:00 a.m. en Ciudad del Saber. ¡Nos vemos en la cancha!',
		imageSrc:
			'/images/news/28-03-2026.png',
		imageLink: 'https://www.instagram.com/p/DWaO8xZjSFq/?img_index=1',
	},
	{
		id: 'n5',
		title: 'Titanes gana en casa y asegura liderato',
		date: '10 Mar 2026',
		excerpt:
			'Triunfo clave para mantenerse primeros en la tabla. Revive los mejores momentos de la fecha en nuestro perfil.',
		imageSrc:
			'/images/news/10-03-2026.png',
		imageLink: 'https://www.instagram.com/p/DVtsMMOlrjl/?img_index=1',
	},
	{
		id: 'n4',
		title: 'Hora de la accion!',
		date: '07 Mar 2026',
		excerpt:
			'¡Todo listo para volver a la cancha! Este domingo 8 de marzo se juega la segunda fecha de la Liga Panameña de Rugby. Así que ya sabes… ¡ve con todo a apoyar a nuestros Titanes y a nuestras chicas Titanides! 📍Ciudad del Saber 🕗8:00 AM',
		imageSrc:
			'/images/news/07-03-2026.png',
		imageLink: 'https://www.instagram.com/p/DVlhHsADcTZ/?img_index=1',
	},
	{
		id: 'n3',
		title: 'Copa Proceres 2026',
		date: '05 Mar 2026',
		excerpt:
			'Edicion especial con Sainte Anne de Bellevue RFC como invitado internacional. Titanes y Titanides compitieron con garra.',
		imageSrc:
			'/images/news/05-03-2026.png',

		imageLink: 'https://www.instagram.com/p/DVhGhwvlWyK/?img_index=1',
	},
	{
		id: 'n2',
		title: 'Arranca la Liga nacional de rugby 2026',
		date: '28 Ene 2026',
		excerpt:
			'Iniciamos el anio con la liga nacional y la liga de desarrollo 2026. Equipos como Cuervos, Lycans, Vikingos y Titanes lo dan todo.',
		imageSrc:
			'/images/news/28-01-2026.png',
		imageLink: 'https://www.instagram.com/p/DURpkCEj2Kc/',
	},
	{
		id: 'n1',
		title: 'Si el 2026 viene diferente, nosotros también',
		date: '27 dic 2025',
		excerpt:
			'Este ha sido un año de muchos cambios y nuestro logo no se podía quedar atrás. Manteniendo la esencia y el espíritu que nos han definido por 18 años. Presentamos oficialmente nuestra nueva cara; una evolución que refuerza la hermandad, el honor y la disciplina que nos representan.',
		imageSrc:
			'/images/news/27-12-20253.jpg',
		imageLink: 'https://www.instagram.com/p/DSxgGsKjckY/',
	},
];

export const videoItems: VideoItem[] = [
	{
		id: 'v1',
		title: 'Resumen de la jornada',
		duration: '03:42',
		summary: 'Highlights del ultimo partido con entrevistas y mejores jugadas.',
		imageSrc:
			'https://instagram.fpac1-2.fna.fbcdn.net/v/t51.82787-15/646030179_18566551093002934_894285264573604568_n.jpg?stp=dst-jpg_e35_s1080x1080_tt6&_nc_cat=103&ig_cache_key=Mzg0Mjk4MjUxMzc1NzUwMDY4Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4ODEwLnNkci5DMyJ9&_nc_ohc=wVAaLjnMSQoQ7kNvwGBCuZw&_nc_oc=AdrgEI36MY0DO3wkJImLXv7tRzS1lEYYunLos-fdzUZev5RDJ_JEu4KXNGbTR3CzpMA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpac1-2.fna&_nc_gid=EjSIC_X8hihkmpQcfsasvg&_nc_ss=7a32e&oh=00_AfxtptycqKol7UimVkwmoi38KUSLfW0UtLvv3F_X3XLZzA&oe=69CA2C06',
		link: 'https://drive.google.com/drive/u/2/folders/1pDkQStb5FG7WR10q-_fw3OgGVRUUGMTG',
	},
];

export const isMediaSection = (value?: string): value is MediaSectionId =>
	mediaSections.some((section) => section.id === value);

export const getMediaSection = (id: MediaSectionId) =>
	mediaSections.find((section) => section.id === id) ?? mediaSections[0];
