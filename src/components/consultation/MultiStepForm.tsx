import React, { useState } from 'react';
import { useConsultationForm } from '../../hooks/useConsultationForm';
import { useFormValidation } from '../ui/form/hooks/useFormValidation';
import { StepIndicator } from './StepIndicator';
import { ContactStep } from './steps/ContactStep';
import { CompanyStep } from './steps/CompanyStep';
import { ServiceStep } from './steps/ServiceStep';
import { BudgetStep } from './steps/BudgetStep';
import { ReviewStep } from './steps/ReviewStep';
import { NavigationButtons } from './NavigationButtons';
import type { ConsultationEmailData } from '../../services/email/types/consultation';
import type { ValidationField } from '../ui/form/utils/types';

const INITIAL_DATA: ConsultationEmailData = {
  fullName: '',
  email: '',
  phoneNumber: '',
  textConsent: false,
  companyName: '',
  serviceType: '',
  projectDescription: '',
  budgetRange: '',
  timeline: ''
};

// Define required fields for each step
const STEP_VALIDATIONS: Record<number, ValidationField[]> = {
  1: ['fullName', 'email'],
  2: [], // Company step is optional
  3: ['serviceType', 'projectDescription'],
  4: ['budgetRange', 'timeline'],
  5: [] // Review step doesn't need validation
};

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ConsultationEmailData>(INITIAL_DATA);
  const { sendEmail, isLoading } = useConsultationForm();
  const { errors, validateFormField, validateForm, clearErrors } = useFormValidation();

  const handleChange = (field: keyof ConsultationEmailData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBlur = (field: keyof ConsultationEmailData) => {
    if (typeof formData[field] === 'string') {
      validateFormField(field as ValidationField, formData[field] as string);
    }
  };

  const validateStep = (step: number): boolean => {
    const fieldsToValidate = STEP_VALIDATIONS[step] || [];
    return validateForm(
      formData as Record<string, string>,
      fieldsToValidate
    );
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
      clearErrors();
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    clearErrors();
  };

  const handleSubmit = async () => {
    // Validate all required fields before submission
    const allRequiredFields = Object.values(STEP_VALIDATIONS).flat();
    if (!validateForm(formData as Record<string, string>, allRequiredFields)) {
      return;
    }

    const success = await sendEmail(formData);
    if (success) {
      setFormData(INITIAL_DATA);
      setCurrentStep(1);
      clearErrors();
    }
  };

  const renderStep = () => {
    const commonProps = {
      formData,
      onChange: handleChange,
      onBlur: handleBlur,
      errors
    };

    switch (currentStep) {
      case 1:
        return <ContactStep {...commonProps} />;
      case 2:
        return <CompanyStep {...commonProps} />;
      case 3:
        return <ServiceStep {...commonProps} />;
      case 4:
        return <BudgetStep {...commonProps} />;
      case 5:
        return <ReviewStep formData={formData} onEdit={setCurrentStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <StepIndicator currentStep={currentStep} totalSteps={5} />
      
      {renderStep()}

      <NavigationButtons
        currentStep={currentStep}
        isSubmitting={isLoading}
        onBack={handleBack}
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </div>
  );
}