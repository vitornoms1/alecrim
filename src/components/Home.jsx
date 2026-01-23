import React from 'react';
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center bg-gray-100 px-6">

      <Fade 
        direction="down" 
        cascade 
        damping={0.2} 
        triggerOnce 
        className="w-full flex flex-col items-center" 
      >

        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 text-center">
          Alecrim Casa de Festas
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-md">
          O espaço perfeito para seus sonhos se tornarem realidade.
        </p>

        <a 
          href="#contato"
          className="py-3 px-8 bg-alecrim-yellow text-gray-900 font-bold rounded-lg shadow-md hover:bg-alecrim-yellow-dark transition-all transform hover:scale-105"
        >
          Solicitar um Orçamento
        </a>
        
      </Fade>

      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center text-gray-400 px-4">
        <span className="text-[13px] md:text-sm mb-2 font-medium text-center leading-tight">
          Role para baixo para saber mais
        </span>
        <div className="animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 md:h-6 md:w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7-7-7" 
            />
          </svg>
        </div>
      </div>

    </section>
  );
}

export default Home;