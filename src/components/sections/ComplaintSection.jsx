import React from 'react';

const ComplaintSection = ({ formData, updateFormData }) => {
  const handleInputChange = (field, value) => {
    updateFormData(field, value);
  };

  const handleCheckboxChange = (field, checked) => {
    const symptoms = formData.symptoms || {};
    updateFormData('symptoms', {
      ...symptoms,
      [field]: checked
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-5 bg-white/10">
      <div className="mb-5 border-b border-gray-300 pb-4">
        <h2 className="flex items-center gap-2.5 text-2xl" style={{ fontFamily: 'var(--font-titulo)' }}>
          <i className="fas fa-file-lines"></i> Queixa Principal
        </h2>
      </div>
      <div className="block">
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label htmlFor="main-complaint" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Descrição da Queixa Principal *</label>
              <textarea 
                id="main-complaint" 
                name="main-complaint" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Descreva detalhadamente sua principal preocupação capilar"
                value={formData.mainComplaint || ''}
                onChange={(e) => handleInputChange('mainComplaint', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="onset" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Início dos Sintomas *</label>
              <select 
                id="onset" 
                name="onset" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.onset || ''}
                onChange={(e) => handleInputChange('onset', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="recent">Recente (menos de 3 meses)</option>
                <option value="moderate">Moderado (3-12 meses)</option>
                <option value="long">Longo (mais de 1 ano)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-[var(--cinza-claro)]">Sintomas Associados (marque todos que se aplicam)</label>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 p-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.symptoms?.hairLoss || false}
                        onChange={(e) => handleCheckboxChange('hairLoss', e.target.checked)}
                      /> 
                      Queda de cabelo
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.symptoms?.thinning || false}
                        onChange={(e) => handleCheckboxChange('thinning', e.target.checked)}
                      /> 
                      Afinamento dos fios
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.symptoms?.itching || false}
                        onChange={(e) => handleCheckboxChange('itching', e.target.checked)}
                      /> 
                      Coceira no couro cabeludo
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.symptoms?.dandruff || false}
                        onChange={(e) => handleCheckboxChange('dandruff', e.target.checked)}
                      /> 
                      Caspa
                    </label>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 p-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.symptoms?.oiliness || false}
                        onChange={(e) => handleCheckboxChange('oiliness', e.target.checked)}
                      /> 
                      Oleosidade excessiva
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.symptoms?.dryness || false}
                        onChange={(e) => handleCheckboxChange('dryness', e.target.checked)}
                      /> 
                      Ressecamento
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.symptoms?.breakage || false}
                        onChange={(e) => handleCheckboxChange('breakage', e.target.checked)}
                      /> 
                      Quebra dos fios
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.symptoms?.sensitivity || false}
                        onChange={(e) => handleCheckboxChange('sensitivity', e.target.checked)}
                      /> 
                      Sensibilidade do couro cabeludo
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintSection;

