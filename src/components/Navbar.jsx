import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logoremovebg.png';

function Navbar({ showLogo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-md border-b-2 border-alecrim-yellow">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Espaço da Logo */}
        <div className="flex items-center w-[150px] min-h-[48px] md:min-h-[64px]">
          {showLogo && (
            <motion.a 
              href="#home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img src={logoImg} alt="Alecrim Casa de Festas" className="navbar-logo-target h-12 md:h-16 w-auto hover:scale-105 transition-transform"/>
            </motion.a>
          )}
        </div>

        {/* Lado Direito: Links (Desktop) */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="text-gray-700 hover:text-alecrim-yellow-dark font-semibold transition-colors">Home</a>
          <a href="#servicos" className="text-gray-700 hover:text-alecrim-yellow-dark font-semibold transition-colors">Serviços</a>
          <a href="#galeria" className="text-gray-700 hover:text-alecrim-yellow-dark font-semibold transition-colors">Galeria</a>
          <a href="#planos" className="text-gray-700 hover:text-alecrim-yellow-dark font-semibold transition-colors">Planos</a>
          <a 
            href="#contato" 
            className="bg-alecrim-yellow text-gray-900 px-5 py-2 rounded-full font-bold hover:bg-alecrim-yellow-dark transition-all shadow-sm"
          >
            Contato
          </a>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile Aberto */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col space-y-4 shadow-lg">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium">Home</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium">Serviços</a>
          <a href="#galeria" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium">Galeria</a>
          <a href="#planos" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium">Planos</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="text-alecrim-yellow-dark font-bold">Contato</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;