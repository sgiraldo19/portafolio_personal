import React, { useEffect, useState } from 'react';

import './logroCard.css';

// REFACTOR: Componente presentacional puro (S.O.L.I.D - SRP)
// Solo responsable de mostrar un logro
const AchievementCard = ({ achievement, unlocked }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (unlocked) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [unlocked]);

  return (
    <div
      className={`achievement-card ${unlocked ? 'unlocked' : 'locked'} ${
        animate ? 'animate' : ''
      }`}
    >
      <img
        src={unlocked ? achievement.icon : '/badges/locked.png'}
        alt={unlocked ? achievement.name : 'Logro bloqueado'}
      />
      <div className="achievement-info">
        <h4 className="titulo-logro">
          {unlocked ? achievement.name : 'Logro bloqueado'}
        </h4>
        <p className="desc-logro">
          {unlocked ? achievement.description : '???...'}
        </p>
      </div>
    </div>
  );
};

export default AchievementCard;
