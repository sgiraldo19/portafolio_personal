import React from 'react'
import SkillCircle from '../SkillCircle/skillCircle'

import './skills.css'

export default function Skills() {

    return (
        <>
            <div className="container skills-page">
                <div className="text-zone-skills">
                    <h1>
                        Equipamiento y Destrezas
                    </h1>
                    <p>
                        Mi enfoque es crear experiencias digitales que no solo cumplan con los requisitos técnicos,
                        sino que también deleiten a los usuarios.
                        Con una combinación de habilidades técnicas avanzadas y destrezas interpersonales,
                        un dominio de tecnologías como ReactJS y Unity, y un enfoque en la resolución creativa de problemas,
                        soy capaz de desarrollar soluciones innovadoras que combinan funcionalidad y estética.
                    </p>
                    <p>
                        Desde la creación de interfaces interactivas hasta la integración de sistemas complejos,
                        mis habilidades están orientadas a transformar ideas en realidades tangibles.
                    </p>
                </div>

                <div className="tagcloud-wrap">
                    <SkillCircle />
                </div>
            </div>
        </>
    )
}