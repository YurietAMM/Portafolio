import React from "react";
import '../styles/contactame.css'

function Contactame() {
  return (
    <div id="contactame">
        <h2 className="text-start">Contactame</h2>
        <a href="https://www.linkedin.com/in/yuriet-mosquera/" className="linkedin">
          <i class="fa-brands fa-linkedin fa-4x"></i>
        </a>
        <a href="mailto:yurietalejandromosquera@gmail.com" className="correo">
          <i class="fa-regular fa-envelope fa-4x"></i>
        </a>
    </div>
  );  
}

export default Contactame;