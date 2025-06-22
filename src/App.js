import { Route, Routes } from 'react-router-dom';
import './App.css';

import Background from './components/Inicio/background'
import Home from './components/Home/home'
import Gamification from './components/Gamification/gamification';
import About from './components/AboutMe/about'
import Contact from './components/Contact/contact'
import Skills from './components/Skills/skills'
import SoundBar from './components/Sound/soundBar'
import ChatBot from './components/ChatBot/chat';

function App() {
  return (
    <>
      <SoundBar />
      <ChatBot/>
      <Routes>
        <Route path="/" element={<Background />}>
          <Route path="/gamification" element={<Gamification />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
