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
    label: 'WhatsApp',
    value: '+507 6000-1122',
    href: 'https://wa.me/50760001122',
    note: 'Atención directa para inscripciones y tryouts.',
  },
  {
    id: 'c3',
    label: 'Ubicación',
    value: 'Cancha Titanes, Ciudad de Panama',
    href: 'https://maps.google.com/?q=Ciudad+de+Panama',
    note: 'Entrenamientos de lunes a sábado.',
  },
];
