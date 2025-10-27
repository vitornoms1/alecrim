import React from 'react';
import { Fade } from "react-awesome-reveal";

function Home() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100 px-6">

      <Fade 
        direction="down" 
        cascade 
        damping={0.2} 
        triggerOnce 
        className="w-full flex flex-col items-center" 
      >

        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
          Alecrim Casa de Festas
        </h1>

        <p className="text-xl text-gray-600 mb-8 text-center">
          O espaço perfeito para seus sonhos se tornarem realidade.
        </p>

        <a 
          href="#planos"
          className="py-3 px-6 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
        >
          Solicitar um Orçamento
        </a>
        
      </Fade>
    </section>
  );
}

export default Home;