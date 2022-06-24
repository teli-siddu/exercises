import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header-container'>
    <div className='header-nav-menu'>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
      <Link to='/calculator' className='nav-link'>Calculator</Link>
      </li>
      <li class="nav-item">
      <Link to='/search-filter' className='nav-link'>Search Filter</Link>
      </li>
      <li class="nav-item">
      <Link to='/login' className='nav-link'>Login</Link>

      </li>
      <li class="nav-item">
      <Link to='/menu-tree' className='nav-link'>Menu Tree</Link>
      </li>
      <li class="nav-item">
      <Link to='/drag-drop' className='nav-link'>Drag & Drop</Link>
      </li>
      <li class="nav-item">
      <Link to='/react-redux' className='nav-link'>React Redux</Link>
      </li>
      <li class="nav-item">
      <a href="https://siddu-teli.vercel.app/" className='nav-link'>Nav Menu</a>
      </li>
      </ul>
    </div>
    </nav>
    
    </div>
    </div>
  )
}

export default Header