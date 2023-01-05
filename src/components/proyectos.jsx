import React from "react";
import '../styles/proyectos.css'

function Experiencia() {
  return(
    <div id="experiencia" className="contenedor-proyectos">
      <div className="container-fluid text-center">
        <div className="row">
          <div className="unidad col-12 col-md-3">
            <i class="bi bi-laptop"></i>
            <p className="exp-titulo">Desarrollo Web</p>
            <p>Desarrollador web junior, con dominio basico de Angular, React y ASP.NET. 
              Dominio medio de HTML, CSS, JavaScript y C#, además de 
              dominio medio en cosas como el diseño resposivo y el consumo de APIs.</p>
            <div className="contenedor-bagges">
              <span id="bg-html" class="badge text-bg">HTML</span>
              <span class="badge text-bg-primary">CSS</span>
              <span id="bg-js" class="badge text-bg">JavaScript</span>
              <span id="bg-c" class="badge text-bg">C#</span>
              <span id="bg-bootstrap" class="badge text-bg">Bootstrap</span>
              <span class="badge text-bg-danger">Angular</span>
              <span id="bg-react" class="badge text-bg">React</span>
              <span id="bg-net" class="badge text-bg">.Net</span>
            </div>
          </div>
          <div className="unidad col-12 col-md-3">
            <i class="bi bi-book"></i>
            <p className="exp-titulo">Estudios</p>
            <p>Tecnólogo en sistemas de información de la Universidad del Valle. 
              Aprendiendo sobre el desarrollo web con .Net, Angular y React. 
              ¡Siempre en busca de aprender más y mejorar más cada día!.</p>
            <div className="contenedor-bagges">
              <span class="badge text-bg-dark">FreeCodeCamp</span>
              <span class="badge text-bg-danger">Universidad Del Valle</span>
              <span class="badge text-bg-success">Desarrollo Web</span>
            </div>
          </div>  
          <div className="unidad col-12 col-md-3">
            <i class="bi bi-hammer"></i>
            <p className="exp-titulo">Proyectos</p>
            <p>
              Desarrollador Frontend en el aplicativo web Dulce Manuela,
              ecommerce diseñado y construido para el emprendimiento
              Dulce Manuela Reposteria Artesanal.
            </p>
            <div className="contenedor-bagges">
              <span id="bg-dm" class="badge text-bg">Dulce Manuela</span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default Experiencia;