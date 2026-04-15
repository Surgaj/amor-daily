import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('usa los ids activos para mensajes', () => {
  assert.match(html, /id="newMessage"/);
  assert.match(html, /id="messageList"/);
  assert.match(html, /onclick="addMessage\(\)"/);
});

test('no contiene el bloque legado de formulario inexistente', () => {
  assert.doesNotMatch(html, /form-mensagem/);
  assert.doesNotMatch(html, /input-mensagem/);
});

test('persistencia de modo oscuro en localStorage', () => {
  assert.match(html, /function toggleDarkMode\(/);
  assert.match(html, /localStorage\.setItem\('dark-mode', String\(isDarkMode\)\)/);
  assert.match(html, /localStorage\.getItem\('dark-mode'\)/);
});

test('typo corregido en contenido', () => {
  assert.doesNotMatch(html, /harmonia consiga mesma/);
  assert.match(html, /harmonia consigo mesma/);
});
