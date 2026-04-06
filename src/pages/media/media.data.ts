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
			'https://instagram.fpac1-4.fna.fbcdn.net/v/t51.82787-15/657731756_18574164982002934_57759069336688492_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzg2MjQ2NTAxNDAxMTkxOTAzOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=KPOTCtpWxG8Q7kNvwFqKLp4&_nc_oc=AdqtfEwOGXtQNc39L0FjYeIM3OmYDXf80MVZoDqfCUUgiM8OKEA69ARAj3_Uerm31vQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpac1-4.fna&_nc_gid=x40HRUHeDmTTHlkb3u8ePw&_nc_ss=7a32e&oh=00_Afxb5PAqaRZ_-Emksr0Kpeems4CfSH2OVsBGEYjv5PNR9A&oe=69CF9C88',
		imageLink: 'https://www.instagram.com/p/DWaO8xZjSFq/?img_index=1',
	},
	{
		id: 'n5',
		title: 'Titanes gana en casa y asegura liderato',
		date: '10 Mar 2026',
		excerpt:
			'Triunfo clave para mantenerse primeros en la tabla. Revive los mejores momentos de la fecha en nuestro perfil.',
		imageSrc:
			'https://instagram.fpac1-1.fna.fbcdn.net/v/t51.82787-15/649103203_18174499351389035_4298290789997004965_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzg0OTkxNTAxMDA5MzgyMjE1MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=TlEWUFncnfEQ7kNvwF-h6iJ&_nc_oc=AdoHzNhAj143qbkYJAatlVrn_N22p3QQFCGePKRZuEFzjUwO0VfhjtWjPRZ8KWJUngY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpac1-1.fna&_nc_gid=gvTTBl9gzFYRr7nVImLnqw&_nc_ss=7a32e&oh=00_Afzwe80PwNaxuyhHey5S1x7oZRxD_S3Z5K2JCKuIOF70gg&oe=69CA1040',
		imageLink: 'https://www.instagram.com/p/DVtsMMOlrjl/?img_index=1',
	},
	{
		id: 'n4',
		title: 'Hora de la accion!',
		date: '07 Mar 2026',
		excerpt:
			'¡Todo listo para volver a la cancha! Este domingo 8 de marzo se juega la segunda fecha de la Liga Panameña de Rugby. Así que ya sabes… ¡ve con todo a apoyar a nuestros Titanes y a nuestras chicas Titanides! 📍Ciudad del Saber 🕗8:00 AM',
		imageSrc:
			'https://instagram.fpac1-2.fna.fbcdn.net/v/t51.82787-15/649524712_18568130899002934_8293288825966551430_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=109&ig_cache_key=Mzg0ODAyMzI2OTAzOTc5NDI1MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNTB4MTY4OC5zZHIuQzMifQ%3D%3D&_nc_ohc=Dq8GXSulqmkQ7kNvwEEMfPY&_nc_oc=AdrF4V8MeuY-EGm1kgEHUbpPRB2PwjdA0WdGrRiMCNDmUsVDaLuXgiItEXMAoF77P8Q&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpac1-2.fna&_nc_gid=RPmp77_PMJk___85xhDdkQ&_nc_ss=7a32e&oh=00_AfyPWsBuce97Qdsq__Nvxi0e-X5k3OoTAuG2SPPFjOt9bA&oe=69CA155B',
		imageLink: 'https://www.instagram.com/p/DVlhHsADcTZ/?img_index=1',
	},
	{
		id: 'n3',
		title: 'Copa Proceres 2026',
		date: '05 Mar 2026',
		excerpt:
			'Edicion especial con Sainte Anne de Bellevue RFC como invitado internacional. Titanes y Titanides compitieron con garra.',
		imageSrc:
			'https://instagram.fpac1-4.fna.fbcdn.net/v/t51.82787-15/642774411_18567526663002934_3857831975387845181_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=107&ig_cache_key=Mzg0NjM2NTg4NjA3MTk5NjE1Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=6TISz_W4xw4Q7kNvwGH8MYb&_nc_oc=AdrnWm5JtIAdUYjCIloml-QhVdWFhQFjhsmfViX2jChe3_uk82yjBVpqXA3CFtjLTPI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpac1-4.fna&_nc_gid=bTbCdgk1bCWITcuu1YvUsg&_nc_ss=7a32e&oh=00_AfzAkwvrftXHHdscrOfQk64PrHmRTlGX7TqQiYAzkE3hdQ&oe=69C9F6F9',

		imageLink: 'https://www.instagram.com/p/DVhGhwvlWyK/?img_index=1',
	},
	{
		id: 'n2',
		title: 'Arranca la Liga nacional de rugby 2026',
		date: '28 Ene 2026',
		excerpt:
			'Iniciamos el anio con la liga nacional y la liga de desarrollo 2026. Equipos como Cuervos, Lycans, Vikingos y Titanes lo dan todo.',
		imageSrc:
			'https://instagram.fpac1-3.fna.fbcdn.net/v/t51.82787-15/626211104_18171021253389035_1858023159362051080_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=100&ig_cache_key=MzgyNDAyMDM1NDY0NjM2ODkyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNTB4MTY4Ny5zZHIuQzMifQ%3D%3D&_nc_ohc=EtGWT65ZhFYQ7kNvwEsDRs0&_nc_oc=Adrqi_MEjl7D7j3kksfuiU9d-dI_z_jQl_axDXOE3mPnBjSo4deRmHROHfrOhrEtBN8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpac1-3.fna&_nc_gid=mOqdFepp3NB0jIMArmYgFQ&_nc_ss=7a32e&oh=00_AfxtoO-RDA6p1zYhDJ1-uajIAenCHEOy42YFnm5A-rZ4Dg&oe=69C9F570',
		imageLink: 'https://www.instagram.com/p/DURpkCEj2Kc/',
	},
	{
		id: 'n1',
		title: 'Si el 2026 viene diferente, nosotros también',
		date: '27 dic 2026',
		excerpt:
			'Este ha sido un año de muchos cambios y nuestro logo no se podía quedar atrás. Manteniendo la esencia y el espíritu que nos han definido por 18 años. Presentamos oficialmente nuestra nueva cara; una evolución que refuerza la hermandad, el honor y la disciplina que nos representan.',
		imageSrc:
			'https://instagram.fpty1-1.fna.fbcdn.net/v/t51.82787-15/607368965_18547725640002934_4102471504522400930_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=Mzc5Njk1NzE1ODA3Njk1OTAwMDE4NTQ3NzI1NjM0MDAyOTM0.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYzMHgxMTIwLnNkci5DMiJ9&_nc_ohc=bwg7ByuDJMgQ7kNvwEwyM4s&_nc_oc=Ado6_ERTg5zX9XH9GzEkYewRCo8Xs6Fp8LHPIQZqG-SjhFI1ExaFvaDHWt0Qe77JEl4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpty1-1.fna&_nc_gid=M2vDUv_aC7Usi89Aue7cXQ&_nc_ss=7a32e&oh=00_Af1tb3pM2WLbeS-5N2aq3kqEQ0x_yfZsX12n_EDXYpX-BQ&oe=69D969BD',
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
