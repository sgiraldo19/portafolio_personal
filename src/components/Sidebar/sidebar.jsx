import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
    faHome, faUser,
    faEnvelope, faGamepad,
    faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom'

import Logro from '../Gamification/Achievement/logro.jsx'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './sidebar.css'

const Sidebar = () => {

    const [game, setGame] = useState()
    const [home, setHome] = useState()
    const [about, setAbout] = useState()
    const [skills, setSkills] = useState()
    const [contact, setContact] = useState()

    return (
        <>
            <div className="nav-bar">
                <nav>
                    <NavLink activeclassname="active" className="pad-link" to="/gamification"
                        onClick={() => setGame("Game")}>
                        <FontAwesomeIcon icon={faGamepad} color="#4d4d4e" />
                        <Logro page={game} />
                    </NavLink>
                    <NavLink activeclassname="active" className="home-link" to="/"
                        onClick={() => setHome("Home")}>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                        <Logro page={home} />
                    </NavLink>
                    <NavLink activeclassname="active" className="about-link" to="/about"
                        onClick={() => setAbout("About")}>
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                        <Logro page={about} />
                    </NavLink>
                    <NavLink activeclassname="active" className="skills-link" to="/skills"
                        onClick={() => setSkills("Skills")}>
                        <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
                        <Logro page={skills} />
                    </NavLink>
                    <NavLink activeclassname="active" className="contact-link" to="/contact"
                        onClick={() => setContact("Contact")}>
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                        <Logro page={contact} />
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/s-giraldog/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/sgiraldo19"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
                        </a>
                    </li>
                </ul>
            </div>
            <ToastContainer />
        </>
    )
}

export default Sidebar
