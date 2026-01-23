import { useState } from 'react';
import LogoAnimation from './components/LogoAnimation';
import Navbar from './components/Navbar'
import Home from './components/Home'
import NossosServicos from './components/NossosServicos'
import Galeria from './components/Galeria'
import Planos from './components/Planos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [animationFinished, setAnimationFinished] = useState(false);

  return (
    <div className="App">
      {/* A animação avisa o App quando termina o movimento */}
      {!animationFinished && (
        <LogoAnimation onComplete={() => setAnimationFinished(true)} />
      )}
      
      {/* A Navbar só mostra a logo dela quando a animação do centro sumir */}
      <Navbar showLogo={animationFinished} />
      
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