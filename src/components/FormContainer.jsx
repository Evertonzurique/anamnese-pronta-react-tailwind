import React from 'react';
import PersonalSection from './sections/PersonalSection';
import ComplaintSection from './sections/ComplaintSection';
import ClinicalSection from './sections/ClinicalSection';
import TreatmentsSection from './sections/TreatmentsSection';
import HealthSection from './sections/HealthSection';
import HabitsSection from './sections/HabitsSection';
import FamilySection from './sections/FamilySection';
import PhysicalSection from './sections/PhysicalSection';
import TestsSection from './sections/TestsSection';
import DiagnosisSection from './sections/DiagnosisSection';
import formContainerImage from '../assets/imagens/Fundo_Form_Container_Formulario.webp';

const FormContainer = ({
  currentSection,
  sections,
  formData,
  updateFormData,
  nextSection,
  prevSection,
  handleSubmit,
  totalSections,
  onPullTestClick,
  onCardTestClick,
  onTugTestClick,
  onWashTestClick,
  onMinoxidilClick,
  onFinasterideClick
}) => {
  
  const renderSection = () => {
    const sectionProps = {
      formData,
      updateFormData,
      onPullTestClick,
      onCardTestClick,
      onTugTestClick,
      onWashTestClick,
      onMinoxidilClick,
      onFinasterideClick
    };

    switch (sections[currentSection]?.id) {
      case 'personal':
        return <PersonalSection {...sectionProps} />;
      case 'complaint':
        return <ComplaintSection {...sectionProps} />;
      case 'clinical':
        return <ClinicalSection {...sectionProps} />;
      case 'treatments':
        return <TreatmentsSection {...sectionProps} />;
      case 'health':
        return <HealthSection {...sectionProps} />;
      case 'habits':
        return <HabitsSection {...sectionProps} />;
      case 'family':
        return <FamilySection {...sectionProps} />;
      case 'physical':
        return <PhysicalSection {...sectionProps} />;
      case 'tests':
        return <TestsSection {...sectionProps} />;
      case 'diagnosis':
        return <DiagnosisSection {...sectionProps} />;
      default:
        return <div>Seção não encontrada</div>;
    }
  };

  const currentSectionData = sections[currentSection];

  return (
    <main 
      className="w-full lg:flex-1 rounded-2xl p-8 text-white min-h-[600px] bg-cover bg-no-repeat backdrop-blur-sm shadow-2xl"
      style={{ 
        backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.85), rgba(45, 90, 135, 0.85)), url(${formContainerImage})`,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Header da seção */}
      <div className="mb-8 border-b border-white/20 pb-6">
        <h2 className="flex items-center gap-4 text-3xl font-semibold text-white" style={{ fontFamily: 'var(--font-titulo)' }}>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[var(--verde-menta)] to-[var(--lilas)] flex items-center justify-center shadow-lg">
            <i className={`${currentSectionData?.icon} text-xl text-white`}></i>
          </div>
          {currentSectionData?.title}
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-sections mb-8">
          {renderSection()}
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button
            type="button"
            onClick={prevSection}
            className={`px-6 py-3 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:transform hover:scale-105 ${
              currentSection === 0 ? 'hidden' : 'flex items-center gap-2'
            }`}
            style={{ 
              background: 'linear-gradient(135deg, var(--azul-tech), var(--azul-medio))', 
              color: 'white',
              fontFamily: 'var(--font-corpo)'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'linear-gradient(135deg, var(--azul-medio), var(--azul-escuro))';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'linear-gradient(135deg, var(--azul-tech), var(--azul-medio))';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <i className="fas fa-arrow-left"></i> 
            <span>Anterior</span>
          </button>

          {currentSection < totalSections - 1 ? (
            <button
              type="button"
              onClick={nextSection}
              className="flex items-center gap-2 px-6 py-3 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:transform hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, var(--verde-menta), var(--lilas))', 
                color: 'white',
                fontFamily: 'var(--font-corpo)'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, var(--lilas), var(--verde-menta))';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(135deg, var(--verde-menta), var(--lilas))';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <span>Próximo</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 border-none rounded-xl cursor-pointer font-semibold transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:transform hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, var(--verde-menta), var(--lilas))', 
                color: 'white',
                fontFamily: 'var(--font-corpo)'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(135deg, var(--lilas), var(--verde-menta))';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'linear-gradient(135deg, var(--verde-menta), var(--lilas))';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className="fas fa-save"></i>
              <span>Salvar Anamnese</span>
            </button>
          )}
        </div>
      </form>
    </main>
  );
};

export default FormContainer;

