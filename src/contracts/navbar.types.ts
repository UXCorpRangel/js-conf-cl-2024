/**
 * Definición de elemento de la barra de navegación
 */
export type NavbarItem = {
  /**
   * Titulo del elemento de la barra de navegación
   */
  title: string;

  /**
   * URL del elemento de la barra de navegación
   */
  url: string;

  /**
   * Etiqueta del elemento de la barra de navegación
   */
  label: string;
};

/**
 * Definición de Iconos de la barra de navegación con iconos
 */
export type NavbarIconItem = NavbarItem & {
  /**
   * Icono del elemento de la barra de navegación
   */
  icon: string;
};
