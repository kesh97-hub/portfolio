import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import './FloatingNavbar.css'

function FloatingNavbar() {
    return (
        <div className="navbar">
            <nav className="navbarContent">
                <a href="#About" className="navItem">About</a>
                <a href="#Experience" className="navItem">Experience</a>
                <a href="#Projects" className="navItem">Projects</a>
                <a href="#Skills" className="navItem">Skills</a>
                <a href="#Contact" className="navItem">Contact</a>
            </nav>
        </div>
    )
}

export default FloatingNavbar;