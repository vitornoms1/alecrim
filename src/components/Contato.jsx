import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import mapaAlecrim from '../assets/mapa-alecrim.jpg'; 

const IconPhone = () => (
  <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);

const IconLocation = () => (
  <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

function Contato() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault(); 

    const numeroWhatsApp = '555193140276'; 
    
    const textoFormatado = `Olá, meu nome é ${nome}, ${mensagem}`;
    
    const textoEncodado = encodeURIComponent(textoFormatado);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoEncodado}`;

    window.open(urlWhatsApp, '_blank');
  };


  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <Fade direction="down" triggerOnce>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Estamos prontos para fazer parte da sua história.
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <Fade direction="left" duration={1200} triggerOnce>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Fale Conosco
              </h3>
              
              <div className="flex items-start mb-4">
                <IconPhone />
                <span className="text-lg text-gray-700">(51) 9314-0276 (WhatsApp)</span>
              </div>
              
              <div className="flex items-start mb-6">
                <IconLocation />
                <span className="text-lg text-gray-700">Rua 24 de Agosto, 1195 - Bairro Liberdade<br/>Esteio, RS - CEP 93280-000</span>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-10">
                Nossa Localização
              </h3>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={mapaAlecrim}
                  alt="Localização do Alecrim Casa de Festas no mapa"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </Fade>

          <Fade direction="right" duration={1200} triggerOnce>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Envie uma mensagem
              </h3>
              <form onSubmit={handleWhatsAppSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors">
                    Enviar via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </Fade>

        </div>
      </div>
    </section>
  );
}

export default Contato;