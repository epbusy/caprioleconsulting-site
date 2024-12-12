import React from 'react';
import { ConsultationFormData } from '../types';

interface ServiceStepProps {
  formData: ConsultationFormData;
  onChange: (field: keyof ConsultationFormData, value: string) => void;
}

const SERVICE_OPTIONS = [
  'Custom AI Bots',
  'Business Automation',
  'Web Applications',
  'Micro-SaaS Development',
  'AI Consulting',
  'Digital Transformation',
  'Other'
];

export function ServiceStep({ formData, onChange }: ServiceStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-brown-400 mb-1">
          Service Type *
        </label>
        <select
          id="serviceType"
          value={formData.serviceType}
          onChange={(e) => onChange('serviceType', e.target.value)}
          className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          required
        >
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="projectDescription" className="block text-sm font-medium text-brown-400 mb-1">
          Project Description *
        </label>
        <textarea
          id="projectDescription"
          value={formData.projectDescription}
          onChange={(e) => onChange('projectDescription', e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          required
          placeholder="Please describe your project or requirements"
        />
      </div>
    </div>
  );
}