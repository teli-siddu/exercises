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
               
        </div>
        <div className='nav-item'>
                <Link to='/nav-menu' className='nav-link'>Nav Menu</Link>
              
        </div>
    </div>
    </div>
  )
}

export default Header