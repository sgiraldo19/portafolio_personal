import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar/sidebar';

import './background.css';

// REFACTOR: Componente de layout sin lógica (S.O.L.I.D - SRP)
const Background = () => {
  // REFACTOR: Extraer lista a constante si es necesario (patrón de 12 elementos decorativos)
  const DECORATIVE_BOXES = Array.from({ length: 12 }, (_, i) => i);

  return (
    <>
      <Sidebar />
      <div className="page">
        <span className="top-tag">Portafolio personal</span>
        <Outlet />
        {/* REFACTOR: Mapear elementos decorativos en lugar de hardcodear (S.O.L.I.D - DRY) */}
        <ul className="cuadros">
          {DECORATIVE_BOXES.map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Background;
