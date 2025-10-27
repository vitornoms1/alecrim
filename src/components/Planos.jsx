import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
    titulo: 'Plano POP',
    descricao: 'Uma festa mais compacta com decoração pocket. (Até 45 convidados).',
    destaque: false,
    preco: '790,00',
    resumoItens: [
      'Decoração Pocket (Painel redondo, etc.)',
      'NÃO INCLUI Garçom',
      'NÃO INCLUI Alimentação e Bebidas',
      'NÃO INCLUI Louças',
    ],
    detalhes: {
      incluso: [
        { 
          titulo: 'Decoração Pocket', 
          itens: ['Painel redondo', 'Personagens', 'Bolo fake', 'Cilindros', 'Um arco de balões'] 
        },
        { 
          titulo: 'Estrutura', 
          itens: ['Ambiente Climatizado', 'Capacidade até 45 convidados', 'Cozinha (sem utensílios)', 'Sanitários e trocador', 'Internet Wifi', 'Área Kids (sem monitor)'] 
        }
      ],
      naoIncluso: ['Garçom', 'Copeira', 'Alimentação', 'Bebidas', 'Louças'],
      precos: [
        { convidados: 'Até 45', segQui: 'R$ 790,00', sexSabDom: 'R$ 990,00' }
      ]
    }
  },
  
  {
    titulo: 'Plano Básico',
    descricao: 'Toda a estrutura, equipe e decoração completa. Você só traz a alimentação e bebidas.',
    destaque: false,
    preco: '1.490,00',
    resumoItens: [
      'Equipe (Gerente, Garçons, Monitores)',
      'Decoração completa no tema',
      'Mesas, cadeiras e toalhas',
      'NÃO INCLUI Alimentação e Bebidas',
    ],
    detalhes: {
      incluso: [
        { 
          titulo: 'Nossa Estrutura', 
          itens: ['Ambiente Climatizado', 'Capacidade para até 70 convidados', 'Cozinha Equipada', 'Sanitários e trocador', 'Área Kids com espaço reservado', 'Internet Wifi'] 
        },
        { 
          titulo: 'Decoração Completa', 
          itens: ['Painéis e personagens no tema', 'Móveis decorativos', 'Caixa para presentes', 'Arco descontruído', 'Bolo fake no tema', 'Tapete de grama sintética', 'Mesas redondas e cadeiras de ferro', 'Toalhas e enfeites de centro', 'Convites digitais']
        },
        { 
          titulo: 'Equipe', 
          itens: ['Gerente de festas', 'Garçons', 'Copeira', 'Auxiliar de Copeira', 'Monitores'] 
        },
        { 
          titulo: 'Area Kids', 
          itens: ['Brinquedão (com piscina de bolinhas, etc)', 'Gangorras', 'Tombo Legal', 'Brinquedos soltos', 'Escorregador pequeno'] 
        }
      ],
      naoIncluso: ['Alimentação', 'Bebidas'],
      precos: [
        { convidados: 'Até 60', segQui: 'R$ 1.490,00', sexSabDom: 'R$ 1.990,00' } 
      ]
    }
  },

  {
    titulo: 'Festa Completa',
    descricao: 'A experiência completa! Inclui toda a estrutura, equipe e nosso delicioso buffet.',
    destaque: true, 
    preco: '2.390,00',
    resumoItens: [
      'TODA a Estrutura, Decoração e Equipe',
      'Buffet com salgados e doces',
      'Bebidas (Refrigerante, Suco, Água)',
      'Entrada (Batata frita e C. Quente)',
    ],
    detalhes: {
      incluso: [
        { 
          titulo: 'Alimentação', 
          itens: ['Entrada com batata frita e cachorro quente', 'Coquetel de salgados e doces (com opções de escolha)'] 
        },
        { 
          titulo: 'Bebidas', 
          itens: ['Refrigerante', 'Água', 'Água com gás', 'Suco de Uva e Laranja'] 
        },
        { 
          titulo: 'Nossa Estrutura', 
          itens: ['Ambiente Climatizado', 'Capacidade para até 70 convidados', 'Cozinha Equipada', 'Sanitários e trocador', 'Área Kids com espaço reservado', 'Internet Wifi'] 
        },
        { 
          titulo: 'Decoração Completa', 
          itens: ['Painéis e personagens no tema', 'Móveis decorativos', 'Caixa para presentes', 'Arco descontruído', 'Bolo fake no tema', 'Tapete de grama sintética', 'Mesas redondas e cadeiras de ferro', 'Toalhas e enfeites de centro', 'Convites digitais']
        },
        { 
          titulo: 'Equipe', 
          itens: ['Gerente de festas', 'Garçons', 'Copeira', 'Auxiliar de Copeira', 'Monitores'] 
        },
        { 
          titulo: 'Area Kids', 
          itens: ['Brinquedão (com piscina de bolinhas, etc)', 'Gangorras', 'Tombo Legal', 'Brinquedos soltos', 'Escorregador pequeno'] 
        }
      ],
      naoIncluso: ['Itens Opcionais (Bebida Alcoólica, Chopp, Massa, etc)'],
      precos: [
        { convidados: '30 Pessoas', segQui: 'R$ 2.390,00', sexFer: 'R$ 2.540,00', sabDom: 'R$ 2.690,00' },
        { convidados: '40 Pessoas', segQui: 'R$ 2.890,00', sexFer: 'R$ 3.040,00', sabDom: 'R$ 3.190,00' },
        { convidados: '50 Pessoas', segQui: 'R$ 3.290,00', sexFer: 'R$ 3.440,00', sabDom: 'R$ 3.590,00' },
        { convidados: '60 Pessoas', segQui: 'R$ 3.690,00', sexFer: 'R$ 3.840,00', sabDom: 'R$ 3.990,00' },
        { convidados: '70 Pessoas', segQui: 'R$ 4.090,00', sexFer: 'R$ 4.240,00', sabDom: 'R$ 4.390,00' }, 
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
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <CloseIcon />
        </button>

        <h3 className="text-3xl font-bold text-gray-800 mb-4">{plano.titulo}</h3>
        <p className="text-lg text-gray-600 mb-6">{plano.descricao}</p>

        {plano.detalhes.incluso.map((secao) => (
          <div key={secao.titulo} className="mb-4">
            <h4 className="text-xl font-semibold text-green-700 mb-2">{secao.titulo}</h4>
            <ul className="space-y-1 list-disc list-inside">
              {secao.itens.map((item, i) => (
                <li key={i} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
        
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

        <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Valores</h4>
        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-[500px] text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 font-semibold">Convidados</th>
                {plano.titulo === 'Plano POP' ? (
                  <>
                    <th className="p-3 font-semibold">Segunda à Quinta</th>
                    <th className="p-3 font-semibold">Sexta, Sábado, Dom e Feriados</th>
                  </>
                ) : plano.titulo === 'Plano Básico' ? (
                  <>
                    <th className="p-3 font-semibold">Segunda à Quinta</th>
                    <th className="p-3 font-semibold">Sexta, Sábado, Dom e Feriados</th>
                  </>
                ) : (
                  <>
                    <th className="p-3 font-semibold">Segunda à Quinta</th>
                    <th className="p-3 font-semibold">Sexta e Feriados</th>
                    <th className="p-3 font-semibold">Sábado e Domingo</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {plano.detalhes.precos.map((linha) => (
                <tr key={linha.convidados} className="border-t">
                  <td className="p-3 font-medium">{linha.convidados}</td>
                  {plano.titulo === 'Plano POP' ? (
                    <>
                      <td className="p-3">{linha.segQui}</td>
                      <td className="p-3">{linha.sexSabDom}</td>
                    </>
                  ) : plano.titulo === 'Plano Básico' ? (
                    <>
                      <td className="p-3">{linha.segQui}</td>
                      <td className="p-3">{linha.sexSabDom}</td>
                    </>
                  ) : (
                    <>
                      <td className="p-3">{linha.segQui}</td>
                      <td className="p-3">{linha.sexFer}</td>
                      <td className="p-3">{linha.sabDom}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button 
          onClick={onClose} 
          className="w-full py-3 px-6 rounded-lg font-semibold text-center mt-8 bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
        >
          Fechar
        </button>

      </div>
    </div>
  );
};


function Planos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // --- MUDANÇA ADICIONADA AQUI ---
  // Este hook vai monitorar a variável 'isModalOpen'
  useEffect(() => {
    // Se o modal estiver aberto, trava o scroll da página
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // Se o modal estiver fechado, restaura o scroll
      document.body.style.overflow = 'auto';
    }

    // Função de "limpeza": restaura o scroll se o componente
    // for removido da tela por algum motivo.
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]); // O 'useEffect' roda quando 'isModalOpen' muda

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
              Conheça Nossos Pacotes
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Temos a opção perfeita para sua festa dos sonhos.
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
                    ${plano.destaque ? 'border-2 border-green-600 md:scale-105' : 'border border-gray-200'}
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
                    <div className="flex justify-center items-baseline">
                      <span className="text-2xl font-semibold text-gray-700">R$</span>
                      <span className="text-5xl font-bold text-gray-800 tracking-tight">{plano.preco.split(',')[0]}</span>
                      <span className="text-2xl font-semibold text-gray-700">,{plano.preco.split(',')[1]}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plano.resumoItens.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => openModal(plano)}
                    className={`
                      w-full py-3 px-6 rounded-lg font-semibold text-center mt-auto
                      ${plano.destaque ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                      transition-colors
                    `}
                  >
                    Ver Todos os Detalhes
                  </button>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedPlan && (
        <PlanoModal plano={selectedPlan} onClose={closeModal} />
      )}
    </>
  );
}

export default Planos;
