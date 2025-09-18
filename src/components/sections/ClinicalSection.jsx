import React from 'react';

const ClinicalSection = ({ formData, updateFormData }) => {
  const handleInputChange = (field, value) => {
    updateFormData(field, value);
  };

  const handleCheckboxChange = (field, checked) => {
    const conditions = formData.conditions || {};
    updateFormData('conditions', {
      ...conditions,
      [field]: checked
    });
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-5 bg-white/10">
      <div className="mb-5 border-b border-gray-300 pb-4">
        <h2 className="flex items-center gap-2.5 text-2xl" style={{ fontFamily: 'var(--font-titulo)' }}>
          <i className="fas fa-stethoscope"></i> Dados Clínicos
        </h2>
      </div>
      <div className="block">
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-[var(--cinza-claro)]">Condições Médicas Existentes</label>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 p-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.conditions?.diabetes || false}
                        onChange={(e) => handleCheckboxChange('diabetes', e.target.checked)}
                      /> 
                      Diabetes
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.conditions?.hypertension || false}
                        onChange={(e) => handleCheckboxChange('hypertension', e.target.checked)}
                      /> 
                      Hipertensão
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.conditions?.thyroid || false}
                        onChange={(e) => handleCheckboxChange('thyroid', e.target.checked)}
                      /> 
                      Problemas de Tireoide
                    </label>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 p-4">
                  <div className="mb-4">
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.conditions?.autoimmune || false}
                        onChange={(e) => handleCheckboxChange('autoimmune', e.target.checked)}
                      /> 
                      Doenças Autoimunes
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.conditions?.hormonal || false}
                        onChange={(e) => handleCheckboxChange('hormonal', e.target.checked)}
                      /> 
                      Desequilíbrios Hormonais
                    </label>
                    <label className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="cursor-pointer" 
                        checked={formData.conditions?.none || false}
                        onChange={(e) => handleCheckboxChange('none', e.target.checked)}
                      /> 
                      Nenhuma das anteriores
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
              <label htmlFor="medications" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Medicamentos em Uso</label>
              <textarea 
                id="medications" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Liste todos os medicamentos que você usa"
                value={formData.medications || ''}
                onChange={(e) => handleInputChange('medications', e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="allergies" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Alergias Conhecidas</label>
              <textarea 
                id="allergies" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Liste alergias a medicamentos, produtos, etc."
                value={formData.allergies || ''}
                onChange={(e) => handleInputChange('allergies', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalSection;

