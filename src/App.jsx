import { useState, useEffect } from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoFechas from "./components/ListadoFechas"



function App() {

  const [eventos, setEventos] = useState([]);
  const [evento, setEvento] = useState({});

  useEffect(() => { 
    const obtenerLS = () => {
      const eventosLS = JSON.parse(localStorage.getItem('eventos')) ?? [];
      setEventos(eventosLS)
    }
    obtenerLS();
  }, []);


  useEffect(() => {
    localStorage.setItem('eventos', JSON.stringify( eventos ));

  }, [eventos])

  const eliminarEvento = id => {
    const eventosActualizados = eventos.filter( evento => evento.id !== id );
    setEventos(eventosActualizados)
  }
  
  return (
    <div className="container mx-auto mt-20">
      <Header/>

      <div className="mt-12 md:flex">
        <Formulario
          eventos={eventos}
          setEventos={setEventos}
          evento={evento}
          setEvento={setEvento}
          
        />
        <ListadoFechas 
          eventos={eventos}
          setEvento={setEvento}
          eliminarEvento= {eliminarEvento}
        />
      </div>

    </div>
  )
}

export default App
