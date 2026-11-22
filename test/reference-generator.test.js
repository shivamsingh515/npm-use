import test from 'node:test';
import assert from 'node:assert/strict';
import { generateReferences, formatReference } from '../src/reference-generator.js';

test('generates references containing exactly 16 digits', () => {
  const references = generateReferences(20);

  assert.equal(references.length, 20);
  for (const reference of references) {
    assert.match(reference, /^[1-9][0-9]{15}$/);
  }
  assert.equal(new Set(references).size, 20);
});

test('rejects invalid counts', () => {
  assert.throws(() => generateReferences(0), RangeError);
  assert.throws(() => generateReferences(-2), RangeError);
  assert.throws(() => generateReferences(1.5), RangeError);
});

test('formats references in groups of four', () => {
  assert.equal(formatReference('1234567890123456'), '1234 5678 9012 3456');
});
