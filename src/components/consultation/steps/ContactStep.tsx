import React from 'react';
import { FormField } from '../../ui/form/FormField';
import type { ConsultationFormData } from '../types';
import type { FormErrors } from '../../../hooks/useFormValidation';

interface ContactStepProps {
  formData: ConsultationFormData;
  onChange: (field: keyof ConsultationFormData, value: string | boolean) => void;
  onBlur: (field: string) => void;
  errors: FormErrors;
}

export function ContactStep({ formData, onChange, onBlur, errors }: ContactStepProps) {
  return (
    <div className="space-y-6">
      <FormField
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={(e) => onChange('email', e.target.value)}
        onBlur={() => onBlur('email')}
        error={errors.email}
        required
      />

      <FormField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={(e) => onChange('fullName', e.target.value)}
        onBlur={() => onBlur('fullName')}
        error={errors.fullName}
        required
      />

      <FormField
        label="Phone Number"
        name="phoneNumber"
        type="tel"
        value={formData.phoneNumber || ''}
        onChange={(e) => onChange('phoneNumber', e.target.value)}
        onBlur={() => onBlur('phoneNumber')}
        error={errors.phoneNumber}
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="textConsent"
          checked={formData.textConsent}
          onChange={(e) => onChange('textConsent', e.target.checked)}
          className="w-4 h-4 text-primary-500 border-secondary-200 rounded focus:ring-primary-500"
        />
        <label htmlFor="textConsent" className="text-sm text-brown-400">
          I consent to receiving text messages about my consultation request
        </label>
      </div>
    </div>
  );
}