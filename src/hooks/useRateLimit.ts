import { useState, useEffect } from 'react';

const RATE_LIMIT_KEY = 'email_submission_attempts';
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

interface RateLimitData {
  attempts: number;
  timestamp: number;
}

export const useRateLimit = () => {
  const [isLimited, setIsLimited] = useState(false);
  const [remainingAttempts, setRemainingAttempts] = useState(MAX_ATTEMPTS);
  const [resetTime, setResetTime] = useState<Date | null>(null);

  useEffect(() => {
    checkRateLimit();
  }, []);

  const checkRateLimit = () => {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    if (!stored) return;

    const data: RateLimitData = JSON.parse(stored);
    const now = Date.now();

    if (now - data.timestamp > WINDOW_MS) {
      // Reset if window has passed
      localStorage.removeItem(RATE_LIMIT_KEY);
      setIsLimited(false);
      setRemainingAttempts(MAX_ATTEMPTS);
      setResetTime(null);
      return;
    }

    const remaining = MAX_ATTEMPTS - data.attempts;
    setRemainingAttempts(remaining);
    setIsLimited(remaining <= 0);
    setResetTime(new Date(data.timestamp + WINDOW_MS));
  };

  const incrementAttempts = () => {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();
    let data: RateLimitData;

    if (!stored) {
      data = { attempts: 1, timestamp: now };
    } else {
      data = JSON.parse(stored);
      if (now - data.timestamp > WINDOW_MS) {
        data = { attempts: 1, timestamp: now };
      } else {
        data.attempts++;
      }
    }

    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
    checkRateLimit();
  };

  return {
    isLimited,
    remainingAttempts,
    resetTime,
    incrementAttempts
  };
};