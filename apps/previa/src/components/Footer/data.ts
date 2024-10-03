import type { LinkIconItem, LinkItem } from '@contracts';

/**
 * Elementos del footer
 */
export const footerItems: LinkItem[] = [
  {
    text: 'Código de conducta',
    url: '/codigo-de-conducta',
    label: 'código de conducta'
  },
  {
    text: 'Políticas de privacidad',
    url: 'https://legal.jsconf.cl/politica_de_privacidad/',
    label: 'políticas de privacidad'
  },
  {
    text: 'Términos de servicio',
    url: 'https://legal.jsconf.cl/terminos_de_servicio',
    label: 'términos de servicio'
  },
  {
    text: 'Términos de compra e imagen',
    url: 'https://legal.jsconf.cl/terminos_de_compra_e_imagen',
    label: 'términos de compra e imagen'
  }
];

/**
 * Elementos de redes sociales para el footer
 */
export const socialItems: LinkIconItem[] = [
  {
    text: 'Linkedin',
    url: 'https://www.linkedin.com/company/jsconf-chile/',
    icon: 'linkedin',
    label: 'Linkedin'
  },
  {
    text: 'Instagram',
    url: 'https://www.instagram.com/jsconf.cl/',
    icon: 'instagram',
    label: 'Instagram'
  },
  {
    text: 'Twitter',
    url: 'https://x.com/jsconfcl',
    icon: 'twitter',
    label: 'Twitter'
  },
  {
    text: 'Facebook',
    url: 'https://www.facebook.com/jsconfcl',
    icon: 'facebook',
    label: 'Facebook'
  }
];
