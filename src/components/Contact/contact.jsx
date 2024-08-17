import React from 'react'

import './contact.css'

export default function Contact() {
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone-contact">
                    <h1>
                        Punto de Control
                    </h1>
                    <p>
                        Conectemos para explorar colaboraciones,
                        proyectos o crecimiento profesional y generar conexiones provechosas
                        para nutrir el desarrollo de videojuegos y FrontEnd
                    </p>
                    <div className="text-zone-data">
                        <label>Correo: </label>
                        <p>
                            sebastian.giraldo.garcia19@gmail.com
                        </p>
                        <label>Número: </label>
                        <p>
                            +57 3166964330
                        </p>
                    </div>
                </div>
                <div className='box'></div>
            </div>
        </>
    )
}