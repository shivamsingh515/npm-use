import generateRandom16Digit from 'random-16-digit';

export function generateReferences(count = 1) {
  if (!Number.isInteger(count) || count < 1) {
    throw new RangeError('count must be a positive integer');
  }

  const references = new Set();

  while (references.size < count) {
    references.add(generateRandom16Digit());
  }

  return [...references];
}

export function formatReference(reference) {
  return reference.replace(/(.{4})(?=.)/g, '$1 ');
}
