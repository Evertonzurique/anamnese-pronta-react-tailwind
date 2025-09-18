import React from 'react';

const PersonalSection = ({ formData, updateFormData }) => {
  const handleInputChange = (field, value) => {
    updateFormData(field, value);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-6 mb-5 bg-white/10">
      <div className="mb-5 border-b border-gray-300 pb-4">
        <h2 className="flex items-center gap-2.5 text-2xl" style={{ fontFamily: 'var(--font-titulo)' }}>
          <i className="fas fa-user"></i> Dados Pessoais
        </h2>
      </div>
      <div className="block">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 p-4">
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Nome Completo *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Digite o nome completo"
                value={formData.name || ''}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
          </div>
          <div className="w-full lg:w-3/12 p-4">
            <div className="mb-5">
              <label htmlFor="birth" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Nascimento *</label>
              <input 
                type="date" 
                id="birth" 
                name="birth" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.birth || ''}
                onChange={(e) => handleInputChange('birth', e.target.value)}
              />
            </div>
          </div>
          <div className="w-full lg:w-3/12 p-4">
            <div className="mb-5">
              <label htmlFor="gender" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Gênero *</label>
              <select 
                id="gender" 
                name="gender" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                value={formData.gender || ''}
                onChange={(e) => handleInputChange('gender', e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="female">Feminino</option>
                <option value="male">Masculino</option>
                <option value="other">Outro</option>
                <option value="not-specified">Prefiro não informar</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-4/12 p-4">
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 font-semibold text-[var(--cinza-claro)]">E-mail *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="exemplo@email.com"
                value={formData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
          </div>
          <div className="w-full lg:w-4/12 p-4">
            <div className="mb-5">
              <label htmlFor="phone" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Telefone *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="(11) 99999-9999"
                value={formData.phone || ''}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
          </div>
          <div className="w-full lg:w-4/12 p-4">
            <div className="mb-5">
              <label htmlFor="occupation" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Profissão</label>
              <input 
                type="text" 
                id="occupation" 
                name="occupation" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Digite sua profissão"
                value={formData.occupation || ''}
                onChange={(e) => handleInputChange('occupation', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full p-4">
            <div className="mb-5">
              <label htmlFor="address" className="block mb-2 font-semibold text-[var(--cinza-claro)]">Endereço Completo</label>
              <textarea 
                id="address" 
                name="address" 
                className="w-full p-2.5 border border-gray-300 rounded-md text-black text-base box-border min-h-[100px] resize-y focus:outline-none focus:border-[var(--azul-tech)] focus:shadow-[0_0_0_3px_rgba(61,124,184,0.2)]"
                style={{ fontFamily: 'var(--font-corpo)' }}
                placeholder="Digite seu endereço completo (rua, número, bairro, cidade, CEP)"
                value={formData.address || ''}
                onChange={(e) => handleInputChange('address', e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalSection;

