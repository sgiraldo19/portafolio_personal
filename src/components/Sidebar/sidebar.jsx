import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faGamepad,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

import Logro from '../Gamification/Achievement/logro.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './sidebar.css';
import { NAVIGATION_ITEMS, ROUTES } from '../../constants/routes';
import { SOCIAL_LINKS } from '../../constants/socialLinks';

// Mapeo de iconos para evitar lógica condicional
const ICON_MAP = {
  faGamepad,
  faHome,
  faUser,
  faScrewdriverWrench,
  faEnvelope,
  faLinkedin,
  faGithub,
};

const Sidebar = () => {
  // REFACTOR: Usar estado único en lugar de múltiples useState (S.O.L.I.D - DRY)
  const [activePage, setActivePage] = useState(null);

  return (
    <>
      <div className="nav-bar">
        <nav>
          {/* REFACTOR: Mapear items de navegación desde constante (S.O.L.I.D - DRY) */}
          {NAVIGATION_ITEMS.map((item) => {
            // Mantener clases específicas para posicionamiento/etiquetas CSS
            const classForItem = `nav-link ${
              item.key === 'LogroGame'
                ? 'pad-link'
                : item.key === 'LogroHome'
                ? 'home-link'
                : item.key === 'LogroAbout'
                ? 'about-link'
                : item.key === 'LogroSkills'
                ? 'skills-link'
                : item.key === 'LogroContact'
                ? 'contact-link'
                : ''
            }`;

            return (
              <NavLink
                key={item.key}
                className={classForItem}
                to={item.path}
                onClick={() => setActivePage(item.key)}
              >
                <FontAwesomeIcon icon={ICON_MAP[item.icon]} color="#4d4d4e" />
                <Logro page={activePage === item.key ? item.key : null} />
              </NavLink>
            );
          })}
        </nav>

        <ul>
          {/* REFACTOR: Mapear enlaces sociales desde constante (S.O.L.I.D - DRY) */}
          {SOCIAL_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.name}
              >
                <FontAwesomeIcon icon={ICON_MAP[link.icon]} color="#b9b9b9" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </>
  );
};

export default Sidebar;
