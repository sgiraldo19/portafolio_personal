import React from 'react'
import { Link } from 'react-router-dom'

import img from '../../assets/img/foto.jpg'

import './home.css'

export default function Home() {
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className='hola' >¡Hola!</span><br />
                        <span className='nombre'>Soy Sebastián Giraldo</span><br />
                        <div className='wrapper'>
                            <span>Front-end Dev</span>
                            <span>Game Developer</span>
                            <span>UX/UI Designer</span><br />
                        </div>
                    </h1>
                    <h2>
                        Front-end Dev / UX/UI Designer / Game Dev / Ing. Multimedia
                    </h2>
                    <Link to="/contact" className="flat-button">
                        CONTACTO
                    </Link>
                </div>                
                <div className='pic'>
                <div className='box1'></div>
                    <img src={img} alt='Mi persona'></img>
                </div>
                <div className='box2'></div>
            </div>
        </>
    )
}