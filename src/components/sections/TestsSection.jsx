import React from 'react';

const TestsSection = ({ formData, updateFormData, onPullTestClick, onCardTestClick, onTugTestClick, onWashTestClick }) => {
  const handleInputChange = (field, value) => {
    updateFormData(field, value);
  };

  const handleCheckboxChange = (field, checked) => {
    const testsPerformed = formData.testsPerformed || {};
    updateFormData('testsPerformed', {
      ...testsPerformed,
      [field]: checked
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-5 bg-white/10">
      <div className="mb-5 border-b border-gray-300 pb-4">
        <h2 className="flex items-center gap-2.5 text-2xl" style={{ fontFamily: 'var(--font-titulo)' }}>
          <i className="fas fa-vial"></i> Testes Específicos
        </h2>
      </div>
      <div className="block">
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-[var(--cinza-claro)]">Testes Realizados</label>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 p-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.testsPerformed?.pullTest || false}
                        onChange={(e) => handleCheckboxChange('pullTest', e.target.checked)}
                      /> 
                      Teste de Tração (Pull Test)
                      <i 
                        className="fas fa-info-circle text-[var(--verde-menta)] cursor-pointer ml-1"
                        onClick={onPullTestClick}
                      ></i>
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.testsPerformed?.cardTest || false}
                        onChange={(e) => handleCheckboxChange('cardTest', e.target.checked)}
                      /> 
                      Card Test
                      <i 
                        className="fas fa-info-circle text-[var(--verde-menta)] cursor-pointer ml-1"
                        onClick={onCardTestClick}
                      ></i>
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.testsPerformed?.tugTest || false}
                        onChange={(e) => handleCheckboxChange('tugTest', e.target.checked)}
                      /> 
                      Teste da Puxada (Tug Test)
                      <i 
                        className="fas fa-info-circle text-[var(--verde-menta)] cursor-pointer ml-1"
                        onClick={onTugTestClick}
                      ></i>
                    </label>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 p-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.testsPerformed?.washTest || false}
                        onChange={(e) => handleCheckboxChange('washTest', e.target.checked)}
                      /> 
                      Teste da Lavagem (Wash Test)
                      <i 
                        className="fas fa-info-circle text-[var(--verde-menta)] cursor-pointer ml-1"
                        onClick={onWashTestClick}
                      ></i>
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.testsPerformed?.trichoscopy || false}
                        onChange={(e) => handleCheckboxChange('trichoscopy', e.target.checked)}
                      /> 
                      Tricoscopia
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.testsPerformed?.biopsy || false}
                        onChange={(e) => handleCheckboxChange('biopsy', e.target.checked)}
                      /> 
                      Biópsia
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="pull-test-result" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Resultado do Teste de Tração</label>
              <textarea 
                id="pull-test-result" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Número de fios soltos, áreas testadas, etc."
                value={formData.pullTestResult || ''}
                onChange={(e) => handleInputChange('pullTestResult', e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="wash-test-result" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Resultado do Teste da Lavagem</label>
              <textarea 
                id="wash-test-result" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Número total de fios, fios velus, etc."
                value={formData.washTestResult || ''}
                onChange={(e) => handleInputChange('washTestResult', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label htmlFor="other-tests" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Outros Testes e Resultados</label>
              <textarea 
                id="other-tests" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Descreva outros testes realizados e seus resultados"
                value={formData.otherTests || ''}
                onChange={(e) => handleInputChange('otherTests', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestsSection;

