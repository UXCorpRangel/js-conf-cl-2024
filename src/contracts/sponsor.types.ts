/**
 * Tipo de patrocinador
 */
export type SponsorTier = 'gold' | 'platinum' | 'silver' | 'bronze';

/**
 * Definición simple de una variable CSS
 */
type CSSVariable = `--${string}`;

/**
 * Metadatos de un patrocinador
 */
export type SponsorMetadata = {
  /**
   * Nombre del patrocinador
   */
  name: string;

  /**
   * Icono del patrocinador
   */
  icon: string;

  /**
   * Estilos del patrocinador
   */
  styles: Record<CSSVariable, string | number>;
};

/**
 * Mapa de estilos de los patrocinadores
 */
export type SponsorMap = Record<SponsorTier, SponsorMetadata>;
