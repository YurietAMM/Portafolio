import './App.css';
import Header from './components/header.jsx';
import Presentacion from './components/presentacion.jsx';
import SobreMi from './components/sobreMi.jsx';
import Contactame from './components/contactame.jsx';
import Espacio from './components/espacio';
import Experiencia from './components/proyectos';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Espacio></Espacio>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <Presentacion></Presentacion>
        <SobreMi></SobreMi>
        <Experiencia></Experiencia>
        <Contactame></Contactame>
      </div>
    </div>
  );
}

export default App;
