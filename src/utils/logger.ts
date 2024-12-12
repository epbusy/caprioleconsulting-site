type LogLevel = 'info' | 'warn' | 'error';

class Logger {
  private static instance: Logger;
  private readonly isDevelopment = import.meta.env.DEV;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private log(level: LogLevel, message: string, ...args: unknown[]): void {
    if (!this.isDevelopment) return;

    const timestamp = new Date().toISOString();
    const formattedMessage = `[${timestamp}] ${message}`;

    switch (level) {
      case 'error':
        console.error(formattedMessage, ...args);
        break;
      case 'warn':
        console.warn(formattedMessage, ...args);
        break;
      case 'info':
        console.log(formattedMessage, ...args);
        break;
    }
  }

  public info(message: string, ...args: unknown[]): void {
    this.log('info', message, ...args);
  }

  public warn(message: string, ...args: unknown[]): void {
    this.log('warn', message, ...args);
  }

  public error(message: string, ...args: unknown[]): void {
    this.log('error', message, ...args);
  }
}

export const logger = Logger.getInstance();