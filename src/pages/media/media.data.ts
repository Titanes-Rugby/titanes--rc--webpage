import type { GalleryItem, MediaSection, MediaSectionId, NewsItem, VideoItem } from './types';

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
		id: 'n5',
		title: 'Vaya jornada la del pasado domingo!',
		date: '10 Mar 2026',
		excerpt:
			'Partidos intensos, grandes jugadas y mucha pasion en la cancha. Revive los mejores momentos de la fecha en nuestro perfil.',
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
			'https://instagram.fpac1-4.fna.fbcdn.net/v/t51.82787-15/607368965_18547725640002934_4102471504522400930_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=Mzc5Njk1NzE1ODA3Njk1OTAwMDE4NTQ3NzI1NjM0MDAyOTM0.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYzMHgxMTIwLnNkci5DMyJ9&_nc_ohc=t3C7q6SJAKYQ7kNvwGm5PvF&_nc_oc=Adriys_RO1kv8ZPx3amu3EIznNRkTydA07WqAiZyhiWe4nxEfUKYJz2gL8QLNx6nSDI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpac1-4.fna&_nc_gid=BZujJ8kCyHBq56Zc1x5ORQ&_nc_ss=7a32e&oh=00_AfwS4EZjummVb3KMWDZtTk936-ui2nJTYZHhmKbK-Ycyyg&oe=69CA083D',
		imageLink: 'https://www.instagram.com/p/DSxgGsKjckY/',
	},
];

export const galleryItems: GalleryItem[] = [
	{
		id: 'g3',
		title: 'Liga Nacional Fecha 2',
		imageSrc:
			'https://instagram.fpac1-4.fna.fbcdn.net/v/t51.82787-15/649228012_18174499369389035_7143376100682156561_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzg0OTkxNTAxMDExMDYwODU5Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=_82RiKA1qpgQ7kNvwEuKTdi&_nc_oc=AdpdPk7Gtn0vgMdwxYYo1DWy8oLLnKw25bI19mzvBclt5tlJ1iisW42zDHi4AKZxUE4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpac1-4.fna&_nc_gid=vd_UnZk473tSfvNbewhF3w&_nc_ss=7a32e&oh=00_AfyqfhkAsomA-_oq61XSZ9_Lw-yhjGAZ8TjAJVA103ArPA&oe=69CA1C84',
		imageLink:
			'https://photos.google.com/share/AF1QipMbySL11bwEJj3IPQFBgFkSBRXoVfiXQjitqXoQ5cCMc8RKnpAY6Y_I5XrpfgLutw?key=T0lCeVpUZ21OTC1hZ1FCOXI3UVpGbTRPZFN4Vk9B',
	},
	{
		id: 'g2',
		title: 'Copa Proceres 2026',
		imageSrc:
			'https://instagram.fpac1-3.fna.fbcdn.net/v/t51.82787-15/642789377_18567526819002934_7334629374937946784_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=106&ig_cache_key=Mzg0NjM2NjI0OTM1NzQ0MzE1NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=gkHm65fA5M0Q7kNvwHmsERM&_nc_oc=AdoAmpvdENvEvGuEQGg1T37njIFbTcBIZ2jvLq1KheAqwVk4vAxHZmyAnp1PntXFzMc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpac1-3.fna&_nc_gid=Xl3N8mWRL2PUuG6Zj_QDlg&_nc_ss=7a32e&oh=00_Afy2E8ghzw8lhWCzTpuDUgkwxW6N3bx-Ga54YdQNrn4I7A&oe=69CA1861',
		imageLink: 'https://drive.google.com/drive/u/2/folders/1wXXwYj6qCZbJn_CXRmBj3F4utK75ifeA',
	},
	{
		id: 'g1',
		title: 'Liga Nacional Fecha 1',
		imageSrc:
			'https://instagram.fpac1-4.fna.fbcdn.net/v/t51.82787-15/632565220_18171757546389035_2221504537401221302_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzgzMDA4MDQxODYxMjM2Mzk1NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=uBeggX_n6RIQ7kNvwH-h83p&_nc_oc=AdpDhk9GxUq2vy8BOTiil3QuEGPPKNwr2yqbbRsLr8pqzDL04wOfmx5h_qSPvwLWa-g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fpac1-4.fna&_nc_gid=_YtNFzNLnctUGM07k2Fgmg&_nc_ss=7a32e&oh=00_Afz89IFwCFwE_d2K5sZrr-dUxNEFSkGk0tbXUj09-89cmg&oe=69CA15DA',
		imageLink:
			'https://photos.google.com/share/AF1QipMsond277w_UuJdOm3oKemVDP4K_Ni5XdWoSRLoGe6iORNECtj_NZDPTZpw7-83JA?key=SEVvMnJXZVVFUEsxUl9lVVZRVHRhUmVSTGd3b3ZR',
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
