import type { NavbarItem } from '@contracts/navbar.types';

/**
 * Elementos de la barra de navegación
 */
export const items: NavbarItem[] = [
  { title: 'Inicio', label: 'inicio', url: '/' },
  { title: 'Agenda', label: 'agenda', url: '/agenda' },
  { title: 'Charlistas', label: 'charlistas', url: '/speakers' },
  { title: 'Sponsors', label: 'sponsors', url: '/sponsors' },
  { title: '¿Por qué?', label: 'por qué', url: '/why' },
  { title: 'Tickets', label: 'tickets', url: '/tickets' },
  { title: 'Ubicación', label: 'ubicación', url: '/location' },
  { title: 'Voluntario', label: 'voluntario', url: '/volunteer' },
  { title: 'Código de Conducta', label: 'código de conducta', url: '/code-conduct' },
  { title: 'CFP', label: 'cfp', url: 'cfp' },
  { title: 'Preguntas', label: 'preguntas', url: '/faq' }
];
