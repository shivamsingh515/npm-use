# npm-use

A practical Node.js use-case for [`random-16-digit`](https://www.npmjs.com/package/random-16-digit). It generates unique 16-digit reference codes suitable for demos and creates easy-to-read formatted output.

## Features

- Cryptographically secure random digits
- Guarantees exactly 16 digits
- De-duplicates generated references
- Human-readable `1234 5678 9012 3456` formatting
- JSON output for scripts and integrations
- Zero package dependencies beyond `random-16-digit`

## Requirements

- Node.js 18 or newer

## Run

```sh
npm install
npm start
```

Generate more references:

```sh
npm start -- --count 10
```

Produce JSON:

```sh
npm start -- --count 3 --json
```

Show help:

```sh
npm start -- --help
```

## Library usage

```js
import { generateReferences, formatReference } from './src/reference-generator.js';

const [reference] = generateReferences(1);
console.log(formatReference(reference));
```

## Test

```sh
npm test
```

## Package

This project demonstrates the package as a real-world ID/reference generator. Values are returned as strings so exactly 16 digits are preserved.
