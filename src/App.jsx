import Form from './components/Form'
import Header from "./components/Header"
import PacientsList from './components/PacientsList'
import {useState, useEffect } from 'react'

function App() {
  
  const[pacients, setPacients] = useState(JSON.parse(localStorage.getItem('pacients')) ?? [])

  const[pacient, setPacient] = useState({})

  const deletePacient = (id) => {
    const updatedPacients = pacients.filter( p => p.id !== id)

    setPacients(updatedPacients)
  }

  useEffect(() => {
    localStorage.setItem('pacients', JSON.stringify(pacients))
  }, [pacients])

  return (
    <div className='conteiner mt-5 mx-10'>
      <Header/>
      <div className='mt-14 md:flex'>
        <Form 
        setPacients={setPacients}
        pacients = {pacients}
        pacient={pacient}
        setPacient={setPacient}/>
        <PacientsList 
        pacients={pacients}
        setPacient={setPacient}
        deletePacient={deletePacient}/>
      </div>
      
    </div>
  )
}

export default App
