import type { NavbarItem } from '@contracts/navbar.types';

/**
 * Elementos de la barra de navegación
 */
export const items: NavbarItem[] = [
  { title: 'Inicio', label: 'inicio', url: '/' },
  { title: 'Sponsors', label: 'sponsors', url: '/sponsors' },
  { title: '¿Por qué?', label: 'por qué', url: '/por-que' },
  { title: 'Ubicación', label: 'ubicación', url: '/ubicacion' },
  { title: 'Código de Conducta', label: 'código de conducta', url: '/codigo-de-conducta' }
];
