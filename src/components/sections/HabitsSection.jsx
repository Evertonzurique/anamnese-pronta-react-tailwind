import React from 'react';

const HabitsSection = ({ formData, updateFormData }) => {
  const handleInputChange = (field, value) => {
    updateFormData(field, value);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-5 bg-white/10">
      <div className="mb-5 border-b border-gray-300 pb-4">
        <h2 className="flex items-center gap-2.5 text-2xl" style={{ fontFamily: 'var(--font-titulo)' }}>
          <i className="fas fa-mug-hot"></i> Hábitos de Vida
        </h2>
      </div>
      <div className="block">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="alcohol" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Consumo de Álcool</label>
              <select 
                id="alcohol" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.alcohol || ''}
                onChange={(e) => handleInputChange('alcohol', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="none">Não consome</option>
                <option value="occasional">Ocasional</option>
                <option value="moderate">Moderado</option>
                <option value="frequent">Frequente</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="smoking" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Tabagismo</label>
              <select 
                id="smoking" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.smoking || ''}
                onChange={(e) => handleInputChange('smoking', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="non-smoker">Não fumante</option>
                <option value="former-smoker">Ex-fumante</option>
                <option value="regular">Fumante</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="exercise" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Prática de Exercícios</label>
              <select 
                id="exercise" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.exercise || ''}
                onChange={(e) => handleInputChange('exercise', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="sedentary">Sedentário</option>
                <option value="light">Leve (1-2x/semana)</option>
                <option value="moderate">Moderado (3-4x/semana)</option>
                <option value="intense">Intenso (5+x/semana)</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="sleep" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Qualidade do Sono</label>
              <select 
                id="sleep" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.sleep || ''}
                onChange={(e) => handleInputChange('sleep', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="excellent">Excelente</option>
                <option value="good">Boa</option>
                <option value="regular">Regular</option>
                <option value="poor">Ruim</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="stress" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Nível de Estresse</label>
              <select 
                id="stress" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.stress || ''}
                onChange={(e) => handleInputChange('stress', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="low">Baixo</option>
                <option value="moderate">Moderado</option>
                <option value="high">Alto</option>
                <option value="very-high">Muito Alto</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="diet" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Qualidade da Alimentação</label>
              <select 
                id="diet" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.diet || ''}
                onChange={(e) => handleInputChange('diet', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="excellent">Excelente</option>
                <option value="good">Boa</option>
                <option value="regular">Regular</option>
                <option value="poor">Ruim</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label htmlFor="habits-details" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Observações Adicionais</label>
              <textarea 
                id="habits-details" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Descreva outros hábitos relevantes ou observações"
                value={formData.habitsDetails || ''}
                onChange={(e) => handleInputChange('habitsDetails', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitsSection;

