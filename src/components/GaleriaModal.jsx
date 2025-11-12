import React, { useState } from 'react'; // 1. Importar useState
import { Fade } from 'react-awesome-reveal';

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// 2. Aceitar novas props: todosOsItens, categorias, filtroInicial
function GaleriaModal({ todosOsItens, categorias, filtroInicial, onClose }) {
  
  // 3. Criar estado de filtro INTERNO para o modal
  const [filtroModal, setFiltroModal] = useState(filtroInicial);

  // 4. Filtrar os itens com base no estado INTERNO
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
            Galeria Completa {/* 5. Título alterado */}
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600"
          >
            <CloseIcon />
          </button>
        </div>

        {/* 6. Conteúdo com Scroll (agora engloba os botões) */}
        <div className="overflow-y-auto p-4 md:p-6">
          
          {/* 7. Botões de Filtro (copiados do Galeria.jsx) */}
          <div className="flex justify-center flex-wrap space-x-2 md:space-x-4 mb-12">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setFiltroModal(categoria)} // 8. Usa o estado interno
                className={`
                  py-2 px-5 rounded-lg font-semibold text-sm md:text-base
                  transition-all duration-300 transform
                  mb-2
                  ${filtroModal === categoria // 9. Usa o estado interno
                    ? 'bg-green-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }
                `}
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* Grid com TODOS os itens filtrados */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            
            {/* 10. Mapeia os 'itensFiltrados' do modal */}
            {itensFiltrados.map((item, index) => (
              <Fade 
                key={`${filtroModal}-${item.id}`} // 11. Key baseada no filtro do modal
                direction="up" 
                delay={index * 50} 
                duration={600}
                triggerOnce
                className="shadow-lg rounded-lg overflow-hidden"
              >
                {/* Lógica de renderização (sem alteração) */}
                {item.tipo === 'imagem' ? (
                  <img 
                    src={item.url} 
                    alt={item.alt}
                    className="w-full h-64 object-cover" 
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

          {/* 12. Mensagem de "nenhum item" */}
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