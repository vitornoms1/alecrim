import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function GaleriaModal({ todosOsItens, categorias, filtroInicial, onClose }) {
  
  // Estado de filtro INTERNO para o modal
  const [filtroModal, setFiltroModal] = useState(filtroInicial);

  // Filtrar os itens com base no estado INTERNO
  const itensFiltrados = filtroModal === 'Todas'
    ? todosOsItens
    : todosOsItens.filter(item => item.categoria === filtroModal);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Cabeçalho do Modal */}
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white rounded-t-lg z-10">
          <h3 className="text-2xl font-bold text-gray-800">
            Galeria Completa
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-alecrim-yellow-dark transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Conteúdo com Scroll */}
        <div className="overflow-y-auto p-4 md:p-6">
          
          {/* Botões de Filtro atualizados para Amarelo */}
          <div className="flex justify-center flex-wrap space-x-2 md:space-x-4 mb-12">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setFiltroModal(categoria)}
                className={`
                  py-2 px-5 rounded-lg font-semibold text-sm md:text-base
                  transition-all duration-300 transform
                  mb-2
                  ${filtroModal === categoria 
                    ? 'bg-alecrim-yellow text-gray-900 shadow-lg scale-105' 
                    : 'bg-white text-gray-700 hover:bg-yellow-50 shadow'
                  }
                `}
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* Grid com TODOS os itens filtrados */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            
            {itensFiltrados.map((item, index) => (
              <Fade 
                key={`${filtroModal}-${item.id}`}
                direction="up" 
                delay={index * 50} 
                duration={600}
                triggerOnce
                className="shadow-lg rounded-lg overflow-hidden border-2 border-transparent hover:border-alecrim-yellow transition-colors"
              >
                {item.tipo === 'imagem' ? (
                  <img 
                    src={item.url} 
                    alt={item.alt}
                    className="w-full h-64 object-cover" 
                  />
                ) : item.tipo === 'video' ? (
                  <div className="w-full h-64 bg-gray-300 flex items-center justify-center p-4">
                    <span className="text-gray-600 text-center font-medium">Vídeo (Disponível em breve)</span>
                  </div>
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center p-4 border border-gray-300">
                    <span className="text-gray-500 text-center font-medium">Vídeo em Breve</span>
                  </div>
                )}
              </Fade>
            ))}
          </div>

          {/* Mensagem de "nenhum item" */}
          {itensFiltrados.length === 0 && (
            <Fade>
              <p className="text-center text-gray-600 text-xl mt-8">
                Nenhum item encontrado para esta categoria.
              </p>
            </Fade>
          )}
        </div>
      </div>
    </div>
  );
}

export default GaleriaModal;