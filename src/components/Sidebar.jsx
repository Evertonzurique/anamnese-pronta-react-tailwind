import React from 'react';
import sidebarImage from '../assets/imagens/Side_bar_left1_barra_Lateral_esquerda.webp';

const Sidebar = ({ sections, currentSection, onSectionClick }) => {
  return (
    <aside 
      className="w-full lg:w-80 rounded-2xl text-white p-6 shadow-2xl min-h-[600px] bg-cover bg-no-repeat backdrop-blur-sm"
      style={{ 
        backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.85), rgba(45, 90, 135, 0.85)), url(${sidebarImage})`,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="p-6 border border-white/20 rounded-xl bg-white/5 backdrop-blur-md">
        <nav className="navigation">
          <ul className="list-none space-y-3">
            {sections.map((section, index) => (
              <li key={section.id}>
                <button
                  className={`flex items-center gap-4 p-4 rounded-xl w-full border-none text-left transition-all duration-300 ease-out group relative overflow-hidden ${
                    currentSection === index
                      ? 'text-white shadow-lg transform scale-105'
                      : 'text-white/80 bg-transparent hover:text-white hover:bg-white/10 hover:transform hover:scale-102 hover:shadow-md'
                  }`}
                  style={{
                    fontFamily: 'var(--font-corpo)',
                    background: currentSection === index ? 'linear-gradient(135deg, var(--verde-menta), var(--lilas))' : 'transparent',
                    boxShadow: currentSection === index ? '0 8px 25px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)' : 'none'
                  }}
                  onClick={() => onSectionClick(index)}
                >
                  {/* Número da seção */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    currentSection === index
                      ? 'bg-white/20 text-white'
                      : 'bg-white/10 text-white/70 group-hover:bg-white/20 group-hover:text-white'
                  }`}>
                    {index + 1}
                  </div>
                  
                  {/* Ícone */}
                  <i className={`${section.icon} text-lg flex-shrink-0 transition-all duration-300 ${
                    currentSection === index ? 'text-white' : 'text-white/80 group-hover:text-white'
                  }`}></i>
                  
                  {/* Título */}
                  <span className={`font-medium transition-all duration-300 ${
                    currentSection === index 
                      ? 'text-white font-semibold' 
                      : 'text-white/80 group-hover:text-white'
                  }`}>
                    {section.title}
                  </span>
                  
                  {/* Indicador ativo */}
                  {currentSection === index && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                  
                  {/* Efeito hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--verde-menta)]/0 to-[var(--lilas)]/0 group-hover:from-[var(--verde-menta)]/10 group-hover:to-[var(--lilas)]/10 transition-all duration-300 rounded-xl"></div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

