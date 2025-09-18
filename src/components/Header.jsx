import React from 'react';
import logoImage from '../assets/imagens/Logo_Com_Texto_cabecalho.webp';

const Header = ({ progressPercentage, onInfoClick }) => {
  return (
    <header className="mb-8">
      <div className="flex flex-wrap items-center">
        {/* Logo */}
        <div className="w-full lg:w-3/12 text-center p-0 m-0">
          <img 
            className="max-w-36 h-auto mx-auto drop-shadow-lg hover:scale-105 transition-transform duration-300" 
            src={logoImage}
            alt="Logo com texto da empresa"
          />
        </div>
        
        {/* Título */}
        <div className="w-full lg:w-8/12 text-center">
          <h1 
            className="text-4xl lg:text-5xl font-bold text-white my-4 inline-flex items-center gap-4 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-titulo)' }}
          >
            Anamnese Capilar
            <i 
              className="fas fa-info-circle text-[var(--verde-menta)] cursor-pointer text-2xl hover:text-white hover:scale-110 transition-all duration-300"
              onClick={onInfoClick}
            ></i>
          </h1>
          <p className="text-lg text-[var(--cinza-claro)] drop-shadow-md" style={{ fontFamily: 'var(--font-corpo)' }}>
            Do couro cabeludo à solução: análise completa em um só lugar.
          </p>
        </div>
        
        {/* Barra de Progresso */}
        <div className="w-full p-0 mt-6">
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm text-white/90 mb-3">
              <span 
                className="font-semibold"
                style={{ fontFamily: 'var(--font-corpo)' }}
              >
                Progresso da Anamnese
              </span>
              <span 
                className="font-bold bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm"
                style={{ fontFamily: 'var(--font-corpo)' }}
              >
                {Math.round(progressPercentage)}%
              </span>
            </div>
            
            <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden backdrop-blur-sm border border-white/30 shadow-inner">
              <div 
                className="h-full transition-all duration-700 ease-out rounded-full shadow-lg relative"
                style={{ 
                  width: `${progressPercentage}%`,
                  background: 'linear-gradient(135deg, var(--verde-menta), var(--lilas))'
                }}
              >
                {/* Efeito de brilho na barra de progresso */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse rounded-full"></div>
              </div>
            </div>
            
            {/* Indicadores de marco */}
            <div className="flex justify-between mt-3">
              {[0, 25, 50, 75, 100].map((mark) => (
                <div 
                  key={mark}
                  className={`flex flex-col items-center transition-all duration-300`}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    progressPercentage >= mark 
                      ? 'bg-gradient-to-r from-[var(--verde-menta)] to-[var(--lilas)] shadow-lg scale-110' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}></div>
                  <span className={`text-xs mt-1 transition-colors duration-300 ${
                    progressPercentage >= mark ? 'text-white font-semibold' : 'text-white/60'
                  }`} style={{ fontFamily: 'var(--font-corpo)' }}>
                    {mark}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

