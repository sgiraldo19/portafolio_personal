// REFACTOR: Centralizar rutas - S.O.L.I.D Single Responsibility
export const ROUTES = {
  HOME: '/',
  GAMIFICATION: '/gamification',
  ABOUT: '/about',
  SKILLS: '/skills',
  CONTACT: '/contact',
};

export const NAVIGATION_ITEMS = [
  // keys updated to match achievement IDs so services can map directly
  { path: ROUTES.GAMIFICATION, key: 'LogroGame', icon: 'faGamepad', label: 'Gamification' },
  { path: ROUTES.HOME, key: 'LogroHome', icon: 'faHome', label: 'Home' },
  { path: ROUTES.ABOUT, key: 'LogroAbout', icon: 'faUser', label: 'About' },
  { path: ROUTES.SKILLS, key: 'LogroSkills', icon: 'faScrewdriverWrench', label: 'Skills' },
  { path: ROUTES.CONTACT, key: 'LogroContact', icon: 'faEnvelope', label: 'Contact' },
];
