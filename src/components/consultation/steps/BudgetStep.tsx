import React from 'react';
import { ConsultationFormData } from '../types';

interface BudgetStepProps {
  formData: ConsultationFormData;
  onChange: (field: keyof ConsultationFormData, value: string) => void;
}

const BUDGET_OPTIONS = [
  '$500 – $1,000',
  '$1,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  'Undecided',
  'Other'
];

const TIMELINE_OPTIONS = [
  '1–2 Weeks',
  '1–2 Months',
  '3–6 Months',
  '6+ Months',
  'Flexible',
  'Other'
];

export function BudgetStep({ formData, onChange }: BudgetStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="budgetRange" className="block text-sm font-medium text-brown-400 mb-1">
          Budget Range *
        </label>
        <select
          id="budgetRange"
          value={formData.budgetRange}
          onChange={(e) => onChange('budgetRange', e.target.value)}
          className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          required
        >
          <option value="">Select budget range</option>
          {BUDGET_OPTIONS.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-brown-400 mb-1">
          Desired Timeline *
        </label>
        <select
          id="timeline"
          value={formData.timeline}
          onChange={(e) => onChange('timeline', e.target.value)}
          className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          required
        >
          <option value="">Select timeline</option>
          {TIMELINE_OPTIONS.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}