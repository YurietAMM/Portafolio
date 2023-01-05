import React from "react";
import '../styles/header.css'

function Header() {
return (
  <nav id="navbar" className="navbar navbar-expand-md">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#quienSoy">
      <img src={require('../images/Logo-YAMM.png')} alt="Logo de YAMM" className="logo" />
    </a>
    <div className="collapse navbar-collapse" id="navbar-toggler">
      <ul className="navbar-nav d-flex justify-content-center">
        <li className="nav-item">
        <a className="nav-link link-info fs-6" href="#sobreMi">Sobre Mí</a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-info fs-6" href="#experiencia">Experiencia</a>
        </li>
        <li className="nav-item">
        <a className="nav-link link-info fs-6" href="#contactame">Contactame</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

);
}

export default Header;