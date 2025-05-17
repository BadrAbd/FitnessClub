import React from 'react'
import './header.css'
import logo from '../../../assets/logo.png'
const header = () => {
  return (
    <div className="header">
        <img src={logo} alt="" className="logo" />

        <ul className="header-menu">
            <li>Home</li>
            <li>Programs</li>
            <li>Why Us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default header