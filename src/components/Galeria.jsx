import React from 'react';
import { Fade } from 'react-awesome-reveal';


import foto1 from '../assets/galeria-01.jpg';
import foto2 from '../assets/galeria-02.jpg';
import foto3 from '../assets/galeria-03.jpg';
import foto4 from '../assets/galeria-04.jpg';
import foto5 from '../assets/galeria-05.jpg';
import foto6 from '../assets/galeria-06.jpg';

const imagens = [
  { id: 1, url: foto1, alt: 'Foto do salão 1' },
  { id: 2, url: foto2, alt: 'Foto do salão 2' },
  { id: 3, url: foto3, alt: 'Foto do salão 3' },
  { id: 4, url: foto4, alt: 'Foto do salão 4' },
  { id: 5, url: foto5, alt: 'Foto do salão 5' },
  { id: 6, url: foto6, alt: 'Foto do salão 6' },
];


function Galeria() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        
        <Fade direction="down" triggerOnce>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Galeria de Fotos
          </h2>
        </Fade>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          
          {imagens.map((imagem, index) => (
            
            <Fade 
              key={imagem.id}
              direction="up" 
              delay={index * 100}
              duration={800}
              triggerOnce
            >
              <div className="shadow-lg rounded-lg overflow-hidden">
                <img 
                  src={imagem.url} 
                  alt={imagem.alt}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </Fade>
          ))}
          
        </div>
        
      </div>
    </section>
  );
}

export default Galeria;