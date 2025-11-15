import React from 'react';

import { ACHIEVEMENTS_DATA, ACHIEVEMENT_KEYS } from '../../constants/achievements';
import AchievementCard from './Achievement/logroCard';
import AchievementService from '../../services/AchievementService';

import './gamification.css';

// REFACTOR: Centralizar lógica en servicio (S.O.L.I.D - SRP)
const resetAchievements = () => {
  AchievementService.resetAll();
  window.location.reload();
};

const Gamification = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone game">
          <h1>Hasta aquí va el Early Access.</h1>
          <button onClick={resetAchievements} className="reset-btn">
            Reiniciar logros
          </button>

          <p>
            Sigueme en redes sociales para enterarte cuando esté disponible el
            resto de la experiencia.
          </p>
          <h2>
            Esta página está en proceso de ser gamificada. En esta sección
            podrás ver el avance que realices navegando por el CV Interactivo.
          </h2>
        </div>
        <div className="gamification-container">
          <div className="logros-wrapper">
            <h2>Logros Desbloqueados</h2>
            <div className="achievement-grid">
              {/* REFACTOR: Usar constante de logros (S.O.L.I.D - DRY) */}
              {ACHIEVEMENTS_DATA.map((ach) => (
                <AchievementCard
                  key={ach.id}
                  achievement={ach}
                  unlocked={AchievementService.isUnlocked(ach.id)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="box2"></div>
      </div>
    </>
  );
};

export default Gamification;