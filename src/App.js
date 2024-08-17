import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';

import Background from './components/Inicio/background'
import Home from './components/Home/home'
import Gamification from './components/Gamification/gamification';
import About from './components/AboutMe/about'
import Contact from './components/Contact/contact'
import Skills from './components/Skills/skills'
import SoundBar from './components/Sound/soundBar'

// const Inicio = lazy(() => import('./components/Inicio/inicio'));
// const Home = lazy(() => import('./components/Inicio/inicio'));
// const Gamification = lazy(() => import('./components/Inicio/inicio'));
// const About = lazy(() => import('./components/Inicio/inicio'));
// const Contact = lazy(() => import('./components/Inicio/inicio'));
// const Skills = lazy(() => import('./components/Inicio/inicio'));

function App() {
  return (
    <>
      {/* <Suspense fallback={<Loader />}> */}
      <SoundBar />
      <Routes>
        <Route path="/" element={<Background />}>
          <Route path="/gamification" element={<Gamification />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default App;
