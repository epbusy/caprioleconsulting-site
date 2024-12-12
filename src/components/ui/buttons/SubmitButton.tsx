import React from 'react';
import { Send, Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
  text?: string;
  loadingText?: string;
}

export function SubmitButton({
  isSubmitting,
  text = 'Send Message',
  loadingText = 'Sending...'
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:bg-primary-300"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        <>
          {text}
          <Send className="w-4 h-4" />
        </>
      )}
    </button>
  );
}