import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header-container'>
    <div className='header-nav-menu'>
        <div className='nav-item'>
                <Link to='/calculator' className='nav-link'>Calculator</Link>
                <Link to='/search-filter' className='nav-link'>Search Filter</Link>
                <Link to='/login' className='nav-link'>Login</Link>
                <Link to='/menu-tree' className='nav-link'>Menu Tree</Link>
                <Link to='/drag-drop' className='nav-link'>Drag & Drop</Link>
               
        </div>
        <div className='nav-item'>
                <a href="https://siddu-teli.vercel.app/" className='nav-link'>Nav Menu</a>
        </div>
    </div>
    </div>
  )
}

export default Header