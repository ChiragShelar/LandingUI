import React, { useState} from 'react'
import './Navbar.css'
import logo from '../../assets/nav-logo.png'

const navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li>Home</li>
            <li>Programs</li>
            <li>Courses</li>
            <li>Admissions</li>
            <li>Testimonial</li>
        </ul>
        <ul className='auth-links'>
            <li><button className='login-btn'>Login</button></li>
            <li><button className='registration-btn'>Registration</button></li>
        </ul>
        <div className="burger-menu" onClick={toggleMenu}>
        ☰
        </div>
    </nav>
  )
}

export default navbar