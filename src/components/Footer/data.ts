import type { LinkIconItem, LinkItem } from '@contracts';

/**
 * Elementos del footer
 */
export const footerItems: LinkItem[] = [
  {
    text: 'Código de conducta',
    url: '/codigo-de-conducta',
    label: 'código de conducta'
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
