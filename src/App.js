import { Route, Routes } from 'react-router-dom';
import './App.css';

import Background from './components/Inicio/background';
import Home from './components/Home/home';
import Gamification from './components/Gamification/gamification';
import About from './components/AboutMe/about';
import Contact from './components/Contact/contact';
import Skills from './components/Skills/skills';
import SoundBar from './components/Sound/soundBar';
import ChatBot from './components/ChatBot/chat';
import { ROUTES } from './constants/routes';

// REFACTOR: Mejorada la estructura de rutas usando constantes (S.O.L.I.D - DRY principle)
function App() {
  return (
    <>
      <SoundBar />
      <ChatBot />
      <Routes>
        <Route path={ROUTES.HOME} element={<Background />}>
          <Route path={ROUTES.GAMIFICATION} element={<Gamification />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path={ROUTES.SKILLS} element={<Skills />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
