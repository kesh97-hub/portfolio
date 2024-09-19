import React from 'react';
import './App.css';

import FloatingNavbar from './Components/FloatingNavBar/FloatingNavbar';
import Home from './Components/Home/Home';
import Experiences from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Background from './Components/Background/Background';
import Certifications from './Components/Certifications/Certifications';
import AboutMe from './Components/AboutMe/AboutMe';


function App() {
    return (
        <>
            <Background />
            {/* <FloatingNavbar/> */}
            <Home/>
            <AboutMe/>
            <Skills/>
            <Experiences/>
            <Projects/>
            <Certifications/>
            <footer className='footerText'>Built using React &middot; MUI &middot; Framer Motion &middot; CSS &middot; ❤️️</footer>
        </>
    );
}

export default App;
