const colors = {
  info: '\x1b[36m',    // Cyan
  success: '\x1b[32m', // Green
  warning: '\x1b[33m', // Yellow
  error: '\x1b[31m',   // Red
  reset: '\x1b[0m'     // Reset
};

export function log(message, type = 'info') {
  console.log(`${colors[type]}${message}${colors.reset}`);
}