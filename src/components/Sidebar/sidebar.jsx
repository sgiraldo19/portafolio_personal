import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
    faHome, faUser,
    faEnvelope, faGamepad,
    faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom'

import './sidebar.css'

const Sidebar = () => {
    return (
        <>
            <div className="nav-bar">
                <nav>
                    <NavLink activeclassname="active" className="pad-link" to="/gamification">
                        <FontAwesomeIcon icon={faGamepad} color="#4d4d4e" />
                    </NavLink>
                    <NavLink activeclassname="active" className="home-link" to="/">
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                    </NavLink>
                    <NavLink activeclassname="active" className="about-link" to="/about">
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                    </NavLink>
                    <NavLink activeclassname="active" className="skills-link" to="/skills">
                        <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
                    </NavLink>

                    <NavLink activeclassname="active" className="contact-link" to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
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
        </>
    )
}

export default Sidebar
