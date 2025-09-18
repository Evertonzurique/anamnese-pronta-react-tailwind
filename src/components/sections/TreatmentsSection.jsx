import React from 'react';

const TreatmentsSection = ({ formData, updateFormData, onMinoxidilClick, onFinasterideClick }) => {
  const handleInputChange = (field, value) => {
    updateFormData(field, value);
  };

  const handleCheckboxChange = (field, checked) => {
    const previousTreatments = formData.previousTreatments || {};
    updateFormData('previousTreatments', {
      ...previousTreatments,
      [field]: checked
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-5 bg-white/10">
      <div className="mb-5 border-b border-gray-300 pb-4">
        <h2 className="flex items-center gap-2.5 text-2xl" style={{ fontFamily: 'var(--font-titulo)' }}>
          <i className="fas fa-clock-rotate-left"></i> Tratamentos Anteriores
        </h2>
      </div>
      <div className="block">
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-[var(--cinza-claro)]">Tratamentos Capilares Anteriores</label>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 p-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.previousTreatments?.minoxidil || false}
                        onChange={(e) => handleCheckboxChange('minoxidil', e.target.checked)}
                      /> 
                      Minoxidil
                      <i 
                        className="fas fa-info-circle text-[var(--verde-menta)] cursor-pointer ml-1"
                        onClick={onMinoxidilClick}
                      ></i>
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.previousTreatments?.finasteride || false}
                        onChange={(e) => handleCheckboxChange('finasteride', e.target.checked)}
                      /> 
                      Finasterida
                      <i 
                        className="fas fa-info-circle text-[var(--verde-menta)] cursor-pointer ml-1"
                        onClick={onFinasterideClick}
                      ></i>
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.previousTreatments?.laser || false}
                        onChange={(e) => handleCheckboxChange('laser', e.target.checked)}
                      /> 
                      Terapia a Laser
                    </label>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 p-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.previousTreatments?.supplements || false}
                        onChange={(e) => handleCheckboxChange('supplements', e.target.checked)}
                      /> 
                      Suplementos Capilares
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.previousTreatments?.transplant || false}
                        onChange={(e) => handleCheckboxChange('transplant', e.target.checked)}
                      /> 
                      Transplante Capilar
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.previousTreatments?.none || false}
                        onChange={(e) => handleCheckboxChange('none', e.target.checked)}
                      /> 
                      Nenhum tratamento anterior
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
              <label htmlFor="treatment-results" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Resultados dos Tratamentos Anteriores</label>
              <textarea 
                id="treatment-results" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Descreva os resultados obtidos, efeitos colaterais, etc."
                value={formData.treatmentResults || ''}
                onChange={(e) => handleInputChange('treatmentResults', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsSection;

