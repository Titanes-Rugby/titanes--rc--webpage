import type { ClubSection, ClubSectionId, FacilityItem, StaffMember } from './types';

export const clubSections: ClubSection[] = [
  { id: 'que-somos', label: '¿Qué somos?', title: '¿Qué Somos?', description: 'Identidad, misión y visión del club.' },
  { id: 'historia', label: 'Historia', title: 'Historia Del Club', description: 'Origen, identidad y crecimiento competitivo de Titanes Rugby Club.' },
  { id: 'staff-tecnico', label: 'Staff Tecnico', title: 'Staff Tecnico', description: 'Equipo de trabajo multidisciplinario para alto rendimiento.' },
  { id: 'instalaciones', label: 'Instalaciones', title: 'Instalaciones', description: 'Infraestructura para formacion, recuperacion y competencia.' },
];

export const staffMembers: StaffMember[] = [
  { id: 's1', name: 'Diego Alvarado', role: 'Head Coach', focus: 'Modelo de juego, estrategia y cultura competitiva.' },
  { id: 's2', name: 'Jorge Salinas', role: 'Forwards Coach', focus: 'Scrum, lineout y dominio del contacto.' },
  { id: 's3', name: 'Marco Bernal', role: 'Performance Coach', focus: 'Fuerza, potencia, recuperacion y prevencion de lesiones.' },
  { id: 's4', name: 'Laura Pineda', role: 'Team Manager', focus: 'Operacion de plantel y coordinacion de competencia.' },
];

export const facilityItems: FacilityItem[] = [
  { id: 'f1', title: 'Cancha Principal', detail: 'Campo reglamentario con zona tecnica y graderias para jornadas oficiales.' },
  { id: 'f2', title: 'Gimnasio Funcional', detail: 'Zona de fuerza y acondicionamiento para pretemporada y microciclos.' },
  { id: 'f3', title: 'Area Medica', detail: 'Espacio de evaluacion, fisioterapia y control de carga.' },
  { id: 'f4', title: 'Aula Tactica', detail: 'Analisis de video, sesiones de estrategia y revision post partido.' },
];

export const getClubSection = (slug?: string): ClubSection => {
  const section = clubSections.find((item) => item.id === slug);
  return section ?? clubSections[0];
};

export const isClubSection = (value?: string): value is ClubSectionId => {
  return clubSections.some((item) => item.id === value);
};
