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

  return (
    <main 
      className="w-full lg:w-8/12 rounded-lg p-5 text-white min-h-[500px] bg-cover bg-no-repeat"
      style={{ 
        backgroundImage: `url(${formContainerImage})`,
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.774)'
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-sections">
          {renderSection()}
        </div>

        <div className="mt-7 flex justify-between items-center">
          <button
            type="button"
            onClick={prevSection}
            className={`px-5 py-2.5 border-none rounded-md cursor-pointer font-semibold transition-all duration-300 ease-in-out mx-1 ${
              currentSection === 0 ? 'hidden' : 'block'
            }`}
            style={{ background: 'var(--gradient)', color: 'white' }}
            onMouseOver={(e) => e.target.style.opacity = '0.9'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            <i className="fas fa-arrow-left"></i> Anterior
          </button>

          {currentSection < totalSections - 1 ? (
            <button
              type="button"
              onClick={nextSection}
              className="px-5 py-2.5 border-none rounded-md cursor-pointer font-semibold transition-all duration-300 ease-in-out mx-1"
              style={{ background: 'var(--gradient)', color: 'white' }}
              onMouseOver={(e) => e.target.style.opacity = '0.9'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              Próximo <i className="fas fa-arrow-right"></i>
            </button>
          ) : (
            <button
              type="submit"
              className="px-5 py-2.5 border-none rounded-md cursor-pointer font-semibold transition-all duration-300 ease-in-out mx-1"
              style={{ background: 'var(--gradient)', color: 'white' }}
              onMouseOver={(e) => e.target.style.opacity = '0.9'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              <i className="fas fa-save"></i> Salvar Anamnese
            </button>
          )}
        </div>
      </form>
    </main>
  );
};

export default FormContainer;

