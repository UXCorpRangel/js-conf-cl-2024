import type { NavbarItem } from '@contracts/navbar.types';

/**
 * Elementos de la barra de navegación
 */
export const items: NavbarItem[] = [
  { title: 'Inicio', label: 'inicio', url: '/' },
  { title: 'Agenda', label: 'agenda', url: '/agenda' },
  { title: 'Charlistas', label: 'charlistas', url: '/charlistas' },
  { title: 'Sponsors', label: 'sponsors', url: '/sponsors' },
  { title: '¿Por qué?', label: 'por qué', url: '/por-que' },
  { title: 'Tickets', label: 'tickets', url: '/tickets' },
  { title: 'Ubicación', label: 'ubicación', url: '/ubicacion' },
  { title: 'Voluntarios', label: 'voluntarios', url: '/voluntarios' },
  { title: 'Código de Conducta', label: 'código de conducta', url: '/codigo-de-conducta' },
  { title: 'Preguntas', label: 'preguntas', url: '/faq' }
];
