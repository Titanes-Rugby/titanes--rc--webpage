export type MediaSectionId = 'noticias' | 'galeria' | 'videos';

export type MediaSection = {
  id: MediaSectionId;
  label: string;
  title: string;
  description: string;
};

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageSrc: string;
  imageLink?: string;
  link?: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  imageSrc: string;
  imageLink?: string;
};

export type VideoItem = {
  id: string;
  title: string;
  duration: string;
  summary: string;
  imageSrc: string;
  link?: string;
};
