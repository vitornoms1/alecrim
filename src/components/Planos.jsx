import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-alecrim-yellow-dark mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const planos = [
  {
    titulo: 'Festa POP',
    descricao: 'Uma festa compacta com decoração pocket. (Até 45 convidados).',
    destaque: false,
    preco: '790,00',
    resumoItens: [
      'Decoração Pocket (Painel, Personagens, Cilindros)',
      'Equipe: 01 Copeira e 01 Monitora',
      'Estrutura completa (Som, Kids, Cozinha)',
      'NÃO INCLUI Alimentação, Bebidas e Garçom',
    ],
    detalhes: {
      incluso: [
        { 
          titulo: 'Decoração Pocket', 
          itens: ['Painel redondo', 'Personagens no tema', 'Bolo fake', 'Cilindros', 'Tapete', '01 arco de balões'] 
        },
        { 
          titulo: 'Estrutura e Equipe', 
          itens: ['01 Copeira', '01 Monitora', 'Ambiente Climatizado', 'Área Kids', 'Som ambiente (Bluetooth)', 'Cozinha equipada'] 
        }
      ],
      naoIncluso: ['Garçom', 'Alimentação', 'Bebidas', 'Louças e descartáveis'],
      precos: [
        { convidados: 'Até 45', segQui: 'R$ 790,00', sexSabDom: 'R$ 990,00' }
      ]
    }
  },
  
  {
    titulo: 'Festa Básica',
    descricao: 'Toda a estrutura, equipe completa e decoração luxo. Você traz a comida.',
    destaque: false,
    preco: '1.640,00',
    resumoItens: [
      'Equipe Completa (Gerente, Garçons, etc.)',
      'Decoração Completa no tema',
      'Capacidade até 70 convidados',
      'NÃO INCLUI Alimentação e Bebidas',
    ],
    detalhes: {
      incluso: [
        { 
          titulo: 'Equipe do Salão', 
          itens: ['01 Gerente de festa', '02 Garçons', '01 Copeira', '01 Auxiliar de cozinha', '02 Monitores'] 
        },
        { 
          titulo: 'Decoração Completa', 
          itens: ['Painéis e personagens', 'Móveis decorativos', 'Arco desconstruído', 'Convites digitais', 'Caixa de presentes']
        },
        { 
          titulo: 'Estrutura', 
          itens: ['Mesas redondas e cadeiras de ferro', 'Toalhas e centros de mesa', 'Área Kids completa', 'Internet Wifi'] 
        }
      ],
      naoIncluso: ['Alimentação', 'Bebidas', 'Doces e Salgados'],
      precos: [
        { convidados: 'Até 60', segQui: 'R$ 1.640,00', sexSabDom: 'R$ 1.990,00' } 
      ]
    }
  },

  {
    titulo: 'Festa Completa',
    descricao: 'A experiência total! Decoração, equipe e nosso delicioso buffet incluso.',
    destaque: true, 
    preco: '2.590,00',
    resumoItens: [
      'Buffet com Salgados e Doces Variados',
      'Bebidas inclusas (Linha Pepsi)',
      'Entradas (Batata frita e C. Quente)',
      'Equipe e Decoração Completa',
    ],
    detalhes: {
      incluso: [
        { 
          titulo: 'Alimentação (Buffet)', 
          itens: ['Entrada: Batata frita e Cachorro-quente', 'Variedades de salgados (fritos e assados)', 'Doces tradicionais (Brigadeiro, Branquinho, etc)'] 
        },
        { 
          titulo: 'Bebidas', 
          itens: ['Refrigerantes (Linha Pepsi)', 'Suco de Uva e Laranja', 'Água mineral (com e sem gás)'] 
        },
        { 
          titulo: 'Serviços Inclusos', 
          itens: ['Equipe completa de atendimento', 'Decoração no tema escolhido', 'Louças para o serviço (Pratos, talheres, copos)'] 
        }
      ],
      naoIncluso: ['Bebidas alcoólicas', 'Bolo de corte', 'Personalizados extras'],
      precos: [
        { convidados: '30 Pessoas', segQui: 'R$ 2.590,00', sexSabDom: 'R$ 2.890,00' }
      ]
    }
  }
];

