import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <nav className='navbar'>
        <img src='https://i.ibb.co/MRsVkRR/ar-high-resolution-logo-transparent.png' className='logo' alt="logo"/>
        <ul className='page-list'>
            <li className='nav-item'><NavLink className='item' to="/">Home</NavLink></li>
            <li className='nav-item'><NavLink className='item' to="/recipes">Recipes</NavLink></li>
        </ul>  
    </nav>
  )
}

export default Header
