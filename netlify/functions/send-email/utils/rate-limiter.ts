import { RATE_LIMIT } from '../config/constants';

interface RateLimit {
  count: number;
  timestamp: number;
}

export class RateLimiter {
  private limits = new Map<string, RateLimit>();
  private readonly windowMs = RATE_LIMIT.WINDOW_MS;
  private readonly maxRequests = RATE_LIMIT.MAX_REQUESTS;

  public isLimited(identifier: string): boolean {
    const now = Date.now();
    const limit = this.limits.get(identifier);

    if (!limit) {
      return false;
    }

    if (now - limit.timestamp > this.windowMs) {
      this.limits.delete(identifier);
      return false;
    }

    return limit.count >= this.maxRequests;
  }

  public increment(identifier: string): void {
    const now = Date.now();
    const limit = this.limits.get(identifier);

    if (!limit || now - limit.timestamp > this.windowMs) {
      this.limits.set(identifier, { count: 1, timestamp: now });
      return;
    }

    limit.count++;
    this.limits.set(identifier, limit);
  }

  public reset(identifier: string): void {
    this.limits.delete(identifier);
  }
}