import React from 'react';

const PhysicalSection = ({ formData, updateFormData }) => {
  const handleInputChange = (field, value) => {
    updateFormData(field, value);
  };

  const handleCheckboxChange = (field, checked) => {
    const scalpConditions = formData.scalpConditions || {};
    updateFormData('scalpConditions', {
      ...scalpConditions,
      [field]: checked
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-5 bg-white/10">
      <div className="mb-5 border-b border-gray-300 pb-4">
        <h2 className="flex items-center gap-2.5 text-2xl" style={{ fontFamily: 'var(--font-titulo)' }}>
          <i className="fas fa-search"></i> Exame Físico
        </h2>
      </div>
      <div className="block">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="hair-density" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Densidade Capilar</label>
              <select 
                id="hair-density" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.hairDensity || ''}
                onChange={(e) => handleInputChange('hairDensity', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="normal">Normal</option>
                <option value="reduced">Reduzida</option>
                <option value="severely-reduced">Severamente Reduzida</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="hair-thickness" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Espessura dos Fios</label>
              <select 
                id="hair-thickness" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.hairThickness || ''}
                onChange={(e) => handleInputChange('hairThickness', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="thick">Grosso</option>
                <option value="medium">Médio</option>
                <option value="thin">Fino</option>
                <option value="very-thin">Muito Fino</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="scalp-oiliness" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Oleosidade do Couro Cabeludo</label>
              <select 
                id="scalp-oiliness" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.scalpOiliness || ''}
                onChange={(e) => handleInputChange('scalpOiliness', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="normal">Normal</option>
                <option value="oily">Oleoso</option>
                <option value="very-oily">Muito Oleoso</option>
                <option value="dry">Seco</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="scalp-sensitivity" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Sensibilidade do Couro Cabeludo</label>
              <select 
                id="scalp-sensitivity" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.scalpSensitivity || ''}
                onChange={(e) => handleInputChange('scalpSensitivity', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="normal">Normal</option>
                <option value="sensitive">Sensível</option>
                <option value="very-sensitive">Muito Sensível</option>
                <option value="irritated">Irritado</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-[var(--cinza-claro)]">Condições do Couro Cabeludo</label>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 p-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.scalpConditions?.dandruff || false}
                        onChange={(e) => handleCheckboxChange('dandruff', e.target.checked)}
                      /> 
                      Caspa
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.scalpConditions?.seborrhea || false}
                        onChange={(e) => handleCheckboxChange('seborrhea', e.target.checked)}
                      /> 
                      Dermatite Seborreica
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.scalpConditions?.psoriasis || false}
                        onChange={(e) => handleCheckboxChange('psoriasis', e.target.checked)}
                      /> 
                      Psoríase
                    </label>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 p-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.scalpConditions?.folliculitis || false}
                        onChange={(e) => handleCheckboxChange('folliculitis', e.target.checked)}
                      /> 
                      Foliculite
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.scalpConditions?.scars || false}
                        onChange={(e) => handleCheckboxChange('scars', e.target.checked)}
                      /> 
                      Cicatrizes
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.scalpConditions?.normal || false}
                        onChange={(e) => handleCheckboxChange('normal', e.target.checked)}
                      /> 
                      Normal
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label htmlFor="physical-observations" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Observações do Exame Físico</label>
              <textarea 
                id="physical-observations" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Descreva outras observações relevantes do exame físico"
                value={formData.physicalObservations || ''}
                onChange={(e) => handleInputChange('physicalObservations', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalSection;

