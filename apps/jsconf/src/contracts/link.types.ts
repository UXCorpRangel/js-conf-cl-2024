/**
 * Definición de elemento para enlaces.
 */
export type LinkItem = {
  /**
   * Texto del elemento.
   */
  text: string;

  /**
   * URL del elemento.
   */
  url: string;

  /**
   * Etiqueta del elemento.
   */
  label: string;

  /**
   * Indica si el elemento no debe mostrarse Por defecto es `false`.
   */
  hide?: boolean;
};

/**
 * Definición de elemento para enlaces con iconos.
 */
export type LinkIconItem = LinkItem & {
  /**
   * Icono del elemento.
   */
  icon: string;
};
