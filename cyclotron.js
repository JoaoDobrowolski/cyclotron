function createMatrix(size) {
  return new Array(size).fill(1).map((element) => new Array(size).fill(element));
}

function replaceLine(matrix, size, particle, line) {
  if (line >= size) line = size - 1; // condition that does not allow to create a new line

  matrix.splice(line, 1, new Array(size).fill(particle));
}

function replaceColumn(matrix, size, particle, column) {
  if (column >= size) column = size - 1; // condition that does not allow to create a new column

  matrix.map((lines) => lines.splice(column, 1, particle));
}

function replaceElement(matrix, size, particle, line, column) {
  if (line >= size) line = size - 1; // condition that does not allow to create a new line
  if (column >= size) column = size - 1; // condition that does not allow to create a new column
  if (line < -size) line = 0;
  if (line < 0) line = size + line;

  matrix[line].splice(column, 1, particle);
}

function nParticle(size) {
  const particle = 'n';
  const matrix = createMatrix(size);

  replaceLine(matrix, size, particle, 0);

  return matrix;
}

function eParticle(size) {
  const particle = 'e';
  const matrix = createMatrix(size);

  replaceLine(matrix, size, particle, 0);
  replaceColumn(matrix, size, particle, -1);

  return matrix;
}

function pParticle(size) {
  const particle = 'p';
  const matrix = createMatrix(size);

  replaceLine(matrix, size, particle, 0);
  replaceLine(matrix, size, particle, -1);
  replaceColumn(matrix, size, particle, 0);
  replaceColumn(matrix, size, particle, -1);
  replaceElement(matrix, size, particle, -2, -2);
  replaceElement(matrix, size, 1, -1, -1);

  return matrix;
}

function generateCyclotron(input) {
  const particle = input[0];
  if (input[1] < 4) input[1] = 4;
  const size = input[1];

  if (particle === 'n') return nParticle(size);
  if (particle === 'e') return eParticle(size);
  if (particle === 'p') return pParticle(size);
  return 'correct input type -> ["particle", matrix]';
}

generateCyclotron(['p', 5]);

console.log(generateCyclotron(['n', 5]));
// console.log(generateCyclotron(['e', 5]));
// console.log(generateCyclotron(['p', 5]));