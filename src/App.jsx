import './App.css'
import Navbar from './components/Navbar' // Importação nova
import Home from './components/Home'
import NossosServicos from './components/NossosServicos'
import Galeria from './components/Galeria'
import Planos from './components/Planos'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Posicionada no topo de tudo */}
      <Home />
      <NossosServicos />
      <Galeria />
      <Planos />
      <Contato />
      <Footer />

    </div>
  )
}

export default App