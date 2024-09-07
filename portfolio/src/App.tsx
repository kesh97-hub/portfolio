import React from 'react';
import './App.css';

import FloatingNavbar from './Components/FloatingNavBar/FloatingNavbar';
import AboutMe from './Components/AboutMe/AboutMe';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Background from './Components/Background/Background';


function App() {
    return (
        <>
            <Background />
            {/* <FloatingNavbar/> */}
            <AboutMe/>
            <Experience/>
            {/* <Projects/>
            <Skills/> */}
            {/* <Contact/> */}
            <footer className='footerText'>Developed using React &middot; MaterialUI &middot; Framer Motion &middot; CSS &middot; ❤️️</footer>
        </>
    );
}

export default App;
