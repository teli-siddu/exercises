import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  
const [showMenu,setShowMenu]=useState(false)

 

  return (
    <div className='header-container'>
      <div className='header-nav-menu'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <button class="navbar-toggler" type="button" data-toggle="collapse" onClick={()=>{setShowMenu(!showMenu)}} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className={` ${!showMenu&&'collapse'} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to='/calculator' className='nav-link'>Calculator</Link>
              </li>
              <li className="nav-item">
                <Link to='/search-filter' className='nav-link'>Search Filter</Link>
              </li>
              <li className="nav-item">
                <Link to='/login' className='nav-link'>Login</Link>

              </li>
              <li className="nav-item">
                <Link to='/menu-tree' className='nav-link'>Menu Tree</Link>
              </li>
              <li className="nav-item">
                <Link to='/drag-drop' className='nav-link'>Drag & Drop</Link>
              </li>
              <li className="nav-item">
                <Link to='/react-redux' className='nav-link'>React Redux</Link>
              </li>
              <li className="nav-item">
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