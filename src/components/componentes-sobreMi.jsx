import React from "react";
import '../styles/componentes-sobreMi.css'

function ComponentesSobreMi(titulo, descripcion) {
  return (
    <div id="con" className="contenedor-componente">
      <h5 className="titulo text-center">{titulo}</h5>
      <p className="descripcion">{descripcion}</p>
    </div>
  );
}

export default ComponentesSobreMi;