import React from 'react'

import Loader from '../Loader/loader'

import './gamification.css'

export default function Gamification() {
    return (
        <>
            <div className="container home-page">
                <div className="text-zone game">
                    <h1>
                        Hasta aquí va el Early Access.
                    </h1>
                    <p>
                        Siguenos en redes sociales
                        para enterarte cuando esté disponible el resto de la experiencia.
                    </p>
                    <h2>
                        Esta página está en proceso de ser gamificada. En esta sección 
                        podrás ver el avance que realices navegando por el CV Interactivo. 
                    </h2>
                </div>
                <div className='loader'>
                    <Loader />
                </div>
                <div className='box2'></div>
            </div>
        </>
    )
}