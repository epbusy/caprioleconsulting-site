import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index + 1 <= currentStep ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {index + 1}
              </div>
              <span className="text-xs mt-1 text-gray-500">
                {index === 0 ? 'Contact' : 
                 index === 1 ? 'Company' :
                 index === 2 ? 'Service' :
                 index === 3 ? 'Budget' : 'Review'}
              </span>
            </div>
            {index < totalSteps - 1 && (
              <div className={`flex-1 h-0.5 mx-2 ${
                index + 1 < currentStep ? 'bg-primary-500' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}