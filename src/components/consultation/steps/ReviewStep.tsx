import React from 'react';
import { ConsultationFormData } from '../types';

interface ReviewStepProps {
  formData: ConsultationFormData;
  onEdit: (step: number) => void;
}

interface ReviewItemProps {
  label: string;
  value: string | boolean;
  step: number;
  onEdit: (step: number) => void;
  optional?: boolean;
}

function ReviewItem({ label, value, step, onEdit, optional = false }: ReviewItemProps) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-secondary-200">
      <div>
        <p className="text-sm font-medium text-brown-400">
          {label} {optional && <span className="text-teal-400">(Optional)</span>}
        </p>
        <p className="text-teal-400">
          {typeof value === 'boolean' 
            ? (value ? 'Yes' : 'No') 
            : value || <span className="text-gray-400">Not provided</span>}
        </p>
      </div>
      <button
        onClick={() => onEdit(step)}
        className="text-sm text-primary-500 hover:text-primary-600"
      >
        Edit
      </button>
    </div>
  );
}

export function ReviewStep({ formData, onEdit }: ReviewStepProps) {
  return (
    <div className="space-y-6">
      <div className="bg-brown-50 p-4 rounded-lg mb-6">
        <p className="text-sm text-brown-400">
          Please review your information below. Click 'Edit' to make any changes.
        </p>
      </div>

      <div className="space-y-2">
        <ReviewItem label="Email" value={formData.email} step={1} onEdit={onEdit} />
        <ReviewItem label="Full Name" value={formData.fullName} step={1} onEdit={onEdit} />
        <ReviewItem label="Phone Number" value={formData.phoneNumber} step={1} onEdit={onEdit} optional />
        <ReviewItem label="Text Message Consent" value={formData.textConsent} step={1} onEdit={onEdit} optional />
        <ReviewItem label="Company Name" value={formData.companyName} step={2} onEdit={onEdit} optional />
        <ReviewItem label="Service Type" value={formData.serviceType} step={3} onEdit={onEdit} />
        <ReviewItem label="Project Description" value={formData.projectDescription} step={3} onEdit={onEdit} />
        <ReviewItem label="Budget Range" value={formData.budgetRange} step={4} onEdit={onEdit} />
        <ReviewItem label="Timeline" value={formData.timeline} step={4} onEdit={onEdit} />
      </div>

      <div className="mt-6 p-4 bg-secondary-50 rounded-lg">
        <p className="text-sm text-secondary-400">
          Your information will be handled with the utmost confidentiality and used solely for your consultation request.
        </p>
      </div>
    </div>
  );
}