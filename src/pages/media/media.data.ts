import type { GalleryItem, MediaSection, MediaSectionId, NewsItem, VideoItem } from './types';

export const mediaSections: MediaSection[] = [
  { id: 'noticias', label: 'Noticias', title: 'Noticias Del Club', description: 'Comunicados, resultados y novedades del entorno Titanes.' },
  { id: 'galeria', label: 'Galeria', title: 'Galeria Oficial', description: 'Momentos destacados de entrenamientos, partidos y comunidad.' },
  { id: 'videos', label: 'Videos', title: 'Videos Del Club', description: 'Highlights, entrevistas y contenido audiovisual semanal.' },
];

export const newsItems: NewsItem[] = [
  { id: 'n1', title: 'Titanes gana en casa y asegura liderato', date: '10 Mar 2026', excerpt: 'Partido intenso con cierre dominante en el segundo tiempo.', imageSrc: '/images/background/1103840.jpg' },
  { id: 'n2', title: 'Convocatoria abierta para juveniles', date: '05 Mar 2026', excerpt: 'Nueva jornada de captacion con evaluaciones fisicas y tecnicas.', imageSrc: '/images/background/1103858.jpg' },
  { id: 'n3', title: 'Staff tecnico presenta plan competitivo', date: '01 Mar 2026', excerpt: 'Se definieron metas de rendimiento para el ciclo de temporada.', imageSrc: '/images/background/1103863.jpg' },
];

export const galleryItems: GalleryItem[] = [
  { id: 'g1', title: 'Sesion de contacto y defensa', imageSrc: '/images/background/1103868.jpg' },
  { id: 'g2', title: 'Trabajo de scrum en bloque', imageSrc: '/images/background/1103890.jpg' },
  { id: 'g3', title: 'Ritmo alto en zona de backs', imageSrc: '/images/background/1103950.jpg' },
  { id: 'g4', title: 'Postpartido con aficion', imageSrc: '/images/background/1103841.jpg' },
];

export const videoItems: VideoItem[] = [
  { id: 'v1', title: 'Resumen de la jornada', duration: '03:42', summary: 'Mejores jugadas del ultimo partido de liga.', imageSrc: '/images/background/1103850.jpg' },
  { id: 'v2', title: 'Inside Training', duration: '06:15', summary: 'Microciclo de carga y enfoque tactico del plantel.', imageSrc: '/images/background/1104039.jpg' },
  { id: 'v3', title: 'Entrevista al capitan', duration: '04:08', summary: 'Balance competitivo y objetivos del cierre de torneo.', imageSrc: '/images/background/1103890.jpg' },
];

export const isMediaSection = (value?: string): value is MediaSectionId => {
  return mediaSections.some((section) => section.id === value);
};

export const getMediaSection = (id: MediaSectionId) => {
  return mediaSections.find((section) => section.id === id) ?? mediaSections[0];
};
