import React from 'react';
import { ConsultationFormData } from '../types';

interface CompanyStepProps {
  formData: ConsultationFormData;
  onChange: (field: keyof ConsultationFormData, value: string) => void;
}

export function CompanyStep({ formData, onChange }: CompanyStepProps) {
  return (
    <div>
      <div className="mb-4">
        <p className="text-sm text-teal-400">
          This step is optional. You can proceed without entering company information.
        </p>
      </div>
      
      <label htmlFor="companyName" className="block text-sm font-medium text-brown-400 mb-1">
        Company Name (Optional)
      </label>
      <input
        type="text"
        id="companyName"
        value={formData.companyName}
        onChange={(e) => onChange('companyName', e.target.value)}
        className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        placeholder="Enter your company name (optional)"
      />
    </div>
  );
}