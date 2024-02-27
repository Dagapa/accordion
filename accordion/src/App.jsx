import './App.css';
import fondoImagen from '../src/assets/background-pattern-desktop.svg';
import { Accordion } from './components/accordion/accordion';

function App() {

  return (
    <div className='app-container'>
      <div className='recuadro-principal'>
        <img src={fondoImagen} className="logo" alt="Vite logo" />
        <div className='accordion-container'>
          <Accordion />
        </div>
      </div>
    </div>
  )
}

export default App
