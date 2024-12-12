export const methodNotAllowed = () => ({
  statusCode: 405,
  body: JSON.stringify({ error: 'Method not allowed' })
});

export const createErrorResponse = (statusCode: number, message: string) => ({
  statusCode,
  body: JSON.stringify({ error: message })
});

export const createSuccessResponse = (data: unknown) => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  },
  body: JSON.stringify(data)
});