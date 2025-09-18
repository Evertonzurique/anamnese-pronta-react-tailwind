import React from 'react';

const DiagnosisSection = ({ formData, updateFormData }) => {
  const handleInputChange = (field, value) => {
    updateFormData(field, value);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-5 bg-white/10">
      <div className="mb-5 border-b border-gray-300 pb-4">
        <h2 className="flex items-center gap-2.5 text-2xl" style={{ fontFamily: 'var(--font-titulo)' }}>
          <i className="fas fa-clipboard-check"></i> Diagnóstico e Plano
        </h2>
      </div>
      <div className="block">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="primary-diagnosis" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Diagnóstico Principal</label>
              <select 
                id="primary-diagnosis" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.primaryDiagnosis || ''}
                onChange={(e) => handleInputChange('primaryDiagnosis', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="androgenetic-alopecia">Alopecia Androgenética</option>
                <option value="telogen-effluvium">Eflúvio Telógeno</option>
                <option value="alopecia-areata">Alopecia Areata</option>
                <option value="seborrheic-dermatitis">Dermatite Seborreica</option>
                <option value="trichotillomania">Tricotilomania</option>
                <option value="other">Outro</option>
              </select>
            </div>
          </div>
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="severity" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Grau de Severidade</label>
              <select 
                id="severity" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.severity || ''}
                onChange={(e) => handleInputChange('severity', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="mild">Leve</option>
                <option value="moderate">Moderado</option>
                <option value="severe">Severo</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label htmlFor="diagnosis-details" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Detalhes do Diagnóstico</label>
              <textarea 
                id="diagnosis-details" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Descreva os achados que levaram ao diagnóstico"
                value={formData.diagnosisDetails || ''}
                onChange={(e) => handleInputChange('diagnosisDetails', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label htmlFor="treatment-plan" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Plano de Tratamento</label>
              <textarea 
                id="treatment-plan" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Descreva o plano de tratamento proposto"
                value={formData.treatmentPlan || ''}
                onChange={(e) => handleInputChange('treatmentPlan', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label htmlFor="recommendations" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Recomendações e Orientações</label>
              <textarea 
                id="recommendations" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Orientações sobre cuidados, produtos, hábitos, etc."
                value={formData.recommendations || ''}
                onChange={(e) => handleInputChange('recommendations', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="follow-up" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Retorno Agendado</label>
              <input 
                type="date" 
                id="follow-up" 
                name="follow-up" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.followUp || ''}
                onChange={(e) => handleInputChange('followUp', e.target.value)}
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="prognosis" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Prognóstico</label>
              <select 
                id="prognosis" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.prognosis || ''}
                onChange={(e) => handleInputChange('prognosis', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="excellent">Excelente</option>
                <option value="good">Bom</option>
                <option value="fair">Regular</option>
                <option value="poor">Reservado</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label htmlFor="additional-notes" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Observações Adicionais</label>
              <textarea 
                id="additional-notes" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Outras observações relevantes"
                value={formData.additionalNotes || ''}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisSection;

