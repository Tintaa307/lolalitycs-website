import React from 'react'
import './nav.css'
import Logo from '../../assets/img/logo.webp'
import champions from 'lol-champions'

const Nav = () => {
  return (
    <header className="header-nav">
      <nav className="container-nav">
        <div className="container-logo">
          <img src={Logo} alt="" />
          <h1 className="title"><span className="color-title">Moba</span>litycs</h1>
          <h2>Analitycs for Competitive Gamers</h2>
        </div>
        <div className="container-busqueda">
          <input type="search" className="inputBusqueda" id="inputSearch" />
          <i class="ri-search-eye-line"></i>
        </div>
        <div className="container-close">
          <i class="ri-door-open-line"></i>
        </div>
        <div className="container-bars">
          <i class="ri-menu-line"></i>
        </div>
        <div className="container-settings">
          <i class="ri-settings-2-line"></i>
        </div>
      </nav>
    </header>
  )
}

export default Nav
