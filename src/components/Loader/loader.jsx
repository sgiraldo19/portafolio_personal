import React from 'react';

import './loader.css';

// REFACTOR: Simplificar componente removiendo código comentado (S.O.L.I.D - limpieza)
// El loader siempre visible es la implementación deseada
const Loader = () => {
  return (
    <>
      <div className="loader">
        <div className="circles">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </div>
        <div className="pacman">
          <span className="top"></span>
          <span className="bottom"></span>
          <span className="left"></span>
        </div>
      </div>
    </>
  );
};

export default Loader;