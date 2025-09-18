import React from 'react';
import sidebarImage from '../assets/imagens/Side_bar_left1_barra_Lateral_esquerda.webp';

const Sidebar = ({ sections, currentSection, onSectionClick }) => {
  return (
    <aside 
      className="w-full lg:w-3/12 rounded-lg text-white p-5 shadow-lg min-h-[500px] bg-cover bg-no-repeat"
      style={{ 
        backgroundImage: `url(${sidebarImage})`,
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.774)'
      }}
    >
      <div className="p-5 border border-gray-300 rounded-lg mt-5">
        <nav className="navigation">
          <ul className="list-none">
            {sections.map((section, index) => (
              <li key={section.id} className="my-2.5">
                <button
                  className={`flex items-center gap-3 p-3 rounded-lg w-full border-none text-left transition-all duration-300 ease-in-out ${
                    currentSection === index
                      ? 'text-white shadow-lg'
                      : 'text-white/80 bg-transparent hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    fontFamily: 'var(--font-corpo)',
                    background: currentSection === index ? 'var(--gradient)' : 'transparent',
                    boxShadow: currentSection === index ? '0 4px 10px rgba(0, 0, 0, 0.15)' : 'none'
                  }}
                  onClick={() => onSectionClick(index)}
                >
                  <i className={`${section.icon} text-base w-5 text-center`}></i>
                  <span>{section.title}</span>
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

