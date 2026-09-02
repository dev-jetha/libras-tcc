import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Header titulo="TCC de libras"/>
      <Sidebar />
      <Home />
    </>
  )
}

export default App