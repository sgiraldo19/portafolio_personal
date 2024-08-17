import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCss3, faGitAlt,
    faHtml5, faJsSquare,
    faReact, faPython, faUnity
} from '@fortawesome/free-brands-svg-icons'

import Loader from 'react-loaders'

import './about.css'

export default function About() {
    return (
        <>
            <div className="container about-page">
                <div className="text-zone-about">
                    <h1>
                        El principio de la historia
                    </h1>
                    <p>
                        Soy Ingeniero Multimedia, del Valle del Cauca Colombia.
                        Resido en Guadalajara de Buga, a una hora de Cali.
                    </p>
                    <p>
                        Estoy especializado en frontend y desarrollo de videojuegos y tengo 
                        pasión por narrar historias a través de las mecánicas y
                        crear experiencias significativas para el usuario. 
                        Soy competente en JavaScript, React, y Unity, con conocimientos en SQL y
                        bases de datos no relacionales.
                    </p>
                    <p>
                        Además soy hábil en metodologías ágiles e 
                        intento combinar mi sólida formación académica con mi creatividad,
                        con el objetivo de resolver problemas e impulsar transformaciones digitales.
                    </p>
                    <p>
                        Me encantan las hamburguesas, los videojuegos y sus competiciones.
                    </p>
                    <p>
                        Soy alguien simple, que aprecia de las cosas pequeñas y 
                        disfruta de cacharrear para lograr sus objetivos.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faUnity} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>

            <Loader type="pacman" />
        </>
    )
}