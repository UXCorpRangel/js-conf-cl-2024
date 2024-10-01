import type { SponsorMap } from '@contracts';

export const sponsorStyles: SponsorMap = {
  gold: {
    name: 'Gold Sponsor',
    icon: '/assets/gold-sponsor.webp',
    styles: {
      '--order': 2,
      '--background': `linear-gradient(0.07deg, rgba(80, 72, 29, 0.2) 0.03%, rgba(0, 0, 0, 0) 95.96%),
      radial-gradient(95.25% 166.54% at 98.39% 2.85%, rgba(54, 53, 38, 0.62) 8%, rgba(9, 9, 7, 0) 80%)`,
      '--border': `linear-gradient(180deg, #2A2401 0%, #9A8025 39.57%, #EDE060 100%)`,
      '--shadow': '0px 4px 85.3px rgba(85, 85, 46, 0.1)'
    }
  },
  platinum: {
    name: 'Platinum Sponsor',
    icon: '/assets/platinum-sponsor.webp',
    styles: {
      '--order': 1,
      '--background': `radial-gradient(95.25% 166.54% at 98.39% 2.85%, #272727 8%, rgba(9, 9, 7, 0) 80%),
      linear-gradient(0.07deg, rgba(64, 64, 64, 0.2) 0.03%, rgba(255, 255, 255, 0) 95.96%)`,
      '--border': `linear-gradient(327.26deg, #FFFFFF 31.78%, #272727 63.2%, #656565 93.99%)`,
      '--shadow': '0px 4px 85.3px rgba(64, 64, 64, 0.1)'
    }
  },
  silver: {
    name: 'Silver Sponsor',
    icon: '/assets/silver-sponsor.webp',
    styles: {
      '--order': 3,
      '--background': `radial-gradient(95.25% 166.54% at 98.39% 2.85%, rgba(210, 220, 232, 0.08) 8%, rgba(9, 9, 7, 0) 80%),
      linear-gradient(0.07deg, rgba(91, 91, 91, 0.2) 0.03%, rgba(0, 0, 0, 0) 95.96%)`,
      '--border': 'linear-gradient(327.26deg, #2D2D2D 31.78%, #2D2D2D 63.2%, #999999 93.99%)',
      '--shadow': '0px 4px 85.3px rgba(91, 91, 91, 0.1)'
    }
  },
  bronze: {
    name: 'Bronze Sponsor',
    icon: '/assets/bronze-sponsor.webp',
    styles: {
      '--order': 4,
      '--background': `radial-gradient(95.25% 166.54% at 98.39% 2.85%, #221B16 8%, rgba(9, 9, 7, 0) 80%),
      linear-gradient(0.07deg, rgba(54, 28, 19, 0.2) 0.03%, rgba(0, 0, 0, 0) 95.96%)`,
      '--border': 'linear-gradient(327.26deg, #2D2D2D 31.78%, #2A1701 63.2%, #60301F 93.99%)',
      '--shadow': '0px 4px 85.3px rgba(54, 28, 19, 0.1)'
    }
  }
};
