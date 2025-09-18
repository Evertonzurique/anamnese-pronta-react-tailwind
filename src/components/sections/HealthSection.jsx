import React from 'react';

const HealthSection = ({ formData, updateFormData }) => {
  const handleInputChange = (field, value) => {
    updateFormData(field, value);
  };

  const handleRadioChange = (field, value) => {
    updateFormData(field, value);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-5 bg-white/10">
      <div className="mb-5 border-b border-gray-300 pb-4">
        <h2 className="flex items-center gap-2.5 text-2xl" style={{ fontFamily: 'var(--font-titulo)' }}>
          <i className="fas fa-heart"></i> Histórico de Saúde Geral
        </h2>
      </div>
      <div className="block">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-[var(--cinza-claro)]">Histórico de Cirurgias</label>
              <div className="mb-4">
                <label className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="surgeries" 
                    value="yes" 
                    className="cursor-pointer" 
                    checked={formData.surgeries === 'yes'}
                    onChange={(e) => handleRadioChange('surgeries', e.target.value)}
                  /> 
                  Sim
                </label>
                <label className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="surgeries" 
                    value="no" 
                    className="cursor-pointer" 
                    checked={formData.surgeries === 'no'}
                    onChange={(e) => handleRadioChange('surgeries', e.target.value)}
                  /> 
                  Não
                </label>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label className="block mb-2 font-semibold text-[var(--cinza-claro)]">Histórico de Internações</label>
              <div className="mb-4">
                <label className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="hospitalizations" 
                    value="yes" 
                    className="cursor-pointer" 
                    checked={formData.hospitalizations === 'yes'}
                    onChange={(e) => handleRadioChange('hospitalizations', e.target.value)}
                  /> 
                  Sim
                </label>
                <label className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="hospitalizations" 
                    value="no" 
                    className="cursor-pointer" 
                    checked={formData.hospitalizations === 'no'}
                    onChange={(e) => handleRadioChange('hospitalizations', e.target.value)}
                  /> 
                  Não
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label htmlFor="surgery-details" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Detalhes (se aplicável)</label>
              <textarea 
                id="surgery-details" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Descreva cirurgias ou internações, datas e motivos"
                value={formData.surgeryDetails || ''}
                onChange={(e) => handleInputChange('surgeryDetails', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthSection;

