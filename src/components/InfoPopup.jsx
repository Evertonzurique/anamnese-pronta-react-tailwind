import React from 'react';

const InfoPopup = ({ show, onClose, type }) => {
  if (!show) return null;

  const getPopupContent = () => {
    switch (type) {
      case 'info':
        return {
          title: 'ANAMNESE',
          content: (
            <div>
              <p><strong>Objetivo:</strong> Coletar histórico do paciente, incluindo queixa principal, hábitos, tratamentos anteriores e histórico familiar.</p>
              <p><strong>Dados relevantes:</strong></p>
              <ul className="ml-5 mb-4">
                <li>Queda acentuada (suspeita de Eflúvio Telógeno).</li>
                <li>Afinamento progressivo (suspeita de Alopecia Androgenética).</li>
                <li>Sintomas inflamatórios (coceira, dor, descamação).</li>
              </ul>
              <p className="text-right block text-xs text-gray-600 mt-5">
                <small>
                  Fonte: Harrison, S., & Sinclair, R. (2002). Telogen effluvium. Clinical and Experimental Dermatology, 27(5), 389-395.
                </small>
              </p>
            </div>
          )
        };
      case 'pullTest':
        return {
          title: '2. TESTE DE TRAÇÃO LEVE (PULL TEST)',
          content: (
            <div>
              <p><strong>Como fazer:</strong></p>
              <ul className="ml-5 mb-4">
                <li>Paciente deve estar sem lavar o cabelo por 24h.</li>
                <li>Tração leve de 50 fios em 4 áreas (temporal, occipital, vértex).</li>
                <li><strong>Contar fios soltos:</strong></li>
                <ul className="ml-5">
                  <li>Normal: 4-5 fios.</li>
                  <li>Eflúvio Telógeno (ET): 8-10 fios.</li>
                  <li>Alopecia Areata Incógnita: "mão cheia" de fios.</li>
                </ul>
              </ul>
              <p><strong>Interpretação:</strong></p>
              <ul className="ml-5 mb-4">
                <li>Bulbo branco: fio em fase telógena.</li>
                <li>Bulbo preto: fio em fase anágena (queda patológica).</li>
              </ul>
              <p className="text-right block text-xs text-gray-600 mt-5">
                <small>
                  Fonte: Shapiro, J. (2007). Clinical practice: Hair loss in women. New England Journal of Medicine, 357(16), 1620-1630.
                </small>
              </p>
            </div>
          )
        };
      case 'cardTest':
        return {
          title: 'CARD TEST',
          content: (
            <div>
              <p><strong>Objetivo:</strong> Diferenciar fios novos (crescimento) de fios quebrados (dano na haste).</p>
              <p><strong>Método:</strong> Usar papel branco (cabelos escuros) ou preto (cabelos claros) para visualizar os fios.</p>
              <p className="text-right block text-xs text-gray-600 mt-5">
                <small>
                  Fonte: Mirmirani, P. (2011). Ceramic flat irons: Improper use leading to acquired trichorrhexis nodosa. Journal of the American Academy of Dermatology, 64(4), 769-770.
                </small>
              </p>
            </div>
          )
        };
      case 'tugTest':
        return {
          title: 'TESTE DA PUXADA (TUG TEST)',
          content: (
            <div>
              <p><strong>Objetivo:</strong> Avaliar fragilidade da haste capilar.</p>
              <p><strong>Como fazer:</strong></p>
              <ul className="ml-5 mb-4">
                <li>Segurar uma mecha de 50 fios.</li>
                <li>Deslizar os dedos da ponta até a raiz.</li>
                <li>Fios quebradiços indicam danos químicos ou mecânicos.</li>
              </ul>
              <p className="text-right block text-xs text-gray-600 mt-5">
                <small>
                  Fonte: Gavazzoni Dias, M. F. (2015). Hair cosmetics: An overview. International Journal of Trichology, 7(1), 2-15.
                </small>
              </p>
            </div>
          )
        };
      case 'washTest':
        return {
          title: 'TESTE DA LAVAGEM (WASH TEST)',
          content: (
            <div>
              <p><strong>Objetivo:</strong> Diferenciar Alopecia Androgenética (AAG) de Eflúvio Telógeno Crônico.</p>
              <p><strong>Método:</strong></p>
              <ul className="ml-5 mb-4">
                <li>Paciente fica 4 dias sem lavar o cabelo.</li>
                <li>Lavar com shampoo (sem condicionador) e coletar fios em uma gaze.</li>
                <li>Separar fios curtos (&lt;3 cm = velus) e longos.</li>
              </ul>
              <p><strong>Interpretação:</strong></p>
              <ul className="ml-5 mb-4">
                <li>10% fios velus = AAG.</li>
                <li>100 fios totais + velus = AAG + ET.</li>
              </ul>
              <p className="text-right block text-xs text-gray-600 mt-5">
                <small>
                  Fonte: Blume-Peytavi, U., et al. (2011). Hair growth assessment techniques. Journal of Investigative Dermatology Symposium Proceedings, 15(1), 23-27.
                </small>
              </p>
            </div>
          )
        };
      case 'minoxidil':
        return {
          title: 'MINOXIDIL TÓPICO',
          content: (
            <div>
              <p><strong>Ficha Técnica Clínico-Tricológica</strong></p>
              <p><strong>Classe farmacológica:</strong> Vasodilatador periférico</p>
              <p><strong>Formulações comuns:</strong> 2%, 5%, soluções hidroalcoólicas ou espuma</p>
              <p><strong>Indicação principal:</strong></p>
              <ul className="ml-5 mb-4">
                <li>Alopecia androgenética masculina e feminina</li>
              </ul>
              <p><strong>Indicações adicionais (off-label):</strong></p>
              <ul className="ml-5 mb-4">
                <li>Eflúvio telógeno crônico</li>
                <li>Alopecia areata (em associação a outras terapias)</li>
                <li>Apoio em alopecias cicatriciais estabilizadas</li>
              </ul>
              <p><strong>Via de uso:</strong> Tópica, no couro cabeludo, geralmente 1 a 2 vezes ao dia</p>
              <p><strong>Segurança:</strong> Efeitos adversos mais comuns — irritação, descamação, eritema, prurido, hipertricose em áreas adjacentes</p>
              <p><strong>Mecanismos de ação:</strong></p>
              <ul className="ml-5 mb-4">
                <li>Vasodilatação local → Aumenta fluxo sanguíneo e aporte de nutrientes ao folículo</li>
                <li>Abertura de canais de potássio (K⁺-ATP) → Ativa fatores de crescimento folicular</li>
                <li>Prolongamento da fase anágena → Mantém o fio em crescimento por mais tempo</li>
                <li>Aumento de espessura e densidade → Reverte parcialmente a miniaturização folicular</li>
                <li>Estimulação da papila dérmica → Favorece proliferação celular e inibe apoptose precoce</li>
              </ul>
              <p><strong>Efeitos Observados no Cabelo:</strong></p>
              <ul className="ml-5 mb-4">
                <li>Melhora da densidade capilar</li>
                <li>Espessamento do fio</li>
                <li>Redução da queda visível após uso contínuo (3–6 meses)</li>
                <li>Crescimento de fios novos mais finos inicialmente, que engrossam com o tempo</li>
              </ul>
              <p><strong>Considerações Importantes:</strong></p>
              <ul className="ml-5 mb-4">
                <li>A suspensão do uso geralmente leva à perda dos resultados obtidos em 3–4 meses</li>
                <li>A resposta ao tratamento é variável e depende do estágio da alopecia</li>
                <li>Pode ser associado a outros tratamentos (finasterida oral/tópica, PRP, microagulhamento) para potencializar resultados</li>
              </ul>
              <p className="text-right block text-xs text-gray-600 mt-5">
                <small>
                  Fontes: Olsen EA et al. A multicenter, randomized, placebo-controlled, double-blind clinical trial of topical minoxidil in the treatment of androgenetic alopecia in women. J Am Acad Dermatol. 2002;47(5):767-774. doi:10.1067/mjd.2002.122734; Messenger AG, Rundegren J. Minoxidil: mechanisms of action on hair growth. Br J Dermatol. 2004;150(2):186-94. doi:10.1111/j.1365-2133.2004.05785.x
                </small>
              </p>
            </div>
          )
        };
      case 'finasteride':
        return {
          title: 'FINASTERIDA',
          content: (
            <div>
              <p><strong>Ficha Técnica Clínico-Tricológica (Tópica e Injetável)</strong></p>
              <p><strong>Identificação</strong></p>
              <ul className="ml-5 mb-4">
                <li><strong>Classe farmacológica:</strong> Inibidor seletivo da 5α-redutase tipo II</li>
                <li><strong>Indicação principal em tricologia:</strong> Alopecia androgenética masculina e feminina (off-label no caso feminino)</li>
                <li><strong>Mecanismo geral:</strong> Reduz a conversão da testosterona em dihidrotestosterona (DHT), hormônio envolvido na miniaturização folicular</li>
              </ul>
              <h3 className="text-[var(--azul-escuro)] text-xl mt-5 border-b border-gray-300 pb-1">1. Finasterida Tópica</h3>
              <ul className="ml-5 mb-4">
                <li><strong>Apresentação:</strong> Loções, soluções hidroalcoólicas ou oleosas, isolada ou associada a minoxidil</li>
                <li><strong>Concentrações comuns:</strong> 0,025% a 0,1%</li>
                <li><strong>Posologia usual:</strong> Aplicar 1x/dia no couro cabeludo (dose média absorvida: 0,2–0,6 mg/dia)</li>
                <li><strong>Mecanismo de ação:</strong> Mesma ação do oral, mas com absorção sistêmica significativamente menor, focando na região aplicada</li>
              </ul>
              <p><strong>Indicação clínica:</strong></p>
              <ul className="ml-5 mb-4">
                <li>Alopecia androgenética</li>
                <li>Alternativa para pacientes com risco ou receio de efeitos sistêmicos</li>
              </ul>
              <p><strong>Efeitos adversos possíveis:</strong> Irritação local, eritema, descamação; raramente efeitos hormonais leves</p>
              <h3 className="text-[var(--azul-escuro)] text-xl mt-5 border-b border-gray-300 pb-1">2. Finasterida Injetável (uso experimental/off-label)</h3>
              <ul className="ml-5 mb-4">
                <li><strong>Apresentação:</strong> Solução estéril manipulada para microinjeções intradérmicas no couro cabeludo</li>
                <li><strong>Concentrações comuns em estudos:</strong> 0,025% a 0,1% (ajustada por protocolo)</li>
                <li><strong>Posologia usual experimental:</strong> Aplicações mensais ou bimestrais, conforme protocolo clínico</li>
                <li><strong>Mecanismo de ação:</strong> Administração direta na derme, atingindo folículos pilosos com absorção sistêmica mínima</li>
              </ul>
              <p><strong>Indicação clínica:</strong></p>
              <ul className="ml-5 mb-4">
                <li>Pesquisada para alopecia androgenética masculina e feminina</li>
                <li>Opção para pacientes que não toleram uso oral</li>
              </ul>
              <p><strong>Efeitos adversos possíveis:</strong> Dor local, inflamação, edema, reação de hipersensibilidade; raros efeitos hormonais</p>
              <p className="text-right block text-xs text-gray-600 mt-5">
                <small>
                  Fontes: Rossi A et al. Comparative effectiveness of topical finasteride in male androgenetic alopecia: a randomized clinical trial. Dermatol Ther. 2020;33(6):e14120. doi:10.1111/dth.14120; Suchonwanit P et al. Finasteride and its potential for the treatment of female pattern hair loss: Evidence to date. Drug Des Devel Ther. 2019;13:951-960. doi:10.2147/DDDT.S195199
                </small>
              </p>
            </div>
          )
        };
      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = getPopupContent();

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center z-[1000]">
      <div 
        className="bg-[var(--cinza-claro)] text-gray-800 p-6 rounded-lg max-w-2xl w-[90%] max-h-[80vh] overflow-y-auto relative shadow-lg"
        style={{ 
          fontFamily: 'var(--font-corpo)',
          lineHeight: '1.5',
          boxShadow: '0 5px 25px rgba(0, 0, 0, 0.4)'
        }}
      >
        <button
          className="absolute top-2.5 right-2.5 text-2xl cursor-pointer bg-none border-none text-gray-500 leading-none p-0 transition-colors duration-200 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        
        <div className="border-b border-gray-300 pb-2.5 mb-4">
          <h2 
            className="text-[var(--azul-escuro)] text-center mb-2.5"
            style={{ fontFamily: 'var(--font-titulo)' }}
          >
            {title}
          </h2>
        </div>
        
        <div className="popup-body">
          {content}
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;

