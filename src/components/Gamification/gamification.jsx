import React from 'react'

import achievements from './Achievement/infoLogros'
import AchievementCard from './Achievement/logroCard'

import './gamification.css'

const resetAchievements = () => {
    const achievementKeys = [
        'LogroGame', 'LogroHome', 'LogroAbout',
        'LogroSkills', 'LogroContact', 'LogroMusic'
    ];
    achievementKeys.forEach(key => localStorage.removeItem(key));
    window.location.reload();
};

export default function Gamification() {
    return (
        <>
            <div className="container home-page">
                <div className="text-zone game">
                    <h1>
                        Hasta aquí va el Early Access.
                    </h1>
                    <button onClick={resetAchievements}
                        className="reset-btn">
                        Reiniciar logros
                    </button>

                    <p>
                        Sigueme en redes sociales
                        para enterarte cuando esté 
                        disponible el resto de la experiencia.
                    </p>
                    <h2>
                        Esta página está en proceso de ser gamificada. 
                        En esta sección podrás ver el avance que 
                        realices navegando por el CV Interactivo.
                    </h2>
                </div>
                <div className="gamification-container">
                    <div className="logros-wrapper">
                        <h2>Logros Desbloqueados</h2>
                        <div className="achievement-grid">
                            {achievements.map((ach) => {
                                const unlocked = localStorage.getItem(ach.id) !== null;
                                return (
                                    <AchievementCard
                                        key={ach.id}
                                        achievement={ach}
                                        unlocked={unlocked}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/*<div className='loader'>
                    <Loader />
                </div>*/}
                <div className='box2'>
                </div>
            </div>
        </>
    )
}