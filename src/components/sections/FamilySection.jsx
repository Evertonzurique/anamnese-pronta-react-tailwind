import React from 'react';

const FamilySection = ({ formData, updateFormData }) => {
  const handleInputChange = (field, value) => {
    updateFormData(field, value);
  };

  const handleCheckboxChange = (field, checked) => {
    const familyHistory = formData.familyHistory || {};
    updateFormData('familyHistory', {
      ...familyHistory,
      [field]: checked
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-5 bg-white/10">
      <div className="mb-5 border-b border-gray-300 pb-4">
        <h2 className="flex items-center gap-2.5 text-2xl" style={{ fontFamily: 'var(--font-titulo)' }}>
          <i className="fas fa-users"></i> Histórico Familiar
        </h2>
      </div>
      <div className="block">
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-[var(--cinza-claro)]">Histórico Familiar de Problemas Capilares</label>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 p-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.familyHistory?.alopecia || false}
                        onChange={(e) => handleCheckboxChange('alopecia', e.target.checked)}
                      /> 
                      Alopecia/Calvície
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.familyHistory?.hairLoss || false}
                        onChange={(e) => handleCheckboxChange('hairLoss', e.target.checked)}
                      /> 
                      Queda de Cabelo Precoce
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.familyHistory?.thinning || false}
                        onChange={(e) => handleCheckboxChange('thinning', e.target.checked)}
                      /> 
                      Afinamento Capilar
                    </label>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 p-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.familyHistory?.autoimmune || false}
                        onChange={(e) => handleCheckboxChange('autoimmune', e.target.checked)}
                      /> 
                      Doenças Autoimunes
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.familyHistory?.thyroid || false}
                        onChange={(e) => handleCheckboxChange('thyroid', e.target.checked)}
                      /> 
                      Problemas de Tireoide
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.familyHistory?.none || false}
                        onChange={(e) => handleCheckboxChange('none', e.target.checked)}
                      /> 
                      Nenhum histórico familiar
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
              <label htmlFor="maternal-history" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Histórico Materno</label>
              <textarea 
                id="maternal-history" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Descreva o histórico capilar da família materna"
                value={formData.maternalHistory || ''}
                onChange={(e) => handleInputChange('maternalHistory', e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="paternal-history" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Histórico Paterno</label>
              <textarea 
                id="paternal-history" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Descreva o histórico capilar da família paterna"
                value={formData.paternalHistory || ''}
                onChange={(e) => handleInputChange('paternalHistory', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label htmlFor="family-details" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Detalhes Adicionais do Histórico Familiar</label>
              <textarea 
                id="family-details" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Idade de início dos problemas, grau de parentesco, etc."
                value={formData.familyDetails || ''}
                onChange={(e) => handleInputChange('familyDetails', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilySection;

