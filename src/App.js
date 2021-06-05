import {useState} from 'react'
import './App.sass';

function App() {
  
  const notas= [
    {
      nombre: 'Do',
      link : require('./sounds/do.wav'),
      sostenido: true
    },
    {
      nombre: 'Re',
      link : require('./sounds/re.wav'),
      sostenido: true
    },
    {
      nombre: 'Mi',
      link : require('./sounds/mi.wav'),
    },
    {
      nombre: 'Fa',
      link : require('./sounds/fa.wav'),
      sostenido: true
    },
    {
      nombre: 'Sol',
      link : require('./sounds/sol.wav'),
      sostenido: true
    },
    {
      nombre: 'La',
      link : require('./sounds/la.wav'),
      sostenido: true
    },
    {
      nombre: 'Si',
      link : require('./sounds/si.wav'),
    },
  ]

  const [notaActual, setNotaActual] = useState('');
  
  const handlerClickNote = (e) =>{
    const sonido = new Audio(e.link.default);
    sonido.play();
    setNotaActual(e.nombre)
  }

  setTimeout( () =>{
    setNotaActual('')
  }, 1500)

  return (
    <div className="App">
      <div className="titulo">
        <h1>Piano con React</h1>
        <h3 className="esta-sonando">{notaActual}</h3>
      </div>
      <div className="container">
        {notas.map(nota => (
        <div 
          key={Math.random()*1000}
          className={`nota ${notaActual === nota.nombre && 'sonando'}`}
          onClick={() => handlerClickNote(nota)}
        >
          {nota.sostenido && <div className="negra"></div>}
        </div>))}
      </div>
    </div>    
  );
}

export default App;
