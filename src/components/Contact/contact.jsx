import React from 'react';

import { CONTACT_INFO } from '../../constants/socialLinks';

import './contact.css';

// REFACTOR: Centralizar datos de contacto en constantes (S.O.L.I.D - DRY)
const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone-contact">
          <h1>Punto de Control</h1>
          <p>
            Conectemos para explorar colaboraciones, proyectos o crecimiento
            profesional y generar conexiones provechosas para nutrir el
            desarrollo de videojuegos y FrontEnd
          </p>
          <div className="text-zone-data">
            <label>Correo: </label>
            <p>{CONTACT_INFO.email}</p>
            <label>Número: </label>
            <p>{CONTACT_INFO.phone}</p>
          </div>
        </div>
        <div className="box"></div>
      </div>
    </>
  );
};

export default Contact;