import { logger } from './logger';

interface FetchOptions extends RequestInit {
  timeout?: number;
}

export async function fetchWithTimeout(
  url: string, 
  options: FetchOptions = {}
): Promise<Response> {
  const { timeout = 5000, ...fetchOptions } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        logger.error(`Request timeout after ${timeout}ms:`, url);
        throw new Error('Request timeout');
      }
    }
    throw error;
  } finally {
    clearTimeout(id);
  }
}

export async function postFormData<T = unknown>(
  url: string, 
  data: Record<string, string>, 
  options: FetchOptions = {}
): Promise<T> {
  const formData = new URLSearchParams();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const response = await fetchWithTimeout(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...options.headers
    },
    body: formData.toString(),
    ...options
  });

  return response.json();
}