// REFACTOR: Extraer datos de logros a constante centralizada
export const ACHIEVEMENTS_DATA = [
  {
    id: 'LogroGame',
    name: '¡Gamificación!',
    description: "Let's Rock! (Entraste a Game)",
    icon: '/badges/game.png',
  },
  {
    id: 'LogroHome',
    name: 'Inicio desbloqueado',
    description: '¡El incio del viaje! (Entraste a Home)',
    icon: '/badges/home.png',
  },
  {
    id: 'LogroAbout',
    name: 'Meet the creator',
    description:
      'Todo juego tiene una historia… Pero sólo uno es una leyenda. (Entraste a About)',
    icon: '/badges/about.png',
  },
  {
    id: 'LogroSkills',
    name: 'Herramientas de confianza',
    description: '¡Es peligroso ir por allí solo! Toma ésto. (Entraste a Skills)',
    icon: '/badges/skills.png',
  },
  {
    id: 'LogroContact',
    name: 'Conexión',
    description:
      'Sistemas de comuniacion listos. Enlace esablecido. (Entraste a Contact).',
    icon: '/badges/contact.png',
  },
];

export const ACHIEVEMENT_KEYS = ACHIEVEMENTS_DATA.map((ach) => ach.id);

export const TOAST_CONFIG = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'dark',
};
