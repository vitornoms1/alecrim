import React, { useRef } from 'react';
import { Fade } from 'react-awesome-reveal';

// --- Importação de Imagens ---
import foto1 from '../assets/galeria-01.jpg';
import foto2 from '../assets/galeria-02.jpg';
import foto3 from '../assets/galeria-03.jpg';
import foto4 from '../assets/galeria-04.jpg';
import foto5 from '../assets/galeria-05.jpg';
import foto6 from '../assets/galeria-06.jpg';
import foto7 from '../assets/galeria-07.jpg';
import foto15Anos from '../assets/15anos.jpg';
import foto365Sorrisos from '../assets/365sorrisos.jpg';
import fotoFormatura from '../assets/formatura.jpg';
import fotoHulk from '../assets/hulk.jpg';

const imagens = [
  { id: 1, url: foto1, alt: 'Galeria 1' },
  { id: 2, url: foto2, alt: 'Galeria 2' },
  { id: 3, url: foto3, alt: 'Galeria 3' },
  { id: 4, url: foto4, alt: 'Galeria 4' },
  { id: 5, url: foto5, alt: 'Galeria 5' },
  { id: 6, url: foto6, alt: 'Galeria 6' },
  { id: 7, url: foto7, alt: 'Galeria 7' },
  { id: 8, url: foto15Anos, alt: '15 Anos' },
  { id: 9, url: foto365Sorrisos, alt: '365 Sorrisos' },
  { id: 10, url: fotoFormatura, alt: 'Formatura' },
  { id: 11, url: fotoHulk, alt: 'Festa Hulk' },
];

function Galeria() {
  const scrollRef = useRef(null);

  const scroll = (direcao) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth; 
      if (direcao === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 relative">
        
        <Fade direction="down" triggerOnce>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Nossa Galeria
          </h2>
        </Fade>

        <div className="relative group max-w-6xl mx-auto">
          {/* Seta Esquerda - hidden no mobile, block no desktop */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all focus:outline-none"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Container das Fotos */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {imagens.map((img) => (
              <div 
                key={img.id} 
                className="min-w-[90%] md:min-w-[calc(33.333%-11px)] snap-start shadow-md rounded-xl overflow-hidden bg-white"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Seta Direita - hidden no mobile, block no desktop */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 z-20 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all focus:outline-none"
            aria-label="Próximo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Texto de instrução visível apenas no celular */}
        <p className="text-center text-gray-400 text-sm mt-6 md:hidden italic">
          Role para o lado para ver mais fotos
        </p>
      </div>
    </section>
  );
}

export default Galeria;