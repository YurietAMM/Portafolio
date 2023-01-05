import React from "react";
import '../styles/presentacion.css'

function Presentacion() {
  return (
    <div id="quienSoy" className="contenedor-presentacion container-fluid">
      <div className="contenedor-imagen">
        <img src={require('../images/foto-perfil.jpg')} alt="Foto de Yuriet Mosquera" className="foto-personal" />
      </div>
      <div className="contenedor-texto">
        <h1 className="saludo text-center">Hola,</h1>
        <h2 className="saludo text-center">mi nombre es Yuriet Alejandro Mosquera Muñoz</h2>
        <h3 className="saludo text-center">y soy un Desarrollador Web</h3>
      </div>
      <div className="capacidades">
        <img src={require('../images/Capacidades.png')} alt="Cosas que se hacer" className="logos-capacidades" />
      </div>
    </div>
  );
}

export default Presentacion;