import { useMemo } from 'react';

interface UseCharacterCountProps {
  current: number;
  max: number;
  min?: number;
  warningThreshold?: number;
}

interface CharacterCountState {
  isUnderMin: boolean;
  isNearLimit: boolean;
  isAtLimit: boolean;
  statusColor: string;
  ariaLabel: string;
}

export const useCharacterCount = ({
  current,
  max,
  min = 0,
  warningThreshold = 0.9
}: UseCharacterCountProps): CharacterCountState => {
  return useMemo(() => {
    const isUnderMin = min > 0 && current < min;
    const isNearLimit = current >= max * warningThreshold;
    const isAtLimit = current === max;

    const getStatusColor = () => {
      if (isAtLimit) return 'text-red-500';
      if (isNearLimit) return 'text-orange-500';
      if (isUnderMin) return 'text-yellow-500';
      return 'text-gray-500';
    };

    const getAriaLabel = () => {
      if (isAtLimit) return 'Character limit reached';
      if (isNearLimit) return 'Near character limit';
      if (isUnderMin) return 'Minimum length not met';
      return 'Character count';
    };

    return {
      isUnderMin,
      isNearLimit,
      isAtLimit,
      statusColor: getStatusColor(),
      ariaLabel: getAriaLabel()
    };
  }, [current, max, min, warningThreshold]);
};