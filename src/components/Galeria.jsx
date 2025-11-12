import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

import GaleriaModal from './GaleriaModal'; 

// --- Imagens e dados (sem alteração) ---
import foto1 from '../assets/galeria-01.jpg';
import foto2 from '../assets/galeria-02.jpg';
import foto3 from '../assets/galeria-03.jpg';
import foto4 from '../assets/galeria-04.jpg';
import foto5 from '../assets/galeria-05.jpg';
import foto6 from '../assets/galeria-06.jpg';

const LIMITE_INICIAL = 6;

const todosOsItens = [
  { id: 1, tipo: 'imagem', url: foto1, alt: 'Foto do salão 1', categoria: 'Infantil' },
  { id: 4, tipo: 'imagem', url: foto4, alt: 'Foto do salão 4', categoria: 'Infantil' },
  { id: 7, tipo: 'imagem', url: foto2, alt: 'Foto do salão 7', categoria: 'Infantil' },
  { id: 8, tipo: 'imagem', url: foto3, alt: 'Foto do salão 8', categoria: 'Infantil' },
  { id: 9, tipo: 'imagem', url: foto5, alt: 'Foto do salão 9', categoria: 'Infantil' },
  { id: 10, tipo: 'imagem', url: foto6, alt: 'Foto do salão 10', categoria: 'Infantil' },
  { id: 11, tipo: 'imagem', url: foto1, alt: 'Foto do salão 11', categoria: 'Infantil' }, // 7º item
  { id: 2, tipo: 'imagem', url: foto2, alt: 'Foto do salão 2', categoria: 'Formatura' },
  { id: 5, tipo: 'imagem', url: foto5, alt: 'Foto do salão 5', categoria: 'Formatura' },
  { id: 3, tipo: 'imagem', url: foto3, alt: 'Foto do salão 3', categoria: '15 Anos' },
  { id: 6, tipo: 'imagem', url: foto6, alt: 'Foto do salão 6', categoria: '15 Anos' },
  { 
    id: 12, 
    tipo: 'video_placeholder', 
    url: 'https://player.vimeo.com/video/ID_DO_SEU_VIDEO', 
    alt: 'Vídeo de formatura', 
    categoria: 'Formatura' 
  },
];

const categorias = ['Todas', 'Infantil', '15 Anos', 'Formatura'];


function Galeria() {
  const [filtroAtual, setFiltroAtual] = useState('Todas');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Efeito para travar o scroll (sem alteração)
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Itens filtrados (para a página principal, sem alteração)
  const itensFiltrados = filtroAtual === 'Todas'
    ? todosOsItens
    : todosOsItens.filter(item => item.categoria === filtroAtual);

  // Itens para exibir (para a página principal, sem alteração)
  const itensParaExibir = itensFiltrados.slice(0, LIMITE_INICIAL);

  // Lógica do botão (sem alteração)
  const mostrarBotaoVerMais = itensFiltrados.length > LIMITE_INICIAL;

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          
          <Fade direction="down" triggerOnce>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Nossa Estrutura
            </h2>
          </Fade>
          
          {/* Botões de Filtro (sem alteração) */}
          <Fade direction="down" delay={200} triggerOnce>
            <div className="flex justify-center flex-wrap space-x-2 md:space-x-4 mb-12">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setFiltroAtual(categoria)}
                  className={`
                    py-2 px-5 rounded-lg font-semibold text-sm md:text-base
                    transition-all duration-300 transform
                    mb-2
                    ${filtroAtual === categoria
                      ? 'bg-green-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                    }
                  `}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </Fade>
          
          {/* Grid (sem alteração) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            
            {itensParaExibir.map((item, index) => (
              <Fade 
                key={`${filtroAtual}-${item.id}`}
                direction="up" 
                delay={index * 100}
                duration={800}
                triggerOnce
                className="shadow-lg rounded-lg overflow-hidden"
              >
                {/* Lógica de renderização (sem alteração) */}
                {item.tipo === 'imagem' ? (
                  <img 
                    src={item.url} 
                    alt={item.alt}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" 
                  />
                ) : item.tipo === 'video' ? (
                  /* <iframe ... /> */
                  <div className="w-full h-64 bg-gray-300 flex items-center justify-center p-4">
                    <span className="text-gray-600 text-center">Vídeo (Descomentar código)</span>
                  </div>
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center p-4 border border-gray-300">
                    <span className="text-gray-500 text-center">Vídeo em Breve</span>
                  </div>
                )}
              </Fade>
            ))}
          </div>
          
          {/* Botão "Ver Mais" (sem alteração) */}
          {mostrarBotaoVerMais && (
            <Fade direction="up" triggerOnce>
              <div className="text-center mt-12">
                <button
                  onClick={openModal} 
                  className="py-3 px-8 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors transform hover:scale-105"
                >
                  Ver Mais
                </button>
              </div>
            </Fade>
          )}

          {/* Mensagem "Nenhum item" (sem alteração) */}
          {itensFiltrados.length === 0 && (
            <Fade>
              <p className="text-center text-gray-600 text-xl mt-8">
                Nenhum item encontrado para esta categoria.
              </p>
            </Fade>
          )}

        </div>
      </section>

      {/* RENDERIZAÇÃO DO MODAL (COM NOVAS PROPS) */}
      {isModalOpen && (
        <GaleriaModal 
          todosOsItens={todosOsItens}
          categorias={categorias}
          filtroInicial={filtroAtual}
          onClose={closeModal}        
        />
)}
    </>
  );
}

export default Galeria;