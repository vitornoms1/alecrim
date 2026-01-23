import React from 'react';
import { Fade } from 'react-awesome-reveal';

import img15Anos from '../assets/15anos.jpg';
import imgInfantil from '../assets/hulk.jpg';
import imgFormatura from '../assets/formatura.jpg';

const eventos = [
  {
    titulo: 'Festas de 15 Anos',
    descricao: 'Celebre momentos inesquecíveis com uma festa vibrante e cheia de alegria.',
    imagemUrl: img15Anos 
  },
  {
    titulo: 'Festas Infantis',
    descricao: 'O cenário ideal para a diversão da criançada, com segurança e muito espaço.',
    imagemUrl: imgInfantil 
  },
  {
    titulo: 'Formaturas',
    descricao: 'Um espaço profissional e versátil para comemorar essa grande conquista.',
    imagemUrl: imgFormatura 
  }
];

function NossosServicos() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        <Fade direction="down" triggerOnce>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Nossos Serviços
          </h2>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {eventos.map((evento, index) => (
            <Fade direction="up" delay={index * 200} duration={1200} triggerOnce key={index}>
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden h-full transition-all duration-300 ease-in-out hover:scale-105 border-b-4 border-transparent hover:border-alecrim-yellow">
                <img 
                  src={evento.imagemUrl} 
                  alt={evento.titulo} 
                  className="w-full h-56 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                    {evento.titulo}
                  </h3>
                  <p className="text-gray-600">
                    {evento.descricao}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <Fade direction="up" triggerOnce>
          <div className="bg-yellow-50 rounded-2xl p-8 md:p-12 text-center border border-dashed border-alecrim-yellow">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              E você vê muito mais aqui na Alecrim!
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-6">
              Nosso espaço é totalmente versátil. Também realizamos <strong>Casamentos, Carnavais, Eventos Corporativos e Confraternizações</strong> com buffet personalizado e equipe completa.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-yellow-700 font-bold italic">
              <span>#Casamentos</span>
              <span>•</span>
              <span>#EventosEmpresariais</span>
              <span>•</span>
              <span>#CháRevelação</span>
              <span>•</span>
              <span>#Bodas</span>
            </div>
          </div>
        </Fade>
        
      </div>
    </section>
  );
}

export default NossosServicos;