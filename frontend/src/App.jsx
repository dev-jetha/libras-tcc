import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

function App() {
  const [pagina,setPagina] = useState("inicio")
  return (
    <>
      <Header titulo="TCC de libras"/>
      <Sidebar pagina={pagina} setPagina={setPagina} />
      <Home pagina={pagina}/>
    </>
  )
}
export default App