const PlanoModal = ({ plano, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative border-t-8 border-alecrim-yellow"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-alecrim-yellow-dark"
        >
          <CloseIcon />
        </button>

        <h3 className="text-3xl font-bold text-gray-800 mb-4">{plano.titulo}</h3>
        <p className="text-lg text-gray-600 mb-6">{plano.descricao}</p>

        {plano.detalhes.incluso.map((secao) => (
          <div key={secao.titulo} className="mb-4">
            <h4 className="text-xl font-semibold text-yellow-800 mb-2">{secao.titulo}</h4>
            <ul className="space-y-1 list-disc list-inside">
              {secao.itens.map((item, i) => (
                <li key={i} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
        
        {/* CORREÇÃO AQUI: plano.detalhes.naoIncluso */}
        {plano.detalhes.naoIncluso && (
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-red-700 mb-2">Não Incluso</h4>
            <ul className="space-y-1 list-disc list-inside">
              {plano.detalhes.naoIncluso.map((item, i) => (
                <li key={i} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        )}

        <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Tabela de Valores (2026)</h4>
        <div className="overflow-x-auto rounded-lg border border-yellow-100">
          <table className="min-w-[500px] text-left">
            <thead className="bg-yellow-50">
              <tr>
                <th className="p-3 font-semibold text-yellow-900">Convidados</th>
                <th className="p-3 font-semibold text-yellow-900">Segunda à Quinta</th>
                <th className="p-3 font-semibold text-yellow-900">Sex, Sáb, Dom e Fer</th>
              </tr>
            </thead>
            <tbody>
              {plano.detalhes.precos.map((linha, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3 font-medium">{linha.convidados}</td>
                  <td className="p-3">{linha.segQui}</td>
                  <td className="p-3">{linha.sexSabDom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {plano.titulo === 'Festa Completa' && (
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-dashed border-alecrim-yellow">
            <p className="text-gray-600 text-sm text-center">
              Para orçamentos de 40 a 70 convidados, entre em contato conosco!
            </p>
          </div>
        )}

        <button 
          onClick={onClose} 
          className="w-full py-3 px-6 rounded-lg font-bold text-center mt-8 bg-alecrim-yellow text-gray-900 hover:bg-alecrim-yellow-dark transition-colors shadow-md"
        >
          Fechar Detalhes
        </button>
      </div>
    </div>
  );
};

function Planos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isModalOpen]);

  const openModal = (plano) => {
    setSelectedPlan(plano);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPlan(null), 300); 
  };

  return (
    <>
      <section className="py-20 bg-gray-50" id="planos">
        <div className="container mx-auto px-6">
          <Fade direction="down" triggerOnce>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              Nossos Pacotes 2026
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Escolha a opção ideal para celebrar com a gente.
            </p>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {[planos[1], planos[2], planos[0]].map((plano, index) => (
              <Fade 
                direction="up" 
                delay={index * 200} 
                duration={1200} 
                triggerOnce 
                key={plano.titulo}
              >
                <div 
                  className={`
                    bg-white rounded-lg shadow-lg p-6 h-full flex flex-col
                    ${plano.destaque ? 'border-2 border-alecrim-yellow md:scale-105' : 'border border-gray-200'}
                    transition-transform duration-300
                  `}
                >
                  <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    {plano.titulo}
                  </h3>
                  <p className="text-gray-600 text-center mb-6 h-16">
                    {plano.descricao}
                  </p>
                  <div className="text-center mb-6">
                    <span className="text-lg text-gray-500">A partir de</span>
                    <div className="flex justify-center items-baseline text-yellow-800">
                      <span className="text-2xl font-semibold">R$</span>
                      <span className="text-5xl font-bold tracking-tight">{plano.preco.split(',')[0]}</span>
                      <span className="text-2xl font-semibold">,{plano.preco.split(',')[1]}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plano.resumoItens.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => openModal(plano)}
                    className={`
                      w-full py-3 px-6 rounded-lg font-bold text-center mt-auto
                      ${plano.destaque ? 'bg-alecrim-yellow text-gray-900 hover:bg-alecrim-yellow-dark' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                      transition-colors shadow-sm
                    `}
                  >
                    Ver Valores Detalhados
                  </button>
                </div>
              </Fade>
            ))}
          </div>

          <Fade direction="up" triggerOnce>
            <div className="mt-16 bg-white rounded-2xl shadow-md p-8 border-2 border-dashed border-alecrim-yellow flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Ficou em dúvida sobre alguma coisa?</h3>
                <p className="text-gray-600 mt-2">
                  Envie uma mensagem para nós! Estamos prontos para ajudar você a planejar o seu evento.
                </p>
              </div>
              <a 
                href="https://wa.me/5551993140276" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48 2.244 2.244 3.481 5.229 3.481 8.405 0 6.556-5.333 11.888-11.888 11.888-2.022 0-4.005-.515-5.756-1.493l-6.229 1.633zm6.541-3.791c1.554.922 3.239 1.408 4.965 1.408 5.364 0 9.731-4.367 9.731-9.731 0-2.599-1.012-5.043-2.848-6.88-1.837-1.836-4.281-2.848-6.882-2.848-5.364 0-9.73 4.367-9.73 9.731 0 1.835.518 3.614 1.498 5.16l-.988 3.61 3.704-.972z" />
                </svg>
                Chamar no WhatsApp
              </a>
            </div>
          </Fade>
        </div>
      </section>

      {isModalOpen && selectedPlan && (
        <PlanoModal plano={selectedPlan} onClose={closeModal} />
      )}
    </>
  );
}

export default Planos;