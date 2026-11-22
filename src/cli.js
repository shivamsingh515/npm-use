#!/usr/bin/env node

import { generateReferences, formatReference } from './reference-generator.js';

function printHelp() {
  console.log(`Secure Reference Generator

Usage:
  npm start -- [options]

Options:
  -c, --count <number>  Number of unique references (default: 5)
  -j, --json            Print machine-readable JSON
  -h, --help            Show this help
`);
}

const args = process.argv.slice(2);

if (args.includes('-h') || args.includes('--help')) {
  printHelp();
  process.exit(0);
}

const countFlag = args.findIndex((arg) => arg === '-c' || arg === '--count');
let count = 5;

if (countFlag !== -1) {
  const parsed = Number(args[countFlag + 1]);
  if (!Number.isInteger(parsed) || parsed < 1) {
    console.error('Error: --count must be a positive integer.');
    process.exit(1);
  }
  count = parsed;
}

try {
  const references = generateReferences(count);

  if (args.includes('-j') || args.includes('--json')) {
    console.log(JSON.stringify(references.map((value) => ({ value, formatted: formatReference(value) })), null, 2));
  } else {
    console.log('Secure 16-digit references:\n');
    references.forEach((value, index) => {
      console.log(`${String(index + 1).padStart(2, '0')}. ${formatReference(value)}`);
    });
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
