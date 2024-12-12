import React from 'react';
import { ArrowLeft, ArrowRight, Send, Loader2 } from 'lucide-react';

interface NavigationButtonsProps {
  currentStep: number;
  isSubmitting: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export function NavigationButtons({
  currentStep,
  isSubmitting,
  onBack,
  onNext,
  onSubmit
}: NavigationButtonsProps) {
  return (
    <div className="mt-8 flex justify-between">
      {currentStep > 1 && (
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 text-brown-400 hover:text-brown-600"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      )}
      
      {currentStep < 5 ? (
        <button
          onClick={onNext}
          className="ml-auto flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </button>
      ) : (
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="ml-auto flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:bg-primary-300"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Submit Request
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
}