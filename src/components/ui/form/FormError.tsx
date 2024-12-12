import React from 'react';
import { ErrorIcon } from '../icons/FormIcons';

interface FormErrorProps {
  message: string;
}

export function FormError({ message }: FormErrorProps) {
  return (
    <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
      <ErrorIcon />
      <span>{message}</span>
    </div>
  );
}