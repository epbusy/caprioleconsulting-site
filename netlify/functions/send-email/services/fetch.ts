// Use native fetch in Node.js 18+
export const fetch = globalThis.fetch;
export type Response = globalThis.Response;