import React from 'react';
import logoImage from '../assets/imagens/Logo_Com_Texto_cabecalho.webp';

const Header = ({ progressPercentage, onInfoClick }) => {
  return (
    <header className="mb-0">
      <div className="flex flex-wrap">
        {/* Logo */}
        <div className="w-full lg:w-3/12 text-center p-0 m-0">
          <img 
            className="max-w-32 h-auto mx-auto" 
            src={logoImage}
            alt="Logo com texto da empresa"
          />
        </div>
        
        {/* Título */}
        <div className="w-full lg:w-8/12 text-center">
          <h1 
            className="text-3xl font-semibold text-white my-2.5 inline-flex items-center gap-2.5"
            style={{ fontFamily: 'var(--font-titulo)' }}
          >
            Anamnese Capilar
            <i 
              className="fas fa-info-circle text-[var(--verde-menta)] cursor-pointer text-xl"
              onClick={onInfoClick}
            ></i>
          </h1>
          <p className="text-white">Do couro cabeludo à solução: análise completa em um só lugar.</p>
        </div>
        
        {/* Barra de Progresso */}
        <div className="w-full p-0 text-right">
          <div className="mb-5">
            <span 
              className="font-bold text-right block text-xs text-[var(--azul-escuro)] mr-5 mb-1.5"
              style={{ fontSize: '0.7rem' }}
            >
              Progresso da Anamnese: <span>{Math.round(progressPercentage)}%</span>
            </span>
            <div className="w-full h-5 bg-gray-200 rounded-md overflow-hidden">
              <div 
                className="h-full transition-all duration-300 ease-in-out rounded-md"
                style={{ 
                  width: `${progressPercentage}%`,
                  background: 'var(--gradient)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

