type LogLevel = 'info' | 'warn' | 'error';

class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
  }

  public info(message: string, data?: unknown): void {
    console.log(this.formatMessage('info', message), data || '');
  }

  public warn(message: string, data?: unknown): void {
    console.warn(this.formatMessage('warn', message), data || '');
  }

  public error(message: string, error?: unknown): void {
    console.error(this.formatMessage('error', message), error || '');
  }
}

export const logger = Logger.getInstance();