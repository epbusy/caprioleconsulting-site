import React from 'react';
import { useCharacterCount } from './hooks/useCharacterCount';

interface CharacterCountProps {
  current: number;
  max?: number;
  min?: number;
  position?: 'top' | 'bottom';
}

export function CharacterCount({ 
  current, 
  max,
  min = 0,
  position = 'top'
}: CharacterCountProps) {
  const { statusColor, ariaLabel } = useCharacterCount({
    current,
    max: max || 0,
    min
  });

  const positionClasses = {
    top: 'right-2 top-2.5',
    bottom: 'right-2 bottom-2'
  };

  return (
    <div 
      className={`
        absolute ${positionClasses[position]} text-xs font-medium
        ${statusColor}
        transition-colors duration-200
      `}
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">{ariaLabel}</span>
      {current}
      {max ? `/${max}` : ''} 
      {min > 0 && current < min && `(min: ${min})`}
    </div>
  );
}