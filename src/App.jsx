import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import FormContainer from './components/FormContainer';
import InfoPopup from './components/InfoPopup';
import backgroundImage from './assets/imagens/background_global.webp';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({});
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [showPullTestPopup, setShowPullTestPopup] = useState(false);
  const [showCardTestPopup, setShowCardTestPopup] = useState(false);
  const [showTugTestPopup, setShowTugTestPopup] = useState(false);
  const [showWashTestPopup, setShowWashTestPopup] = useState(false);
  const [showMinoxidilPopup, setShowMinoxidilPopup] = useState(false);
  const [showFinasteridePopup, setShowFinasteridePopup] = useState(false);

  const sections = [
    { id: 'personal', title: 'Dados Pessoais', icon: 'fas fa-user' },
    { id: 'complaint', title: 'Queixa Principal', icon: 'fas fa-file-lines' },
    { id: 'clinical', title: 'Dados Clínicos', icon: 'fas fa-stethoscope' },
    { id: 'treatments', title: 'Tratamentos Anteriores', icon: 'fas fa-clock-rotate-left' },
    { id: 'health', title: 'Histórico de Saúde Geral', icon: 'fas fa-heart' },
    { id: 'habits', title: 'Hábitos de Vida', icon: 'fas fa-mug-hot' },
    { id: 'family', title: 'Histórico Familiar', icon: 'fas fa-users' },
    { id: 'physical', title: 'Exame Físico', icon: 'fas fa-search' },
    { id: 'tests', title: 'Testes Específicos', icon: 'fas fa-vial' },
    { id: 'diagnosis', title: 'Diagnóstico e Plano', icon: 'fas fa-clipboard-check' }
  ];

  const totalSections = sections.length;
  const progressPercentage = ((currentSection + 1) / totalSections) * 100;

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextSection = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const goToSection = (sectionIndex) => {
    setCurrentSection(sectionIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados da anamnese:', formData);
    alert('Anamnese salva com sucesso!');
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto p-5">
        <Header 
          progressPercentage={progressPercentage}
          onInfoClick={() => setShowInfoPopup(true)}
        />
        
        <div className="mt-0">
          <div className="flex flex-wrap">
            <Sidebar 
              sections={sections}
              currentSection={currentSection}
              onSectionClick={goToSection}
            />
            
            <div className="w-full lg:w-1/12"></div>
            
            <FormContainer
              currentSection={currentSection}
              sections={sections}
              formData={formData}
              updateFormData={updateFormData}
              nextSection={nextSection}
              prevSection={prevSection}
              handleSubmit={handleSubmit}
              totalSections={totalSections}
              onPullTestClick={() => setShowPullTestPopup(true)}
              onCardTestClick={() => setShowCardTestPopup(true)}
              onTugTestClick={() => setShowTugTestPopup(true)}
              onWashTestClick={() => setShowWashTestPopup(true)}
              onMinoxidilClick={() => setShowMinoxidilPopup(true)}
              onFinasterideClick={() => setShowFinasteridePopup(true)}
            />
          </div>
        </div>
      </div>

      {/* Popups */}
      <InfoPopup 
        show={showInfoPopup} 
        onClose={() => setShowInfoPopup(false)} 
        type="info"
      />
      <InfoPopup 
        show={showPullTestPopup} 
        onClose={() => setShowPullTestPopup(false)} 
        type="pullTest"
      />
      <InfoPopup 
        show={showCardTestPopup} 
        onClose={() => setShowCardTestPopup(false)} 
        type="cardTest"
      />
      <InfoPopup 
        show={showTugTestPopup} 
        onClose={() => setShowTugTestPopup(false)} 
        type="tugTest"
      />
      <InfoPopup 
        show={showWashTestPopup} 
        onClose={() => setShowWashTestPopup(false)} 
        type="washTest"
      />
      <InfoPopup 
        show={showMinoxidilPopup} 
        onClose={() => setShowMinoxidilPopup(false)} 
        type="minoxidil"
      />
      <InfoPopup 
        show={showFinasteridePopup} 
        onClose={() => setShowFinasteridePopup(false)} 
        type="finasteride"
      />
    </div>
  );
}

export default App;
